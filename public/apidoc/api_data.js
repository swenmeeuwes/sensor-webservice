define({ "api": [
  {
    "type": "post",
    "url": "/create",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "uid",
            "description": "<p>Sensors unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Name",
            "optional": false,
            "field": "name",
            "description": "<p>Sensors name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Type",
            "optional": false,
            "field": "type",
            "description": "<p>Sensors type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Location",
            "optional": false,
            "field": "location",
            "description": "<p>Sensors location.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/sensor.route.js",
    "groupTitle": "User"
  }
] });
