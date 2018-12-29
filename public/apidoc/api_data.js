define({ "api": [
  {
    "type": "post",
    "url": "/create",
    "title": "Create Sensor",
    "version": "1.0.0",
    "name": "CreateSensor",
    "group": "Sensor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Sensors unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sensors name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Sensors type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Sensors location.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Sensors unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sensors name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Sensors type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Sensors location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"uid\": \"73DKA9QU\",\n     \"name\": \"Living Room\",\n     \"type\": \"Temperature\",\n     \"Location\": \"Living Room\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/sensor.route.js",
    "groupTitle": "Sensor"
  },
  {
    "type": "delete",
    "url": "/:uid",
    "title": "Delete Sensor",
    "version": "1.0.0",
    "name": "DeleteSensor",
    "group": "Sensor",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/sensor.route.js",
    "groupTitle": "Sensor"
  },
  {
    "type": "get",
    "url": "/:uid",
    "title": "Sensor Details",
    "version": "1.0.0",
    "name": "GetSensor",
    "group": "Sensor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Sensors unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sensors name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Sensors type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Sensors location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"uid\": \"73DKA9QU\",\n     \"name\": \"Living Room\",\n     \"type\": \"Temperature\",\n     \"Location\": \"Living Room\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/sensor.route.js",
    "groupTitle": "Sensor"
  },
  {
    "type": "put",
    "url": "/:uid",
    "title": "Update Sensor",
    "version": "1.0.0",
    "name": "UpdateSensor",
    "group": "Sensor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Sensors unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sensors name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Sensors type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Sensors location.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Sensors unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sensors name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Sensors type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Sensors location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"uid\": \"73DKA9QU\",\n     \"name\": \"Living Room\",\n     \"type\": \"Humidity\",\n     \"Location\": \"Living Room\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/sensor.route.js",
    "groupTitle": "Sensor"
  },
  {
    "type": "patch",
    "url": "/:uid",
    "title": "Update Sensor",
    "version": "1.0.0",
    "name": "UpdateSensor",
    "group": "Sensor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Sensors unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sensors name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Sensors type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Sensors location.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Sensors unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sensors name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Sensors type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Sensors location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"uid\": \"73DKA9QU\",\n     \"name\": \"Living Room\",\n     \"type\": \"Humidity\",\n     \"Location\": \"Living Room\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/sensor.route.js",
    "groupTitle": "Sensor"
  }
] });
