import uuid


def get_session_code(obj_id):
    """
    Returns unique 10 chars session code
    """

    return uuid.uuid5(uuid.NAMESPACE_URL, str(obj_id))
