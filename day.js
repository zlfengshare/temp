/*
测试
*/


let obj = JSON.parse($response.body);

obj={
  "featureBundle": {
        "bundleName": "free",
        "reason": "unknown",
        "features": [
            {
                "name": "imagesPerEntry",
                "limit": 30,
                "canUpgrade": true
            },
            {
                "name": "journalLimit",
                "limit": 30,
                "canUpgrade": true
            },
            {
                "name": "backup",
                "limit": null,
                "canUpgrade": false
            },
            {
                "name": "sync",
                "limit": null,
                "canUpgrade": false
            }
        ],
        "featuresFull": [
            {
                "name": "journalLimit",
                "limit": 30,
                "canUpgrade": true
            },
            {
                "name": "backup",
                "enabled": true,
                "canUpgrade": false
            },
            {
                "name": "sync",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "discountedSubscription",
                "enabled": false,
                "canUpgrade": false
            },
            {
                "name": "printingDiscount",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "prioritySupport",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "scanToPDF",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "attachmentsPerEntry",
                "limit": 30,
                "canUpgrade": false
            },
            {
                "name": "journalViaSMS",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "canAttachPhoto",
                "enabled": true,
                "canUpgrade": false
            },
            {
                "name": "canAttachVideo",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "canAttachAudio",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "canAttachDrawing",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "canAttachPDF",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "instagram",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "ifttt",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "colors",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "emailToJournal",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "appIcons",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "moonPhase",
                "enabled": false,
                "canUpgrade": true
            },
            {
                "name": "foursquareNearbyVenues",
                "enabled": false,
                "canUpgrade": true
            }
        ]
    },
   
}
$done({body: JSON.stringify(obj)});
