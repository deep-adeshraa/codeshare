import uuid

from django.contrib.auth.models import User
from django.db import models

from codeshare.models import BaseModel


class TestModel(BaseModel):
    test_text = models.CharField(max_length=10)


class CodeShareSession(BaseModel):
    host = models.ForeignKey(User, related_name='host',
                             on_delete=models.CASCADE)
    joiner = models.ForeignKey(User, related_name='joiner',
                               on_delete=models.CASCADE, null=True)
    problem_statement = models.TextField(null=True)
    session_name = models.CharField(max_length=25)
    session_code = models.CharField(max_length=25)
    is_active = models.BooleanField(default=False)

    def __unicode__(self):
        return self.session_name

    def get_session_code(self):
        """
        Returns unique 10 chars session code
        """

        return uuid.uuid5(uuid.NAMESPACE_URL, str(self.pk))

    def save(self, *args, **kwargs):
        created = not self.pk
        super(CodeShareSession, self).save(*args, **kwargs)

        # create the session code on first time object creation.
        if created:
            self.session_code = self.get_session_code()

            CodeShareSession.objects.filter(id=self.pk)\
                .update(session_code=self.session_code)
