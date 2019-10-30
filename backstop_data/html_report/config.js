report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Material_Card_0_document_0_phone.png",
        "test": "../bitmaps_test/20191030-095118/backstop_default_Material_Card_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Material_Card_0_document_0_phone.png",
        "label": "Material Card",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:5001/iframe.html?id=components--mat-card&viewMode=story#",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Material_Card_0_document_1_tablet.png",
        "test": "../bitmaps_test/20191030-095118/backstop_default_Material_Card_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Material_Card_0_document_1_tablet.png",
        "label": "Material Card",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:5001/iframe.html?id=components--mat-card&viewMode=story#",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.47",
          "analysisTime": 158
        },
        "diffImage": "../bitmaps_test/20191030-095118/failed_diff_backstop_default_Material_Card_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Material_Card_0_document_2_laptop.png",
        "test": "../bitmaps_test/20191030-095118/backstop_default_Material_Card_0_document_2_laptop.png",
        "selector": "document",
        "fileName": "backstop_default_Material_Card_0_document_2_laptop.png",
        "label": "Material Card",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:5001/iframe.html?id=components--mat-card&viewMode=story#",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "laptop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.36",
          "analysisTime": 70
        },
        "diffImage": "../bitmaps_test/20191030-095118/failed_diff_backstop_default_Material_Card_0_document_2_laptop.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});