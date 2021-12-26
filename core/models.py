from django.contrib.auth.models import User
from django.db import models

from codeshare.models import BaseModel
import core.helpers


class TestModel(BaseModel):
    test_text = models.CharField(max_length=10)


class CodeShareUser(User, BaseModel):
    HOST = 0
    JOINER = 1

    ROLES = (
        (HOST, 'host'),
        (JOINER, 'joiner')
    )

    current_role = models.IntegerField(choices=ROLES, default=HOST)


class CodeShareSession(BaseModel):
    host = models.ForeignKey(CodeShareUser, related_name='host',
                             on_delete=models.CASCADE)
    joiner = models.ForeignKey(CodeShareUser, related_name='joiner',
                               on_delete=models.CASCADE)
    problem_statement = models.TextField()
    sample_input = models.TextField()
    sample_output = models.TextField()
    session_code = models.CharField(max_length=25)
    is_active = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        created = not self.pk
        super(CodeShareSession, self).save(*args, **kwargs)

        # create the session code on first time object creation.
        if created:
            self.session_code = core.helpers.get_session_code(self.pk)
            CodeShareSession.objects.filter(id=self.pk)\
                .update(session_code=self.session_code)
