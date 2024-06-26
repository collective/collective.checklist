# -*- coding: utf-8 -*-
from collective.checklist import _
from plone import schema
from plone.dexterity.content import Item
from plone.supermodel import model
from zope.interface import implementer


class IChecklist(model.Schema):
    """Marker interface and Dexterity Python Schema for Checklist"""

    checklist = schema.JSONField(
        title=_(
            "Checklist",
        ),
        description=_(
            "Contains the checklist fields as JSON.",
        ),
        schema=None,
        default="",
        required=False,
        readonly=False,
    )


@implementer(IChecklist)
class Checklist(Item):
    """Content-type class for IChecklist"""
