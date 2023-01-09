export const data =  [
  {
    "enabled": true,
    "field": {
      "key": "entity_type",
      "options": [
        {
          "label": "Business",
          "value": "COMPANY"
        },
        {
          "label": "Personal",
          "value": "PERSONAL"
        }
      ],
      "default": "PERSONAL",
      "description": "",
      "example": "PERSONAL",
      "label": "Recipient account type",
      "placeholder": "",
      "refresh": true,
      "tip": "",
      // "name": "RADIO",
      "type": "RADIO"
    },
    "path": "beneficiary.entity_type",
    "required": true,
    "rule": {
      "type": "string",
      "pattern": "COMPANY|PERSONAL"
    }
  },
  {
    "enabled": true,
    "field": {
      "key": "city",
      "default": "",
      "description": "",
      "example": "Seattle",
      "label": "City",
      "placeholder": "",
      "refresh": false,
      "tip": "",
      "type": "INPUT"
    },
    "path": "beneficiary.address.city",
    "required": true,
    "rule": {
      "type": "string",
      "pattern": "^.{1,50}$"
    }
  },
]