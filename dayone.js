/************

var body = $response.body

	.replace(/limit\": 1,/g, 'limit\": 30,');
			
      
$done({ body });

*****************/

let obj = JSON.parse($response.body);

	obj = {
		
    "id": "1040686795",
    "isAdmin": false,
    "email": "kunka@duck.com",
    "realName": "Uni",
    "bio": null,
    "avatar": null,
    "website": null,
    "signupDate": 1662081121044,
    "isEligibleForTrial": false,
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
    "subscription": {
        "premium": false,
        "plus_on_ios": true,
        "plus_on_mac": false,
        "source": [
            "Min",
            [
                "Unknown"
            ]
        ],
        "auto_renew": false,
        "is_trial": false,
        "expires": null,
        "product_id": null,
        "is_eligible_for_trial": false
    },
    "minimumSubscription": null,
    "featureEnrollments": [
        {
            "id": 0,
            "feature": "publish",
            "createDate": "2011-11-11T00:00:00.000Z",
            "status": "active",
            "isActive": true
        },
        {
            "id": 0,
            "feature": "backup",
            "createDate": "2011-11-11T00:00:00.000Z",
            "status": "active",
            "isActive": true
        }
    ],
    "primaryJournalId": null,
    "syncUploadBaseUrl": "https://dayone-syncmedia-production-new.s3.amazonaws.com/incoming/c5b1/1040686795",
    "journalOrder": [
        104772163154,
        102206864137,
        104868421594,
        106482057213,
        104000867462,
        105469669354,
        108495692487,
        106423969036,
        101931302637
    ],
    "displayName": "Uni",
    "credentials": [
        "Password"
    ],
    "chocolateSyncResetRequested": 1601501104538,
    "mercurySyncResetRequested": null,
    "key": {
        "fingerprint": "BBB0097431005EEF60FD5A09E9EA026569DA3DEEFAB60F5AFD29F8D7892A646A"
    },
    "etag": "3335328a9403d43d254026ad6c2b9e44",
    "notes": null,
    "master_key_storage": [
        "cloudkit"
    ],
    "basic_storage": {
        "active_device": "3545A0F5-9651-4064-A6BD-6D0E87A3DB6E",
        "active_device_name": "Kunka的MacBook Pro",
        "activated": "2022-09-05T07:09:33.025Z",
        "switch_allowed_on": "2022-10-05T07:09:33.025Z",
        "switch_allowed_interval": 30
    }
}

$done({body: JSON.stringify(obj)});
