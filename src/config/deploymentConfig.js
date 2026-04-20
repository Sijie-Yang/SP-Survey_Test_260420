// Auto-generated deployment configuration
// Generated on: 21/04/2026, 07:43:40

export const deploymentConfig = {
  "id": "proj_1763380352930_h02zxzvie",
  "name": "Urban Greenery (AI Template)",
  "description": "This survey explores the psychological, aesthetic, and functional impacts of urban greenery in streetscapes. Your responses will guide improvements in urban planning and design, focusing on how greenery influences urban street environments.",
  "createdAt": "2025-11-17T11:52:32.930Z",
  "lastModified": "2025-11-18T10:23:08.373Z",
  "templateId": null,
  "supabaseConfig": null,
  "imageDatasetConfig": {
    "huggingFaceToken": "",
    "datasetName": "sijiey/Thermal-Affordance-Dataset",
    "enabled": true,
    "supabaseProjectId": "lyziaaewgbtqoikanltg",
    "supabaseUrl": "https://lyziaaewgbtqoikanltg.supabase.co",
    "supabaseKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5emlhYWV3Z2J0cW9pa2FubHRnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjY2ODIxNSwiZXhwIjoyMDkyMjQ0MjE1fQ.bjoXgeB_pUPtVEe_4ZD3H4vDgrzTCCuCgq0bKrJUlQw",
    "supabaseAnonKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5emlhYWV3Z2J0cW9pa2FubHRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2NjgyMTUsImV4cCI6MjA5MjI0NDIxNX0.f-aaBNRjZPN3ZpZLRZa8oqV05_MX85kHQWVQi0bggC0",
    "datasetInfo": {
      "id": "sijiey/Thermal-Affordance-Dataset",
      "description": "Dataset accessed via datasets-server API",
      "author": "sijiey",
      "lastModified": "2026-04-20T08:01:24.345Z",
      "private": false,
      "imageCount": 500,
      "dataset_info": {
        "default": {
          "description": "",
          "citation": "",
          "homepage": "",
          "license": "",
          "features": {
            "image": {
              "_type": "Image"
            }
          },
          "builder_name": "imagefolder",
          "dataset_name": "thermal-affordance-dataset",
          "config_name": "default",
          "version": {
            "version_str": "0.0.0",
            "major": 0,
            "minor": 0,
            "patch": 0
          },
          "splits": {
            "train": {
              "name": "train",
              "num_bytes": 44189684,
              "num_examples": 500,
              "dataset_name": "thermal-affordance-dataset"
            }
          },
          "size_in_bytes": 88354701
        }
      }
    },
    "supabaseConnectionStatus": {
      "connected": true,
      "projectInfo": {
        "url": "https://lyziaaewgbtqoikanltg.supabase.co",
        "bucketsCount": 1,
        "surveyBucketExists": true,
        "buckets": [
          "survey-images"
        ]
      },
      "lastTested": "2026-04-20T09:37:21.973Z"
    }
  },
  "year": "2025",
  "category": "Academic Research",
  "preloadedImages": [
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/0/image/image.jpg?Expires=1776732223&Signature=PbRq639fxDHobPqpi5GBTf7I1WxcwJihb3EpxamK0~SsXbYrPqUq8SazZQ3v0ZtpoaaJdWqd2BmQN0G8XP0gJFY~p4FG8D23UrdBY96xteVpFHrz0F6o-IWSM6yRsvDBP0h3e7wTFQjZOLCIGPq5bFgtP3BEA~vsOXftB6ejL9eappQhRohfUs7OIAyg3roy-M4KY1AigSz-TqywCjRM0JymjMCdIdB-FchlIZvGYOvgtobhUgMyNKxiUJQaOTyUDaBk5Dd-Mfs-QZ-no4JR-WYdyC5gMfzYq3rPjFX9nfZHUy7mz3Lw2V35e21XgZJk-4ySukBEJILWjoHc4z-Ivg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000000.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 0,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/0/image/image.jpg?Expires=1776732223&Signature=PbRq639fxDHobPqpi5GBTf7I1WxcwJihb3EpxamK0~SsXbYrPqUq8SazZQ3v0ZtpoaaJdWqd2BmQN0G8XP0gJFY~p4FG8D23UrdBY96xteVpFHrz0F6o-IWSM6yRsvDBP0h3e7wTFQjZOLCIGPq5bFgtP3BEA~vsOXftB6ejL9eappQhRohfUs7OIAyg3roy-M4KY1AigSz-TqywCjRM0JymjMCdIdB-FchlIZvGYOvgtobhUgMyNKxiUJQaOTyUDaBk5Dd-Mfs-QZ-no4JR-WYdyC5gMfzYq3rPjFX9nfZHUy7mz3Lw2V35e21XgZJk-4ySukBEJILWjoHc4z-Ivg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_0_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/1/image/image.jpg?Expires=1776732223&Signature=uIFi6EVrDpwmAHhhHnLVl9pGncgl7PbIOa6sb5KkU2dU7vseILhUyyoCm0Bv5gtLD0e2aDq9PdWBycnOx1QiYScbnVI0LGKJbfVcfcmnx0kEn8QgLTg6Z0HDT-dooTCTwW7UxvUdZUi4HojwJRKuQqHKLGcmaRfB0GiYHFnLOq0vYPxyPe0AP9-rUiR-bHPhsZ978Gi-iEF7AzKcyf5hsW-lQMnalSQD~TsFVStxBhEyy94juxcAnnYDYC88h0x3VivlWMNW3oLcXbQg8MU35jYIhC8Oe10xzzkpMUoJNFu3skg3g3IRmxg-RP3awMiUjVcjmbWBp64iIpaxlXCnUw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000001.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 1,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/1/image/image.jpg?Expires=1776732223&Signature=uIFi6EVrDpwmAHhhHnLVl9pGncgl7PbIOa6sb5KkU2dU7vseILhUyyoCm0Bv5gtLD0e2aDq9PdWBycnOx1QiYScbnVI0LGKJbfVcfcmnx0kEn8QgLTg6Z0HDT-dooTCTwW7UxvUdZUi4HojwJRKuQqHKLGcmaRfB0GiYHFnLOq0vYPxyPe0AP9-rUiR-bHPhsZ978Gi-iEF7AzKcyf5hsW-lQMnalSQD~TsFVStxBhEyy94juxcAnnYDYC88h0x3VivlWMNW3oLcXbQg8MU35jYIhC8Oe10xzzkpMUoJNFu3skg3g3IRmxg-RP3awMiUjVcjmbWBp64iIpaxlXCnUw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_1_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/2/image/image.jpg?Expires=1776732223&Signature=A9-lMQ20D54DuJ6XGliqN~4K6rQIv7W61WhOmqG75hq05jIjY94iGbX1GZQtujLcqhnOiYFW4tAW1Pe7D4qkelOO2n9D26WDkbY4TAN8J2tqKuyTthjKJaBWmCZHMelg9K0ErJhCiKhtMQF1TJJNzxRI4ahEfPkOXNROYDln~UlG74elufud5cvM2g-pGjeLCXELkOlzAbDIbd93cCfPbxug4lT28CX0xKxitoJ~aHQDv2sRNBzAdcFuOKqwL1aDFMdQj576eXGG4T6RG5BRvmFfFJmmKU16d6N06z-vXaZsFBPNMAIPoxS0y~PGQ-4bxL3kjYP-SMnLEIR9pmXbXg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000002.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 2,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/2/image/image.jpg?Expires=1776732223&Signature=A9-lMQ20D54DuJ6XGliqN~4K6rQIv7W61WhOmqG75hq05jIjY94iGbX1GZQtujLcqhnOiYFW4tAW1Pe7D4qkelOO2n9D26WDkbY4TAN8J2tqKuyTthjKJaBWmCZHMelg9K0ErJhCiKhtMQF1TJJNzxRI4ahEfPkOXNROYDln~UlG74elufud5cvM2g-pGjeLCXELkOlzAbDIbd93cCfPbxug4lT28CX0xKxitoJ~aHQDv2sRNBzAdcFuOKqwL1aDFMdQj576eXGG4T6RG5BRvmFfFJmmKU16d6N06z-vXaZsFBPNMAIPoxS0y~PGQ-4bxL3kjYP-SMnLEIR9pmXbXg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_2_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/3/image/image.jpg?Expires=1776732223&Signature=GKWGs39oiiCToj0qekNC3ImZzJ2cdJWwysA1L7OstdgS5L-kfJm6z~7Hv-eUQir3bvQp2c4~PoycSHxq04NtqUkFaIoVl~PiaLB0JEottm7NQ4m3Ske9kJ~o5RI6U5IJADXC56M93vJ3PttsLc7OaEbNKZn~k-cfHFOOeTYUk3CXFNsG0Yt63w8Tqa4mrimnnLOEqNUxHOQgRVbBUnc7d6uKothz8XMZG14T1f6lhqSLXEw0i89zSoll21iCAU8E-GY6M68~zJJXNnI9ga0vHXcADxuEVFg5MIwVJRN11ARDNuuCu9q2KRhZtQKfioaDf9aYu6C7lkEVVS9gnIiB1A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000003.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 3,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/3/image/image.jpg?Expires=1776732223&Signature=GKWGs39oiiCToj0qekNC3ImZzJ2cdJWwysA1L7OstdgS5L-kfJm6z~7Hv-eUQir3bvQp2c4~PoycSHxq04NtqUkFaIoVl~PiaLB0JEottm7NQ4m3Ske9kJ~o5RI6U5IJADXC56M93vJ3PttsLc7OaEbNKZn~k-cfHFOOeTYUk3CXFNsG0Yt63w8Tqa4mrimnnLOEqNUxHOQgRVbBUnc7d6uKothz8XMZG14T1f6lhqSLXEw0i89zSoll21iCAU8E-GY6M68~zJJXNnI9ga0vHXcADxuEVFg5MIwVJRN11ARDNuuCu9q2KRhZtQKfioaDf9aYu6C7lkEVVS9gnIiB1A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_3_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/4/image/image.jpg?Expires=1776732223&Signature=rN-TVwnaY1EJNgTNgbA8QcNmr53Bi-w~7fvIZ2UTNy-OlFbYMrgovxXYdjzjcAZBlTeOF2KMfyWvCQxnnrrrJ7xt6xzZkIWHH~hPxA1zr3tmhF1bWV8x0sd-C4vZ86y8DmuQ4idVTHCzTwip0WD28DtdAoSWQPtOtMIxkbSMYlYldQuj7pWM~SwbrXTCwf1eJTUffFEiQGToIHKWJrNW9MB48PrgBab9dUplrdHrNR1Olo8Svkgq64p6yTXxGkXGT-LjnWT3QBKkh9i6JnJWkFk4Ct589igT5jiUVoIxFc9iDgEF3RGdL8GySlKe8D458b76uN8BOrtq0s3DzCCQdQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000004.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 4,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/4/image/image.jpg?Expires=1776732223&Signature=rN-TVwnaY1EJNgTNgbA8QcNmr53Bi-w~7fvIZ2UTNy-OlFbYMrgovxXYdjzjcAZBlTeOF2KMfyWvCQxnnrrrJ7xt6xzZkIWHH~hPxA1zr3tmhF1bWV8x0sd-C4vZ86y8DmuQ4idVTHCzTwip0WD28DtdAoSWQPtOtMIxkbSMYlYldQuj7pWM~SwbrXTCwf1eJTUffFEiQGToIHKWJrNW9MB48PrgBab9dUplrdHrNR1Olo8Svkgq64p6yTXxGkXGT-LjnWT3QBKkh9i6JnJWkFk4Ct589igT5jiUVoIxFc9iDgEF3RGdL8GySlKe8D458b76uN8BOrtq0s3DzCCQdQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_4_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/5/image/image.jpg?Expires=1776732223&Signature=ILKfOSIGQmGrGoEM4TVmRqgzWHjO2xfeIXgdGwkbXt0vWCCVn19kazv5s2bjIS7oBxtleckDGocNB7HUPbEfD2V97TmvQxNmLXQ1YXBmxZwJceS9jpIlmyWbtBrKjQ3Mq6P6q5jH544qrx5f5LYtMkg0PWB4oQhbwt6wzPB6DnTUiIfAv~h7o5cdz6Uintn949gjizMmzZG9uBSLcR77CatpK6dCTcd7V0IdXuXPZqIaEIQxoADeHperuXXVudlsyp58opSZ-borpuUjLQIu6-aVTKBbPV~IxKmfi9ElXBYYrcgevVY3zksW2aePYQwyZ1UZ24QK7tu0W8Jdc7d-fw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000005.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 5,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/5/image/image.jpg?Expires=1776732223&Signature=ILKfOSIGQmGrGoEM4TVmRqgzWHjO2xfeIXgdGwkbXt0vWCCVn19kazv5s2bjIS7oBxtleckDGocNB7HUPbEfD2V97TmvQxNmLXQ1YXBmxZwJceS9jpIlmyWbtBrKjQ3Mq6P6q5jH544qrx5f5LYtMkg0PWB4oQhbwt6wzPB6DnTUiIfAv~h7o5cdz6Uintn949gjizMmzZG9uBSLcR77CatpK6dCTcd7V0IdXuXPZqIaEIQxoADeHperuXXVudlsyp58opSZ-borpuUjLQIu6-aVTKBbPV~IxKmfi9ElXBYYrcgevVY3zksW2aePYQwyZ1UZ24QK7tu0W8Jdc7d-fw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_5_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/6/image/image.jpg?Expires=1776732223&Signature=buyrg5Rhn8uyio2QQkpPEsCrvHnPz2bBHiKo16JM4N1UAGGkcyN4fAvZDwhOgHXgsMAWAvmzB-10GPo6Yl3gDMt2wvybn0NTYLhgdYlWZMTyDHNQNyLtmVTwTAbjYk-8vgdve-raxZ0aHhfKeHfE3b3~FOsV-XvSjgybfXHcP5VAPUW2X0cfypL~7vDOUYUdAVM5IJ4Q0PrnyDH9FO7-WQQV0Yi9pPacB7n4EefeBVlC2yeR1jmScWNf7StfWNR6GOXEiKrgt2yNK7JdnH4l1sGaLV1yPay8IimCYnFNjSbTszaYo3OfslfhXzmZxjrqthntAd3-E~HEa1Q87zyjGw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000006.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 6,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/6/image/image.jpg?Expires=1776732223&Signature=buyrg5Rhn8uyio2QQkpPEsCrvHnPz2bBHiKo16JM4N1UAGGkcyN4fAvZDwhOgHXgsMAWAvmzB-10GPo6Yl3gDMt2wvybn0NTYLhgdYlWZMTyDHNQNyLtmVTwTAbjYk-8vgdve-raxZ0aHhfKeHfE3b3~FOsV-XvSjgybfXHcP5VAPUW2X0cfypL~7vDOUYUdAVM5IJ4Q0PrnyDH9FO7-WQQV0Yi9pPacB7n4EefeBVlC2yeR1jmScWNf7StfWNR6GOXEiKrgt2yNK7JdnH4l1sGaLV1yPay8IimCYnFNjSbTszaYo3OfslfhXzmZxjrqthntAd3-E~HEa1Q87zyjGw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_6_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/7/image/image.jpg?Expires=1776732223&Signature=iglrPt5VDIMnvUENvQgOEUnc1F64~N7WF4w-Nj4BNrGKp~pdWwdUrKdm4PWFTZbEOSSPr4Vvd6W9QpivbeNgz1A-DbsLPkAdFqFtKSQg8xK-lN9DtHIKFwPZTM77orbcYt8y2Wl23ssLWZJMXDXFFzgddc-iHHLZlZKBhaDNkiy4visblvtyhjnteiTh~hB72McmAyyRvQSMlJnzhAjDgIxMXsO3ohFBfCM9OX0wvNw0YAFUMLL1Gua7thTq~skM9c9cUHquA-wSUlodhkdVJ2eZKP6pICx4iJ7scqwaTF1hET6K8-yXZ5mALPAODE-8bZvqITg5JbOH5wO-EfYl7Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000007.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 7,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/7/image/image.jpg?Expires=1776732223&Signature=iglrPt5VDIMnvUENvQgOEUnc1F64~N7WF4w-Nj4BNrGKp~pdWwdUrKdm4PWFTZbEOSSPr4Vvd6W9QpivbeNgz1A-DbsLPkAdFqFtKSQg8xK-lN9DtHIKFwPZTM77orbcYt8y2Wl23ssLWZJMXDXFFzgddc-iHHLZlZKBhaDNkiy4visblvtyhjnteiTh~hB72McmAyyRvQSMlJnzhAjDgIxMXsO3ohFBfCM9OX0wvNw0YAFUMLL1Gua7thTq~skM9c9cUHquA-wSUlodhkdVJ2eZKP6pICx4iJ7scqwaTF1hET6K8-yXZ5mALPAODE-8bZvqITg5JbOH5wO-EfYl7Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_7_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/8/image/image.jpg?Expires=1776732223&Signature=YVXnhkHwIZ9SWGoNsJ1hev2CyQHDG9PPqclSlKgSuyQ424zLJy400RHrq6PYeGG4cGohuZr7SR6VzIYaYFdyjp4D5ThflQ34ONgVWv1bAOIDHo7C9rD~OC6jKHVjP2HbwXT5m3gmQ8-s0Kvys-niRnWSbZSEEmLJU0uiYZyxVusnDl7w10MxbZQ2dbE-nMEgvFNcrJYtG00H5C2xiTAe7Zgynstv0KuIWz6BixSu1cZXtEumhfEFJfxI8MUoHF~fRlcDjbC47SJPgtTys~vw0IfXMtYBLbl2MbAu4cyRXcQTD4wv7Ac~bD~LN-VA9-0LlGgBQPKeW21GDkXZXnA4cQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000008.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 8,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/8/image/image.jpg?Expires=1776732223&Signature=YVXnhkHwIZ9SWGoNsJ1hev2CyQHDG9PPqclSlKgSuyQ424zLJy400RHrq6PYeGG4cGohuZr7SR6VzIYaYFdyjp4D5ThflQ34ONgVWv1bAOIDHo7C9rD~OC6jKHVjP2HbwXT5m3gmQ8-s0Kvys-niRnWSbZSEEmLJU0uiYZyxVusnDl7w10MxbZQ2dbE-nMEgvFNcrJYtG00H5C2xiTAe7Zgynstv0KuIWz6BixSu1cZXtEumhfEFJfxI8MUoHF~fRlcDjbC47SJPgtTys~vw0IfXMtYBLbl2MbAu4cyRXcQTD4wv7Ac~bD~LN-VA9-0LlGgBQPKeW21GDkXZXnA4cQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_8_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/9/image/image.jpg?Expires=1776732223&Signature=CmmT7bJaNHq1S-JAzkDD3J37J5-8EQDADGsZThZ4mAA7D1yuCOuoJgSnGissFrqNib0NsAUHkjYERvjiKIewDLz5oKMGzL-yf~2F7ULuZkiT5gv4kHSi05ek5idF0R8s~7KSL1vbTymSJ9KC49E79ArYsM1jeF~6NWUYu6RpmeokEeIeP9H6VKYwVJXv9zR0jycKdHXhF4MxJYyWuIjaQONNd99Ngt1SR3yYjRw1I7qPekTrHk0L8iBtgB9CmoDaDuaDqnCcqKMXu0xjEfBQQaFL1RbFz1gK3hn6FxYntyRNf~bo15E1tuLYxIMR2vuCkQz3P335XTicm4wEPuOoIA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000009.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 9,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/9/image/image.jpg?Expires=1776732223&Signature=CmmT7bJaNHq1S-JAzkDD3J37J5-8EQDADGsZThZ4mAA7D1yuCOuoJgSnGissFrqNib0NsAUHkjYERvjiKIewDLz5oKMGzL-yf~2F7ULuZkiT5gv4kHSi05ek5idF0R8s~7KSL1vbTymSJ9KC49E79ArYsM1jeF~6NWUYu6RpmeokEeIeP9H6VKYwVJXv9zR0jycKdHXhF4MxJYyWuIjaQONNd99Ngt1SR3yYjRw1I7qPekTrHk0L8iBtgB9CmoDaDuaDqnCcqKMXu0xjEfBQQaFL1RbFz1gK3hn6FxYntyRNf~bo15E1tuLYxIMR2vuCkQz3P335XTicm4wEPuOoIA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_9_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/10/image/image.jpg?Expires=1776732223&Signature=CZ2BFmvIWD-IVyUoB263RLCBayKeJpNgdazqLtOYwcG-EitX1MZ4KBEkN3tR6f~AutdCEPolJpR-6tQtlWT3~8rOHCYLInqtgsfBwHIl~zGDZzWrP-deJu7TLax35yGZ~OVSRwZWqReXdF0UtfgbxIQVGW-3CwW3flE~aoKK5xyKrm4h-rnsm41P9KJJpVVRu786LlLEaSec-y3mq~plp3xaBrahX6erh8D7Pq7a3TFacC3ISrY-zlkeD-f2bzkkhpwfy1z0kZgGJ1dt7JAUUqt7RTVuyFdiLV28tfsDoZfFlSyN~So9MEa4~hrdL0Oha49rtxPH3p~ccyABgXsRJA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000010.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 10,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/10/image/image.jpg?Expires=1776732223&Signature=CZ2BFmvIWD-IVyUoB263RLCBayKeJpNgdazqLtOYwcG-EitX1MZ4KBEkN3tR6f~AutdCEPolJpR-6tQtlWT3~8rOHCYLInqtgsfBwHIl~zGDZzWrP-deJu7TLax35yGZ~OVSRwZWqReXdF0UtfgbxIQVGW-3CwW3flE~aoKK5xyKrm4h-rnsm41P9KJJpVVRu786LlLEaSec-y3mq~plp3xaBrahX6erh8D7Pq7a3TFacC3ISrY-zlkeD-f2bzkkhpwfy1z0kZgGJ1dt7JAUUqt7RTVuyFdiLV28tfsDoZfFlSyN~So9MEa4~hrdL0Oha49rtxPH3p~ccyABgXsRJA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_10_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/11/image/image.jpg?Expires=1776732223&Signature=cyhdyRpjHRm6lmaPmYIlP52-UoyUbGcbiNX-t4aKBraEQGDBOZ0kt1kxVK-anAChCiBwJ4BfRqIpWwnZQtF6TsKtZ~hUpMBxFzoQrNkRKqxed2r9f7jE2kdom9d-QkCS79C3i-~iqQRPY2T3yZ3w-DThm4gFzQ~my93XODuhRayrG6MSS~jz7cWiPo0iuocuggdg0fPO7jvCsnbdAS7Ygpokjnbgkx8iZ9QhQuRy0vNxPUgGklmMTQqAzjo6LrynjdZ6b33x0sii-BVEMEINTGBrMR5YioKxnTYpABuhUhBMrMUepllA5VTPU1z5zbEfA7Iq0owSx846eLl0s8vgWg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000011.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 11,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/11/image/image.jpg?Expires=1776732223&Signature=cyhdyRpjHRm6lmaPmYIlP52-UoyUbGcbiNX-t4aKBraEQGDBOZ0kt1kxVK-anAChCiBwJ4BfRqIpWwnZQtF6TsKtZ~hUpMBxFzoQrNkRKqxed2r9f7jE2kdom9d-QkCS79C3i-~iqQRPY2T3yZ3w-DThm4gFzQ~my93XODuhRayrG6MSS~jz7cWiPo0iuocuggdg0fPO7jvCsnbdAS7Ygpokjnbgkx8iZ9QhQuRy0vNxPUgGklmMTQqAzjo6LrynjdZ6b33x0sii-BVEMEINTGBrMR5YioKxnTYpABuhUhBMrMUepllA5VTPU1z5zbEfA7Iq0owSx846eLl0s8vgWg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_11_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/12/image/image.jpg?Expires=1776732223&Signature=Ko2ABxUnOYaEtx-u5jxnwR~BFQHF4Z5vYnWYa9mV7FY0oe6nkpZD-VFAmCw~keHnU3T~X0Eglu0I~wbzHi7YdoRK1zUSysyjIu-C9hYWHoaVi8klnd0jB-YI~VAiRLP7~P18hdpJXjiu0gZS6JDkZEJxzcclf2fI-wJOZA00VKtJ7cyI9eKKoyAKFLT9UlcGwhhztKRPS~WA7GVzHS7a-ZeT2oWS7QwJf9mCPEZq1mAlhsftqakGmPpyk~dJVD~mCR0Lvo4jZB1EDzaS0E3oAyhIDxBPtGPuGVMi9O4n-x8T5xvVth~NQKfkDyd8ttjvT3xMhTMPyV0aUpCy-TuWEQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000012.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 12,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/12/image/image.jpg?Expires=1776732223&Signature=Ko2ABxUnOYaEtx-u5jxnwR~BFQHF4Z5vYnWYa9mV7FY0oe6nkpZD-VFAmCw~keHnU3T~X0Eglu0I~wbzHi7YdoRK1zUSysyjIu-C9hYWHoaVi8klnd0jB-YI~VAiRLP7~P18hdpJXjiu0gZS6JDkZEJxzcclf2fI-wJOZA00VKtJ7cyI9eKKoyAKFLT9UlcGwhhztKRPS~WA7GVzHS7a-ZeT2oWS7QwJf9mCPEZq1mAlhsftqakGmPpyk~dJVD~mCR0Lvo4jZB1EDzaS0E3oAyhIDxBPtGPuGVMi9O4n-x8T5xvVth~NQKfkDyd8ttjvT3xMhTMPyV0aUpCy-TuWEQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_12_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/13/image/image.jpg?Expires=1776732223&Signature=CQ0SOEr5nd5wj0XTYkIGrhoYaXCDlH4ujheizUZpxgbZq8KHKf53~8Qg6bfIJ-Gv7G5jBL5U1Sf4UmNvKgxMZajnhnTE5~6VFWd98iGpbBZMtYh4Qmc0MfAnFlegP6vRlVfLoqQ8olRO1PUtMa~TXuMkz1zxsipkEytLtwb1vih4fFsobHzb1XK7b8B~bK4EsFHJbU4gVcuaMg-Blm~dG0rUl4UQqR0T03QO6vNhUEW8EUXqBAoN1-NnurFwBJ4qTc4Mx-rkoYvNjdo2b-yvIp0ozJg~Vpd6rlAPyWHUQhizsn4ZYUQQf2Lrme-ZGJfq877mMYm6bLWWnKClI5igNg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000013.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 13,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/13/image/image.jpg?Expires=1776732223&Signature=CQ0SOEr5nd5wj0XTYkIGrhoYaXCDlH4ujheizUZpxgbZq8KHKf53~8Qg6bfIJ-Gv7G5jBL5U1Sf4UmNvKgxMZajnhnTE5~6VFWd98iGpbBZMtYh4Qmc0MfAnFlegP6vRlVfLoqQ8olRO1PUtMa~TXuMkz1zxsipkEytLtwb1vih4fFsobHzb1XK7b8B~bK4EsFHJbU4gVcuaMg-Blm~dG0rUl4UQqR0T03QO6vNhUEW8EUXqBAoN1-NnurFwBJ4qTc4Mx-rkoYvNjdo2b-yvIp0ozJg~Vpd6rlAPyWHUQhizsn4ZYUQQf2Lrme-ZGJfq877mMYm6bLWWnKClI5igNg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_13_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/14/image/image.jpg?Expires=1776732223&Signature=z7J70E5~UEgiO40~NYuhSPjS~znpBsKOZz3lVyif7yZ7DMGx1N~IwVHQPYJb8NQVJylpKxty6aClKHJyWREeQFZx6DPnUbaTVfR22feo-yQnBhMWxSNAV0M0WXk1Oe6H04C5auucwKDXHFRWnk88K48IJb1Rax-dmQs3t0g~6KbJFpd463RcaQCSdqrZdbe1qLne4IRZh~-r-dHmsHUbzmsAbU3tSNA~wW6KT63CTy3J1FGp~obZAnHAes1KLqEY-PnW0GXSYns~drsNTTLNxXLXSS~2Rki6S57B2xf3ftNSOtjnOs602qONc4g6tzhA9QlfylnpSWL3S2w1dtu63w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000014.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 14,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/14/image/image.jpg?Expires=1776732223&Signature=z7J70E5~UEgiO40~NYuhSPjS~znpBsKOZz3lVyif7yZ7DMGx1N~IwVHQPYJb8NQVJylpKxty6aClKHJyWREeQFZx6DPnUbaTVfR22feo-yQnBhMWxSNAV0M0WXk1Oe6H04C5auucwKDXHFRWnk88K48IJb1Rax-dmQs3t0g~6KbJFpd463RcaQCSdqrZdbe1qLne4IRZh~-r-dHmsHUbzmsAbU3tSNA~wW6KT63CTy3J1FGp~obZAnHAes1KLqEY-PnW0GXSYns~drsNTTLNxXLXSS~2Rki6S57B2xf3ftNSOtjnOs602qONc4g6tzhA9QlfylnpSWL3S2w1dtu63w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_14_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/15/image/image.jpg?Expires=1776732223&Signature=R~XanFgZeK7ZanILZr2oOyn3SHnx2BDSZfRfefk-s82-~8yUJR~R-rWQ7rwK3NliOgN8I8NHrPKRE9ewRS~5KEdt0MUM8f6qGRU31LCcbnaL6wiRYb4huhzTHyDWTUMzjSyqcPtuaVv4HRvYBO93GHWD1sRLpqsSDJMhlMS~uSIQqSVyo6tkV8gyixt38XyjGi7nLVWM34fGBcOQ8pdtwOMnJ2oTNx7b7y6KOpDsriGs4JcpvDsjHlK3RjvopdY-XHUl4NYi90YBPYlyJLhI7WNjh-stCujoop6blwvqh-PORxzcj0sivjAD~YmtpdBUOSSZmhZBMr95nOFOABhC9g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000015.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 15,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/15/image/image.jpg?Expires=1776732223&Signature=R~XanFgZeK7ZanILZr2oOyn3SHnx2BDSZfRfefk-s82-~8yUJR~R-rWQ7rwK3NliOgN8I8NHrPKRE9ewRS~5KEdt0MUM8f6qGRU31LCcbnaL6wiRYb4huhzTHyDWTUMzjSyqcPtuaVv4HRvYBO93GHWD1sRLpqsSDJMhlMS~uSIQqSVyo6tkV8gyixt38XyjGi7nLVWM34fGBcOQ8pdtwOMnJ2oTNx7b7y6KOpDsriGs4JcpvDsjHlK3RjvopdY-XHUl4NYi90YBPYlyJLhI7WNjh-stCujoop6blwvqh-PORxzcj0sivjAD~YmtpdBUOSSZmhZBMr95nOFOABhC9g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_15_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/16/image/image.jpg?Expires=1776732223&Signature=uHcCbNS-xxpTLOevU9u4Ge6aOAAsSORKDws95YJajuz5W4i41OAnjrWsRuO0t580xEcXpV7vQ~5iGULsZu6XclSVJr1~hQ331pP613YJaxOLdWhoEt24EUIObPS4ZDYUjyouADFtOxlrG43pQRS9LGZlhMrqlvBhTE8L186QSCig1GNihVVPDU9orSCESFXYnOsyWqCfoZv7ICAoMwOCxgzYxcL9QDyo8mwfW4pkouXAwI3lVvKRz6nT9BlufZbgddRnhfIjSyWr5tcAZtxdfcaRVnO01TmHNAru9TFfy6LSfpR8w1FNP87m1lNr~zOku2hPQuvDsAzc1BlhIc~Vqw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000016.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 16,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/16/image/image.jpg?Expires=1776732223&Signature=uHcCbNS-xxpTLOevU9u4Ge6aOAAsSORKDws95YJajuz5W4i41OAnjrWsRuO0t580xEcXpV7vQ~5iGULsZu6XclSVJr1~hQ331pP613YJaxOLdWhoEt24EUIObPS4ZDYUjyouADFtOxlrG43pQRS9LGZlhMrqlvBhTE8L186QSCig1GNihVVPDU9orSCESFXYnOsyWqCfoZv7ICAoMwOCxgzYxcL9QDyo8mwfW4pkouXAwI3lVvKRz6nT9BlufZbgddRnhfIjSyWr5tcAZtxdfcaRVnO01TmHNAru9TFfy6LSfpR8w1FNP87m1lNr~zOku2hPQuvDsAzc1BlhIc~Vqw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_16_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/17/image/image.jpg?Expires=1776732223&Signature=z9YKEY5p9QniLe7QBRkJZCFJPqxzfxBPg04VtkuzOZubnfn7ous3k3mObGdGbccRpqiWet2Ex~isknc4OWrfd44XR8IorEvLWDdxewm2vz3rPR4aXFCRTVrXqbKg8k7CTa547SubxzG50wCNhUyTPUeSIArzEomfx-OGM1bDFn5kVbp5Tu3qngSUnH2mBdTp1tgWoBiKJa1jr0Ghzm15~ZLfEgW-B0r9LEUmW73Y6XexMxqIWmGkIcQZIvYY4SQFd8s41Loq-1aCYq1Tr43gdwkXnKX5Pw6BwCQZHOcSDKW1cGKdqGjN9afjTspJV3quGfAwCzAjuIaaYvB0OixYWQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000017.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 17,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/17/image/image.jpg?Expires=1776732223&Signature=z9YKEY5p9QniLe7QBRkJZCFJPqxzfxBPg04VtkuzOZubnfn7ous3k3mObGdGbccRpqiWet2Ex~isknc4OWrfd44XR8IorEvLWDdxewm2vz3rPR4aXFCRTVrXqbKg8k7CTa547SubxzG50wCNhUyTPUeSIArzEomfx-OGM1bDFn5kVbp5Tu3qngSUnH2mBdTp1tgWoBiKJa1jr0Ghzm15~ZLfEgW-B0r9LEUmW73Y6XexMxqIWmGkIcQZIvYY4SQFd8s41Loq-1aCYq1Tr43gdwkXnKX5Pw6BwCQZHOcSDKW1cGKdqGjN9afjTspJV3quGfAwCzAjuIaaYvB0OixYWQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_17_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/18/image/image.jpg?Expires=1776732223&Signature=Yzb0vjPyrzZKtWSgbowGkM3GNUNlldY1ITLTzBmB2uys2CLYRuoS0~xXIAnUnNuYrDkj7h9hbbheWjLgiRCMLmVAbRt3YAEl--J94JDY9mOWcWNtpIrj3d4Fiqa9QhkdfaBMcOHFMokoWlXF-K3ZbRfmj4-9rJ3pY0PN3f6o~4Eq4aP0kxc-CybemCmIqanlLxyZc5GykzTxfd1jfr6vT7ETrrpEiFmgqAcUquR0h-KKXylEcdoXdsN4~jEmMtKNuWmKHTZb7uprSsCZWmGjG8j5nzXe99jmp-XPGGmJqx6enW1vXV78cgaGROeKSeFRYbterzT26YP64uMXhVjuPg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000018.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 18,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/18/image/image.jpg?Expires=1776732223&Signature=Yzb0vjPyrzZKtWSgbowGkM3GNUNlldY1ITLTzBmB2uys2CLYRuoS0~xXIAnUnNuYrDkj7h9hbbheWjLgiRCMLmVAbRt3YAEl--J94JDY9mOWcWNtpIrj3d4Fiqa9QhkdfaBMcOHFMokoWlXF-K3ZbRfmj4-9rJ3pY0PN3f6o~4Eq4aP0kxc-CybemCmIqanlLxyZc5GykzTxfd1jfr6vT7ETrrpEiFmgqAcUquR0h-KKXylEcdoXdsN4~jEmMtKNuWmKHTZb7uprSsCZWmGjG8j5nzXe99jmp-XPGGmJqx6enW1vXV78cgaGROeKSeFRYbterzT26YP64uMXhVjuPg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_18_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/19/image/image.jpg?Expires=1776732223&Signature=WWnxjxpqY44ueK01yqdM-ilvLGnemFQCBGP4yRz8isC33bZ2E3X32Y4czulbZaPVUp82uXQ6bqAppGZqfybyYYC-fU4IwPw0ozbXhqumtlEut1jcoJ86RT9ptCa15FHUllZTon4MlDZIhtRKtPWAso~QynSkb2XdIYKocMRdrxSjmd02eWBUzlJ3vp4jEmw3rns3HbCNO~If2kqp0KX0dJ6kuNsp97sD6f2eWBRrH2drsL0cvDx7UccdOTuPuexMzxalIsAHe3E9oUA6ykyfpX9JITsjAxgWfWhn~pzpq5ZayDmwDKUhDBHsE0s5Q0Pa~spPULxurobwFXoyvKKwEQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000019.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 19,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/19/image/image.jpg?Expires=1776732223&Signature=WWnxjxpqY44ueK01yqdM-ilvLGnemFQCBGP4yRz8isC33bZ2E3X32Y4czulbZaPVUp82uXQ6bqAppGZqfybyYYC-fU4IwPw0ozbXhqumtlEut1jcoJ86RT9ptCa15FHUllZTon4MlDZIhtRKtPWAso~QynSkb2XdIYKocMRdrxSjmd02eWBUzlJ3vp4jEmw3rns3HbCNO~If2kqp0KX0dJ6kuNsp97sD6f2eWBRrH2drsL0cvDx7UccdOTuPuexMzxalIsAHe3E9oUA6ykyfpX9JITsjAxgWfWhn~pzpq5ZayDmwDKUhDBHsE0s5Q0Pa~spPULxurobwFXoyvKKwEQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_19_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/20/image/image.jpg?Expires=1776732223&Signature=Q8KHDuBYfxFhSkPIXF7vpCStb~sVr-PA6OpMfeK6U0sy6GubD~1mxMfJRudjrymyw7AvS6238uPh~WF4CXqNXUNkIlaIHQoNw7lsA4ij~eGwLmN-jb86SdItG2pX1xGejU1oVfBoKN0gemAFIfTcWgOqomdowXbu60Q7WHKTcIB9vxuyTYwEVSt6b8HshhIroG05MbXTvNUxb8qHdDVRF6stGntIdbTTQGQdAtdRiyCW3uqMcCFWUWGSxaoPr3S4cYYVFLdUf8wVTqvQCsocoSrNvpft7r4U5NEIrAquZ~GWxEO6ad8Vnmq2GmmUHuMq05GR4NrxYQc6h6600Jmx4g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000020.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 20,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/20/image/image.jpg?Expires=1776732223&Signature=Q8KHDuBYfxFhSkPIXF7vpCStb~sVr-PA6OpMfeK6U0sy6GubD~1mxMfJRudjrymyw7AvS6238uPh~WF4CXqNXUNkIlaIHQoNw7lsA4ij~eGwLmN-jb86SdItG2pX1xGejU1oVfBoKN0gemAFIfTcWgOqomdowXbu60Q7WHKTcIB9vxuyTYwEVSt6b8HshhIroG05MbXTvNUxb8qHdDVRF6stGntIdbTTQGQdAtdRiyCW3uqMcCFWUWGSxaoPr3S4cYYVFLdUf8wVTqvQCsocoSrNvpft7r4U5NEIrAquZ~GWxEO6ad8Vnmq2GmmUHuMq05GR4NrxYQc6h6600Jmx4g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_20_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/21/image/image.jpg?Expires=1776732223&Signature=yy0m4T3its1ivbMHDNijrwpMu0Udz4ajI5DQxqPpGKqFYY1XNvys85g4G2BlCjtD-TDa6i55IbxtI-nG5An3OJL4ZmBRr4nPP-U6K9DqohgI2ymx1f62Qx-30t4CAwPkugvoGXHTeFxMMEssxMxGorqGoOlB3cRan4ywn1w5vsH-BUJjihMmNADQQhRF-UEGC1F0c239fHmtXFTSPeHVMvAAGa4TW4Go5~SSIe5Zlj~gRCluxMjKlS-T4ahFCXsAk7k02GjGta2cbSqC5cF9KJkHXG3kVrWYtgB94HELBYCqkIsWcBG8NcM6UAlQKfDCauS2DxG3FnPVKI1IFGAivw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000021.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 21,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/21/image/image.jpg?Expires=1776732223&Signature=yy0m4T3its1ivbMHDNijrwpMu0Udz4ajI5DQxqPpGKqFYY1XNvys85g4G2BlCjtD-TDa6i55IbxtI-nG5An3OJL4ZmBRr4nPP-U6K9DqohgI2ymx1f62Qx-30t4CAwPkugvoGXHTeFxMMEssxMxGorqGoOlB3cRan4ywn1w5vsH-BUJjihMmNADQQhRF-UEGC1F0c239fHmtXFTSPeHVMvAAGa4TW4Go5~SSIe5Zlj~gRCluxMjKlS-T4ahFCXsAk7k02GjGta2cbSqC5cF9KJkHXG3kVrWYtgB94HELBYCqkIsWcBG8NcM6UAlQKfDCauS2DxG3FnPVKI1IFGAivw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_21_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/22/image/image.jpg?Expires=1776732223&Signature=fJ7IUY~ImaTu5JkdHNTclRIvPPGeqh1zn56H3QxeyWbb2PlKHzdqSkXXR9re1T-B6qcfH7RI8dgzgTFOm528y7xGkKiLyN736NLwDTKVi86UPe24kUaL~2sandCPO9eupmioKTln5Y97IaktFXHoYK7C00CKUCxVhXXDTnp0T~xtWU8b14QsNEibCu~XbK0wuR4ce6QrPO1BjqttVymwQ4WaJ22NehYitFTn9J-63GRJyUfe6o0hlsNn0nbP4uBaH7pamYxOuKoCv3dnHFQxFFwZMbO-Agsys6vug4V4rrHs9GJatITtkLy3mF3OxQdLAuT72RtsmrlKpVnRVDz3Lg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000022.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 22,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/22/image/image.jpg?Expires=1776732223&Signature=fJ7IUY~ImaTu5JkdHNTclRIvPPGeqh1zn56H3QxeyWbb2PlKHzdqSkXXR9re1T-B6qcfH7RI8dgzgTFOm528y7xGkKiLyN736NLwDTKVi86UPe24kUaL~2sandCPO9eupmioKTln5Y97IaktFXHoYK7C00CKUCxVhXXDTnp0T~xtWU8b14QsNEibCu~XbK0wuR4ce6QrPO1BjqttVymwQ4WaJ22NehYitFTn9J-63GRJyUfe6o0hlsNn0nbP4uBaH7pamYxOuKoCv3dnHFQxFFwZMbO-Agsys6vug4V4rrHs9GJatITtkLy3mF3OxQdLAuT72RtsmrlKpVnRVDz3Lg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_22_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/23/image/image.jpg?Expires=1776732223&Signature=zQE~DTjnDRLLQr8d2QMxvuopCeRmswLhHkHqG3V6fjUCll8BVdi6owo~HkZhXqCAHx~vHgCLTVP7SWrfyAr5YtEzGsWGSnMb0J6zW7LgCuhsY9Z5HoscNqWPZpO3q2qW1i8PeMfLH~flaIEbuFdum31AYKdnzlOl2HyTSjvGBk1IPBHcYrgg~DfNEtADwM4FLVCciamse~6~s8XQuN4euxU3cC-69Wq64KHNHDwRmjMMuksomT0oHbd7pctx-vh9nOZD1CTQzqDoL1NKFdwmtw-12Q-OUX5WZaJR7nyOoQRFFJcQ1mcudcJiiVHP4qQz1imVV91xbxXCn5b6Lat-Kw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000023.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 23,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/23/image/image.jpg?Expires=1776732223&Signature=zQE~DTjnDRLLQr8d2QMxvuopCeRmswLhHkHqG3V6fjUCll8BVdi6owo~HkZhXqCAHx~vHgCLTVP7SWrfyAr5YtEzGsWGSnMb0J6zW7LgCuhsY9Z5HoscNqWPZpO3q2qW1i8PeMfLH~flaIEbuFdum31AYKdnzlOl2HyTSjvGBk1IPBHcYrgg~DfNEtADwM4FLVCciamse~6~s8XQuN4euxU3cC-69Wq64KHNHDwRmjMMuksomT0oHbd7pctx-vh9nOZD1CTQzqDoL1NKFdwmtw-12Q-OUX5WZaJR7nyOoQRFFJcQ1mcudcJiiVHP4qQz1imVV91xbxXCn5b6Lat-Kw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_23_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/24/image/image.jpg?Expires=1776732223&Signature=h-cquL335MItd2gCYC8vQa5yllYC9qvtGoYk0J-eXR8Habtll9wICcBEBq23mVH3PwBU0u1NT1-d8BhtU1~u1zZfkho2lxzIujWyDrfHrcODT~50ut0v30FWOXbF9fpGHeW4wwlUO-nir9OlcjJMaggYgVBnpoW9Uj77dSuKz6UVjY8gC3n9Uef6IEvkhNQwT-8iCmpnI~MlkxFxl7GK7KlernZfG~5nc8sfyic6IMJMikWoYC7BHnmn-7iG0KpoyTUwG53skbB34CJYuex1IJwY~JH6W4HmWw6T6aQSH~wwDLUO-sMo9wDk-lSazJu5hdjx3f~tsy-g~YP~I-1u7A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000024.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 24,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/24/image/image.jpg?Expires=1776732223&Signature=h-cquL335MItd2gCYC8vQa5yllYC9qvtGoYk0J-eXR8Habtll9wICcBEBq23mVH3PwBU0u1NT1-d8BhtU1~u1zZfkho2lxzIujWyDrfHrcODT~50ut0v30FWOXbF9fpGHeW4wwlUO-nir9OlcjJMaggYgVBnpoW9Uj77dSuKz6UVjY8gC3n9Uef6IEvkhNQwT-8iCmpnI~MlkxFxl7GK7KlernZfG~5nc8sfyic6IMJMikWoYC7BHnmn-7iG0KpoyTUwG53skbB34CJYuex1IJwY~JH6W4HmWw6T6aQSH~wwDLUO-sMo9wDk-lSazJu5hdjx3f~tsy-g~YP~I-1u7A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_24_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/25/image/image.jpg?Expires=1776732223&Signature=kfdVgrQtI6MdqMK~1NXFZ0nM9xBINHES6lCtzl4dW3QjPyT1zDS8fYx3U67bPP22PxZOssHwdXbLwaitZ4gN1WEHpIP4ywktxiBljJ1VBjsfXo5hhVA4CVSCCEv8wHu4vfwHBXXPYohMdxHN1kk95uXaXqw8Eg6BDLW~KlIE1RCOb2pRgMFP-w-nBS~F1EElftE4BVnYu47JEVpRbN9Qc7Ec6p4CTYX8KOW~540S0MJ3MaYhti2lF19X0AJjNoH3z46U1rOM45dDKxmkTr7bQbP1fepjPyai0fxGFWSBceqIJeWgVgfVB3Sh~n5j931w2u8~By7s1Z8jULGwWYo8Jg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000025.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 25,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/25/image/image.jpg?Expires=1776732223&Signature=kfdVgrQtI6MdqMK~1NXFZ0nM9xBINHES6lCtzl4dW3QjPyT1zDS8fYx3U67bPP22PxZOssHwdXbLwaitZ4gN1WEHpIP4ywktxiBljJ1VBjsfXo5hhVA4CVSCCEv8wHu4vfwHBXXPYohMdxHN1kk95uXaXqw8Eg6BDLW~KlIE1RCOb2pRgMFP-w-nBS~F1EElftE4BVnYu47JEVpRbN9Qc7Ec6p4CTYX8KOW~540S0MJ3MaYhti2lF19X0AJjNoH3z46U1rOM45dDKxmkTr7bQbP1fepjPyai0fxGFWSBceqIJeWgVgfVB3Sh~n5j931w2u8~By7s1Z8jULGwWYo8Jg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_25_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/26/image/image.jpg?Expires=1776732223&Signature=q3JcATPp5oOyDcXS0X4P119P5NmQM0ewa~-SVUBQTdSWFNI8dZY2lzjUqfEFGChObxuXD2CbzQl1-1rQrE5SMoM88gRBHLj-dviEbfviq5VQJQttdatJ20cQbLsgHVATsbiqBMVKVaTXtxTF~3xyuqJhPrqXMOs3A37TPnoEf97hAvbO41ne3x678f-s01C3Y6SStO33lFqCma6y08UrU44zdEaM8eovLIWLXvmu8ABLedUhClllLy~UJdkYREscLdgKRIHzf~ozIIswuygU-6RBszbMXMb97ldduEY3GQU1q2Z6-xin8YlbhNvi5Lq9uYLgqaZrhlh3~V1aGmVJYg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000026.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 26,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/26/image/image.jpg?Expires=1776732223&Signature=q3JcATPp5oOyDcXS0X4P119P5NmQM0ewa~-SVUBQTdSWFNI8dZY2lzjUqfEFGChObxuXD2CbzQl1-1rQrE5SMoM88gRBHLj-dviEbfviq5VQJQttdatJ20cQbLsgHVATsbiqBMVKVaTXtxTF~3xyuqJhPrqXMOs3A37TPnoEf97hAvbO41ne3x678f-s01C3Y6SStO33lFqCma6y08UrU44zdEaM8eovLIWLXvmu8ABLedUhClllLy~UJdkYREscLdgKRIHzf~ozIIswuygU-6RBszbMXMb97ldduEY3GQU1q2Z6-xin8YlbhNvi5Lq9uYLgqaZrhlh3~V1aGmVJYg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_26_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/27/image/image.jpg?Expires=1776732223&Signature=np2AX17j4dMN55cFuxt5wAahGHpNJu4nosLPwxwGdVUF7sdSXdVFTluhDWKpdnv1RrXWwXIyqCmXehFqpuR6OXV7Pbzi6FF~ixTEGHSmy53L5443BpuyBi9qJYeLc~JiM0yzaz4cneVk-GW3SSyU~wup950lI~KUKH3niZobfaZIjgvMQThIrvcVfjU7HTEPv6SVp3JA9CCVi0XMDWEjSKzL14YjLJwMYeWxOCrMZBlg153971ajSV3-kyRq7WXlW~h5kt6vzfqIcwGzRDZrKZTSZ5f-wsXSox-c45yOE3mGVvTo9imGT~1Q04ZPIx5l1-bo3cQLf5YRZj18~HTZ-w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000027.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 27,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/27/image/image.jpg?Expires=1776732223&Signature=np2AX17j4dMN55cFuxt5wAahGHpNJu4nosLPwxwGdVUF7sdSXdVFTluhDWKpdnv1RrXWwXIyqCmXehFqpuR6OXV7Pbzi6FF~ixTEGHSmy53L5443BpuyBi9qJYeLc~JiM0yzaz4cneVk-GW3SSyU~wup950lI~KUKH3niZobfaZIjgvMQThIrvcVfjU7HTEPv6SVp3JA9CCVi0XMDWEjSKzL14YjLJwMYeWxOCrMZBlg153971ajSV3-kyRq7WXlW~h5kt6vzfqIcwGzRDZrKZTSZ5f-wsXSox-c45yOE3mGVvTo9imGT~1Q04ZPIx5l1-bo3cQLf5YRZj18~HTZ-w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_27_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/28/image/image.jpg?Expires=1776732223&Signature=yTy5tnGc8-7wRiLMXlK3IioO4FeckVhoMSCXYcDoUnxOpJLZan9jgz4Rv91grer1GmXGwWi-5Uk4QW~daTbajfrXMr8U1t-BFVuAxUZO2fS07Ld~FVtbi7YFI90fKKOCQg2Pv~wu-coXa3oAUmJ1nCo2mx7RUUQacNk7PNqQBWZKILeRtPRHQHzlL-5ltUO4h4KpuuqTlNX87kkeXVUwTWCaDWYV6yWvymofiQ9uFI7lW8mWYywtFMBGT2U~-h4phGP1dY02be3LXOS7KYj2B2L~3OlUplB8qLTCQGdSLEqqst4J2heGAOjDCMewgf3KZ3Bb8~kJMLHOzZIwNM5pbQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000028.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 28,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/28/image/image.jpg?Expires=1776732223&Signature=yTy5tnGc8-7wRiLMXlK3IioO4FeckVhoMSCXYcDoUnxOpJLZan9jgz4Rv91grer1GmXGwWi-5Uk4QW~daTbajfrXMr8U1t-BFVuAxUZO2fS07Ld~FVtbi7YFI90fKKOCQg2Pv~wu-coXa3oAUmJ1nCo2mx7RUUQacNk7PNqQBWZKILeRtPRHQHzlL-5ltUO4h4KpuuqTlNX87kkeXVUwTWCaDWYV6yWvymofiQ9uFI7lW8mWYywtFMBGT2U~-h4phGP1dY02be3LXOS7KYj2B2L~3OlUplB8qLTCQGdSLEqqst4J2heGAOjDCMewgf3KZ3Bb8~kJMLHOzZIwNM5pbQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_28_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/29/image/image.jpg?Expires=1776732223&Signature=jmNz99N-~K0ktcI0PbtgoTIjIoJqaLJ7absMqrNLYSSHppE-eNR~M27eB8FqfZ8kmc6fTRsfOmVXkNA65yBtSFKlccUO4wWsPV2x-p0fLit-aLbZOd-JFE4z5eZYBIOZ65D9mf6BAdnfbsLy-Z6~pjdktweNVX9V8D9GN3j9lUrcCTrPyVXtZTL~zGnR0D4~V9ytTURPl5l8GblnEF-7dEP3UqugOHcgUD8SzhKfnM1yztrIE9dhVB0n3VbFEXcUXNRxJCDJoXW5zgpFI1NKMXshP25hpfqMURFGl-bsl1liA7L-OJnww~V5S0K62s6nJLDUowgmr-5plp0Zay39hA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000029.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 29,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/29/image/image.jpg?Expires=1776732223&Signature=jmNz99N-~K0ktcI0PbtgoTIjIoJqaLJ7absMqrNLYSSHppE-eNR~M27eB8FqfZ8kmc6fTRsfOmVXkNA65yBtSFKlccUO4wWsPV2x-p0fLit-aLbZOd-JFE4z5eZYBIOZ65D9mf6BAdnfbsLy-Z6~pjdktweNVX9V8D9GN3j9lUrcCTrPyVXtZTL~zGnR0D4~V9ytTURPl5l8GblnEF-7dEP3UqugOHcgUD8SzhKfnM1yztrIE9dhVB0n3VbFEXcUXNRxJCDJoXW5zgpFI1NKMXshP25hpfqMURFGl-bsl1liA7L-OJnww~V5S0K62s6nJLDUowgmr-5plp0Zay39hA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_29_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/30/image/image.jpg?Expires=1776732223&Signature=al6a5Deg8nlwlPNnT2KWVdTHgcPNScoylxw5a0RKrcYi60-85FUvcHJ9H0PFp9T5XWyrCpoOr5muZzWVmq4ku9bKO~nJ1vHTKAluYk2~ITW9B3HaPCMT6lzVyKUIvep8Sethhom3Z~baIJWTubgHA2e7k6-0PjBpGVs4bKqCkp-wgPqBfi~ucEBLrtnP~4wQZhK5luCEK1d3LbQhc12FSkla50OvJObBmmxmuIMOBHzhjgkmiaGEt4Kmefvs1BjMo3K7GDX7KdwdaL2Ph2UD-VY0eJsWHgHE9KXHZ6jZl6GoISgMHLeXlhCW6OpWXDvkVYJIhmmEESYB1r1t2bHD7A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000030.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 30,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/30/image/image.jpg?Expires=1776732223&Signature=al6a5Deg8nlwlPNnT2KWVdTHgcPNScoylxw5a0RKrcYi60-85FUvcHJ9H0PFp9T5XWyrCpoOr5muZzWVmq4ku9bKO~nJ1vHTKAluYk2~ITW9B3HaPCMT6lzVyKUIvep8Sethhom3Z~baIJWTubgHA2e7k6-0PjBpGVs4bKqCkp-wgPqBfi~ucEBLrtnP~4wQZhK5luCEK1d3LbQhc12FSkla50OvJObBmmxmuIMOBHzhjgkmiaGEt4Kmefvs1BjMo3K7GDX7KdwdaL2Ph2UD-VY0eJsWHgHE9KXHZ6jZl6GoISgMHLeXlhCW6OpWXDvkVYJIhmmEESYB1r1t2bHD7A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_30_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/31/image/image.jpg?Expires=1776732223&Signature=XpvlyWf5s92tiBaiPOrpf9ykAIs-iofHIRziZxGS~k01GosLSCwNbN6ANPjJhOyvjtjumcLGFwahkh~eaPTnd6SveG35~DBt3WcrbrKApbiznYzbFN18vV-n4K06mEs4HiSG-Q0togI1MHcjdRlIZ31iFaMs5-~Q4TKatRDuGppGny5WB2tXSGgcXKeTEsnDBr8tNqzyuhR1iJhr~yFoeQBD3CYiq4BSbWbAeH7e2nBm5fC0z2DuKpR3U~waGsstZnGFOA9Sds6KTs7f6AuuPv3yjL7akemPnZIeZg0roZbL2MeIX6TuZVri0NjsiI~a4KuTOMQA5ntllykPUY4EwQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000031.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 31,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/31/image/image.jpg?Expires=1776732223&Signature=XpvlyWf5s92tiBaiPOrpf9ykAIs-iofHIRziZxGS~k01GosLSCwNbN6ANPjJhOyvjtjumcLGFwahkh~eaPTnd6SveG35~DBt3WcrbrKApbiznYzbFN18vV-n4K06mEs4HiSG-Q0togI1MHcjdRlIZ31iFaMs5-~Q4TKatRDuGppGny5WB2tXSGgcXKeTEsnDBr8tNqzyuhR1iJhr~yFoeQBD3CYiq4BSbWbAeH7e2nBm5fC0z2DuKpR3U~waGsstZnGFOA9Sds6KTs7f6AuuPv3yjL7akemPnZIeZg0roZbL2MeIX6TuZVri0NjsiI~a4KuTOMQA5ntllykPUY4EwQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_31_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/32/image/image.jpg?Expires=1776732223&Signature=q5SR-JUtlXG2SFnSeQUyRz0kaTk02CQJz2kc1jkmphZkmIXLiC-A4sO2IT1QmSlIDReazNojVwHu5zBQcoj2FP1x97O~uATdbs-2ak5A5Rmj~7FX6iPQtfOoVC3fsCBI3upTYGibGoe~~G-cT~6rllMUo3Iv9uZH9XU8xPims~oUmhwsTLCMRGQqYHmy3ihyJtcYokXSEjugmnokXwgohxN6aF42nIzFLoyuIJCW89-BRdXUrKcBYcjnLqEEptXwXTlHqmv6oIwJQXqiIyhjmUiuTl3vvrVeia~x2YGcPakMwIAO0tGeW6T2YN9gaRBeWBLS2Kijlw4uoKMhFv~j1g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000032.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 32,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/32/image/image.jpg?Expires=1776732223&Signature=q5SR-JUtlXG2SFnSeQUyRz0kaTk02CQJz2kc1jkmphZkmIXLiC-A4sO2IT1QmSlIDReazNojVwHu5zBQcoj2FP1x97O~uATdbs-2ak5A5Rmj~7FX6iPQtfOoVC3fsCBI3upTYGibGoe~~G-cT~6rllMUo3Iv9uZH9XU8xPims~oUmhwsTLCMRGQqYHmy3ihyJtcYokXSEjugmnokXwgohxN6aF42nIzFLoyuIJCW89-BRdXUrKcBYcjnLqEEptXwXTlHqmv6oIwJQXqiIyhjmUiuTl3vvrVeia~x2YGcPakMwIAO0tGeW6T2YN9gaRBeWBLS2Kijlw4uoKMhFv~j1g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_32_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/33/image/image.jpg?Expires=1776732223&Signature=Kq6cINPwRlM10GbPJgUC5zUkFxoBCEml4gUvQmiy0Z9BP56m9LGYgevafcrrstMhKtJwWaFLBnyR7lSQYwzddcJ94ehim0mWxelyEawlxqcxz~acQ~yLo6c8MHZUI85~lH2mPrw0PbI-TfyJ-~jEpQRzhsRnlmM1LmUjUq6Kc-KE2XJDosqO5Y1k5aJ5JFoNPnzQdj6s07qRDsk8iXG4eZ4-s302r1-gLXlluKEKrWjGeOsmkjbr8Rn34CJojfy-Wf35IB67ld8ovF8Cdz13if4HBaI5dl~EYWRk7Xff6hSCXKjyzJ4NbNvRR576UotOXblTgJn4LixYkwvvroZN9g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000033.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 33,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/33/image/image.jpg?Expires=1776732223&Signature=Kq6cINPwRlM10GbPJgUC5zUkFxoBCEml4gUvQmiy0Z9BP56m9LGYgevafcrrstMhKtJwWaFLBnyR7lSQYwzddcJ94ehim0mWxelyEawlxqcxz~acQ~yLo6c8MHZUI85~lH2mPrw0PbI-TfyJ-~jEpQRzhsRnlmM1LmUjUq6Kc-KE2XJDosqO5Y1k5aJ5JFoNPnzQdj6s07qRDsk8iXG4eZ4-s302r1-gLXlluKEKrWjGeOsmkjbr8Rn34CJojfy-Wf35IB67ld8ovF8Cdz13if4HBaI5dl~EYWRk7Xff6hSCXKjyzJ4NbNvRR576UotOXblTgJn4LixYkwvvroZN9g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_33_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/34/image/image.jpg?Expires=1776732223&Signature=uqUjxJf-bbQR189XbDSmuEZ70oCVh0GgF1B7Y812MvhUuBd8DpekKhmZeyJHxXlBTFzk4SXKbA8Plh0FCPLGlRUCdBcmVTZRfsFsbIiNO6y2c~97pmN7obWOoWmk6aE16xpJdRmh9zCesrOnlHRkMJLyDpFYkx9uWGynfXa3vOPXXv4KhuM6iW5HuWbIgyICa0g8RnIMQ-rIPALybiLMuEnHuvz1GlluCrNS78NcWR8LCeQq2CV9TYAm4ESCGn7V6ohKNGUDBatHTeKOCbZY6AVDNNkwdv4u4DPbvzf7LgBoxckZ6r2sKYKzUQ6zUbiWyMTHI7fHWSr~JgkgGrlS3g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000034.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 34,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/34/image/image.jpg?Expires=1776732223&Signature=uqUjxJf-bbQR189XbDSmuEZ70oCVh0GgF1B7Y812MvhUuBd8DpekKhmZeyJHxXlBTFzk4SXKbA8Plh0FCPLGlRUCdBcmVTZRfsFsbIiNO6y2c~97pmN7obWOoWmk6aE16xpJdRmh9zCesrOnlHRkMJLyDpFYkx9uWGynfXa3vOPXXv4KhuM6iW5HuWbIgyICa0g8RnIMQ-rIPALybiLMuEnHuvz1GlluCrNS78NcWR8LCeQq2CV9TYAm4ESCGn7V6ohKNGUDBatHTeKOCbZY6AVDNNkwdv4u4DPbvzf7LgBoxckZ6r2sKYKzUQ6zUbiWyMTHI7fHWSr~JgkgGrlS3g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_34_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/35/image/image.jpg?Expires=1776732223&Signature=QmfCEOXr8FJRNFbs3f0JGkfAr-z6qQfQzY93Lbu9vFCGvI-5R5IvPYkASr3K1rq3-7jDCe8PcfMIJrfwqv0piK5F7bTKUb32HQT8mCYog3lwvx6H8KZNI~sXiFjUJb0WBg4dstbXBD4yXspYa6EeeEqtthvq0JOtskBswx3Dhg8s7wRNp8Y5bKgABUhgtrVBxItqtqeXk90UmLET7V-VgHYlaiJrCcSSnKfAoR0EKZF0sOFn7RzrBhPZ-ZB3B-8AU2Yas0svP1SvA86wShrC8hJ5hbdlzZiykk-oqUF47cA4FJnMLnXupcPNc1le5NvBWxI-NWXa1NecnthJUuSwiw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000035.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 35,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/35/image/image.jpg?Expires=1776732223&Signature=QmfCEOXr8FJRNFbs3f0JGkfAr-z6qQfQzY93Lbu9vFCGvI-5R5IvPYkASr3K1rq3-7jDCe8PcfMIJrfwqv0piK5F7bTKUb32HQT8mCYog3lwvx6H8KZNI~sXiFjUJb0WBg4dstbXBD4yXspYa6EeeEqtthvq0JOtskBswx3Dhg8s7wRNp8Y5bKgABUhgtrVBxItqtqeXk90UmLET7V-VgHYlaiJrCcSSnKfAoR0EKZF0sOFn7RzrBhPZ-ZB3B-8AU2Yas0svP1SvA86wShrC8hJ5hbdlzZiykk-oqUF47cA4FJnMLnXupcPNc1le5NvBWxI-NWXa1NecnthJUuSwiw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_35_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/36/image/image.jpg?Expires=1776732223&Signature=YGmZuU3vA7aZBK5DRy-pXqEjNGPgeu2in0mGojgDlxeuC8OhUoWlKbJ00VMlTL72SgBS8n0WxHrcJRiGnDqfZs5ySZ2thH2m4q1iULhxTOkifkvaLQeXFaqiywM3MZlbtgWDWcWZQuL98acLSuKRV9DDUkVjw6Ss9aQxP0veBXEr8T2S8Njwvb-dfimlxPrGKxnYZKHqu4kPmZtvCKP5BU0u2PtgYstk6OmZmoJX8GF-nCxzcX2L6OPRyNSmJ5n0IN7NDqVEG3SeFyDHPbZ8y7pP0qEmwibei9YXWuXvJQEGsQ~QVN0oOdqe70etXIIP7e~E7sUXizkqqPT1wKCSsw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000036.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 36,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/36/image/image.jpg?Expires=1776732223&Signature=YGmZuU3vA7aZBK5DRy-pXqEjNGPgeu2in0mGojgDlxeuC8OhUoWlKbJ00VMlTL72SgBS8n0WxHrcJRiGnDqfZs5ySZ2thH2m4q1iULhxTOkifkvaLQeXFaqiywM3MZlbtgWDWcWZQuL98acLSuKRV9DDUkVjw6Ss9aQxP0veBXEr8T2S8Njwvb-dfimlxPrGKxnYZKHqu4kPmZtvCKP5BU0u2PtgYstk6OmZmoJX8GF-nCxzcX2L6OPRyNSmJ5n0IN7NDqVEG3SeFyDHPbZ8y7pP0qEmwibei9YXWuXvJQEGsQ~QVN0oOdqe70etXIIP7e~E7sUXizkqqPT1wKCSsw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_36_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/37/image/image.jpg?Expires=1776732223&Signature=RmSvnuOhC6R-Hl-F-FXJbxgUoZbdlUUqpa~5dn4xJ3E16yFwr7GDnGdKBgXSRzwJagucuiJg51CXb2rck~WEqiCjSDFCVcmAr1EEgnTULvB6lPIXdNU~tQyIF8njSo1mqrAeeukFIep2kErgvM0OluRR0hMisI1Fhw2cmjL8q~VvsyX1QNvgW7sOgWodE1tjeyAP~fQoGP3-pSLy~9DOi504jkDO9ut2O6LundTtbLpKTpJ1hk2X0VXkc3SAZUpTlC01G6lAGuGjDhgYyJ6Q1ypIC4gM~TQ7KIs~ViPBcbAbecwfC~eUOXaBQChu5qj7SQgi0Az06jYp79WPLlHyzQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000037.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 37,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/37/image/image.jpg?Expires=1776732223&Signature=RmSvnuOhC6R-Hl-F-FXJbxgUoZbdlUUqpa~5dn4xJ3E16yFwr7GDnGdKBgXSRzwJagucuiJg51CXb2rck~WEqiCjSDFCVcmAr1EEgnTULvB6lPIXdNU~tQyIF8njSo1mqrAeeukFIep2kErgvM0OluRR0hMisI1Fhw2cmjL8q~VvsyX1QNvgW7sOgWodE1tjeyAP~fQoGP3-pSLy~9DOi504jkDO9ut2O6LundTtbLpKTpJ1hk2X0VXkc3SAZUpTlC01G6lAGuGjDhgYyJ6Q1ypIC4gM~TQ7KIs~ViPBcbAbecwfC~eUOXaBQChu5qj7SQgi0Az06jYp79WPLlHyzQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_37_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/38/image/image.jpg?Expires=1776732223&Signature=hU~vlZOCvJqFt6T9DZv1gLEKsRkFYkAjS~tLMJknZ5aSYfDLT4CU0UJRBUC7I8dkPE-IRDKZlWH7Q6I3rwHCOtBgmsqJtYQblEpmwztsHZ8vX8RRtFixicpQVamcSO2DKKfFVe8~lsW3qnKST~SmgTj1VZO-IdyxzbPzTnfWCjiWV2CVmgL-uiExGXkDTeVhFhzxwZOgpe5cUmX97p~C2rOUi-465-sLGtcbh-2IBA54UM-JQdzVupPNxlg4SFKL8W4HWlvLVZBfYQUsMgKcPEIBPcYyIiVLr07LQ73T13RpZfDk-aSBBpVFZPO4aTc0PvNUdff39vXrLPxwRXvUYg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000038.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 38,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/38/image/image.jpg?Expires=1776732223&Signature=hU~vlZOCvJqFt6T9DZv1gLEKsRkFYkAjS~tLMJknZ5aSYfDLT4CU0UJRBUC7I8dkPE-IRDKZlWH7Q6I3rwHCOtBgmsqJtYQblEpmwztsHZ8vX8RRtFixicpQVamcSO2DKKfFVe8~lsW3qnKST~SmgTj1VZO-IdyxzbPzTnfWCjiWV2CVmgL-uiExGXkDTeVhFhzxwZOgpe5cUmX97p~C2rOUi-465-sLGtcbh-2IBA54UM-JQdzVupPNxlg4SFKL8W4HWlvLVZBfYQUsMgKcPEIBPcYyIiVLr07LQ73T13RpZfDk-aSBBpVFZPO4aTc0PvNUdff39vXrLPxwRXvUYg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_38_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/39/image/image.jpg?Expires=1776732223&Signature=j65jkGRzJDXOtNaw81T2VM7whBdPd7BvTSk5BrXiFAGBoWLZrqKmk4IX8mL8x96mqmeipPdWVMhrcy1zQNKS6GuBQM9cJgrMfUCba9O38OwsDQEktVCOSd~Z5BHtDOybY4ZcoLCoTXR5FsYYB4H5OM-QWH2nFiq85uj~B7cjBl8D882KMEARBr8w5mJU50d6TLi6ZS2Sfimta6KSDC-a1ieX7aS58XuDeu8wNjThK8mReauHW~2~x3zE19AKr69zfWXMr7cwOVGt2FZE9IJONr-LjDb4qJn29iMlOCk15PAZ9iGNGX3ugYfH0Iga9KO6-uyv8EP173qsFMi-jDG0tg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000039.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 39,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/39/image/image.jpg?Expires=1776732223&Signature=j65jkGRzJDXOtNaw81T2VM7whBdPd7BvTSk5BrXiFAGBoWLZrqKmk4IX8mL8x96mqmeipPdWVMhrcy1zQNKS6GuBQM9cJgrMfUCba9O38OwsDQEktVCOSd~Z5BHtDOybY4ZcoLCoTXR5FsYYB4H5OM-QWH2nFiq85uj~B7cjBl8D882KMEARBr8w5mJU50d6TLi6ZS2Sfimta6KSDC-a1ieX7aS58XuDeu8wNjThK8mReauHW~2~x3zE19AKr69zfWXMr7cwOVGt2FZE9IJONr-LjDb4qJn29iMlOCk15PAZ9iGNGX3ugYfH0Iga9KO6-uyv8EP173qsFMi-jDG0tg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_39_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/40/image/image.jpg?Expires=1776732223&Signature=gjhg4U5AN~fPckuikoxsQP7UlWeePXT9GHPSrPZKeAFb8Iv06hg55jfyrFQUHXPi3mqj~qzKZue4jQTZwiFJi~Hp2PmSdFrT3jme9ntTcvQBoz-gcmgKsmc7CTUkdKSBN5z5GDKRhWNChqsUEjTOHHpIlqoSfoL4sn4Y70uAgKjwTeOeR2cBBQFxE8ik15Ptm8G2mal6a0DFC1KbJqkGXWvsmD1yIaNXfIgLPFe3ySUICs7BmlDnGCbI7Ttb3wbKNemEnvQscN8ZMnaKQE058SotiRBOiYJ4vsKu6n7EFCjed1~pMfpNIMalZ1zFfS1YlUcjonDjNiQ~8YVTV57CTA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000040.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 40,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/40/image/image.jpg?Expires=1776732223&Signature=gjhg4U5AN~fPckuikoxsQP7UlWeePXT9GHPSrPZKeAFb8Iv06hg55jfyrFQUHXPi3mqj~qzKZue4jQTZwiFJi~Hp2PmSdFrT3jme9ntTcvQBoz-gcmgKsmc7CTUkdKSBN5z5GDKRhWNChqsUEjTOHHpIlqoSfoL4sn4Y70uAgKjwTeOeR2cBBQFxE8ik15Ptm8G2mal6a0DFC1KbJqkGXWvsmD1yIaNXfIgLPFe3ySUICs7BmlDnGCbI7Ttb3wbKNemEnvQscN8ZMnaKQE058SotiRBOiYJ4vsKu6n7EFCjed1~pMfpNIMalZ1zFfS1YlUcjonDjNiQ~8YVTV57CTA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_40_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/41/image/image.jpg?Expires=1776732223&Signature=Muw4vzwnfP~IBLjes5wawnexEnvubrECpR7pLVK19Bb9eseSulycIqlcVuRqBYKkiQX120zJbnyK2UcUNfkgKcnLSHocpY-~5MYo2HHMatx7U5aqNCtglK9VSMgaB1CS8KFDmVoGMhQO0jIPNanb4f0P1i3dBdio9mOYjXw1nNraSepzX8iq9fuI9r8AoNDdqtFzM0QhhpSzG0y5B-0z4~0ASEPYmM4C2nuPu6xHiBMmLStEtAkdUwNfkG5CbpJGuAzsth7CcD7dCOUgRq8QT7K9OsSZWc1JtxDmEoxiw7oPEnu65~c7RrmXhf7zPZz7jQpv~pxY8AlpItHbsS9z5Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000041.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 41,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/41/image/image.jpg?Expires=1776732223&Signature=Muw4vzwnfP~IBLjes5wawnexEnvubrECpR7pLVK19Bb9eseSulycIqlcVuRqBYKkiQX120zJbnyK2UcUNfkgKcnLSHocpY-~5MYo2HHMatx7U5aqNCtglK9VSMgaB1CS8KFDmVoGMhQO0jIPNanb4f0P1i3dBdio9mOYjXw1nNraSepzX8iq9fuI9r8AoNDdqtFzM0QhhpSzG0y5B-0z4~0ASEPYmM4C2nuPu6xHiBMmLStEtAkdUwNfkG5CbpJGuAzsth7CcD7dCOUgRq8QT7K9OsSZWc1JtxDmEoxiw7oPEnu65~c7RrmXhf7zPZz7jQpv~pxY8AlpItHbsS9z5Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_41_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/42/image/image.jpg?Expires=1776732223&Signature=11CQRNz~xyLzQZw4p37xsdMdGIgRQqe2F-aapre8XTy4oOthPxbwKpRGjtJjJpvVXJRszDgm0Jj1TjZnhKddG38z7lX-bOlMk6sUfX7D46NXTS3V2uxg0RDxO21fH9tkPA3XUHASOUhSTW7i5lF6W59sZUUGXnAIY7ZRFZClu7P1MBJYVg9LRopUYOXPFd2WY0sXvoQ8~zDXflLX-mNpSpFBqckNxJZnVKQwaHw6zaCpsxU5DgHGb-47Q8toQmiQgnaF1xJ41jzi-hJppOMirsV62KVPuC12X0XxRCTF2XkNwU9QU2EkqLJYI0PNn9HCGYWGRya-8bsf9YxurSaRyg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000042.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 42,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/42/image/image.jpg?Expires=1776732223&Signature=11CQRNz~xyLzQZw4p37xsdMdGIgRQqe2F-aapre8XTy4oOthPxbwKpRGjtJjJpvVXJRszDgm0Jj1TjZnhKddG38z7lX-bOlMk6sUfX7D46NXTS3V2uxg0RDxO21fH9tkPA3XUHASOUhSTW7i5lF6W59sZUUGXnAIY7ZRFZClu7P1MBJYVg9LRopUYOXPFd2WY0sXvoQ8~zDXflLX-mNpSpFBqckNxJZnVKQwaHw6zaCpsxU5DgHGb-47Q8toQmiQgnaF1xJ41jzi-hJppOMirsV62KVPuC12X0XxRCTF2XkNwU9QU2EkqLJYI0PNn9HCGYWGRya-8bsf9YxurSaRyg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_42_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/43/image/image.jpg?Expires=1776732223&Signature=MbuUvWPcOFykNUJLN5aYy~aZDB0Dw2vcJco2XcTT4EyqyNa3ksBBoHa5utay~-wjIP0cuP7Jr3Rw6pWiRRDVJ-dBC-FH66G2aKRj3cJEj6wBtPl1TSwl~zo-DJ1adP3GGat~2ShE4SJCHaHAMTEYtUWcQTtJ2rZaqdi6LbUgLwgwqSMGPyyn0eNv7Y~IhImQe-RL3RY19s321SFGQnHX6JesOL5T6n413976IhzI--cdByNJJ1TGb3LTTiZJf43VwmiC34Mv8bvoUcSTVPcvyL3ZAeCjkfJYaFKDyPrXBMRIjht-2aoYmhnx5iPHa3RgAWbmsNgkYCBsOSk2nyG9YA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000043.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 43,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/43/image/image.jpg?Expires=1776732223&Signature=MbuUvWPcOFykNUJLN5aYy~aZDB0Dw2vcJco2XcTT4EyqyNa3ksBBoHa5utay~-wjIP0cuP7Jr3Rw6pWiRRDVJ-dBC-FH66G2aKRj3cJEj6wBtPl1TSwl~zo-DJ1adP3GGat~2ShE4SJCHaHAMTEYtUWcQTtJ2rZaqdi6LbUgLwgwqSMGPyyn0eNv7Y~IhImQe-RL3RY19s321SFGQnHX6JesOL5T6n413976IhzI--cdByNJJ1TGb3LTTiZJf43VwmiC34Mv8bvoUcSTVPcvyL3ZAeCjkfJYaFKDyPrXBMRIjht-2aoYmhnx5iPHa3RgAWbmsNgkYCBsOSk2nyG9YA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_43_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/44/image/image.jpg?Expires=1776732223&Signature=rsdO02EHQO0QvggoKZgtynqBD2~AMrcEXAjd8mYre7J5kUMSKQPCGHMCTI8SnIh9bZ~4NwL5z2ZU3tRKPFYtKU-VvCJh5ioQp96FanQSeY2PJqERWgy0wEaQFT3MwpoDe4RNXgKHtdnPw7poRx2JeL8DTcquy5T5U9MqcBXabnH6k3WsfmkPwv7jvpTarKjNfb2CfVNZHKDHeLvuucEndKQZ5JE2wh7VDy2eIX9KhKfU3Vblr7AMjxr4cEYq23voHzScXpqxVslgJecgc8arPfQs01FaYYwcYb4M3Hk39Jo5osHJwgDyXsOvKWTiiVVVd6456n0R0Kq-if7HkfvNUw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000044.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 44,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/44/image/image.jpg?Expires=1776732223&Signature=rsdO02EHQO0QvggoKZgtynqBD2~AMrcEXAjd8mYre7J5kUMSKQPCGHMCTI8SnIh9bZ~4NwL5z2ZU3tRKPFYtKU-VvCJh5ioQp96FanQSeY2PJqERWgy0wEaQFT3MwpoDe4RNXgKHtdnPw7poRx2JeL8DTcquy5T5U9MqcBXabnH6k3WsfmkPwv7jvpTarKjNfb2CfVNZHKDHeLvuucEndKQZ5JE2wh7VDy2eIX9KhKfU3Vblr7AMjxr4cEYq23voHzScXpqxVslgJecgc8arPfQs01FaYYwcYb4M3Hk39Jo5osHJwgDyXsOvKWTiiVVVd6456n0R0Kq-if7HkfvNUw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_44_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/45/image/image.jpg?Expires=1776732223&Signature=hlp1Yz7rdayg5~lHHI06m0nD2a3l9CFI0J16ZNDwMTe-jQh2LJDHPN8YBSFqeBj2HHlMKpC5sYbVdLmZBXX~T9eo~CmZ5BFfiKut-D-GPfZzMXgshUBkhslOKwCjrwUFroW0qgbu1eDOMr~ETUdUg-FbNbNm8sXfi3nrASO4VZrQhgJUaPDpD410Ox~QBp8c5-64LVhJJfo7yXujxMEgQux-swRnd1elIwT4ZZO6lWjlE-31d2h1LkLNj81lqczvFfdDzzjnOfv6zQDJ6Cfb4-hj3Zf0TZny-MG23ezHrfkJWzalQ4NasZeS5Yisd5lqEEaNJnxYvlP5QcPSam0RcA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000045.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 45,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/45/image/image.jpg?Expires=1776732223&Signature=hlp1Yz7rdayg5~lHHI06m0nD2a3l9CFI0J16ZNDwMTe-jQh2LJDHPN8YBSFqeBj2HHlMKpC5sYbVdLmZBXX~T9eo~CmZ5BFfiKut-D-GPfZzMXgshUBkhslOKwCjrwUFroW0qgbu1eDOMr~ETUdUg-FbNbNm8sXfi3nrASO4VZrQhgJUaPDpD410Ox~QBp8c5-64LVhJJfo7yXujxMEgQux-swRnd1elIwT4ZZO6lWjlE-31d2h1LkLNj81lqczvFfdDzzjnOfv6zQDJ6Cfb4-hj3Zf0TZny-MG23ezHrfkJWzalQ4NasZeS5Yisd5lqEEaNJnxYvlP5QcPSam0RcA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_45_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/46/image/image.jpg?Expires=1776732223&Signature=Geoq7RYkJYLrhqDLvHhadY7H9UO6gfVgZNYuIb8WQjMUG5WqVa4XpqzgFVnL4wfmySq-6Dl3IErmGxnJpsJk8dkpfDBg0fILmUUl0wMa7ZBf9uGpYuP9p4lEx5YED49ZUBKZzsYPvZqh6RET7piZwPTNvzhmhjRsGqT2yvZX5fIaIc6jU5fYDUtvPTlK8HbyDBR2D7LLxxpGXReWWMBVXU9jnqdnk~1VhWSfklpxEfkVOcxysmZWY5fhbprZvpZhN0aARXzGbaoFdtI0uFaspGVl89-mI5DatZ3ffq1aD4jczBGJngub3ISQKM0cc9lt1B5XIRfd74OLbN4o-tgMBg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000046.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 46,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/46/image/image.jpg?Expires=1776732223&Signature=Geoq7RYkJYLrhqDLvHhadY7H9UO6gfVgZNYuIb8WQjMUG5WqVa4XpqzgFVnL4wfmySq-6Dl3IErmGxnJpsJk8dkpfDBg0fILmUUl0wMa7ZBf9uGpYuP9p4lEx5YED49ZUBKZzsYPvZqh6RET7piZwPTNvzhmhjRsGqT2yvZX5fIaIc6jU5fYDUtvPTlK8HbyDBR2D7LLxxpGXReWWMBVXU9jnqdnk~1VhWSfklpxEfkVOcxysmZWY5fhbprZvpZhN0aARXzGbaoFdtI0uFaspGVl89-mI5DatZ3ffq1aD4jczBGJngub3ISQKM0cc9lt1B5XIRfd74OLbN4o-tgMBg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_46_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/47/image/image.jpg?Expires=1776732223&Signature=jLnCpTe3c~76xUfvWSbTgN3WnrQLvI70L4Q49zVng7Ubufp2JDN8Q3i2k5WeBHexi-I0ABW4gYpC3oAfTorKue1yK85JI6~bp7FbPmbzSylwmyTpD~uukpvxdnrPfI5BV6CP-vXuu24mhTh5-rHd3u0w4kZGm0a3r4fW5QwSfOVTcRZEz5iKsAYA2gCMJqvT~KGblLod0Ocm~niV2yqSPb6NUJ18nC6HbKa1Fl9FrgEcT2RyGzNCKvosxiK3JaBjC6X5Wb2ma~Ss1tR8S4pfaHfbgjE~znC5jAB0ylk3izvWIgJi7RmdsvCstSZBgrwoHblzMCtq0nZi-842aWwKoA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000047.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 47,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/47/image/image.jpg?Expires=1776732223&Signature=jLnCpTe3c~76xUfvWSbTgN3WnrQLvI70L4Q49zVng7Ubufp2JDN8Q3i2k5WeBHexi-I0ABW4gYpC3oAfTorKue1yK85JI6~bp7FbPmbzSylwmyTpD~uukpvxdnrPfI5BV6CP-vXuu24mhTh5-rHd3u0w4kZGm0a3r4fW5QwSfOVTcRZEz5iKsAYA2gCMJqvT~KGblLod0Ocm~niV2yqSPb6NUJ18nC6HbKa1Fl9FrgEcT2RyGzNCKvosxiK3JaBjC6X5Wb2ma~Ss1tR8S4pfaHfbgjE~znC5jAB0ylk3izvWIgJi7RmdsvCstSZBgrwoHblzMCtq0nZi-842aWwKoA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_47_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/48/image/image.jpg?Expires=1776732223&Signature=zCJ6wtxag3ZtyUy8Yzk7k-5tc49XcfqxI6rTNeL~aYLE8J7lGRthY~Tkah-u7UsVkGCVEtkzK~~dG6M26~MSq0zPvT52zBef6KISzZUgh2ypYMK1pDf3ENtNN8Xu~PmZ5YDAQdbD8vvKEFRja2bBzy6AIk6cW3Fl~XUrwKYMmd9wXO7kNFlJRRjg1cne72FzD5paoYjyRGFqN8Z5wggTccYAHCJbJAzLrPPvsTq9MFzJSfANhiMnSsDFH~qh02JS6W7i-okDWkn0ycshXLDPUyBRj5Q4uDY9oWcMLpxHE68JfGQYMJGBIoPptUZKUgaVlWd4DiHWChoku1pYuJuVxA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000048.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 48,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/48/image/image.jpg?Expires=1776732223&Signature=zCJ6wtxag3ZtyUy8Yzk7k-5tc49XcfqxI6rTNeL~aYLE8J7lGRthY~Tkah-u7UsVkGCVEtkzK~~dG6M26~MSq0zPvT52zBef6KISzZUgh2ypYMK1pDf3ENtNN8Xu~PmZ5YDAQdbD8vvKEFRja2bBzy6AIk6cW3Fl~XUrwKYMmd9wXO7kNFlJRRjg1cne72FzD5paoYjyRGFqN8Z5wggTccYAHCJbJAzLrPPvsTq9MFzJSfANhiMnSsDFH~qh02JS6W7i-okDWkn0ycshXLDPUyBRj5Q4uDY9oWcMLpxHE68JfGQYMJGBIoPptUZKUgaVlWd4DiHWChoku1pYuJuVxA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_48_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/49/image/image.jpg?Expires=1776732223&Signature=c4LJpGtzBMjRdN3wXHZFEh7qsj36iK58CudZugWItiXcDf1EPfgrvy86rwjTRk4mtZLr5KbnoRu6ZbU6hWyNOelR5EdXOtZ140acC73kTCOw-SOI-yCuD~~8RQFIeMw9foZOA1wLQawr35I93OCO1nn6IvDSrxZfdA-BJjvYJiCDpto1ybUvrXg15reUvnLwr-iFoiG8BmyYeUMqHGvj8~uN9CyemucTFAqduALnf9WnP~i9Bkcx5qw-SbttLGvjiH79We9JX02c1WqqwDxzIydsc2r4NG7IWBtGPyvyDPPNGBP-FGQrwR58uB~AHATad~w~ltoX0HmsbcktZCFc3w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000049.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 49,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/49/image/image.jpg?Expires=1776732223&Signature=c4LJpGtzBMjRdN3wXHZFEh7qsj36iK58CudZugWItiXcDf1EPfgrvy86rwjTRk4mtZLr5KbnoRu6ZbU6hWyNOelR5EdXOtZ140acC73kTCOw-SOI-yCuD~~8RQFIeMw9foZOA1wLQawr35I93OCO1nn6IvDSrxZfdA-BJjvYJiCDpto1ybUvrXg15reUvnLwr-iFoiG8BmyYeUMqHGvj8~uN9CyemucTFAqduALnf9WnP~i9Bkcx5qw-SbttLGvjiH79We9JX02c1WqqwDxzIydsc2r4NG7IWBtGPyvyDPPNGBP-FGQrwR58uB~AHATad~w~ltoX0HmsbcktZCFc3w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_49_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/50/image/image.jpg?Expires=1776732223&Signature=usS0EXjcgFabjPPst~L6SIRvNIbmLpLGUYaBA0Qv4bglds4eB7Ho8A0JieUUmp4IWUdwv4EtoXO0H-MK1K0DitZP7LQr8yMAFSdXjNs4iFFG7SdNZhxGjy3IutjoOcbIi4r4zdIuzL8pvOEO7fWz8-QUDfkCAMerl8TXlKKfvoAYxOO4LS~LlSWWQpSJ1b7gd4uaL8NLuAjnSAA9rInlRgNH3fFkJarMi5PAJPxr0tf-Lrgdaj3zkclQcKhcNjS7pi-01CXOtHaC93rMY1E75trf-z0RpWCoYwlVIwQXm4a-ba5zvfUKtjzcqyP44mwsr403T9wzZxeaw6Yh0KkDyg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000050.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 50,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/50/image/image.jpg?Expires=1776732223&Signature=usS0EXjcgFabjPPst~L6SIRvNIbmLpLGUYaBA0Qv4bglds4eB7Ho8A0JieUUmp4IWUdwv4EtoXO0H-MK1K0DitZP7LQr8yMAFSdXjNs4iFFG7SdNZhxGjy3IutjoOcbIi4r4zdIuzL8pvOEO7fWz8-QUDfkCAMerl8TXlKKfvoAYxOO4LS~LlSWWQpSJ1b7gd4uaL8NLuAjnSAA9rInlRgNH3fFkJarMi5PAJPxr0tf-Lrgdaj3zkclQcKhcNjS7pi-01CXOtHaC93rMY1E75trf-z0RpWCoYwlVIwQXm4a-ba5zvfUKtjzcqyP44mwsr403T9wzZxeaw6Yh0KkDyg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_50_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/51/image/image.jpg?Expires=1776732223&Signature=ELk-ol5lWQjbEYcPTDubP7AgKOXCDs6NlFn89JPYibhgRPOXhQI5Bj2t-Xp2djPziHxWytbBiSeIiZpCJFPFNRC~WvwQLOdgenJ-RHLgYjINPi2zJdls7Mvaj5X2I-uLaZxk3W3Bxt6iBLbHIiiYKCAZwjObWBgQhXrZM9GrG47hF9CuUkDUT5WkbhaV3tfQB6mzTsDAfx55hQd1qFIMwTQUZZjdiKsgXPfAOta~P0K8xrP4t-Ar3k7hQIZ0iTdc8~AnLTwC~n0fJ6wSpRitVu82zMrox0OGM~WsUoYmGnlc-6sbEv-KvtB5hic18cLfZX6efiGiQEKNFmSBgElFBQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000051.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 51,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/51/image/image.jpg?Expires=1776732223&Signature=ELk-ol5lWQjbEYcPTDubP7AgKOXCDs6NlFn89JPYibhgRPOXhQI5Bj2t-Xp2djPziHxWytbBiSeIiZpCJFPFNRC~WvwQLOdgenJ-RHLgYjINPi2zJdls7Mvaj5X2I-uLaZxk3W3Bxt6iBLbHIiiYKCAZwjObWBgQhXrZM9GrG47hF9CuUkDUT5WkbhaV3tfQB6mzTsDAfx55hQd1qFIMwTQUZZjdiKsgXPfAOta~P0K8xrP4t-Ar3k7hQIZ0iTdc8~AnLTwC~n0fJ6wSpRitVu82zMrox0OGM~WsUoYmGnlc-6sbEv-KvtB5hic18cLfZX6efiGiQEKNFmSBgElFBQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_51_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/52/image/image.jpg?Expires=1776732223&Signature=bISMz62HcchhuSdMSjZPR7XLqJ3unz~PruDPjAe~JVEK7DX6Bcig0RcMWXZ0PDhvi2Di0fmivtbEhHwodSvt6vtVELjpFQZA9gIBUnD7MXTydN7icNmcLQszYs-Bhif~V2Dgdl4gEaW78N0CM277sLoWV~9LDbne1dcz3AGassXZNOEnyRY0UkyJxt4-b1wCFNiastOYd0xW1ItXiHQntU2T224whby9JFc-e8s~DRGNz7VCRSlfUqNJVjL5LLGEfJGSGAZmlfsFlC~nhlNO2vgv8whjGqXdXaHZpMozMyTYSMVsufgCO69kW2kL~1LIg36i3S0SE93Yd9C3sjGDUw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000052.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 52,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/52/image/image.jpg?Expires=1776732223&Signature=bISMz62HcchhuSdMSjZPR7XLqJ3unz~PruDPjAe~JVEK7DX6Bcig0RcMWXZ0PDhvi2Di0fmivtbEhHwodSvt6vtVELjpFQZA9gIBUnD7MXTydN7icNmcLQszYs-Bhif~V2Dgdl4gEaW78N0CM277sLoWV~9LDbne1dcz3AGassXZNOEnyRY0UkyJxt4-b1wCFNiastOYd0xW1ItXiHQntU2T224whby9JFc-e8s~DRGNz7VCRSlfUqNJVjL5LLGEfJGSGAZmlfsFlC~nhlNO2vgv8whjGqXdXaHZpMozMyTYSMVsufgCO69kW2kL~1LIg36i3S0SE93Yd9C3sjGDUw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_52_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/53/image/image.jpg?Expires=1776732223&Signature=gUo0FLy15cgIOcfLfTSdb9EOW4WC2vq-HPGJ-WhdZLVGTUcMJXOM-PtwVtGDjwKLzCoGsvbb7JjiEzOdOLghD8ehA5FTbgHXAbKUXvZYhoU4LWj2QbbyM2gMkDzBXQjKIDo~NGezmwqOh~yiITmKl4rGuHCMGmyVsRhUhJAZnoUh3t3L~nYzmCUTzpwlQmYde-~~toeA1UqO1ynuBBuwY55r~6Bh1TywnfzMiOVK7yFlerdkK~kfJVH8qX8v40juU5Dw3QpOqG21Srp631zNT5dRdj9bXsDITrqUEkBVpaxjwjUUhuDoxDbf8fneB81LjJEGhXyttgXz45Y~MP7NpQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000053.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 53,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/53/image/image.jpg?Expires=1776732223&Signature=gUo0FLy15cgIOcfLfTSdb9EOW4WC2vq-HPGJ-WhdZLVGTUcMJXOM-PtwVtGDjwKLzCoGsvbb7JjiEzOdOLghD8ehA5FTbgHXAbKUXvZYhoU4LWj2QbbyM2gMkDzBXQjKIDo~NGezmwqOh~yiITmKl4rGuHCMGmyVsRhUhJAZnoUh3t3L~nYzmCUTzpwlQmYde-~~toeA1UqO1ynuBBuwY55r~6Bh1TywnfzMiOVK7yFlerdkK~kfJVH8qX8v40juU5Dw3QpOqG21Srp631zNT5dRdj9bXsDITrqUEkBVpaxjwjUUhuDoxDbf8fneB81LjJEGhXyttgXz45Y~MP7NpQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_53_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/54/image/image.jpg?Expires=1776732223&Signature=XD19d18MCO~IaqV0auDa1gSZQqt2pGOCcCr8VqpQSQwGWSsdcC63pD48dKVWsVMCCnjCy6XqWG9MdBnL2UnXrHk7XsYDLieWvui6p2WMpfes2ISQIMcMRqe349B8QsMWjocRlMGbpNVECEgPEN8G1Q1RpJLc~uR9fcTAQR7sUQv2zkWTihHVQob2GBeQPg0e6FMWvpv8SH24zNcNv9jrYipWXu6pu9PrVbxzXr1MOGMIkrBkdTy80BLixiKfPlbmRx5jUsz-24pZKls~w7BObEq5SLs6idCnbximKDONht5H2Yl6JpGT-TPCtDV-f2arE4hAVSUzG0o-h2Lacs6whg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000054.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 54,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/54/image/image.jpg?Expires=1776732223&Signature=XD19d18MCO~IaqV0auDa1gSZQqt2pGOCcCr8VqpQSQwGWSsdcC63pD48dKVWsVMCCnjCy6XqWG9MdBnL2UnXrHk7XsYDLieWvui6p2WMpfes2ISQIMcMRqe349B8QsMWjocRlMGbpNVECEgPEN8G1Q1RpJLc~uR9fcTAQR7sUQv2zkWTihHVQob2GBeQPg0e6FMWvpv8SH24zNcNv9jrYipWXu6pu9PrVbxzXr1MOGMIkrBkdTy80BLixiKfPlbmRx5jUsz-24pZKls~w7BObEq5SLs6idCnbximKDONht5H2Yl6JpGT-TPCtDV-f2arE4hAVSUzG0o-h2Lacs6whg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_54_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/55/image/image.jpg?Expires=1776732223&Signature=z1cgq8iCmtBCc1gNccV8hBXyewnY8fxGW47NxelRYc9gRVHdSqLmPij76fdKib-ZcwYzNeXL60RUGnTV7PeOjnNzS1W5k~LQDAQ1Bai3YJgE0j5icOwd8LXgd53icO9TIdGqdu0X~s1wn4~InXxM~q3kz82FRFqIBHOlOhO0TTxkI-SJ2uBRq3ZkowE2ARdrBSwWb9Kp4K5dMC48Z-mPM5JVefnAAfgMUVKVbAkkHuZBZBu7gs1-2btcfgKrTJG~~u7seFgRwN2eYBV7L2vVRbCYr7tsSHrw2wNJjuNinlrLpVzZZRyMuuAKq84uRAq5tVq6zfpStAGTgAGJEPfHXw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000055.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 55,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/55/image/image.jpg?Expires=1776732223&Signature=z1cgq8iCmtBCc1gNccV8hBXyewnY8fxGW47NxelRYc9gRVHdSqLmPij76fdKib-ZcwYzNeXL60RUGnTV7PeOjnNzS1W5k~LQDAQ1Bai3YJgE0j5icOwd8LXgd53icO9TIdGqdu0X~s1wn4~InXxM~q3kz82FRFqIBHOlOhO0TTxkI-SJ2uBRq3ZkowE2ARdrBSwWb9Kp4K5dMC48Z-mPM5JVefnAAfgMUVKVbAkkHuZBZBu7gs1-2btcfgKrTJG~~u7seFgRwN2eYBV7L2vVRbCYr7tsSHrw2wNJjuNinlrLpVzZZRyMuuAKq84uRAq5tVq6zfpStAGTgAGJEPfHXw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_55_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/56/image/image.jpg?Expires=1776732223&Signature=olJX4eymdfztkxZGtmj27gm3CKIlxh36RvkFR0O0m4P6wuKMcu4GsLtRyRKPCBLatdROVafZplXmAEUq2jvpMSnmmNIj8OOO5r9eA6jOXrO9I9JuA94E1R3vzGfNkFK8Wj0II4gos3A9ddTFxrp4FEXzfyA2FuFrBiyZDm-tIvq9Rtq7KTv8Uia-quRlUAkjYn89fZdrpazIccP6P5-kcBgx4z7KQPQPAaZi-7ZlhQUDFL-sZvarmUWJNE8LMtl87gChJVZuZSYHPKFuLKCV1IprRb7Bq7UmF5E2YdtduHiHYoccr3nnZcUb32vTFEPCMGrEQR2PtBBbAKFgUOIfPw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000056.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 56,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/56/image/image.jpg?Expires=1776732223&Signature=olJX4eymdfztkxZGtmj27gm3CKIlxh36RvkFR0O0m4P6wuKMcu4GsLtRyRKPCBLatdROVafZplXmAEUq2jvpMSnmmNIj8OOO5r9eA6jOXrO9I9JuA94E1R3vzGfNkFK8Wj0II4gos3A9ddTFxrp4FEXzfyA2FuFrBiyZDm-tIvq9Rtq7KTv8Uia-quRlUAkjYn89fZdrpazIccP6P5-kcBgx4z7KQPQPAaZi-7ZlhQUDFL-sZvarmUWJNE8LMtl87gChJVZuZSYHPKFuLKCV1IprRb7Bq7UmF5E2YdtduHiHYoccr3nnZcUb32vTFEPCMGrEQR2PtBBbAKFgUOIfPw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_56_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/57/image/image.jpg?Expires=1776732223&Signature=oYnFt7WvojPsRHWe451W5SZz9QoKcQXJFNYgpYUVdSaDVQmJ8roAKW5nNKeSaHYEqxCwqXki765DI2T57fHlbTrbsImFPpzomujfAS5FHV--dxcpKFsTQIIsWhJiPOxo0Taaa3n-GcIF89rPzfC1IPrHLTPb~yoJ~fxUSFkE8AYuiGvP1UAhfJ0v6XLrNX8HVLEtSx8ipYi1AWxIPaY5gUqN-JsYhgG8Ud12q56Ha2te3~O6F3iDKQIjPdz11BWw8o96QAp2b6PJE9Opdu8Wwg4foWpRSLy9E3pJZ5lkKTerwvFN8WGjdf38WB0TDT-Xz5m4LcBxDBCvXT-n53dV6Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000057.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 57,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/57/image/image.jpg?Expires=1776732223&Signature=oYnFt7WvojPsRHWe451W5SZz9QoKcQXJFNYgpYUVdSaDVQmJ8roAKW5nNKeSaHYEqxCwqXki765DI2T57fHlbTrbsImFPpzomujfAS5FHV--dxcpKFsTQIIsWhJiPOxo0Taaa3n-GcIF89rPzfC1IPrHLTPb~yoJ~fxUSFkE8AYuiGvP1UAhfJ0v6XLrNX8HVLEtSx8ipYi1AWxIPaY5gUqN-JsYhgG8Ud12q56Ha2te3~O6F3iDKQIjPdz11BWw8o96QAp2b6PJE9Opdu8Wwg4foWpRSLy9E3pJZ5lkKTerwvFN8WGjdf38WB0TDT-Xz5m4LcBxDBCvXT-n53dV6Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_57_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/58/image/image.jpg?Expires=1776732223&Signature=pIBh4wdaJC50fRRaxlonUSKPekHXlL~vx6B7ZRXjKcSgDofX1BkNtNafryX1QJ~9ULS1PmKnIR14UOLPRJ5UXJsbsb4Ok7GFeZb~G5HW7YAglQ5UOmF7Xhf61SNQ8uEg4zml5uRob0x0j2i7AbRw4aBsF73C58Fd0MuTb28QWxrb5M7XXLi-~MUR0YFnFuZ4MxjArn14rleKQGoIaB-kmTaslCGGHxMevwjp4EKKoqsqbYSP~R8X6oUg~8zLjOUv57OLYadS7MqjqEwJOPfwAlitag5SfOTUwRNNbKCO0QlbjuUX0OwGmMvyy5a1Mp-MJblas09Yo7kRPS5YIeCZsg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000058.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 58,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/58/image/image.jpg?Expires=1776732223&Signature=pIBh4wdaJC50fRRaxlonUSKPekHXlL~vx6B7ZRXjKcSgDofX1BkNtNafryX1QJ~9ULS1PmKnIR14UOLPRJ5UXJsbsb4Ok7GFeZb~G5HW7YAglQ5UOmF7Xhf61SNQ8uEg4zml5uRob0x0j2i7AbRw4aBsF73C58Fd0MuTb28QWxrb5M7XXLi-~MUR0YFnFuZ4MxjArn14rleKQGoIaB-kmTaslCGGHxMevwjp4EKKoqsqbYSP~R8X6oUg~8zLjOUv57OLYadS7MqjqEwJOPfwAlitag5SfOTUwRNNbKCO0QlbjuUX0OwGmMvyy5a1Mp-MJblas09Yo7kRPS5YIeCZsg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_58_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/59/image/image.jpg?Expires=1776732223&Signature=eFjor7isMRrtb5POLPOrBz4Asys6OHdfCtyfQrsDS0JoHPBUF3z0rpTjzZtVF~dV9CKnRKYRwTI-jC8A2t2ielMwm6xzrIWuGV6WV6C0Gn2PCFCcKrlQelcYXpthy01fL35yLx-ImEOoevIsnyhN79Kr2fisFDgKvuedrVRSfU-1ZTh5Jq23SMg9afVv03QeskHLPTl239mnVkPOWpOseb-jK8qyj5pZo3VhKLBuC3kPMuZvImhMXOobCv1DW4IQ-bCy0FWI9Tm-YC3I-4xuI~vB0WoisKTcg72VFtkV8N4839WvPC1gHxrWWOq96qNpql90~L3rn6Q9K7ZFTJ0PJQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000059.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 59,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/59/image/image.jpg?Expires=1776732223&Signature=eFjor7isMRrtb5POLPOrBz4Asys6OHdfCtyfQrsDS0JoHPBUF3z0rpTjzZtVF~dV9CKnRKYRwTI-jC8A2t2ielMwm6xzrIWuGV6WV6C0Gn2PCFCcKrlQelcYXpthy01fL35yLx-ImEOoevIsnyhN79Kr2fisFDgKvuedrVRSfU-1ZTh5Jq23SMg9afVv03QeskHLPTl239mnVkPOWpOseb-jK8qyj5pZo3VhKLBuC3kPMuZvImhMXOobCv1DW4IQ-bCy0FWI9Tm-YC3I-4xuI~vB0WoisKTcg72VFtkV8N4839WvPC1gHxrWWOq96qNpql90~L3rn6Q9K7ZFTJ0PJQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_59_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/60/image/image.jpg?Expires=1776732223&Signature=tFDApBbUbJYQXge94G0X4p3qH2KCS1RXKyYZ65oZBsyf5goljrLshF-Ott0ZUMQ819Zqs2eFXZSO7pWVjAlIUZn~Gd0DdVeTGdynJ30gNdgOOeXQYuP46-H79ERsaCyeqzDRe28aur36HVPqTUoH2h5sx5PuIDynyHQxugM9i9QUOBxD8Xe6qiuS6j76naxl0-gCKe8ov9LzV72~S2Byb30cVb9vchmPKW18CGOi4Ci4spFp-ZPNtnd1UgJuP4kGjmkqQShTdJSA9jw8u3uQTp7XUJYCf2e8HeGINngxomn9e3QYp5MfRvda8gMWh1w881rbto7XWtSaUs3FGFNt0w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000060.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 60,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/60/image/image.jpg?Expires=1776732223&Signature=tFDApBbUbJYQXge94G0X4p3qH2KCS1RXKyYZ65oZBsyf5goljrLshF-Ott0ZUMQ819Zqs2eFXZSO7pWVjAlIUZn~Gd0DdVeTGdynJ30gNdgOOeXQYuP46-H79ERsaCyeqzDRe28aur36HVPqTUoH2h5sx5PuIDynyHQxugM9i9QUOBxD8Xe6qiuS6j76naxl0-gCKe8ov9LzV72~S2Byb30cVb9vchmPKW18CGOi4Ci4spFp-ZPNtnd1UgJuP4kGjmkqQShTdJSA9jw8u3uQTp7XUJYCf2e8HeGINngxomn9e3QYp5MfRvda8gMWh1w881rbto7XWtSaUs3FGFNt0w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_60_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/61/image/image.jpg?Expires=1776732223&Signature=r8v60wBRGObs8Qi13QE~5rs8QPT0G0NdWgufwxK-1mfGHE~zZoU2GXkTUaay31QwtCg9Ed6YX6tY~Ime3A9drECNzahULwO2h9JkY6yoCdEJ9sy9NjYdQskJrscOyRgVKId-HFV4lyOMoLigRHHdKeAowZHiEkYPGcFfpqNvIN0Kz92MGVroqpNWsujskOk4pa6FfHKxPqxVBni2jWQ4ARRIUsDut5QlHBVhn1JmFUaKtnjT8Yn3ENTO0ko98tSvKpcOl4kgsNcF~JA2-1yFC-p70bTTKU0Xe-jeJ3OxHqWE58ZAmi3R~ZFtMtujMT6m8TUALcEJQHC6sNmGaeElBQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000061.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 61,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/61/image/image.jpg?Expires=1776732223&Signature=r8v60wBRGObs8Qi13QE~5rs8QPT0G0NdWgufwxK-1mfGHE~zZoU2GXkTUaay31QwtCg9Ed6YX6tY~Ime3A9drECNzahULwO2h9JkY6yoCdEJ9sy9NjYdQskJrscOyRgVKId-HFV4lyOMoLigRHHdKeAowZHiEkYPGcFfpqNvIN0Kz92MGVroqpNWsujskOk4pa6FfHKxPqxVBni2jWQ4ARRIUsDut5QlHBVhn1JmFUaKtnjT8Yn3ENTO0ko98tSvKpcOl4kgsNcF~JA2-1yFC-p70bTTKU0Xe-jeJ3OxHqWE58ZAmi3R~ZFtMtujMT6m8TUALcEJQHC6sNmGaeElBQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_61_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/62/image/image.jpg?Expires=1776732223&Signature=H-XaCmJgnAkye8dEKOzRu-WND-ILx3IDwsbFiwh~9aIUZgqSKvlmAL3Z8nN7elutVv9WTwJbwdl73VsO2G0V73FvA1HaDsw8eh42SAJRxv-A4QM1LjL6eNSSvZOolq8kX8t8DNv0opmwhSrv~rx1XeytRmC5deiIOMMupMOlgWJP96dCbwjF3Fd3UApggTuA~TxGRLQV5~HeWWV2iBRIT8m4dYy1taELe7gF5ZDOT9iFGLEDvppQH8ODOM1OzRFYV2MboMlZoo-0zChMRSslms1zOGp9UFXuWD2fQBREyKkRIxjx1WEme2fQryqNcByeWhdURZf16HIFiKaeNNlQmw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000062.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 62,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/62/image/image.jpg?Expires=1776732223&Signature=H-XaCmJgnAkye8dEKOzRu-WND-ILx3IDwsbFiwh~9aIUZgqSKvlmAL3Z8nN7elutVv9WTwJbwdl73VsO2G0V73FvA1HaDsw8eh42SAJRxv-A4QM1LjL6eNSSvZOolq8kX8t8DNv0opmwhSrv~rx1XeytRmC5deiIOMMupMOlgWJP96dCbwjF3Fd3UApggTuA~TxGRLQV5~HeWWV2iBRIT8m4dYy1taELe7gF5ZDOT9iFGLEDvppQH8ODOM1OzRFYV2MboMlZoo-0zChMRSslms1zOGp9UFXuWD2fQBREyKkRIxjx1WEme2fQryqNcByeWhdURZf16HIFiKaeNNlQmw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_62_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/63/image/image.jpg?Expires=1776732223&Signature=14X8Fql~qZAHXjvz3KwKZNUwGy3hux8m1AZ1LgLjgoJ6oSWjEu5rEesIiWCC8axEln6NcTvKY0Znb212aG2uRhKaSceIdySRno7WSLGM5L8PNMj12fWrNGbHb2N3YwH0OIY6M~P0dUjjDu9DFpKx77waZVNSLl7LHhJHo05jTT1Gfyw9VugynjZKtr~DuExUnY8LKCHiuCVQHMHeAP9q8sdwauZWA6pZ0F6YAgi-9NOc~67QMeiWyK89HNOd6SOTI1WGX-kZPf7dLhYiCxlsGkx2-vicJ5tSFXVk19-A8ALmeTK2g1eFuEESKZddnpJiAJLJXG-Z5l0jLGjrXTcNSg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000063.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 63,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/63/image/image.jpg?Expires=1776732223&Signature=14X8Fql~qZAHXjvz3KwKZNUwGy3hux8m1AZ1LgLjgoJ6oSWjEu5rEesIiWCC8axEln6NcTvKY0Znb212aG2uRhKaSceIdySRno7WSLGM5L8PNMj12fWrNGbHb2N3YwH0OIY6M~P0dUjjDu9DFpKx77waZVNSLl7LHhJHo05jTT1Gfyw9VugynjZKtr~DuExUnY8LKCHiuCVQHMHeAP9q8sdwauZWA6pZ0F6YAgi-9NOc~67QMeiWyK89HNOd6SOTI1WGX-kZPf7dLhYiCxlsGkx2-vicJ5tSFXVk19-A8ALmeTK2g1eFuEESKZddnpJiAJLJXG-Z5l0jLGjrXTcNSg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_63_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/64/image/image.jpg?Expires=1776732223&Signature=w3diL4YebMakQQseo0SSvna1OJApbnnAj7VUio5mE5hsI8PfqcCa2YrXe7vjK0YVN7RK9GPG40~0UousZji72Y9uwHvyDoBQkp-wr3qC4yaelYIz7brc8nT351Fdknrk3kjCeESH~I54-13jEIEYgdLyy~9nq13wgmkx0bdceFsoJql6DPuVRCZlTUe5hBaNMplMeTZvCarii3YMVdwAd2tzkRTMYDmYdWI1Ifwbpuio2ZLVhF9d1GSQNEdLi3u7qIP3QmkboJe2~co6lsX7SuEQDWSe3~C~oziCMoUcu~HSDtpqlgZKVmG3~Nia1WVg~Na2xVUDQY33X-zBJtq47g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000064.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 64,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/64/image/image.jpg?Expires=1776732223&Signature=w3diL4YebMakQQseo0SSvna1OJApbnnAj7VUio5mE5hsI8PfqcCa2YrXe7vjK0YVN7RK9GPG40~0UousZji72Y9uwHvyDoBQkp-wr3qC4yaelYIz7brc8nT351Fdknrk3kjCeESH~I54-13jEIEYgdLyy~9nq13wgmkx0bdceFsoJql6DPuVRCZlTUe5hBaNMplMeTZvCarii3YMVdwAd2tzkRTMYDmYdWI1Ifwbpuio2ZLVhF9d1GSQNEdLi3u7qIP3QmkboJe2~co6lsX7SuEQDWSe3~C~oziCMoUcu~HSDtpqlgZKVmG3~Nia1WVg~Na2xVUDQY33X-zBJtq47g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_64_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/65/image/image.jpg?Expires=1776732223&Signature=SQbZgdGAUxu0cb197IvUJsJACgY-cohuJzfzyt~ZpF6q0tg~x-lVTpfz5vF~WMeA3Hz2cP3j~Waw1VzQ0SMz5iHSJyfsVfDEaXGd7-NPGD8PT9-2NMF1sMjYea8cLEngqOFEwAxlH6pNk0MdnizzdpziKerSdDCZd69RQ~i2scCF2TMU5eyxreR1QtvYVnW6HN-l5RICuaQQwBDDbT3xvzz8FgJuM4t6NuOzbmklkbKRjja35LuuaO554NEIybpjoTvk3sSwSO0kxUa6jgykAJzuNbeZ-cmH9k68M9Js2TGPDJ-IkdWRJgTywMSdzTi3nSveN1Dqn3gpLmbIsj5mdQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000065.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 65,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/65/image/image.jpg?Expires=1776732223&Signature=SQbZgdGAUxu0cb197IvUJsJACgY-cohuJzfzyt~ZpF6q0tg~x-lVTpfz5vF~WMeA3Hz2cP3j~Waw1VzQ0SMz5iHSJyfsVfDEaXGd7-NPGD8PT9-2NMF1sMjYea8cLEngqOFEwAxlH6pNk0MdnizzdpziKerSdDCZd69RQ~i2scCF2TMU5eyxreR1QtvYVnW6HN-l5RICuaQQwBDDbT3xvzz8FgJuM4t6NuOzbmklkbKRjja35LuuaO554NEIybpjoTvk3sSwSO0kxUa6jgykAJzuNbeZ-cmH9k68M9Js2TGPDJ-IkdWRJgTywMSdzTi3nSveN1Dqn3gpLmbIsj5mdQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_65_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/66/image/image.jpg?Expires=1776732223&Signature=lG2IEXcRGev0GbbTq7oavILAMjHrmXOB8M9YZp9SDTkJe8HhIum2uH7Iqte-ajFOUxafvMjP9HXM3TAODg1qAtTzQa-ZFJ9~fWWeho4PIkA0QgxQn1l7kF3wf6N3lCATErfjbSFfW-ts8z37VoAbBzSkNcU0WAaUr6GPQX8tRjcKNgGXHONqapvUKz9NQoJpLDc8srVE45-tS4vS~rNO~bCrbYqI0ouzbUpnubRumUlzKgGbQGiLOgFZgEll29oq41V2~akkkgzFgpsle4i5sk2YEq~rsQo41oG7RBWqIiFeQDiWt8HuKVhCl2At6~d-k7hTCwqo-hK7qp6WKe9YmA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000066.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 66,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/66/image/image.jpg?Expires=1776732223&Signature=lG2IEXcRGev0GbbTq7oavILAMjHrmXOB8M9YZp9SDTkJe8HhIum2uH7Iqte-ajFOUxafvMjP9HXM3TAODg1qAtTzQa-ZFJ9~fWWeho4PIkA0QgxQn1l7kF3wf6N3lCATErfjbSFfW-ts8z37VoAbBzSkNcU0WAaUr6GPQX8tRjcKNgGXHONqapvUKz9NQoJpLDc8srVE45-tS4vS~rNO~bCrbYqI0ouzbUpnubRumUlzKgGbQGiLOgFZgEll29oq41V2~akkkgzFgpsle4i5sk2YEq~rsQo41oG7RBWqIiFeQDiWt8HuKVhCl2At6~d-k7hTCwqo-hK7qp6WKe9YmA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_66_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/67/image/image.jpg?Expires=1776732223&Signature=X1wSKpOzaG3limjdExTETinQHSHWxKCvRKAwhj1Fd0oJYWmw4VqA1ROHQN0I3xPxaEOO5Bs9ru4nKgPxySgBQHrOfxNc3EjBVzkoU4F6XETiurbiLQy9poJAdNkKiFzWUwo0ykWxD6CSYRci-qTdsQ0yzYhx3C0q56w4d0l-QMz8YjM1VpKuesuGJ2GKlq~HRC~f~i53paMu2hOQUmwKriTKje0mXOD-PgdJW-IzEByRMF8HSzMoHKI3baG89ogB6tPxfSZYUe9wmksapfjMIv7BbI3xdCmFSlOICwp92qVhmE2t0GrY8YRIeI8XJUup9xt8KN3IQyRTu39nJd4QjA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000067.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 67,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/67/image/image.jpg?Expires=1776732223&Signature=X1wSKpOzaG3limjdExTETinQHSHWxKCvRKAwhj1Fd0oJYWmw4VqA1ROHQN0I3xPxaEOO5Bs9ru4nKgPxySgBQHrOfxNc3EjBVzkoU4F6XETiurbiLQy9poJAdNkKiFzWUwo0ykWxD6CSYRci-qTdsQ0yzYhx3C0q56w4d0l-QMz8YjM1VpKuesuGJ2GKlq~HRC~f~i53paMu2hOQUmwKriTKje0mXOD-PgdJW-IzEByRMF8HSzMoHKI3baG89ogB6tPxfSZYUe9wmksapfjMIv7BbI3xdCmFSlOICwp92qVhmE2t0GrY8YRIeI8XJUup9xt8KN3IQyRTu39nJd4QjA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_67_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/68/image/image.jpg?Expires=1776732223&Signature=AMNCTXNkELjhg6laLLhJfj0AYLYyKx8K35YX-s3iWQxzK8FBRHqOG2ffRO-IQzViHiSh08g8AGgJaEwMJ8FdsGg6rjuzGHVgliVIAkpNZhZs0V9TXihCARxDCpMt9osZfv2tpDqdyYGqxTHo7nNaB7XI69MLkQrFXyvGHBhyEQWRroRggwsgNgym~3iwjw3gLj~HUbNs9lWl1yS0t~LP~OgWqoBqNnG5F0v~pHbmXH5CEnHYwjGJyCYB1QJcH0Bn9OJYtIuWZs22GM9BzJc9SXbno4u5xxPFipGJWk8Kd9E2dHCiosETJv5viud9vSJhBaInBsY00xIcYiJHEnnPiQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000068.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 68,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/68/image/image.jpg?Expires=1776732223&Signature=AMNCTXNkELjhg6laLLhJfj0AYLYyKx8K35YX-s3iWQxzK8FBRHqOG2ffRO-IQzViHiSh08g8AGgJaEwMJ8FdsGg6rjuzGHVgliVIAkpNZhZs0V9TXihCARxDCpMt9osZfv2tpDqdyYGqxTHo7nNaB7XI69MLkQrFXyvGHBhyEQWRroRggwsgNgym~3iwjw3gLj~HUbNs9lWl1yS0t~LP~OgWqoBqNnG5F0v~pHbmXH5CEnHYwjGJyCYB1QJcH0Bn9OJYtIuWZs22GM9BzJc9SXbno4u5xxPFipGJWk8Kd9E2dHCiosETJv5viud9vSJhBaInBsY00xIcYiJHEnnPiQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_68_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/69/image/image.jpg?Expires=1776732223&Signature=E8iCiTQwN9TqFQVdCL33oRmAe-WvXHOqqNXnUwRJhJA0isgF5NILlhGAsrvmxGNwrfLHifWu2ma9oeozf7ffkZvr4VWeyWLHEvBCotXjHiFZNz9622dzhfoy4lXrQ8dU1dW~zMaOPUnktp69fHXbCYmmSKEzmqZFfD7j64-kwnmDKQl05pE9C20Mg2TnB55UqFyXJJM5-EDGRGfRvxSWyVXq3YQC5d8~C1mfnQtUIdjuybee2giuJmDyTuf~ExgJAXzdnhe5TzJX~knj1ns95NpwzHA1dHcHRbYwc1kARMBwtqoqzxWprqJyj9IjVN4f5DCs1CYJW1XtP6HtnSricQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000069.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 69,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/69/image/image.jpg?Expires=1776732223&Signature=E8iCiTQwN9TqFQVdCL33oRmAe-WvXHOqqNXnUwRJhJA0isgF5NILlhGAsrvmxGNwrfLHifWu2ma9oeozf7ffkZvr4VWeyWLHEvBCotXjHiFZNz9622dzhfoy4lXrQ8dU1dW~zMaOPUnktp69fHXbCYmmSKEzmqZFfD7j64-kwnmDKQl05pE9C20Mg2TnB55UqFyXJJM5-EDGRGfRvxSWyVXq3YQC5d8~C1mfnQtUIdjuybee2giuJmDyTuf~ExgJAXzdnhe5TzJX~knj1ns95NpwzHA1dHcHRbYwc1kARMBwtqoqzxWprqJyj9IjVN4f5DCs1CYJW1XtP6HtnSricQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_69_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/70/image/image.jpg?Expires=1776732223&Signature=OqXtpsSjk-FLkOmhbEsSCyJgfGHXejreFRP4OLaGhQ~Fy5PV6H0~9ioWp0-bYUj2nbPaSIvvAvZDmYX7zFlPCIcOCUx4uyI1O3ZvBDxoF~C1B1PSiBoCDa~V8ojXrVsXYxBH5mt0fhldJgHaU6cRvqwk9G3yk-PSVaphyKLRi6qj~UjWSeykXoqmgSjbBF49V4MEewclpeJdcpHUaUfZCjlsmSB~c7h6GqmHIgJWNrXim9sy-M3U42WrcgnOTGEfxgGVy2cIHUzsIboY8Om5J-PHv0WPC3sKeYK~D4X6JLUjEStcfq41qiAtk1yOkYuY-8yvMlkjcJnx3YYB4Gj~xg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000070.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 70,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/70/image/image.jpg?Expires=1776732223&Signature=OqXtpsSjk-FLkOmhbEsSCyJgfGHXejreFRP4OLaGhQ~Fy5PV6H0~9ioWp0-bYUj2nbPaSIvvAvZDmYX7zFlPCIcOCUx4uyI1O3ZvBDxoF~C1B1PSiBoCDa~V8ojXrVsXYxBH5mt0fhldJgHaU6cRvqwk9G3yk-PSVaphyKLRi6qj~UjWSeykXoqmgSjbBF49V4MEewclpeJdcpHUaUfZCjlsmSB~c7h6GqmHIgJWNrXim9sy-M3U42WrcgnOTGEfxgGVy2cIHUzsIboY8Om5J-PHv0WPC3sKeYK~D4X6JLUjEStcfq41qiAtk1yOkYuY-8yvMlkjcJnx3YYB4Gj~xg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_70_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/71/image/image.jpg?Expires=1776732223&Signature=LgZcs6LdsR~gWpcZQsUVuokiQd5zNrcGVXsZumIVTJAq2h3CX-K~qWKyMxTyR7RDB-SBJ0LDSQtsirJldrHE1-Jf9jeN4pmUK9dbCxQsmo9mNu0q08BANC1kVX3o4X69tu-wgvsAhKSj8ivtvbCBRXl2NRnI8v3R83IaoXB6u67wXleGV13-X58U181Jox18Fwnf7HAvIHYBN54GsT26d8yYZqlM9He5AbSdGRxs5tJL3mGGjPWka7o9P28Aph1GHwS~Anpr1EpsZ1v-4Evd69Wx6w8C70Ew~xTXpC0KZ87-DAN7WeVUZBle9sOfD8uo0qU1T4gtZ~95bZG~d34xIw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000071.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 71,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/71/image/image.jpg?Expires=1776732223&Signature=LgZcs6LdsR~gWpcZQsUVuokiQd5zNrcGVXsZumIVTJAq2h3CX-K~qWKyMxTyR7RDB-SBJ0LDSQtsirJldrHE1-Jf9jeN4pmUK9dbCxQsmo9mNu0q08BANC1kVX3o4X69tu-wgvsAhKSj8ivtvbCBRXl2NRnI8v3R83IaoXB6u67wXleGV13-X58U181Jox18Fwnf7HAvIHYBN54GsT26d8yYZqlM9He5AbSdGRxs5tJL3mGGjPWka7o9P28Aph1GHwS~Anpr1EpsZ1v-4Evd69Wx6w8C70Ew~xTXpC0KZ87-DAN7WeVUZBle9sOfD8uo0qU1T4gtZ~95bZG~d34xIw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_71_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/72/image/image.jpg?Expires=1776732223&Signature=un4511W7Y7AHyRAKFaQG3GzGh4cToEKWef-j25Ea7nXsCMoHXr1DdfL99n5wcljeirjfViNwDCfTZQNlsjAaXJhUoxLeNxw-~W2QlDVeO5F5GFtHWHqGX4jVGS5WWSV7aC0OqICKg8Il951UhPVtPZ8tG6ajcattn3nq6eZ1NPUcpjNiJigJHd2gZyHCZsMOy3cuvb7F6kNTdig7Yl9kOU-K3biqGHqDjovL83NrInRLK8xeHfRP-Sv8o7id4U6jDqtM9wbbxiZKkPwlfgcGJnYrQAo-kHqBi7-CRC2dEjUiEKi0MMcH-qDWU6vyC02AUG5CkZa8iOLt0Vu7-hfSeQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000072.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 72,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/72/image/image.jpg?Expires=1776732223&Signature=un4511W7Y7AHyRAKFaQG3GzGh4cToEKWef-j25Ea7nXsCMoHXr1DdfL99n5wcljeirjfViNwDCfTZQNlsjAaXJhUoxLeNxw-~W2QlDVeO5F5GFtHWHqGX4jVGS5WWSV7aC0OqICKg8Il951UhPVtPZ8tG6ajcattn3nq6eZ1NPUcpjNiJigJHd2gZyHCZsMOy3cuvb7F6kNTdig7Yl9kOU-K3biqGHqDjovL83NrInRLK8xeHfRP-Sv8o7id4U6jDqtM9wbbxiZKkPwlfgcGJnYrQAo-kHqBi7-CRC2dEjUiEKi0MMcH-qDWU6vyC02AUG5CkZa8iOLt0Vu7-hfSeQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_72_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/73/image/image.jpg?Expires=1776732223&Signature=Q-9tZEZNzikDpK-bq0LV8vR1ey9EQhPpOZW5~USzv-p864GTLmXf19i1lWQYuWPdKC~PFcB5~CtR9SFBdBljGzVtoBBHZtWcARW2ZaCePZ6dO~eusOUZ5N6UfG06u0xWWujzXkKwHt4xd4AFetXiVyXBYnXO-Oke3HaPfSeTvAT0BL8stBbixOLca-2XllmKNOBeLbQK7JXqDKg1th3tIBIwACf7N-84z1eMAhWcysSFqrZyORkQW8I8sC8l8q1eT-tqthkPk0fqq1E0v8-XyglSQubbIjTLny20TuIQnAOhq6xkyE1ibShOldRKwWGloavgeQAT3nL6Na-Z51ewZg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000073.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 73,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/73/image/image.jpg?Expires=1776732223&Signature=Q-9tZEZNzikDpK-bq0LV8vR1ey9EQhPpOZW5~USzv-p864GTLmXf19i1lWQYuWPdKC~PFcB5~CtR9SFBdBljGzVtoBBHZtWcARW2ZaCePZ6dO~eusOUZ5N6UfG06u0xWWujzXkKwHt4xd4AFetXiVyXBYnXO-Oke3HaPfSeTvAT0BL8stBbixOLca-2XllmKNOBeLbQK7JXqDKg1th3tIBIwACf7N-84z1eMAhWcysSFqrZyORkQW8I8sC8l8q1eT-tqthkPk0fqq1E0v8-XyglSQubbIjTLny20TuIQnAOhq6xkyE1ibShOldRKwWGloavgeQAT3nL6Na-Z51ewZg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_73_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/74/image/image.jpg?Expires=1776732223&Signature=lF333WO~BFszgH6Kl6jSs56WFc4fsayiY2HB0ZXEbVjWxNyLyIxCzDgfCpr74UgupAnJ4SPOn~HTejtpKZbmW0Rf8KtjoTws8QkEKddbAhUNkoWq~GJght82rouKkr34rYYHOpi-2EEHIYx~BFXtoJUuBWP4CVXEp3vsVH5EijFnGJMuqFGKcrh9KmPjBtWkZDp7YCHjuchoxAioqN4IeRFQgok~grXCKW2GcsYF1-hTmPL8HmaZ80ctQQFF2HVWT-QxMM0zIEUDmdLCsXpJYkdAU4NcMBcsKfiTAlidj-e8j26nio3K3y3qMrlZvZubuZkncxnI7p5-md5~sNHGHA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000074.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 74,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/74/image/image.jpg?Expires=1776732223&Signature=lF333WO~BFszgH6Kl6jSs56WFc4fsayiY2HB0ZXEbVjWxNyLyIxCzDgfCpr74UgupAnJ4SPOn~HTejtpKZbmW0Rf8KtjoTws8QkEKddbAhUNkoWq~GJght82rouKkr34rYYHOpi-2EEHIYx~BFXtoJUuBWP4CVXEp3vsVH5EijFnGJMuqFGKcrh9KmPjBtWkZDp7YCHjuchoxAioqN4IeRFQgok~grXCKW2GcsYF1-hTmPL8HmaZ80ctQQFF2HVWT-QxMM0zIEUDmdLCsXpJYkdAU4NcMBcsKfiTAlidj-e8j26nio3K3y3qMrlZvZubuZkncxnI7p5-md5~sNHGHA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_74_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/75/image/image.jpg?Expires=1776732223&Signature=KJ5o5ubZSwsgEUpO4rwoe7JWSXGWEyh1SQMe4XNM2LKbcJ~eexZ4cFSthRhqOc0A1ZxR5Ry-SCnxd46u1LlRLiKGgAOOnCnvlrUZFjFE-HjCe43y-nf3SNfznyZ6rTbAFnk6vghu5aAvJGSOwiOQnsFCqSTX~Wqp~ZJmQxNaUe1dQRJ-0WoK6q-L7i~gpAgZdYLc3CDhPcREz~bgxkDgmPmvGF7WdMzgljfRLvCEsG9bFfcfinwtbwpLRKTqDTFYCkoBMu18drrn2hGq-15a7y-hPQVlff0oK3ORwMVhtVGUkilLk54lzlZ-Li5zVLsRuW5ISqJsqEvRLp4736w9qg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000075.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 75,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/75/image/image.jpg?Expires=1776732223&Signature=KJ5o5ubZSwsgEUpO4rwoe7JWSXGWEyh1SQMe4XNM2LKbcJ~eexZ4cFSthRhqOc0A1ZxR5Ry-SCnxd46u1LlRLiKGgAOOnCnvlrUZFjFE-HjCe43y-nf3SNfznyZ6rTbAFnk6vghu5aAvJGSOwiOQnsFCqSTX~Wqp~ZJmQxNaUe1dQRJ-0WoK6q-L7i~gpAgZdYLc3CDhPcREz~bgxkDgmPmvGF7WdMzgljfRLvCEsG9bFfcfinwtbwpLRKTqDTFYCkoBMu18drrn2hGq-15a7y-hPQVlff0oK3ORwMVhtVGUkilLk54lzlZ-Li5zVLsRuW5ISqJsqEvRLp4736w9qg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_75_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/76/image/image.jpg?Expires=1776732223&Signature=gd0MrEdKvd3H6FJsDQ4WATdY~X1dNimYOWj~7CDIvKMJow3xANwaFrlukkHw~UX-06XSnDKWCGZRqc5e06mI62iBShtb2B9gL0nTMqCnuzdavcF58gdVPGJI64u6A19-3awxmNR6XmvxejRditQpzbXvQQ~OvoPRMP5R0EQkwyX7wjYPApVxmz4atBCo8QmJO09b4SU~yMOpPUUS2yHTgcr-RsgBfOcLpDJpQ9it1VjjWAw-sO4LErmOjlkIkqP3pXY6PLPrumijFs7LMBEAKActfrdQvzhlq-71UzzPQ4UFfTFbPplCJwiqaNQ~hiX4eSwkzF4kNOy5xeGuWISAVA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000076.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 76,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/76/image/image.jpg?Expires=1776732223&Signature=gd0MrEdKvd3H6FJsDQ4WATdY~X1dNimYOWj~7CDIvKMJow3xANwaFrlukkHw~UX-06XSnDKWCGZRqc5e06mI62iBShtb2B9gL0nTMqCnuzdavcF58gdVPGJI64u6A19-3awxmNR6XmvxejRditQpzbXvQQ~OvoPRMP5R0EQkwyX7wjYPApVxmz4atBCo8QmJO09b4SU~yMOpPUUS2yHTgcr-RsgBfOcLpDJpQ9it1VjjWAw-sO4LErmOjlkIkqP3pXY6PLPrumijFs7LMBEAKActfrdQvzhlq-71UzzPQ4UFfTFbPplCJwiqaNQ~hiX4eSwkzF4kNOy5xeGuWISAVA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_76_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/77/image/image.jpg?Expires=1776732223&Signature=fBMsaPegb67sHBDgwcaQ5W70YlaJG0GylLTsMgeVZkVMWnrXkyKkBRrrJOldyrtWV60hKNfGoh2dmRPG4lImdtWr~Ly2nEI0G4qg9thZA~3QbSVPG5vs75~OUP~TSG242sR8529MzFISxV~BetnKr-iBwZYSljWCY4JYZZkIUOOrlnW0-nt25MblAWtKVudD7WXKbh-klq1GOART8V2ilq5TR2Q4wwo76yoWPEFHVs7eQW-rD029-LF5NCcTqnP-dVXVYYeAmr9pmrz6dkI947u9lZw1DzGKse8hnq9Y5WWtRtU10cb1mxIjuh3k-7sgp0-0UQCDG8q9xw~hhu3zAQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000077.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 77,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/77/image/image.jpg?Expires=1776732223&Signature=fBMsaPegb67sHBDgwcaQ5W70YlaJG0GylLTsMgeVZkVMWnrXkyKkBRrrJOldyrtWV60hKNfGoh2dmRPG4lImdtWr~Ly2nEI0G4qg9thZA~3QbSVPG5vs75~OUP~TSG242sR8529MzFISxV~BetnKr-iBwZYSljWCY4JYZZkIUOOrlnW0-nt25MblAWtKVudD7WXKbh-klq1GOART8V2ilq5TR2Q4wwo76yoWPEFHVs7eQW-rD029-LF5NCcTqnP-dVXVYYeAmr9pmrz6dkI947u9lZw1DzGKse8hnq9Y5WWtRtU10cb1mxIjuh3k-7sgp0-0UQCDG8q9xw~hhu3zAQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_77_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/78/image/image.jpg?Expires=1776732223&Signature=sXS0uxZtaB9ZrPriIs-EaDRAMRZxGOx7R6eqyjSsC4nl6FYakmez8U~VHzXa6foSx8tTgmhIOmhKpn97m4aQAukFUJXTm-ABnW5gWvzUcNgQsCbFng3t3rwFBHNSy~bAA9E2qHwxmk9CRrZnBSfHLn5aNx6x8tYrMH11wwoCmMIQN37Uv~mujlRz08sqqZqDc8CSI1aRFAgrZQs-KbEzj650-eG4hWmiyikG7nRC9~dTmBwwn2C8G0HWaW3jAxRI~UnEnMMeH3EppxbeMxhi782hHy9SH79uBBxn-7gkzUDE-8psOPs0VqRgPri4qJ5O2o0UyhEP5Rjd~dCdDtdx8g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000078.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 78,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/78/image/image.jpg?Expires=1776732223&Signature=sXS0uxZtaB9ZrPriIs-EaDRAMRZxGOx7R6eqyjSsC4nl6FYakmez8U~VHzXa6foSx8tTgmhIOmhKpn97m4aQAukFUJXTm-ABnW5gWvzUcNgQsCbFng3t3rwFBHNSy~bAA9E2qHwxmk9CRrZnBSfHLn5aNx6x8tYrMH11wwoCmMIQN37Uv~mujlRz08sqqZqDc8CSI1aRFAgrZQs-KbEzj650-eG4hWmiyikG7nRC9~dTmBwwn2C8G0HWaW3jAxRI~UnEnMMeH3EppxbeMxhi782hHy9SH79uBBxn-7gkzUDE-8psOPs0VqRgPri4qJ5O2o0UyhEP5Rjd~dCdDtdx8g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_78_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/79/image/image.jpg?Expires=1776732223&Signature=UamSE0vssKSdEZYSENZLbGX6lKSzFBcv3L58gpUAzTel1kuyaJo1RATaaMdSnZ2t62z2QCJGYh0p6H0FmFsZEF9M1q0PTQ32lh613yanxFWJU17wPj95lzWidsT5lHK0DoKD11ScqcGCcFzDKqB9MXjOPTQU9EaDwjcvHsKditCG9aAnzpnskZFJyZHOLuEIDM-ij6t3S-nrtEsKWeZQRQMWp3LXiePOupidHP~q0wMgDlE2jd-Ipx8pIOc2~j~2IpsHWDDCxdIFsFmf64C3NxqaqBVP2N5LtMT6Hqv9Ik5C6GiIgkl1sQhciW6k8YFeWH41uzJYaqRmiyYcni~Qzg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000079.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 79,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/79/image/image.jpg?Expires=1776732223&Signature=UamSE0vssKSdEZYSENZLbGX6lKSzFBcv3L58gpUAzTel1kuyaJo1RATaaMdSnZ2t62z2QCJGYh0p6H0FmFsZEF9M1q0PTQ32lh613yanxFWJU17wPj95lzWidsT5lHK0DoKD11ScqcGCcFzDKqB9MXjOPTQU9EaDwjcvHsKditCG9aAnzpnskZFJyZHOLuEIDM-ij6t3S-nrtEsKWeZQRQMWp3LXiePOupidHP~q0wMgDlE2jd-Ipx8pIOc2~j~2IpsHWDDCxdIFsFmf64C3NxqaqBVP2N5LtMT6Hqv9Ik5C6GiIgkl1sQhciW6k8YFeWH41uzJYaqRmiyYcni~Qzg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_79_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/80/image/image.jpg?Expires=1776732223&Signature=oV99NyM7Yc0DkmPSC7x2BDrZup1GXMr8TouDko21blOC2ElijvsO28Ha63yNxMTnqKbwZ4NYBUUcWmbO8y6B-ysGu33Z7RT5VbZgJ2a~5mcxxe~kfBInTBQrX0FDrWfSxU50-01tJnKrRXYUhaYb9TaZjQkPfFqqM5pD7Rb-Cc9rGbv6RdgetGwmBZeLR9vyaACmvNWZPFA2Vvxv~9EIQn7hKCJgl6Z0R5BP3YhHBvwRk-qgTxA~aTxtJHmE8~b-kcmf~xm2118C~5SyN1WDIBXFWK4pVCQ6iwVNs6T~fS3wlPJs8GW7DWW5IOaHxUPHT9eLW6yuH8l7XzhbG2j6ig__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000080.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 80,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/80/image/image.jpg?Expires=1776732223&Signature=oV99NyM7Yc0DkmPSC7x2BDrZup1GXMr8TouDko21blOC2ElijvsO28Ha63yNxMTnqKbwZ4NYBUUcWmbO8y6B-ysGu33Z7RT5VbZgJ2a~5mcxxe~kfBInTBQrX0FDrWfSxU50-01tJnKrRXYUhaYb9TaZjQkPfFqqM5pD7Rb-Cc9rGbv6RdgetGwmBZeLR9vyaACmvNWZPFA2Vvxv~9EIQn7hKCJgl6Z0R5BP3YhHBvwRk-qgTxA~aTxtJHmE8~b-kcmf~xm2118C~5SyN1WDIBXFWK4pVCQ6iwVNs6T~fS3wlPJs8GW7DWW5IOaHxUPHT9eLW6yuH8l7XzhbG2j6ig__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_80_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/81/image/image.jpg?Expires=1776732223&Signature=DuXngKDe4wSiEUGRZFRnp0W1KAyr3CAzxaXfmAQRFI4JkAwwfSFgxPXm-VK2~pBIe0tTn4cOh0bgmFvSFMH9WLpRsXdNLgNYp9dm2SdY5rCOguxUf4jlu-ErKJ2AVyXGhrQWKbGp5~GuKHQzVPMNztIPDfDsZnFG1mWKJEPUq-nxDYsjOFoq8kDP2-raOUNMbiPotbS5WEDsHPjx2gAoQ7bconlOxl5oRoEMcCn1tA1pL-bLVXwfTI4-N7ASC45i5oV9~9c3-fkqIq1TjaYJDuFRsRTnHfdQMoqyGt70g6wyhN8McCm0xL7t6vOaM7uhDfEW0a2LbJHsU90yE90dSA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000081.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 81,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/81/image/image.jpg?Expires=1776732223&Signature=DuXngKDe4wSiEUGRZFRnp0W1KAyr3CAzxaXfmAQRFI4JkAwwfSFgxPXm-VK2~pBIe0tTn4cOh0bgmFvSFMH9WLpRsXdNLgNYp9dm2SdY5rCOguxUf4jlu-ErKJ2AVyXGhrQWKbGp5~GuKHQzVPMNztIPDfDsZnFG1mWKJEPUq-nxDYsjOFoq8kDP2-raOUNMbiPotbS5WEDsHPjx2gAoQ7bconlOxl5oRoEMcCn1tA1pL-bLVXwfTI4-N7ASC45i5oV9~9c3-fkqIq1TjaYJDuFRsRTnHfdQMoqyGt70g6wyhN8McCm0xL7t6vOaM7uhDfEW0a2LbJHsU90yE90dSA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_81_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/82/image/image.jpg?Expires=1776732223&Signature=viGI6m6PzhmrNATWAtC5f3V0dsYEQkY0srQvW~5Qrhy1EVLeeqJWu66UzE-nHOadIh~TI8x~WfBjH2wsJsoqu4s9dVZyM-OF~ee1wAFIcBztWt3yIhfQucPRn9c4w-iLxNKr0NkB-TGugLW2YNYrw-LPCuW2lvexfdg55ZVRgDvxVJ9JRX53MFujlQm8hLF8qI3M6jNMyQmwg4A5qhoyh5I1S-Py9GYWCrrdTyX1DvGjjZOch9M9OdI0rnQ5hUXFntVPEwpLrkRns1JKgyeoy4jEKEAcJQ0jg3lH-ulArm-RPoFYeU5DH3s4YqMhAFgEh7DDKnuiS-mJA7bl069NWg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000082.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 82,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/82/image/image.jpg?Expires=1776732223&Signature=viGI6m6PzhmrNATWAtC5f3V0dsYEQkY0srQvW~5Qrhy1EVLeeqJWu66UzE-nHOadIh~TI8x~WfBjH2wsJsoqu4s9dVZyM-OF~ee1wAFIcBztWt3yIhfQucPRn9c4w-iLxNKr0NkB-TGugLW2YNYrw-LPCuW2lvexfdg55ZVRgDvxVJ9JRX53MFujlQm8hLF8qI3M6jNMyQmwg4A5qhoyh5I1S-Py9GYWCrrdTyX1DvGjjZOch9M9OdI0rnQ5hUXFntVPEwpLrkRns1JKgyeoy4jEKEAcJQ0jg3lH-ulArm-RPoFYeU5DH3s4YqMhAFgEh7DDKnuiS-mJA7bl069NWg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_82_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/83/image/image.jpg?Expires=1776732223&Signature=Ust8xEdU~vx~iahAWoEYFBl9kOsC-CoT7bdTO7z7ysoOy5XQN99ewIwm0z8DCBbkUiXFHY-sUyHyOEdTQ~I3rMOXeXkka0LrT-Veu~mSZU6j~cpAmWBVgPkHfpXgonma~ojS4XtDQcmNd2pLGAoJO6RT-hRE3WeATQsGTCfaFFvHtGR8j844VHGWalTX8ETK9svx4VHyTs8v9VD9mMlwomJlNG4qYHOCpxxwZZtxDYt7CTkGcWLIWqviQbJzI5gJIVegA82lO8QgLLUg0MI-HvJz9w9Rbtjy4Vd6jVFQbxm2esTLb~r03FNrfkdwsdD7GNB2rZS4iC5~TbEMp3OBmA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000083.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 83,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/83/image/image.jpg?Expires=1776732223&Signature=Ust8xEdU~vx~iahAWoEYFBl9kOsC-CoT7bdTO7z7ysoOy5XQN99ewIwm0z8DCBbkUiXFHY-sUyHyOEdTQ~I3rMOXeXkka0LrT-Veu~mSZU6j~cpAmWBVgPkHfpXgonma~ojS4XtDQcmNd2pLGAoJO6RT-hRE3WeATQsGTCfaFFvHtGR8j844VHGWalTX8ETK9svx4VHyTs8v9VD9mMlwomJlNG4qYHOCpxxwZZtxDYt7CTkGcWLIWqviQbJzI5gJIVegA82lO8QgLLUg0MI-HvJz9w9Rbtjy4Vd6jVFQbxm2esTLb~r03FNrfkdwsdD7GNB2rZS4iC5~TbEMp3OBmA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_83_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/84/image/image.jpg?Expires=1776732223&Signature=UCqUlvT~9rw0mwAfRwrXXiJ7wt5v7xHGY7Hg8yGD8UNfGAL-o3qiYh7kHFt54FOX3c9RXhr-Ezof-18IBOScMjMd5I~ZuT14vcETqxkLBK~LaKCE2skidgxbidnRUnw0ButIL-rz~jITZoTvTfXNJkVyNIm7UwlqUMjAejgn0WyYx72KfzLJx2p9kOHnwjvTVIOdhZFfbLODAwSwM8GJftHjjssH4ls3aq8wMfN4mFeewheVXaKBmmTVct00kJ7bemyXFIjXJjBpsUBIH2n~4LeUjzNKROaSwb61T3wWG~VpAzuYy3ZWrKg7A1DelqLriYvXgYaaLgxGiLMDnr5GPA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000084.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 84,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/84/image/image.jpg?Expires=1776732223&Signature=UCqUlvT~9rw0mwAfRwrXXiJ7wt5v7xHGY7Hg8yGD8UNfGAL-o3qiYh7kHFt54FOX3c9RXhr-Ezof-18IBOScMjMd5I~ZuT14vcETqxkLBK~LaKCE2skidgxbidnRUnw0ButIL-rz~jITZoTvTfXNJkVyNIm7UwlqUMjAejgn0WyYx72KfzLJx2p9kOHnwjvTVIOdhZFfbLODAwSwM8GJftHjjssH4ls3aq8wMfN4mFeewheVXaKBmmTVct00kJ7bemyXFIjXJjBpsUBIH2n~4LeUjzNKROaSwb61T3wWG~VpAzuYy3ZWrKg7A1DelqLriYvXgYaaLgxGiLMDnr5GPA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_84_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/85/image/image.jpg?Expires=1776732223&Signature=yyI2gJKNXSlHLjYT3sL4uvuNT-DdSLjgF~G3YN15NjNQ5PlQc6cLEuqOGK~MDC~5NFFdpfvNGKhTum8iPTXuEtyw2gw4kysXT8LHq4wPei3zyWapPwOgp5fcYlUKVUqZwGRFLW3BgyZy7aK5EN67zhYixpTi7XzJg68Ec3CE8cYuMtUJw~jl7VFTmrCHf0hA1SoEO8uxXLG43jqnXbwvOohpWl~0E-PSltEd83mJSMLe19p-ZlO~tkuTHx9d1tUPbjrXQBFwPDKhQ4WzpyVHy-zxKFsl8ExCAmF6ZBXjlbpu1feVBpmx1T2R81lIWcX4ZywZxZE5kuj3blTZSHUjzg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000085.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 85,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/85/image/image.jpg?Expires=1776732223&Signature=yyI2gJKNXSlHLjYT3sL4uvuNT-DdSLjgF~G3YN15NjNQ5PlQc6cLEuqOGK~MDC~5NFFdpfvNGKhTum8iPTXuEtyw2gw4kysXT8LHq4wPei3zyWapPwOgp5fcYlUKVUqZwGRFLW3BgyZy7aK5EN67zhYixpTi7XzJg68Ec3CE8cYuMtUJw~jl7VFTmrCHf0hA1SoEO8uxXLG43jqnXbwvOohpWl~0E-PSltEd83mJSMLe19p-ZlO~tkuTHx9d1tUPbjrXQBFwPDKhQ4WzpyVHy-zxKFsl8ExCAmF6ZBXjlbpu1feVBpmx1T2R81lIWcX4ZywZxZE5kuj3blTZSHUjzg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_85_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/86/image/image.jpg?Expires=1776732223&Signature=D02e1ECQ~J0HlcQsJeH0eKk4~a~PySUc-OT5cI~nJeiUG70u6Y5gM8lyVWTj4XhwOsqMvPjs1Z7Iv~akEviW9pWorY6p7dTaiv9aXmN4qDKA0U-SR-0Eu5X6aqLAJVLOOHHL24NRAqsOz6dx1ydMHYnEVIeacVEMlax3sKH58Mq6gDowzYEZjPCU3e4NHbysRcdXil3oTANS2nT3N2Ed56wQebJlIvSoXhc26Wu2xA7C9IdfDg18FJRBUzjgtzkvwABqTmqlhS2bSIxGRTMZGTbE4AfZ9l728VSbJtTxwsL6U8~c9rdOPfNzzJKNole29aP~9xyIAM~MikGQbt5fcQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000086.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 86,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/86/image/image.jpg?Expires=1776732223&Signature=D02e1ECQ~J0HlcQsJeH0eKk4~a~PySUc-OT5cI~nJeiUG70u6Y5gM8lyVWTj4XhwOsqMvPjs1Z7Iv~akEviW9pWorY6p7dTaiv9aXmN4qDKA0U-SR-0Eu5X6aqLAJVLOOHHL24NRAqsOz6dx1ydMHYnEVIeacVEMlax3sKH58Mq6gDowzYEZjPCU3e4NHbysRcdXil3oTANS2nT3N2Ed56wQebJlIvSoXhc26Wu2xA7C9IdfDg18FJRBUzjgtzkvwABqTmqlhS2bSIxGRTMZGTbE4AfZ9l728VSbJtTxwsL6U8~c9rdOPfNzzJKNole29aP~9xyIAM~MikGQbt5fcQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_86_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/87/image/image.jpg?Expires=1776732223&Signature=lIE6phH1-xtvVZwT8xfai2qH0pdmNgucLjNv~gUluOF2nJqUA8ekadMgHM-MOmHQ5mXZmrP-BR7xXc7wdwB9D9F2Rd7TD-VEQcv19MZR4lEZg-swzZPF2BSni0NmiuxfmkNFn3MzcXv-y6QatuC9m-nN3Hn2cV5A1LXAj~OUQlhvbWmFBYBVuE3YatqN1q5jppk23E5WXZsHGLhZO~VbNyuoNBDnfMiGKZG~a9NBmJFamYkEZt6GyZKmFbC27sOOKClwwPXdAFTBFnhSDRupi3GSXpI2xRvP-n4y14pqK1AjnM3zZ0PtEDJiiVYthw3Vbd8sXCjBQYkBCPZc5CE6NQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000087.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 87,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/87/image/image.jpg?Expires=1776732223&Signature=lIE6phH1-xtvVZwT8xfai2qH0pdmNgucLjNv~gUluOF2nJqUA8ekadMgHM-MOmHQ5mXZmrP-BR7xXc7wdwB9D9F2Rd7TD-VEQcv19MZR4lEZg-swzZPF2BSni0NmiuxfmkNFn3MzcXv-y6QatuC9m-nN3Hn2cV5A1LXAj~OUQlhvbWmFBYBVuE3YatqN1q5jppk23E5WXZsHGLhZO~VbNyuoNBDnfMiGKZG~a9NBmJFamYkEZt6GyZKmFbC27sOOKClwwPXdAFTBFnhSDRupi3GSXpI2xRvP-n4y14pqK1AjnM3zZ0PtEDJiiVYthw3Vbd8sXCjBQYkBCPZc5CE6NQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_87_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/88/image/image.jpg?Expires=1776732223&Signature=yACuLt6SyzodBnXLpNRndhCidbh~choP88qteRa2nvCD4gfsM9Er4hWEP4APD0FVLBSc9W~dxljUEQwOsbz-iGz6CuHdXakB1wUvbTUzYsT15G39V1yp~n-WDQSbVpAwaD5iy9oDQX7ZtjhcceYcMZvB6PlfepmzpT5CgmMiFvXKfHzkzAsCDQ7r3Rbls8ICeKd2JTkhlRo0bzln6HDl0YOpLHZv6culRss6HbowkHTdJmgX3ptcvSvT~9l1kxeSGvDbMCc3qfFYkeLSqzG9ZEsW1-XU2FvOPji2xmfXurVu-gvMxyM0g8wGdg8LNuImsdU~dgv28oxClm0prcTkng__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000088.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 88,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/88/image/image.jpg?Expires=1776732223&Signature=yACuLt6SyzodBnXLpNRndhCidbh~choP88qteRa2nvCD4gfsM9Er4hWEP4APD0FVLBSc9W~dxljUEQwOsbz-iGz6CuHdXakB1wUvbTUzYsT15G39V1yp~n-WDQSbVpAwaD5iy9oDQX7ZtjhcceYcMZvB6PlfepmzpT5CgmMiFvXKfHzkzAsCDQ7r3Rbls8ICeKd2JTkhlRo0bzln6HDl0YOpLHZv6culRss6HbowkHTdJmgX3ptcvSvT~9l1kxeSGvDbMCc3qfFYkeLSqzG9ZEsW1-XU2FvOPji2xmfXurVu-gvMxyM0g8wGdg8LNuImsdU~dgv28oxClm0prcTkng__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_88_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/89/image/image.jpg?Expires=1776732223&Signature=NHtwaRnjUdji-kU96uzv-6sQk6Gnq7k~Hh3LRlBQ5qxUoZ4DiwXg4xP3lCjIZ3HxKoXCAqDKriZzYubw7AS60s9MczBzAIwaU0iYGzJmBaeBUdqIKNqEtNi0tgGvAQs~Qkh-TDtmCHkswihDVsb2ckX07XhvW8JH5J~BZg81yj27dW0NMRx90vEVDgT-7EtGyARWPKWcE32s0Y8zGh7ziuFtAqvl2x~4PBokCqhsL4r6iAwSevdqSW3XCoIny8ZKMlVGdBv6uaMt-xiV8ejv8hnvgUEGUVmpTfI-9ZfKJy7pOeJENDjlQ5qjdZ7Sq0U0fLaPWK9e0caNGQ8-o8muUg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000089.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 89,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/89/image/image.jpg?Expires=1776732223&Signature=NHtwaRnjUdji-kU96uzv-6sQk6Gnq7k~Hh3LRlBQ5qxUoZ4DiwXg4xP3lCjIZ3HxKoXCAqDKriZzYubw7AS60s9MczBzAIwaU0iYGzJmBaeBUdqIKNqEtNi0tgGvAQs~Qkh-TDtmCHkswihDVsb2ckX07XhvW8JH5J~BZg81yj27dW0NMRx90vEVDgT-7EtGyARWPKWcE32s0Y8zGh7ziuFtAqvl2x~4PBokCqhsL4r6iAwSevdqSW3XCoIny8ZKMlVGdBv6uaMt-xiV8ejv8hnvgUEGUVmpTfI-9ZfKJy7pOeJENDjlQ5qjdZ7Sq0U0fLaPWK9e0caNGQ8-o8muUg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_89_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/90/image/image.jpg?Expires=1776732223&Signature=Y1lWyE4BDFNkg8Cjnh5N9wJA7YXm50K6xnpeER6x2Fo2sYLyCkL33C3XXNUYqqF8UyOV6fE1WJzMGyFQvmnOGdkBTJZvQ4tMqirG1-9PcAFcZUXzNWvma0E9CSWmn0BSy37v2KKhxDLZWBNteuIgfez2tnqAAysm9BLslZMjDgb0vSSzQS0fkeBJ1dEeLWKn73b4EtOm~nZfj1NQ1K-IbvCFUr6mZs1BAuGBFfzJLwtch3~D8Dg-MKUwoZ-GKdfkD5NeC2dbvC7Nq3Iqdflkito-sOOzb5uJLlJgeidxmKlPdygL86~UomHbM6XVX~wUOWeSEfOqeSYQjroE8sY5fA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000090.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 90,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/90/image/image.jpg?Expires=1776732223&Signature=Y1lWyE4BDFNkg8Cjnh5N9wJA7YXm50K6xnpeER6x2Fo2sYLyCkL33C3XXNUYqqF8UyOV6fE1WJzMGyFQvmnOGdkBTJZvQ4tMqirG1-9PcAFcZUXzNWvma0E9CSWmn0BSy37v2KKhxDLZWBNteuIgfez2tnqAAysm9BLslZMjDgb0vSSzQS0fkeBJ1dEeLWKn73b4EtOm~nZfj1NQ1K-IbvCFUr6mZs1BAuGBFfzJLwtch3~D8Dg-MKUwoZ-GKdfkD5NeC2dbvC7Nq3Iqdflkito-sOOzb5uJLlJgeidxmKlPdygL86~UomHbM6XVX~wUOWeSEfOqeSYQjroE8sY5fA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_90_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/91/image/image.jpg?Expires=1776732223&Signature=ozLjwM6G1jCy8fdMdtc2rjkRIkEAWw8clr3TCtp7-TBWkbgFIM9VAueyugEwtzrHUcUR5MPkT8alf8ZrWJ43t6Yw4zMobTkk2l22Rx6-CUfykUCK9cepGA8QqhGjUPX07RHYuQ0Pl8mJHSozsNEVEJQIJoBVxx3X6X7yZVNK4ybVdxmUW5zqCHd0geAcqv7OuA~rf06HC9Ukw06yv3EzilpPjq~-fLHO4dYwOgU66REBfN0Q2XXM2aCO~Uxj7ImBP2F9FvEw68CF0UiMHte1wUjyuBxayEJsdyzhy~pcgTQp20l41Fk2qq0FgaIPKDjlfP8yE2rXA3VXnbQqE6Iliw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000091.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 91,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/91/image/image.jpg?Expires=1776732223&Signature=ozLjwM6G1jCy8fdMdtc2rjkRIkEAWw8clr3TCtp7-TBWkbgFIM9VAueyugEwtzrHUcUR5MPkT8alf8ZrWJ43t6Yw4zMobTkk2l22Rx6-CUfykUCK9cepGA8QqhGjUPX07RHYuQ0Pl8mJHSozsNEVEJQIJoBVxx3X6X7yZVNK4ybVdxmUW5zqCHd0geAcqv7OuA~rf06HC9Ukw06yv3EzilpPjq~-fLHO4dYwOgU66REBfN0Q2XXM2aCO~Uxj7ImBP2F9FvEw68CF0UiMHte1wUjyuBxayEJsdyzhy~pcgTQp20l41Fk2qq0FgaIPKDjlfP8yE2rXA3VXnbQqE6Iliw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_91_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/92/image/image.jpg?Expires=1776732223&Signature=uKlcBexwo1W780YcmZeKXixzyOKdiRJchvDp-ydJf~jVBulrcqgfrzvjQoE9NQRa8ZBW6XNFVUwgLXHUBcxwHvOKvKT15Y8CrOSZjCiYtALBtT4hPcxGeZHz9eJmCuCQi4KUfl7gsg-qeRPkiboliiYgiylgqRnEtyzNQYpouPTbYtBIGX8u0y-9rHVq-7Y1O7prtpIYflBMODLk1xJL~Z-Dk2ftxIYhCdGvBvKzdIoBX9yejtUjkb~Ijz~t8rhb~WALtpJ41EjR~dDFhNavOx9ZnGVqPTESBbOjBoqliT1Ixu1T1vwMZjXYbqkQlnEvJTkONg1PU22fiN611FD1-w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000092.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 92,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/92/image/image.jpg?Expires=1776732223&Signature=uKlcBexwo1W780YcmZeKXixzyOKdiRJchvDp-ydJf~jVBulrcqgfrzvjQoE9NQRa8ZBW6XNFVUwgLXHUBcxwHvOKvKT15Y8CrOSZjCiYtALBtT4hPcxGeZHz9eJmCuCQi4KUfl7gsg-qeRPkiboliiYgiylgqRnEtyzNQYpouPTbYtBIGX8u0y-9rHVq-7Y1O7prtpIYflBMODLk1xJL~Z-Dk2ftxIYhCdGvBvKzdIoBX9yejtUjkb~Ijz~t8rhb~WALtpJ41EjR~dDFhNavOx9ZnGVqPTESBbOjBoqliT1Ixu1T1vwMZjXYbqkQlnEvJTkONg1PU22fiN611FD1-w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_92_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/93/image/image.jpg?Expires=1776732223&Signature=Ln7gTWBK325nEAO0EMHUXGbpap5nJQSULtSNLeCrRgNqdISYbmokF8tHT3Uh910OQT4knJZszj1iCbgy~2cRGYxnqPkzUe0~r810xoamA4-FzT6~9yMdiVyhK7hRZ-xC95JOMV443agql8-heeCjT5Od106eg4ko74q3N~WVFHi2GB1Zqxdk7VgTDN9Ri2uRR30r1Gbx-QJP37Xela95rW-~vIoN~qIdF8WznJCvzCevS2vQOmoHGc~aJ2zZkWX88HE9m68bYFlVeF4DI4CIr0ADPS3SPOhpeCOzCW7-Evxv0u1H1TM~f9XsZ31oF25HhNRHToE3R~mLn5HAG~xHlw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000093.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 93,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/93/image/image.jpg?Expires=1776732223&Signature=Ln7gTWBK325nEAO0EMHUXGbpap5nJQSULtSNLeCrRgNqdISYbmokF8tHT3Uh910OQT4knJZszj1iCbgy~2cRGYxnqPkzUe0~r810xoamA4-FzT6~9yMdiVyhK7hRZ-xC95JOMV443agql8-heeCjT5Od106eg4ko74q3N~WVFHi2GB1Zqxdk7VgTDN9Ri2uRR30r1Gbx-QJP37Xela95rW-~vIoN~qIdF8WznJCvzCevS2vQOmoHGc~aJ2zZkWX88HE9m68bYFlVeF4DI4CIr0ADPS3SPOhpeCOzCW7-Evxv0u1H1TM~f9XsZ31oF25HhNRHToE3R~mLn5HAG~xHlw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_93_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/94/image/image.jpg?Expires=1776732223&Signature=VyzomonyDEDG49d1u5yrheoESLpMn-PyS0wGzjeiTYEz-RahYsjhaHjFTRh9MGPf6WSohbGiYJrnVmihU1hi1VfV7xl-zoBBNZCdp87kUqJZame5vKNEugTfPY71shWt-XM1WHgJ88dh8bzlmFgmufijDjNpJURALrUZ1snK51ZePx0F9S0-~L9qy~-4Obqy9yVS0uWz~24VL0YoDE~x7vOz~-wdql4eZOe8NIf5Fvi~MP~d0Oo8aIg-M~m6~M2LFtEc~15GMJOryAJ87TaM3cSFzcN7smrA2hneVJVJDwDG-jdWDNVtHp~6sBS~HaoEy8T4dseFIV5X9aX1XBK-oA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000094.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 94,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/94/image/image.jpg?Expires=1776732223&Signature=VyzomonyDEDG49d1u5yrheoESLpMn-PyS0wGzjeiTYEz-RahYsjhaHjFTRh9MGPf6WSohbGiYJrnVmihU1hi1VfV7xl-zoBBNZCdp87kUqJZame5vKNEugTfPY71shWt-XM1WHgJ88dh8bzlmFgmufijDjNpJURALrUZ1snK51ZePx0F9S0-~L9qy~-4Obqy9yVS0uWz~24VL0YoDE~x7vOz~-wdql4eZOe8NIf5Fvi~MP~d0Oo8aIg-M~m6~M2LFtEc~15GMJOryAJ87TaM3cSFzcN7smrA2hneVJVJDwDG-jdWDNVtHp~6sBS~HaoEy8T4dseFIV5X9aX1XBK-oA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_94_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/95/image/image.jpg?Expires=1776732223&Signature=BAbkxIUMRYP5kXej2~VXfv5uBjUwQlHl52oY~-wtr70E7vQWGOoOVhv-2lAa-Fx~xPlh8VsOkCLKSNcuvK3HndCNKQxmcHhlhmoGFw6FGekUf6v3BW3cP6ZZUCf5NYzEm-DlMUj7LRAW4hthBM8TKLV1Y1eoszmHbEXmjd41URaK1VdCBHZ4mtUVlTgHweCb8D1-NHqnPqxvxxqm-wgOPaOgay7wawtMwPX6sK-T~5Lt1f600hehrFW3WipdGO6LmPf6Njfoopd9b8AzWNj5rN9OIn9VBqcwobiwXUdRiItnqqoTNT1W9Lf6R1x9mm~YKGb-WqZdAAXGl8lxpplBrQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000095.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 95,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/95/image/image.jpg?Expires=1776732223&Signature=BAbkxIUMRYP5kXej2~VXfv5uBjUwQlHl52oY~-wtr70E7vQWGOoOVhv-2lAa-Fx~xPlh8VsOkCLKSNcuvK3HndCNKQxmcHhlhmoGFw6FGekUf6v3BW3cP6ZZUCf5NYzEm-DlMUj7LRAW4hthBM8TKLV1Y1eoszmHbEXmjd41URaK1VdCBHZ4mtUVlTgHweCb8D1-NHqnPqxvxxqm-wgOPaOgay7wawtMwPX6sK-T~5Lt1f600hehrFW3WipdGO6LmPf6Njfoopd9b8AzWNj5rN9OIn9VBqcwobiwXUdRiItnqqoTNT1W9Lf6R1x9mm~YKGb-WqZdAAXGl8lxpplBrQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_95_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/96/image/image.jpg?Expires=1776732223&Signature=A~hfrSH06qALTBp0X84BQOoGMRFdbbqcJ2gM~-qrOcvJ~eHtiFw0nCy6BM1mC0o3dkiVCaoX3TNQhUrl0kEUgC88Lywa-p-6enn2ui43MnlY0fiOlE--bx5cPNhbn9~FHI2mieKHqFa26mURn7O-QmuxXlAZ7HtMoxeThr6WSVB-rW3pMo2qOgFtlJstoJUwTAARxQ5-g90dZDBUR3v5G5tUn9gr8ZmarSfzHUPbVcBpeJAfqGzWWV3ok48iZSqakpX6iLVMM0oCii6U9RcEWK6d~WdlYutcsrqhZ2SC1xcnhD0wWipRYcmbi-GjrbDX3DXBefM-GVJys0q5Ba7i-w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000096.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 96,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/96/image/image.jpg?Expires=1776732223&Signature=A~hfrSH06qALTBp0X84BQOoGMRFdbbqcJ2gM~-qrOcvJ~eHtiFw0nCy6BM1mC0o3dkiVCaoX3TNQhUrl0kEUgC88Lywa-p-6enn2ui43MnlY0fiOlE--bx5cPNhbn9~FHI2mieKHqFa26mURn7O-QmuxXlAZ7HtMoxeThr6WSVB-rW3pMo2qOgFtlJstoJUwTAARxQ5-g90dZDBUR3v5G5tUn9gr8ZmarSfzHUPbVcBpeJAfqGzWWV3ok48iZSqakpX6iLVMM0oCii6U9RcEWK6d~WdlYutcsrqhZ2SC1xcnhD0wWipRYcmbi-GjrbDX3DXBefM-GVJys0q5Ba7i-w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_96_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/97/image/image.jpg?Expires=1776732223&Signature=aj4JWxel6Oc~vN5Zp2SJlSPeb0zKGqS6xWRntVlwZpydG70MtuXfmdDrutgy-dF53BLSc2G~hZwYtUtY3SVwg820DMzVJeIEoCmk7YKVxWntvZMIvwpWkg39UW-DHG5GNgbBkC~r3TSyMk3muB26~5LlQgdhKOjyNwi3wsfGZ3-m4CO3QNB1crIAOgez9UT2uHIcCOOLN1eW9p-N3HhVYEURRVliNTTVTgGqHiHi~aRHGDwRNdsY3Atxs9z5inFJQMaU7E66OlHYoXfyhXOBgHxxkSFgULIX-mBrI6y~KwEv~QeFLyzcDBEXhfU2dvLzMIw0Iz9Q-FMH1i1bae70qg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000097.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 97,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/97/image/image.jpg?Expires=1776732223&Signature=aj4JWxel6Oc~vN5Zp2SJlSPeb0zKGqS6xWRntVlwZpydG70MtuXfmdDrutgy-dF53BLSc2G~hZwYtUtY3SVwg820DMzVJeIEoCmk7YKVxWntvZMIvwpWkg39UW-DHG5GNgbBkC~r3TSyMk3muB26~5LlQgdhKOjyNwi3wsfGZ3-m4CO3QNB1crIAOgez9UT2uHIcCOOLN1eW9p-N3HhVYEURRVliNTTVTgGqHiHi~aRHGDwRNdsY3Atxs9z5inFJQMaU7E66OlHYoXfyhXOBgHxxkSFgULIX-mBrI6y~KwEv~QeFLyzcDBEXhfU2dvLzMIw0Iz9Q-FMH1i1bae70qg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_97_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/98/image/image.jpg?Expires=1776732223&Signature=2swtZSUq6lFDEUXfJgpJn-GlbjGv4HtVPO7W-gXg0tWwfZUpzodJZWHv1oBkxijSrT4rT2N5e0~0rIlxsJ7L2cPdletfk-6X~ldx5N7ja3kH2s7LQaR~FOqYa58tnbHhFsxQ9iwbHF3KOVcL5xq8bjjYlSeZFnh3MO2LwxwuH0QLe5KdFnnSZT3ng8IMcD9alEu1NAIER1lmRH1f~7j9-~lQxUz7VW7jbHOsWQMu~A2m2muyclGrZvFQNf4mZjI5hEjmCeYc-xfnBi5f9AZSK1D~QiDfWxjfWaY3Kx2EoycU69lWSHMJs3tJjo-mYsMszAV4yzexzTXZArxtpi8AWA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000098.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 98,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/98/image/image.jpg?Expires=1776732223&Signature=2swtZSUq6lFDEUXfJgpJn-GlbjGv4HtVPO7W-gXg0tWwfZUpzodJZWHv1oBkxijSrT4rT2N5e0~0rIlxsJ7L2cPdletfk-6X~ldx5N7ja3kH2s7LQaR~FOqYa58tnbHhFsxQ9iwbHF3KOVcL5xq8bjjYlSeZFnh3MO2LwxwuH0QLe5KdFnnSZT3ng8IMcD9alEu1NAIER1lmRH1f~7j9-~lQxUz7VW7jbHOsWQMu~A2m2muyclGrZvFQNf4mZjI5hEjmCeYc-xfnBi5f9AZSK1D~QiDfWxjfWaY3Kx2EoycU69lWSHMJs3tJjo-mYsMszAV4yzexzTXZArxtpi8AWA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_98_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/99/image/image.jpg?Expires=1776732223&Signature=SvUaNA8NxEe2HV5upwZJyDBKUQA8oJGmQzlMd1vk1Tt2STVnu1~7tp666rYtvkmTqd1lvX9a9OkxXTtPRgQcgdPEOTEmXYsVwDGRuVMNC0w7RPplMoWJa5mLzJHlUx2z0tD5T5PtuYQVuPAn~lQMOUtcB640KNx4so77vc4eVY14~WaDUg5hwNMbDA63D2Z1mlYKuPeqRqgEz4UKlLOkMHIdtPnoCNG63NpIewRWNyGSX~f8m172blXw~gxuhieOGIZcHJPeS2Angtj4Fw5MNY6bRPYNEZb--B63PeSKqJTU0HqI0Xk6GpqIB6z6F5~bd1lTdPTtyCzCropQcXm29Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000099.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 99,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/99/image/image.jpg?Expires=1776732223&Signature=SvUaNA8NxEe2HV5upwZJyDBKUQA8oJGmQzlMd1vk1Tt2STVnu1~7tp666rYtvkmTqd1lvX9a9OkxXTtPRgQcgdPEOTEmXYsVwDGRuVMNC0w7RPplMoWJa5mLzJHlUx2z0tD5T5PtuYQVuPAn~lQMOUtcB640KNx4so77vc4eVY14~WaDUg5hwNMbDA63D2Z1mlYKuPeqRqgEz4UKlLOkMHIdtPnoCNG63NpIewRWNyGSX~f8m172blXw~gxuhieOGIZcHJPeS2Angtj4Fw5MNY6bRPYNEZb--B63PeSKqJTU0HqI0Xk6GpqIB6z6F5~bd1lTdPTtyCzCropQcXm29Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_99_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/100/image/image.jpg?Expires=1776732224&Signature=ofKRoVc9DEBRjkQgo~a460unnVmBI6TkLIHQmOmdQFFOD9aFIZtExLZ0-k7RNmZhWsjpiwrYxbp-bUCVdJn9KfU8cG5ZvKzBmSFdOZPcjG06I6p9KQjA~PD09BWECHMZNBcdGBa4IN37JccHkpH~AKE526CQl~smJLiqmS0d70Sfyjkc0uabfL956kgx5xr8sbIogcv4Z7HXoTW3H3kyFtm5g1U9oJQhGw2o2GNIYbaxYQRjDbi9HX5027NUYpudyaZl7GR9qZ4Xc5Lg91qP6WJevS-H9i-RpYwXcLLpmFTjSBMyAeHZQ-RSaWNrTP38TZqkSb6RIXvMvAktXvmznw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000100.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 0,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/100/image/image.jpg?Expires=1776732224&Signature=ofKRoVc9DEBRjkQgo~a460unnVmBI6TkLIHQmOmdQFFOD9aFIZtExLZ0-k7RNmZhWsjpiwrYxbp-bUCVdJn9KfU8cG5ZvKzBmSFdOZPcjG06I6p9KQjA~PD09BWECHMZNBcdGBa4IN37JccHkpH~AKE526CQl~smJLiqmS0d70Sfyjkc0uabfL956kgx5xr8sbIogcv4Z7HXoTW3H3kyFtm5g1U9oJQhGw2o2GNIYbaxYQRjDbi9HX5027NUYpudyaZl7GR9qZ4Xc5Lg91qP6WJevS-H9i-RpYwXcLLpmFTjSBMyAeHZQ-RSaWNrTP38TZqkSb6RIXvMvAktXvmznw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_0_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/101/image/image.jpg?Expires=1776732224&Signature=qVRxPS-mdpJp042FnWFgrBssJJcv10RtcpOZGRZFqzLJKuVRF9XyrOXO-yJ0eLNkjhGXUHCWgSR6EPZugLhjI2-WzGQ8M9zpfJyGwJQ6oW2meo4dUFPAe~xVgYjS1G9Msm~SjsTKp6J8D8gd9KRWES1AcFIS8Yl5lqt4JudRXLpJiC3ur5ByRM30iOpW9IwDXyyeKileah3SDwEEjl4fE0V1xg0fPmIbGFjpL40sTuZ8YqT2PiwNeohMy7oAagn5FfjDxktH4Q63y7mxocbsNTchJLPUgFTAJHJ2HZpsCrIBPCSORfZVTs~f0JwfpAEmm-yXVykQiHy8X-uNNGo6fQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000101.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 1,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/101/image/image.jpg?Expires=1776732224&Signature=qVRxPS-mdpJp042FnWFgrBssJJcv10RtcpOZGRZFqzLJKuVRF9XyrOXO-yJ0eLNkjhGXUHCWgSR6EPZugLhjI2-WzGQ8M9zpfJyGwJQ6oW2meo4dUFPAe~xVgYjS1G9Msm~SjsTKp6J8D8gd9KRWES1AcFIS8Yl5lqt4JudRXLpJiC3ur5ByRM30iOpW9IwDXyyeKileah3SDwEEjl4fE0V1xg0fPmIbGFjpL40sTuZ8YqT2PiwNeohMy7oAagn5FfjDxktH4Q63y7mxocbsNTchJLPUgFTAJHJ2HZpsCrIBPCSORfZVTs~f0JwfpAEmm-yXVykQiHy8X-uNNGo6fQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_1_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/102/image/image.jpg?Expires=1776732224&Signature=BsTyoxEsQf4OGHYxmCUcnPQWtFgDNbhb~6axZLhEEf2QHVKtezBsUlOTquH1o0bsgasHn58UzhDkS9pwydBc4XjmNefCb82L-iC5~auyMRsLHWEj-xY~ht9PA107DDy9ka6sfHRy7tWyuLyADKFkx9H~OsLbNotnlsG-bivvKYj-7h4VqgjiyibCz4WUXRn7klvbi0-ZBtYJ8fdGSDS5pUZ3G3WOy7PBny2ar8LQorKyO-lHWOc41xJ6zjVyvvQvI4CRwamFZQdz1yDaWrZTslXUepxx328B60rYXesgl8KY-Qee683aVfItHKGFkE3yau0i9Prvoxrq2zPXI-IugA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000102.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 2,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/102/image/image.jpg?Expires=1776732224&Signature=BsTyoxEsQf4OGHYxmCUcnPQWtFgDNbhb~6axZLhEEf2QHVKtezBsUlOTquH1o0bsgasHn58UzhDkS9pwydBc4XjmNefCb82L-iC5~auyMRsLHWEj-xY~ht9PA107DDy9ka6sfHRy7tWyuLyADKFkx9H~OsLbNotnlsG-bivvKYj-7h4VqgjiyibCz4WUXRn7klvbi0-ZBtYJ8fdGSDS5pUZ3G3WOy7PBny2ar8LQorKyO-lHWOc41xJ6zjVyvvQvI4CRwamFZQdz1yDaWrZTslXUepxx328B60rYXesgl8KY-Qee683aVfItHKGFkE3yau0i9Prvoxrq2zPXI-IugA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_2_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/103/image/image.jpg?Expires=1776732224&Signature=clRwmzDkHUJRlBRWDIkT~AUuegms2-AuVLmnhmsBOuF2mfOBdw3xrmjPcxINYQrR8tazCe502F9bIy~9noEsHqBB-Zh9JtBZmFY~mjWE6RmwE6HVPES-VdKSFDfj32ZLCWIAsjhSx9h0EgNn1tv656wBZYyLE8LRyqG-6kYomeJIfziMXLuGYCMAbdAZdMioM0~bdTSv6BfvpC3y43ZDNcEgqopMiWrBFWukwGJWBNmkdi18G-tu3P3by55ySvNScJMcFNDb6unYhjqX08RAijjUFOG6yMIgbrGFueqGMkEZGqdyeq2wqdFLwt47QuvEZRPpW0IZ6DdobQXe-wxtFA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000103.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 3,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/103/image/image.jpg?Expires=1776732224&Signature=clRwmzDkHUJRlBRWDIkT~AUuegms2-AuVLmnhmsBOuF2mfOBdw3xrmjPcxINYQrR8tazCe502F9bIy~9noEsHqBB-Zh9JtBZmFY~mjWE6RmwE6HVPES-VdKSFDfj32ZLCWIAsjhSx9h0EgNn1tv656wBZYyLE8LRyqG-6kYomeJIfziMXLuGYCMAbdAZdMioM0~bdTSv6BfvpC3y43ZDNcEgqopMiWrBFWukwGJWBNmkdi18G-tu3P3by55ySvNScJMcFNDb6unYhjqX08RAijjUFOG6yMIgbrGFueqGMkEZGqdyeq2wqdFLwt47QuvEZRPpW0IZ6DdobQXe-wxtFA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_3_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/104/image/image.jpg?Expires=1776732224&Signature=NMZMWxP13aP-2UqtSmBLXTelX71ZhW7w4PgGwUXtvGiuZN~38X2YgW491z9CsEzVSkDuiVLPXyBLFOGSLD22VoXpX5GR9TP0CaNwTTE8NVelPS~hp8nSgaxEtnvAhr~9waLD1FLjH-f5FiCvHMOPbZaVI7UEIunRXNxJQ7TNRvcChjFJQKJSN2yiCwlupKpkXFfPRwMyxP6y3KIqv00dApsE0GrH7UtzcWTilLmAhDYd0TbIfgMML-RWW9lyDLUCBooLm6qtQEWhbDZRuOMmWfTNdHft5aLC-nrbr3IYXYbMqp2fJ6HuFnyTsKYGxFJUI7vmoz~73XkxLPa4AUDXiw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000104.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 4,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/104/image/image.jpg?Expires=1776732224&Signature=NMZMWxP13aP-2UqtSmBLXTelX71ZhW7w4PgGwUXtvGiuZN~38X2YgW491z9CsEzVSkDuiVLPXyBLFOGSLD22VoXpX5GR9TP0CaNwTTE8NVelPS~hp8nSgaxEtnvAhr~9waLD1FLjH-f5FiCvHMOPbZaVI7UEIunRXNxJQ7TNRvcChjFJQKJSN2yiCwlupKpkXFfPRwMyxP6y3KIqv00dApsE0GrH7UtzcWTilLmAhDYd0TbIfgMML-RWW9lyDLUCBooLm6qtQEWhbDZRuOMmWfTNdHft5aLC-nrbr3IYXYbMqp2fJ6HuFnyTsKYGxFJUI7vmoz~73XkxLPa4AUDXiw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_4_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/105/image/image.jpg?Expires=1776732224&Signature=TY3-~RN2bFuonSMeuVnWzIT9ucyayrz1S2Dx97hNCqnpRT-ahS~yZXoQPWyFHmQQJ5xkZyNRSfVgq07zlQIST1Ffy-N3cek2IAaJYn6eJ1C1CLkG4RfEhqQlhfiZh9vnXbFuSBEhG8V26p1pT7UOf-lYuU7~jFxN74-yQCk3lQJVSaJDrY4voCdPfjZSz1gyLV4TvUY9Dxsu7DiyC3jJSRbopCIxQCln1nsyaVgMqpoGstZp-J9icVUQruXKb-Lda-gHTWH7ZU2bV6rUlD8wOQwDeluh8bID-SU7APzTo0RmlihF8VhisNntsTVi5QPmsM5SOEy9tV09hXdx91s4dA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000105.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 5,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/105/image/image.jpg?Expires=1776732224&Signature=TY3-~RN2bFuonSMeuVnWzIT9ucyayrz1S2Dx97hNCqnpRT-ahS~yZXoQPWyFHmQQJ5xkZyNRSfVgq07zlQIST1Ffy-N3cek2IAaJYn6eJ1C1CLkG4RfEhqQlhfiZh9vnXbFuSBEhG8V26p1pT7UOf-lYuU7~jFxN74-yQCk3lQJVSaJDrY4voCdPfjZSz1gyLV4TvUY9Dxsu7DiyC3jJSRbopCIxQCln1nsyaVgMqpoGstZp-J9icVUQruXKb-Lda-gHTWH7ZU2bV6rUlD8wOQwDeluh8bID-SU7APzTo0RmlihF8VhisNntsTVi5QPmsM5SOEy9tV09hXdx91s4dA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_5_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/106/image/image.jpg?Expires=1776732224&Signature=XT6kdLty1DKk9NmNP7MV1hMzb2e8tclEFpCykzh-5emVLAWedsRUerZBdFuaJXo-wm7~OqCiUxJ7VYTxCCc4lkxnDKGMsnUHVy8dwX7Y1DF6jTrV5Ns7P0kUSb9KN-BCwxxcKgJqlH--1~ypNqCd5WtStLppfqCPOGNJc7CIxnJwOzK5gBcVQ4SduNalYv-yx2x~PLjHaRDPbcQY9uJnseB36JxbXgCKPytemVpfGeVCaXRQs3GycM3MocQl7Wi6RfI-id8p-3P94iFHedJgD10m8vSLzz-ho0Dp2Xi4TO2aoCLZmROGOeipc4jChsFI~dTf~8fEXCgXau~V9EuQBA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000106.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 6,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/106/image/image.jpg?Expires=1776732224&Signature=XT6kdLty1DKk9NmNP7MV1hMzb2e8tclEFpCykzh-5emVLAWedsRUerZBdFuaJXo-wm7~OqCiUxJ7VYTxCCc4lkxnDKGMsnUHVy8dwX7Y1DF6jTrV5Ns7P0kUSb9KN-BCwxxcKgJqlH--1~ypNqCd5WtStLppfqCPOGNJc7CIxnJwOzK5gBcVQ4SduNalYv-yx2x~PLjHaRDPbcQY9uJnseB36JxbXgCKPytemVpfGeVCaXRQs3GycM3MocQl7Wi6RfI-id8p-3P94iFHedJgD10m8vSLzz-ho0Dp2Xi4TO2aoCLZmROGOeipc4jChsFI~dTf~8fEXCgXau~V9EuQBA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_6_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/107/image/image.jpg?Expires=1776732224&Signature=M-8cI0zoFWvxUoaX2gAG52OiUWVwkEIaOtSsjom6eZhY~Ee98QfE0IJ6ROPx4l5ruvI-zqt3aslaKndUTqyr5ssyjszTGx4XVJxrGou8kfIC2-fBgIa6bhrUGWl2EXE-95mt95evneHEHa58IdB~jjBvs6kRGhmMmuIJ0GHnXPmveeAeFrQuXgPq5hfwThPEQhq3d5l~28lfN~HDFuYLoeQMCJbdnnbuNHG9j6PsSMUDHj7ilos0r4ZaCXpCqnzCDWLwU2lwJuYf~GKCVcraZm17iR2vEMmrwP~94qwnLt3ATWFGIBKJMK-8NMTYDdKYEub3WF5VUzpShhFeTC7XNg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000107.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 7,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/107/image/image.jpg?Expires=1776732224&Signature=M-8cI0zoFWvxUoaX2gAG52OiUWVwkEIaOtSsjom6eZhY~Ee98QfE0IJ6ROPx4l5ruvI-zqt3aslaKndUTqyr5ssyjszTGx4XVJxrGou8kfIC2-fBgIa6bhrUGWl2EXE-95mt95evneHEHa58IdB~jjBvs6kRGhmMmuIJ0GHnXPmveeAeFrQuXgPq5hfwThPEQhq3d5l~28lfN~HDFuYLoeQMCJbdnnbuNHG9j6PsSMUDHj7ilos0r4ZaCXpCqnzCDWLwU2lwJuYf~GKCVcraZm17iR2vEMmrwP~94qwnLt3ATWFGIBKJMK-8NMTYDdKYEub3WF5VUzpShhFeTC7XNg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_7_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/108/image/image.jpg?Expires=1776732224&Signature=ChmM4K1peazZuRBxXa~t3ILG5ZiK9VRduu2vH2mIhfACcESVa6QuC4YQ-4xOmzDRqMT0NJdko3RrQRduwk8klP95hxTvaVagP~armleD76U3c5Zc06LhXdR-QX5hcych5sC7PZncJc9RqlQvk3h41n-n6FLSIxQAmKfjnvZ30b47nmHR7ux8O95cXCRywMEr6ac2IxJHSXpkj~QyHj8rdfCXwEeb0zFUdbvh6zgvygmtrK0ZJzILTQGRbLhB35YAVs1K3z-pWaOLCsZVuf9akjxa0bFSGSTQenuKRc91XQduGvD58KE76nwByOFnXMrtScr~-zF6X4rUW9nlUc-pJw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000108.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 8,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/108/image/image.jpg?Expires=1776732224&Signature=ChmM4K1peazZuRBxXa~t3ILG5ZiK9VRduu2vH2mIhfACcESVa6QuC4YQ-4xOmzDRqMT0NJdko3RrQRduwk8klP95hxTvaVagP~armleD76U3c5Zc06LhXdR-QX5hcych5sC7PZncJc9RqlQvk3h41n-n6FLSIxQAmKfjnvZ30b47nmHR7ux8O95cXCRywMEr6ac2IxJHSXpkj~QyHj8rdfCXwEeb0zFUdbvh6zgvygmtrK0ZJzILTQGRbLhB35YAVs1K3z-pWaOLCsZVuf9akjxa0bFSGSTQenuKRc91XQduGvD58KE76nwByOFnXMrtScr~-zF6X4rUW9nlUc-pJw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_8_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/109/image/image.jpg?Expires=1776732224&Signature=hXYvrPDDPHeBvgoeWOPxQqvxnSpDI11iXrtTuWKGnLzDaSKmbRR7k8YOZwoELXqflzA01Yts0VG0iQC5sTNRwAPkLBOuMMiwJ3PNYEwP6qZ~nHU4Rz-sPmnu7NJx47JnWytA2kl12FJ1rfOyUpOtD6R7XFNkmB~gD0ZcVTV6YWBvs6KOOHwnKEzNeSY-l46uMmi4wMGxcLOol-wTwFgAb5yVlH7OINXrq3Xvv3JKiJTVeWJdC3oh5wQk01DnVByaIWwp~oUZKdsXoZ7cBnDLweL~H0LBIaHUkghLGBRiR1HMWHHSR6FJx1IsCmPgrXMr1sA69KMmJAfJtHAhGgxBKg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000109.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 9,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/109/image/image.jpg?Expires=1776732224&Signature=hXYvrPDDPHeBvgoeWOPxQqvxnSpDI11iXrtTuWKGnLzDaSKmbRR7k8YOZwoELXqflzA01Yts0VG0iQC5sTNRwAPkLBOuMMiwJ3PNYEwP6qZ~nHU4Rz-sPmnu7NJx47JnWytA2kl12FJ1rfOyUpOtD6R7XFNkmB~gD0ZcVTV6YWBvs6KOOHwnKEzNeSY-l46uMmi4wMGxcLOol-wTwFgAb5yVlH7OINXrq3Xvv3JKiJTVeWJdC3oh5wQk01DnVByaIWwp~oUZKdsXoZ7cBnDLweL~H0LBIaHUkghLGBRiR1HMWHHSR6FJx1IsCmPgrXMr1sA69KMmJAfJtHAhGgxBKg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_9_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/110/image/image.jpg?Expires=1776732224&Signature=g2ZIkkL1m0I7PVM8JgoAKtcn~6XmlLhm2nh3QiPm3tKZTCUNutmP0tdT2oBKQhbUNQENThComDfGFrkUK2oqRK8GwCMXlNyS6T08oW7aJC4vsMuO21IzRBZJYXWacP0G9tDKwJ~-bdC~-KrDCscBTNSYNK6iFpokXobGRB-zKTXnLvcUiUeBBNnofbEdKwJV08qYxZD7~l1X7g~YT4EpV35hy6L2CSCK3FQcXTsdpbPjaaYAwMd1JUa9KmMM9oLw52FSk15rZTACauTQ9su3ni6hOMmLtbg8gGvkZXl3wsOQLW9XYx5JVABuI-bLbQ~80Fj-iAHCvHIydjSk9qpIcA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000110.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 10,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/110/image/image.jpg?Expires=1776732224&Signature=g2ZIkkL1m0I7PVM8JgoAKtcn~6XmlLhm2nh3QiPm3tKZTCUNutmP0tdT2oBKQhbUNQENThComDfGFrkUK2oqRK8GwCMXlNyS6T08oW7aJC4vsMuO21IzRBZJYXWacP0G9tDKwJ~-bdC~-KrDCscBTNSYNK6iFpokXobGRB-zKTXnLvcUiUeBBNnofbEdKwJV08qYxZD7~l1X7g~YT4EpV35hy6L2CSCK3FQcXTsdpbPjaaYAwMd1JUa9KmMM9oLw52FSk15rZTACauTQ9su3ni6hOMmLtbg8gGvkZXl3wsOQLW9XYx5JVABuI-bLbQ~80Fj-iAHCvHIydjSk9qpIcA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_10_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/111/image/image.jpg?Expires=1776732224&Signature=DAxFrM5aXmUwlIm7MREdKZ4Xcodsjil97CSX8y8m2vSsqdm7QTJj4md2pJcS6tNv96OK7rOaBCigGAsjZUSv7mOKlZlEf7dazix-hteCM7gilm2cGWIW2H7-fTM4VSb070TPNDVGmYx-vcFQ9O13rghYvB4OA2bktJ1FjiJYddbPOmmm0qkPPcljjkpBqM3qgMUeHy6rukikq0ugTKg7eqw6orA7G3BApP62Vp~xmu1PF6Mxxo9G-uBxtLUQnWNC2umqPL4Zta~dQxVu-cklaLuSHYJNjaSZGQAd4dqwrMc1~MFODU-tLPWon35Fke7xCPNgI1nMeKFyqifT8f3nwg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000111.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 11,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/111/image/image.jpg?Expires=1776732224&Signature=DAxFrM5aXmUwlIm7MREdKZ4Xcodsjil97CSX8y8m2vSsqdm7QTJj4md2pJcS6tNv96OK7rOaBCigGAsjZUSv7mOKlZlEf7dazix-hteCM7gilm2cGWIW2H7-fTM4VSb070TPNDVGmYx-vcFQ9O13rghYvB4OA2bktJ1FjiJYddbPOmmm0qkPPcljjkpBqM3qgMUeHy6rukikq0ugTKg7eqw6orA7G3BApP62Vp~xmu1PF6Mxxo9G-uBxtLUQnWNC2umqPL4Zta~dQxVu-cklaLuSHYJNjaSZGQAd4dqwrMc1~MFODU-tLPWon35Fke7xCPNgI1nMeKFyqifT8f3nwg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_11_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/112/image/image.jpg?Expires=1776732224&Signature=YMESAZpkV8B5QOHGcFAyQ08M1qDyU0u9SZUcE8S6gxw4LZsmR-qkh6VYQsrmz4hQeuxNvummIYLt4v37cOl3OyLZxRnkqPv2LthFbCZ35qufiCv4ZdUOmEaQygHEAY7Z7UFXMeoO7K~quv2yudrYMfvrhnAmQXXWO4k6Rj8kSHXBUQN9s330068b~oGGZtx5akJuc3CsfwcEbZkUbFt8IzhAw6zUR1OVXo2~hhHTCK-SccnKi2j2w9rFuInqTC-Yntifa3trsrj4B09T9qw-W7Wd59U6BzqAoXgesrqy0orh2okRU2XPnl9flCEUNcFa~1c-XLFZLzS1UX68pda8kQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000112.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 12,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/112/image/image.jpg?Expires=1776732224&Signature=YMESAZpkV8B5QOHGcFAyQ08M1qDyU0u9SZUcE8S6gxw4LZsmR-qkh6VYQsrmz4hQeuxNvummIYLt4v37cOl3OyLZxRnkqPv2LthFbCZ35qufiCv4ZdUOmEaQygHEAY7Z7UFXMeoO7K~quv2yudrYMfvrhnAmQXXWO4k6Rj8kSHXBUQN9s330068b~oGGZtx5akJuc3CsfwcEbZkUbFt8IzhAw6zUR1OVXo2~hhHTCK-SccnKi2j2w9rFuInqTC-Yntifa3trsrj4B09T9qw-W7Wd59U6BzqAoXgesrqy0orh2okRU2XPnl9flCEUNcFa~1c-XLFZLzS1UX68pda8kQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_12_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/113/image/image.jpg?Expires=1776732224&Signature=hmBPW95wvlmd7vgDbBEwJUpPRhi6ThAosLn6OOHzFs3HX9tr0y0cuapVGyhzej5HeTlm9xFVooOSxqaqbHxcs1~dewgVRdjPUMp0DgUerYGrJ0lHD~IOB9s3JypDOqREH-JfIT6fdYRPNsca4IlW4Qn3w082FABNy-STmQ8qVvW~1~bLZO6babeOfkdG8-HZUfnA6sVEKbnaomx2w8YqRnWY9uyOTiValiPIwyqaIlJvfPwZRboamtP4wg1aczQlIn7uzVMy42AMNFuflZxByqaPPnmlV4q0o~XSAxXZZNycxkgAy-q2hO8-u5F4eFE0KUOgs~PbdWAVLHEe3GGkZA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000113.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 13,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/113/image/image.jpg?Expires=1776732224&Signature=hmBPW95wvlmd7vgDbBEwJUpPRhi6ThAosLn6OOHzFs3HX9tr0y0cuapVGyhzej5HeTlm9xFVooOSxqaqbHxcs1~dewgVRdjPUMp0DgUerYGrJ0lHD~IOB9s3JypDOqREH-JfIT6fdYRPNsca4IlW4Qn3w082FABNy-STmQ8qVvW~1~bLZO6babeOfkdG8-HZUfnA6sVEKbnaomx2w8YqRnWY9uyOTiValiPIwyqaIlJvfPwZRboamtP4wg1aczQlIn7uzVMy42AMNFuflZxByqaPPnmlV4q0o~XSAxXZZNycxkgAy-q2hO8-u5F4eFE0KUOgs~PbdWAVLHEe3GGkZA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_13_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/114/image/image.jpg?Expires=1776732224&Signature=ETEqyuf985tMaUdk4KVqoLw9BO2YXVmot9hvhyeFI~BDlsNRvtDjqE4LBY1-dW~~YxobtM5HN8A1mq6h0zfSW2pIxMlg26BUzFY8XHsAdi3E7EUtqxeuLaeH2JIivdlkx8sjg54UfmqPhuCVj3nVoqlJx7MiV2piadm0l9d9tMG2FfABPjlW04KopJF6~hSHm9s7qSJI8fmbUIjrWegcjLYf05WHZnzZFt2byodl7ZOHSjDFlWufr6QV5XEgap9L8mbmne10z-J6BOiM6yReuNPTeD2EY20NWRlOlenwjtVn8qkROLltseku0wk2PGGrlMpzXMtwIveNyZxqWnwBcA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000114.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 14,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/114/image/image.jpg?Expires=1776732224&Signature=ETEqyuf985tMaUdk4KVqoLw9BO2YXVmot9hvhyeFI~BDlsNRvtDjqE4LBY1-dW~~YxobtM5HN8A1mq6h0zfSW2pIxMlg26BUzFY8XHsAdi3E7EUtqxeuLaeH2JIivdlkx8sjg54UfmqPhuCVj3nVoqlJx7MiV2piadm0l9d9tMG2FfABPjlW04KopJF6~hSHm9s7qSJI8fmbUIjrWegcjLYf05WHZnzZFt2byodl7ZOHSjDFlWufr6QV5XEgap9L8mbmne10z-J6BOiM6yReuNPTeD2EY20NWRlOlenwjtVn8qkROLltseku0wk2PGGrlMpzXMtwIveNyZxqWnwBcA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_14_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/115/image/image.jpg?Expires=1776732224&Signature=H3VYv3sI6Xc~96P2KWDY27LsvAiyw3MMU5SqvxR2nsFSCWUgui~7aN~5JxktBLeTustUcdCgni395BwPJXXVungLZ7gIV~rRlEAgL-1336rQcxTAxJwJknl4RA0hOyxnne52VhVC5g9ouqJrA8N3gQU22p4Ryvcf4Bn9jufkE1Q-d64CKTvIBagXhgrdoUB4HEeThY9MK3EoH~WRQRY42-KKOj503pgyLe9M73llmjVxYusjQK~hz32CeLGqS3FUOGZiAy0lNb-vOVmqyGsryMmjD0-AklhGPm6Tx9B3C15~B9T1AR~20VnjFmMzN3UEFtMHxnX68-KesIwohK3kTw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000115.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 15,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/115/image/image.jpg?Expires=1776732224&Signature=H3VYv3sI6Xc~96P2KWDY27LsvAiyw3MMU5SqvxR2nsFSCWUgui~7aN~5JxktBLeTustUcdCgni395BwPJXXVungLZ7gIV~rRlEAgL-1336rQcxTAxJwJknl4RA0hOyxnne52VhVC5g9ouqJrA8N3gQU22p4Ryvcf4Bn9jufkE1Q-d64CKTvIBagXhgrdoUB4HEeThY9MK3EoH~WRQRY42-KKOj503pgyLe9M73llmjVxYusjQK~hz32CeLGqS3FUOGZiAy0lNb-vOVmqyGsryMmjD0-AklhGPm6Tx9B3C15~B9T1AR~20VnjFmMzN3UEFtMHxnX68-KesIwohK3kTw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_15_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/116/image/image.jpg?Expires=1776732224&Signature=PJNeK2okZlR0~52eJSdHQrQjLfBXWHAHIhPi1a6LSUFNeoSKpM-S1g7i9K0FAnNMOdVg5LWEMJ2gkVmUNzodqkZKVDjFMwTxxAlgdeHlQjE90Edl5ccIEuL-D6EQHQML6oKP9VZO3iBhyBfOEm4c~X278euIdfBgzQ5SvOvtxv5tO2KrhiZp6NVdQp0fvFLdegd3YqvQBiNAsvHrHW~3F5mQfKEl04RToHT8rH70jIHePAl8rK-kNSSwL-rzJ9MwEOUEiw1g1r25fl85JWP045OjTqa4ya2ElmlYKWEYcC42BLeY8~qqAmI3p96yETHZFRWjv9qLhVCvmtRyvWcGlA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000116.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 16,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/116/image/image.jpg?Expires=1776732224&Signature=PJNeK2okZlR0~52eJSdHQrQjLfBXWHAHIhPi1a6LSUFNeoSKpM-S1g7i9K0FAnNMOdVg5LWEMJ2gkVmUNzodqkZKVDjFMwTxxAlgdeHlQjE90Edl5ccIEuL-D6EQHQML6oKP9VZO3iBhyBfOEm4c~X278euIdfBgzQ5SvOvtxv5tO2KrhiZp6NVdQp0fvFLdegd3YqvQBiNAsvHrHW~3F5mQfKEl04RToHT8rH70jIHePAl8rK-kNSSwL-rzJ9MwEOUEiw1g1r25fl85JWP045OjTqa4ya2ElmlYKWEYcC42BLeY8~qqAmI3p96yETHZFRWjv9qLhVCvmtRyvWcGlA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_16_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/117/image/image.jpg?Expires=1776732224&Signature=ex1l5lWpmW~L7MFQ87qRH7X1VwaoSkGjoHNHEOFvsDFZwvvdtkFH~PdXxZxD4nWGTkscUKFXdWSWE6VhW~lmWk2ilcgkiODhdYGKpdAFN7DwkZSoph~MN8OHV~6BSAcl5po4XHOsCp1AnJ1ZoyH40q9YnFMngO6r316WbTAjrhzaPVRmNxuPa~fePhXAd8fbNOPkVkaRXupjEn3JvvFxEqUnqLqBP9PCZ3uZTa2f4K8diVqmq5UfCKRPf5mhSnnrd3uUyaLy4GP5TCvIbKr4UnQn2lUBqgbiNBgZo-1sw45edoWqsOFv5a-OUp6ZS5LsLmS9olaMhDoavVjTCOMpHg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000117.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 17,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/117/image/image.jpg?Expires=1776732224&Signature=ex1l5lWpmW~L7MFQ87qRH7X1VwaoSkGjoHNHEOFvsDFZwvvdtkFH~PdXxZxD4nWGTkscUKFXdWSWE6VhW~lmWk2ilcgkiODhdYGKpdAFN7DwkZSoph~MN8OHV~6BSAcl5po4XHOsCp1AnJ1ZoyH40q9YnFMngO6r316WbTAjrhzaPVRmNxuPa~fePhXAd8fbNOPkVkaRXupjEn3JvvFxEqUnqLqBP9PCZ3uZTa2f4K8diVqmq5UfCKRPf5mhSnnrd3uUyaLy4GP5TCvIbKr4UnQn2lUBqgbiNBgZo-1sw45edoWqsOFv5a-OUp6ZS5LsLmS9olaMhDoavVjTCOMpHg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_17_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/118/image/image.jpg?Expires=1776732224&Signature=rrRLuGzj1n1ClBKz6summIgvLO4TNdKSwRb-7fg5x78SnDUOo-px~rsZsfq0ACtJAkpUTszogTwVqChx25ltQ50IYP0DwBtX4z44sc6CpjehBvDujwB2AHWXEERgvRM2mkGwZnwQKsHPw6f9EfM22HvezbxWwP~GvGemazri3UMAdwPb8Tf4JVK~vZbrxxliKRcWCx9h6DTfJtCu2eMo8aqnoVbGFk-nMK2F7FAwNb8qb3vNNGHlH6twp-yu81rSURTJIC4XsInrEa498kJCPBsW4eLRzWVnSGPS6J39SmMBrUYboZFNhy1bctO7he3QlulZx6sni6yp9PsEOskbcQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000118.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 18,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/118/image/image.jpg?Expires=1776732224&Signature=rrRLuGzj1n1ClBKz6summIgvLO4TNdKSwRb-7fg5x78SnDUOo-px~rsZsfq0ACtJAkpUTszogTwVqChx25ltQ50IYP0DwBtX4z44sc6CpjehBvDujwB2AHWXEERgvRM2mkGwZnwQKsHPw6f9EfM22HvezbxWwP~GvGemazri3UMAdwPb8Tf4JVK~vZbrxxliKRcWCx9h6DTfJtCu2eMo8aqnoVbGFk-nMK2F7FAwNb8qb3vNNGHlH6twp-yu81rSURTJIC4XsInrEa498kJCPBsW4eLRzWVnSGPS6J39SmMBrUYboZFNhy1bctO7he3QlulZx6sni6yp9PsEOskbcQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_18_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/119/image/image.jpg?Expires=1776732224&Signature=mvedfiPi8LZ55W7GUkX2gzgmZrMkbc0cOPbaujqyZl1yTjSo3A3Lh3dFogy3pZMLDDj2KFA6dKPjjh~nyEetQOn6hzHV1WxE3wcoOWq-qC8NJq9-6DPo1S-Q5wmryHvQBs2t~nSmCtfFwWSnjvlsl7a~m-pOq1nMUDtgvtxmT2DW-sOu4THAuc8B5hOe-tEGEPrLVVYpRM-ogiRay3M~QDw-ciAC3pYUfJ-JAay9zPSG20dcSVbJiQ1YuWTKasImVAF0GvzYYKB3HgOVqKUKXCm9L0tMISK0Za~IlQKmo--2rTpV1BEaAD1K27KhQIjX-X5m6q401SqLsESKpLAX-g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000119.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 19,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/119/image/image.jpg?Expires=1776732224&Signature=mvedfiPi8LZ55W7GUkX2gzgmZrMkbc0cOPbaujqyZl1yTjSo3A3Lh3dFogy3pZMLDDj2KFA6dKPjjh~nyEetQOn6hzHV1WxE3wcoOWq-qC8NJq9-6DPo1S-Q5wmryHvQBs2t~nSmCtfFwWSnjvlsl7a~m-pOq1nMUDtgvtxmT2DW-sOu4THAuc8B5hOe-tEGEPrLVVYpRM-ogiRay3M~QDw-ciAC3pYUfJ-JAay9zPSG20dcSVbJiQ1YuWTKasImVAF0GvzYYKB3HgOVqKUKXCm9L0tMISK0Za~IlQKmo--2rTpV1BEaAD1K27KhQIjX-X5m6q401SqLsESKpLAX-g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_19_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/120/image/image.jpg?Expires=1776732224&Signature=Lhj7UKJmuuoIriAKlkFxtqwTqVpnL1KJ3h4QbTsNv3pYSvKTdwhFdyJvZM5ACEGccLJksngBSohUT43aYsld6AsJhawk4zU7BOsEj25A1fOtQfqxwk7ICXdQ0JqxkRfHQdTI1zWPktE~NUaiNomTgzMI7mPxWPdzL8bf62da5GHsjyXhcdqCMRbxAmbtE5W13MWnNe1SEE7ENfe9zFyKvlz-evBM306y20FyZ8aqmMETYrLpttEZsHfvf7KZLEQUUJ4IY4J1MW7fm7G92YCEDXey4kc11zV08xDMb34WyFio7ui6fiF~g55clNgt1pjI4Lgbjim2kU5V04m0cGEe0g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000120.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 20,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/120/image/image.jpg?Expires=1776732224&Signature=Lhj7UKJmuuoIriAKlkFxtqwTqVpnL1KJ3h4QbTsNv3pYSvKTdwhFdyJvZM5ACEGccLJksngBSohUT43aYsld6AsJhawk4zU7BOsEj25A1fOtQfqxwk7ICXdQ0JqxkRfHQdTI1zWPktE~NUaiNomTgzMI7mPxWPdzL8bf62da5GHsjyXhcdqCMRbxAmbtE5W13MWnNe1SEE7ENfe9zFyKvlz-evBM306y20FyZ8aqmMETYrLpttEZsHfvf7KZLEQUUJ4IY4J1MW7fm7G92YCEDXey4kc11zV08xDMb34WyFio7ui6fiF~g55clNgt1pjI4Lgbjim2kU5V04m0cGEe0g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_20_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/121/image/image.jpg?Expires=1776732224&Signature=q80ZqP4Ru866D8mFcPMIh0qCbvueEzhVVX4OL~r7WdpFnGT~dsdWPJSivi3snYaL2bDBGZUY1WFh57ucNn7JeS~~~XeBgp563HV61ZHZC3gBrEW3HMplYFfGJ~sCWo6irzRX1ETQT8E-YPP1Z2TOfjOVX-2xKBuc1QFOGnlsYe5IsWdXqI702~oe776nW-XeTkkmVkNMkTiHn1QL~G83I~saRLfj4X1STFdkWUsm2xAEGEkXC1K-24bMmfXm7Y26T7ZcH8J9axNPRtJNPATBUzbqGYZG-5r4xJ6NtjXyMKUHmYiBKtTz~JfZOsePEVx6i-9wZ~SZ1JRPZHuy1vZr7g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000121.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 21,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/121/image/image.jpg?Expires=1776732224&Signature=q80ZqP4Ru866D8mFcPMIh0qCbvueEzhVVX4OL~r7WdpFnGT~dsdWPJSivi3snYaL2bDBGZUY1WFh57ucNn7JeS~~~XeBgp563HV61ZHZC3gBrEW3HMplYFfGJ~sCWo6irzRX1ETQT8E-YPP1Z2TOfjOVX-2xKBuc1QFOGnlsYe5IsWdXqI702~oe776nW-XeTkkmVkNMkTiHn1QL~G83I~saRLfj4X1STFdkWUsm2xAEGEkXC1K-24bMmfXm7Y26T7ZcH8J9axNPRtJNPATBUzbqGYZG-5r4xJ6NtjXyMKUHmYiBKtTz~JfZOsePEVx6i-9wZ~SZ1JRPZHuy1vZr7g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_21_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/122/image/image.jpg?Expires=1776732224&Signature=nJF5GSMgC-L5WWizbAZgMIEL-gJiIiCVLk~QqIqdHAzeMg7Nr3Sgpz3LmPV9XyJ262-7ngmVxokMTEfM7QbWwF7MbWqw2ZXxkBVXc3kIGUXUVFWnV1lR6GRAWdQLWV00Gqi9FFWhCaAm0wvHa1ACx0m~~R4Hm5hQUczKuqrK2RbQFMCyoznakULW2gsmihTV4f1EBqxlxyDjzwwfc~QcPmKVwG3vmq0USPqelLr1mNiPxIT~1tA1FaATL07BRkC6w5jH02r1-socyWTnLvbhudKNycsFmnQJH~yc~~z6MKCq1U6gCKxSei~L2eV-Te7GVnRR5dWULcat1JZFVM1GUw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000122.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 22,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/122/image/image.jpg?Expires=1776732224&Signature=nJF5GSMgC-L5WWizbAZgMIEL-gJiIiCVLk~QqIqdHAzeMg7Nr3Sgpz3LmPV9XyJ262-7ngmVxokMTEfM7QbWwF7MbWqw2ZXxkBVXc3kIGUXUVFWnV1lR6GRAWdQLWV00Gqi9FFWhCaAm0wvHa1ACx0m~~R4Hm5hQUczKuqrK2RbQFMCyoznakULW2gsmihTV4f1EBqxlxyDjzwwfc~QcPmKVwG3vmq0USPqelLr1mNiPxIT~1tA1FaATL07BRkC6w5jH02r1-socyWTnLvbhudKNycsFmnQJH~yc~~z6MKCq1U6gCKxSei~L2eV-Te7GVnRR5dWULcat1JZFVM1GUw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_22_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/123/image/image.jpg?Expires=1776732224&Signature=rQ1JCxh4FufE4wbY75nyLPDMgX1o04~9DS5YfjS2dcbCZ9IXrXw4fxXK3kiTvNZiAv96bu0Po0ylV6HgGa03pfwIvFT2BnDO86Z5BrFrPhzdB8lsESgW7XrV1h2MDGqrE50cPob07KVY6LqpOF~l9scZRIk2Ocu4Jzxq4rBlCF4sG1pQVuEbj35Q9gURTn9Xa9mxEcD1E-UxeDq2aNy05oERSTeFDvc8kBhVW6Bt05b6AqSLAFthM0Bx4G1TNWRZn8YVCOsZ62zU53hYtGNPuc7DDgzrLuZYgIdYtECRtZFDo97A8FmQ5eA9HEjyp~vV4UV5Y4GtixHPwkGJavBZ3A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000123.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 23,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/123/image/image.jpg?Expires=1776732224&Signature=rQ1JCxh4FufE4wbY75nyLPDMgX1o04~9DS5YfjS2dcbCZ9IXrXw4fxXK3kiTvNZiAv96bu0Po0ylV6HgGa03pfwIvFT2BnDO86Z5BrFrPhzdB8lsESgW7XrV1h2MDGqrE50cPob07KVY6LqpOF~l9scZRIk2Ocu4Jzxq4rBlCF4sG1pQVuEbj35Q9gURTn9Xa9mxEcD1E-UxeDq2aNy05oERSTeFDvc8kBhVW6Bt05b6AqSLAFthM0Bx4G1TNWRZn8YVCOsZ62zU53hYtGNPuc7DDgzrLuZYgIdYtECRtZFDo97A8FmQ5eA9HEjyp~vV4UV5Y4GtixHPwkGJavBZ3A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_23_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/124/image/image.jpg?Expires=1776732224&Signature=fw-~K9WXc646RjSR14UkBssVXEnw2eHZK6u9fCo~lp-Jvyt2wxlxXgngkZ7vRCjjOAs9aTrgUrqTejCYIHGQ4iQ-h6nCFMdT7lUcVp-FRC2mn4r7D6YegpyTT1RGFdMV9PeFGzFE0Pe3jH2781s1cT0ZC4hkztpNr1hs2~Jmpac4O1NU0rW-MZARnRn6Mr6iKmoIKqXndDcF3xz4PjVsCPFfVcstH6TYtYmSe2zhBozXkrP4KqooPizS~SMubHrtSksw659eOevrBonUctut-wm3WQQk42XgmueWnLGGjG-z16yycsV0D8fpnLnaC9mHPD9J8bZcPVKp95wxuknK~A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000124.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 24,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/124/image/image.jpg?Expires=1776732224&Signature=fw-~K9WXc646RjSR14UkBssVXEnw2eHZK6u9fCo~lp-Jvyt2wxlxXgngkZ7vRCjjOAs9aTrgUrqTejCYIHGQ4iQ-h6nCFMdT7lUcVp-FRC2mn4r7D6YegpyTT1RGFdMV9PeFGzFE0Pe3jH2781s1cT0ZC4hkztpNr1hs2~Jmpac4O1NU0rW-MZARnRn6Mr6iKmoIKqXndDcF3xz4PjVsCPFfVcstH6TYtYmSe2zhBozXkrP4KqooPizS~SMubHrtSksw659eOevrBonUctut-wm3WQQk42XgmueWnLGGjG-z16yycsV0D8fpnLnaC9mHPD9J8bZcPVKp95wxuknK~A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_24_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/125/image/image.jpg?Expires=1776732224&Signature=EfeRMxq6eDYl1AtVHa8V3rF~-w5BaQ6~fEaSUBEtAQNdAg74UAmQa86vqVSVdw~~8qFCFxUe4H1TmJkz2YBACyClm~D3N-eSCJPl~X5gS8rSdAVWcoizOoJmOjsKGWxITJhLep10P7bsUBEryewwqcqISnzOzN2f0mb4JNj9V-FSDbWNgHp~TuhNXveNZ5VJZFg-u7CtRexdc-NjsSzruAEIInGdRhRnJOe7fpvhU-2fwHp4tqD9lgGGdzmcLvS5tQyFb0ZzdqJj7jX2Te0irfbnwR2MwBSsF9992niYjOILlThfrw1n3Y~nRM5i1upkFfMqJo~k6-9ChUNkZ4NElQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000125.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 25,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/125/image/image.jpg?Expires=1776732224&Signature=EfeRMxq6eDYl1AtVHa8V3rF~-w5BaQ6~fEaSUBEtAQNdAg74UAmQa86vqVSVdw~~8qFCFxUe4H1TmJkz2YBACyClm~D3N-eSCJPl~X5gS8rSdAVWcoizOoJmOjsKGWxITJhLep10P7bsUBEryewwqcqISnzOzN2f0mb4JNj9V-FSDbWNgHp~TuhNXveNZ5VJZFg-u7CtRexdc-NjsSzruAEIInGdRhRnJOe7fpvhU-2fwHp4tqD9lgGGdzmcLvS5tQyFb0ZzdqJj7jX2Te0irfbnwR2MwBSsF9992niYjOILlThfrw1n3Y~nRM5i1upkFfMqJo~k6-9ChUNkZ4NElQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_25_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/126/image/image.jpg?Expires=1776732224&Signature=gHWwRbqOKlRC5BirYepngeQarr5HCWjwzgegw3TcET-x21Cto0vDthzK35wFGInqQ7jmZsKspabj5PtHx2xxDvd1KfiEpsajoWJIAuFxOW6dflmO83K-NvB~gQwM6iBSiQczjd-y3mC6IQzczD-HFmG91ffUPuTErXF9eyRhFcLYb8Oo5I6vRrHpgNeZprYb9WarNu5uWO1KCj6n7a3X3euoU6WKDFfICVmtdqjXXJqgKdtBEb2bQunHkzkhYA79M-ulnz~~tOKMnl23YXhpColU0sI0rdKhGT~h4jKTKspR5uIXyAMcKPE6wVEM108G66Bh3Zy6450~0lzyBqKP-Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000126.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 26,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/126/image/image.jpg?Expires=1776732224&Signature=gHWwRbqOKlRC5BirYepngeQarr5HCWjwzgegw3TcET-x21Cto0vDthzK35wFGInqQ7jmZsKspabj5PtHx2xxDvd1KfiEpsajoWJIAuFxOW6dflmO83K-NvB~gQwM6iBSiQczjd-y3mC6IQzczD-HFmG91ffUPuTErXF9eyRhFcLYb8Oo5I6vRrHpgNeZprYb9WarNu5uWO1KCj6n7a3X3euoU6WKDFfICVmtdqjXXJqgKdtBEb2bQunHkzkhYA79M-ulnz~~tOKMnl23YXhpColU0sI0rdKhGT~h4jKTKspR5uIXyAMcKPE6wVEM108G66Bh3Zy6450~0lzyBqKP-Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_26_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/127/image/image.jpg?Expires=1776732224&Signature=z5vPPkC5ZBQsx8yu8ezWce8HAr-xB2opK-ZzCD4zRO7cBW94Uqlry0ccLGPMrqut5X07SEuIfEN2d4MZHwM~6wZMDpSApFG2vVmFsVZ1dMZNTVpECddASGHJgb3KSeoD~m7ad39WamUY1L5CVLbBKoEEk6jzZfYKV4xrtO3qlXXDecRiBqelUfRlgsYeIAKJjvdtRg-ng7LyuPEGfXZOekHHdanVQF6ZtjeubnsR7oNERYpAxBpOFcI7WT3DUrYHkwyl~sjPlqhlbyKs98KZtQX2S6zcBByqVojKcTXrLwnXTm9VIUyPn1zwJcFmSbOnwq82yudWkz0IOLSeDRh9SQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000127.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 27,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/127/image/image.jpg?Expires=1776732224&Signature=z5vPPkC5ZBQsx8yu8ezWce8HAr-xB2opK-ZzCD4zRO7cBW94Uqlry0ccLGPMrqut5X07SEuIfEN2d4MZHwM~6wZMDpSApFG2vVmFsVZ1dMZNTVpECddASGHJgb3KSeoD~m7ad39WamUY1L5CVLbBKoEEk6jzZfYKV4xrtO3qlXXDecRiBqelUfRlgsYeIAKJjvdtRg-ng7LyuPEGfXZOekHHdanVQF6ZtjeubnsR7oNERYpAxBpOFcI7WT3DUrYHkwyl~sjPlqhlbyKs98KZtQX2S6zcBByqVojKcTXrLwnXTm9VIUyPn1zwJcFmSbOnwq82yudWkz0IOLSeDRh9SQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_27_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/128/image/image.jpg?Expires=1776732224&Signature=NURSff1y-C7Aw~PtycA90iSssklkaIFATQqEH6niAUjsRHJyqbGKsn1IOpXEYWLFcOeBRwyhcQRhIS2qPL3LdK2pA2LY-9mEMaCoNZX4bNp1SxEO98I0zBli3K~XEbY~D4Jk9NfylxN61yCpvExuQljrvk3NjNQVJR4f8JKYLgfqxyAO1BfiXyT044~ShQo2DmRW5b7GzWImHv5ySC~u2Z65NAImNYJoRZzNiA568LlTrT8QZ9Yk~LsOvTLW5pwO854Ri-BshGAe8qq2k0B9B6VhuSBcwiaTuxdiOPdgfrUahgETkI5zDdCpzPOaJj9TzydZ7SE9yQWclsjD8xKM6Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000128.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 28,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/128/image/image.jpg?Expires=1776732224&Signature=NURSff1y-C7Aw~PtycA90iSssklkaIFATQqEH6niAUjsRHJyqbGKsn1IOpXEYWLFcOeBRwyhcQRhIS2qPL3LdK2pA2LY-9mEMaCoNZX4bNp1SxEO98I0zBli3K~XEbY~D4Jk9NfylxN61yCpvExuQljrvk3NjNQVJR4f8JKYLgfqxyAO1BfiXyT044~ShQo2DmRW5b7GzWImHv5ySC~u2Z65NAImNYJoRZzNiA568LlTrT8QZ9Yk~LsOvTLW5pwO854Ri-BshGAe8qq2k0B9B6VhuSBcwiaTuxdiOPdgfrUahgETkI5zDdCpzPOaJj9TzydZ7SE9yQWclsjD8xKM6Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_28_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/129/image/image.jpg?Expires=1776732224&Signature=2GWt7J6PmD7voVlpCcA~7PREYz8X4qzwDMHl76G0BDhlfdg68Xr4RJrzGERe2tFzlrZqaTW~0KKnKKhr2zVR~souWuYCV0fpsfAKF3SDOAgBusQs9P5aDHhRfNHWxtlWtX0V~jZaTt5AkZPR2hfVl0dv6OnERcg8TEqooha7ZIR2ZVusmePKheKSGODYLlJ97lkN2zCBbMuhPiUSlp~UyYeDwWtgKIJdwoD8RNrWfJPFtWqOAfrMHoQ0UkpwXPejNCf1~rwMzLn~ob7gbtBeerIziAsE3Zc9Xs5ySXOAh0J4CMjE1JBbL~0wf689e-2byp~ZqeloQyttinROMSntmw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000129.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 29,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/129/image/image.jpg?Expires=1776732224&Signature=2GWt7J6PmD7voVlpCcA~7PREYz8X4qzwDMHl76G0BDhlfdg68Xr4RJrzGERe2tFzlrZqaTW~0KKnKKhr2zVR~souWuYCV0fpsfAKF3SDOAgBusQs9P5aDHhRfNHWxtlWtX0V~jZaTt5AkZPR2hfVl0dv6OnERcg8TEqooha7ZIR2ZVusmePKheKSGODYLlJ97lkN2zCBbMuhPiUSlp~UyYeDwWtgKIJdwoD8RNrWfJPFtWqOAfrMHoQ0UkpwXPejNCf1~rwMzLn~ob7gbtBeerIziAsE3Zc9Xs5ySXOAh0J4CMjE1JBbL~0wf689e-2byp~ZqeloQyttinROMSntmw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_29_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/130/image/image.jpg?Expires=1776732224&Signature=AiZS52TAknLw6MeiybPEzZ6GyEA6nYBPFcaDynfjoLLwKonBNJA00UrQ6j-iKzOhWBikJTnsRfJSvScXG3jfpHyjTJWAc7ED5GOwVaxZUozSCmU-8BLNd94yf7iofC7Tc19iHjss5LlgsoKMP-VDObhTKpmTzEvjwBuBWWSTP0EFMnd3RLPF2eKLwDOtbhxLqxbnE3cPHcSP~HDJDqqaX~e2KeqUD2YSdNqA4WSnYnBuS6gBnpxItUe8YJ~EcAVo7R1~ZhaLFj7UOvjgOvQtBn6rkcudq5jhndaWpyvML~IK0eZTrooDIyg5UqrV0fjCZz7scCxqeLXv65YvoTtFKA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000130.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 30,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/130/image/image.jpg?Expires=1776732224&Signature=AiZS52TAknLw6MeiybPEzZ6GyEA6nYBPFcaDynfjoLLwKonBNJA00UrQ6j-iKzOhWBikJTnsRfJSvScXG3jfpHyjTJWAc7ED5GOwVaxZUozSCmU-8BLNd94yf7iofC7Tc19iHjss5LlgsoKMP-VDObhTKpmTzEvjwBuBWWSTP0EFMnd3RLPF2eKLwDOtbhxLqxbnE3cPHcSP~HDJDqqaX~e2KeqUD2YSdNqA4WSnYnBuS6gBnpxItUe8YJ~EcAVo7R1~ZhaLFj7UOvjgOvQtBn6rkcudq5jhndaWpyvML~IK0eZTrooDIyg5UqrV0fjCZz7scCxqeLXv65YvoTtFKA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_30_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/131/image/image.jpg?Expires=1776732224&Signature=TTmvV2QE-g8WK-spZB9Vbib61mih1oSwP9ifBulIkR9iAywx9m6Ku96~Ipr3M1k9imPUtcnNrfjoejuUuMzklgKhbMQEaJT-T8mFgIseCKWKYK8V~2WDd0wrZ6Yxc~jBOz5F2h9ZSaEqJe4vc8pVj3xhYJAj8hC-cWq-49EdjIQytijBnVCv7HTy7pP3NoUjVbWNITOaQ7ylKi98IP89-0us93~yWzsa04433MhyL46N4~QnejJ6jhWFAUj9PwMKkV3QTEWOrpmbpINb869W0KCNG2We1p9~BQHyT~hXysxcTwPgYMXvuNEi2CYgsz4oFefrJ8faza~~udryQC7E7w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000131.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 31,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/131/image/image.jpg?Expires=1776732224&Signature=TTmvV2QE-g8WK-spZB9Vbib61mih1oSwP9ifBulIkR9iAywx9m6Ku96~Ipr3M1k9imPUtcnNrfjoejuUuMzklgKhbMQEaJT-T8mFgIseCKWKYK8V~2WDd0wrZ6Yxc~jBOz5F2h9ZSaEqJe4vc8pVj3xhYJAj8hC-cWq-49EdjIQytijBnVCv7HTy7pP3NoUjVbWNITOaQ7ylKi98IP89-0us93~yWzsa04433MhyL46N4~QnejJ6jhWFAUj9PwMKkV3QTEWOrpmbpINb869W0KCNG2We1p9~BQHyT~hXysxcTwPgYMXvuNEi2CYgsz4oFefrJ8faza~~udryQC7E7w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_31_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/132/image/image.jpg?Expires=1776732224&Signature=vqMJ~dAUpR5Jg3Qt-jcL~vlxKA4blyyhb842~l8W3XweELd4kfPi7WZePhdsZono4GNbeovsvm7DScsqSvwvX3qxFbhOoI8XVtnO0ZIxWMSmJRCGQKOOWU0bg7vWXfDZrp73hXVSYcs5dRFwHMU~~--gYb0tVEvdTHWOV6iD-bi6mYf~3jl7q~ijNWAjbNn~oqbL-sumYtn7Muz01G4CEjtE4EpK8hMFGnZ0fupzpJpt3gpwwj5Nn1kMcYBoBVwP6AstYxSH1wz6WEfMnIw1Ti1ig5iIDsWvgZEK3mEgMLpvoULeHney9yfm2jo-lbSYaalkZcWxEsIKDyffYrE~9Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000132.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 32,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/132/image/image.jpg?Expires=1776732224&Signature=vqMJ~dAUpR5Jg3Qt-jcL~vlxKA4blyyhb842~l8W3XweELd4kfPi7WZePhdsZono4GNbeovsvm7DScsqSvwvX3qxFbhOoI8XVtnO0ZIxWMSmJRCGQKOOWU0bg7vWXfDZrp73hXVSYcs5dRFwHMU~~--gYb0tVEvdTHWOV6iD-bi6mYf~3jl7q~ijNWAjbNn~oqbL-sumYtn7Muz01G4CEjtE4EpK8hMFGnZ0fupzpJpt3gpwwj5Nn1kMcYBoBVwP6AstYxSH1wz6WEfMnIw1Ti1ig5iIDsWvgZEK3mEgMLpvoULeHney9yfm2jo-lbSYaalkZcWxEsIKDyffYrE~9Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_32_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/133/image/image.jpg?Expires=1776732224&Signature=2C8802Ax2S0Ps3pHffe5Iu6bZfWztkzZqm6CBp1rNwEAyKyoSX7ZvaUr3UiePjIuVr9UswTOvQvvFG5LSia~7fumKG1IYpjqedXyxMp7EcDRxA9ng-k6ENHwdG4IvYFTRdTPspIXo00vfMl~v8jBdwqYbEhCERUk4OM13f82NmmPjngm1j99h-4eKg6xISMWsMALbPyfy9Hon6YBvQtzbAEoFtP82kfHHXKvTz~JCWeqL~pGFP2ke8UkiTaiQLnqw~pQ6n0FMBWhkoRNXQYvtt9~CkjB5gf2UmfH03Z3Y4Rnpf9hwMSg-e693TrmCPwUurwr4t5G6JyhsDVCaUpK6w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000133.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 33,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/133/image/image.jpg?Expires=1776732224&Signature=2C8802Ax2S0Ps3pHffe5Iu6bZfWztkzZqm6CBp1rNwEAyKyoSX7ZvaUr3UiePjIuVr9UswTOvQvvFG5LSia~7fumKG1IYpjqedXyxMp7EcDRxA9ng-k6ENHwdG4IvYFTRdTPspIXo00vfMl~v8jBdwqYbEhCERUk4OM13f82NmmPjngm1j99h-4eKg6xISMWsMALbPyfy9Hon6YBvQtzbAEoFtP82kfHHXKvTz~JCWeqL~pGFP2ke8UkiTaiQLnqw~pQ6n0FMBWhkoRNXQYvtt9~CkjB5gf2UmfH03Z3Y4Rnpf9hwMSg-e693TrmCPwUurwr4t5G6JyhsDVCaUpK6w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_33_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/134/image/image.jpg?Expires=1776732224&Signature=dcECT2fXrKkP3zlv~h0OlkEbQXNWO1on-VDl9dMvFFk2tIAvZF9dhC79SRJjWwQKZ2axPwnLARbRi3rd1-0EKN0YMEe0cNUShmp5DcRS2FejgFAcXzZXJ7Qf5x8CIY8bARbVM14jWFLa9P~2W1CJXRX1iKMwiP1NMJernJJv-eEmqqWXEv8wmPbvq2zPlyJkASDcWXOCaCLouTiruBQKh7-L-0b9gj4mhilkz~jGmQy536~WzRvYDCj2OKd-ZxkYCf9dlgJITmnOr-lUHCyVDiVN1d3lRTp0qy32culG0wRQy0AALU5MuFRZ1Rx7Mz9BJc5qc9TL0NA~6Zt6~zVXuQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000134.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 34,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/134/image/image.jpg?Expires=1776732224&Signature=dcECT2fXrKkP3zlv~h0OlkEbQXNWO1on-VDl9dMvFFk2tIAvZF9dhC79SRJjWwQKZ2axPwnLARbRi3rd1-0EKN0YMEe0cNUShmp5DcRS2FejgFAcXzZXJ7Qf5x8CIY8bARbVM14jWFLa9P~2W1CJXRX1iKMwiP1NMJernJJv-eEmqqWXEv8wmPbvq2zPlyJkASDcWXOCaCLouTiruBQKh7-L-0b9gj4mhilkz~jGmQy536~WzRvYDCj2OKd-ZxkYCf9dlgJITmnOr-lUHCyVDiVN1d3lRTp0qy32culG0wRQy0AALU5MuFRZ1Rx7Mz9BJc5qc9TL0NA~6Zt6~zVXuQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_34_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/135/image/image.jpg?Expires=1776732224&Signature=pyxWbzyiYxTmL9o8sazze0MrwYgHioeQ8av2RxMfaf8t2vNmHaecUcr4St8ZE6KlPEQ~ECvG9MrZpAxWsun0qmCsPXtREZdq5Ade7wWNqh9qTr-99tYNd7BqGhZYYAQzlWHny0r4QhX9mpKYbSpCWfWIO2dzsoHhUhlCwnbXdYSx52duMFA497qzfw5IOfvZ8EWzr71nertoGkctiBVwamyDzjMiXB-0yqzWYBnn0PkELuMTYlbWdU2xvVfqFpeWRNVSEFPPntRgR0yhrByYcXNP2NJcO1Os3fpWA0LmpJ6CNpJ4QDjULEeJYQIcYM6P39oAN1QATuPa7TkFh6EkUg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000135.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 35,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/135/image/image.jpg?Expires=1776732224&Signature=pyxWbzyiYxTmL9o8sazze0MrwYgHioeQ8av2RxMfaf8t2vNmHaecUcr4St8ZE6KlPEQ~ECvG9MrZpAxWsun0qmCsPXtREZdq5Ade7wWNqh9qTr-99tYNd7BqGhZYYAQzlWHny0r4QhX9mpKYbSpCWfWIO2dzsoHhUhlCwnbXdYSx52duMFA497qzfw5IOfvZ8EWzr71nertoGkctiBVwamyDzjMiXB-0yqzWYBnn0PkELuMTYlbWdU2xvVfqFpeWRNVSEFPPntRgR0yhrByYcXNP2NJcO1Os3fpWA0LmpJ6CNpJ4QDjULEeJYQIcYM6P39oAN1QATuPa7TkFh6EkUg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_35_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/136/image/image.jpg?Expires=1776732224&Signature=nN-zkdBNlzb91ezP6dApGcs5K~1JjqBE0eWgcq2bs5kATQEpUvHUhhSnN1uJZLu-jsP-CANFgbQbi6bqRzhpUPi453BulS9oyldyi-0cotU8xDsf2Lj70LQxIquVzZwPmHQsKcAoGKQ2hyMH-WtNbTtGF0-k7S9l40lrMF0iF9s0O3bCjg0tQky70qD7c3jl~un3nBc4HUZaDzTcTn5k8NJDJMD6bGsA-~RQchpnH3a11NsGt4UOzmbrFAZy5Ek03xYBbNrbMTst10KLU-VEaJrU8-W~-cIDVe2rhLqvY0fpb~ziG6GaIwehNcP6r8xsCB30T6~ynrPHUN9hkLTpvw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000136.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 36,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/136/image/image.jpg?Expires=1776732224&Signature=nN-zkdBNlzb91ezP6dApGcs5K~1JjqBE0eWgcq2bs5kATQEpUvHUhhSnN1uJZLu-jsP-CANFgbQbi6bqRzhpUPi453BulS9oyldyi-0cotU8xDsf2Lj70LQxIquVzZwPmHQsKcAoGKQ2hyMH-WtNbTtGF0-k7S9l40lrMF0iF9s0O3bCjg0tQky70qD7c3jl~un3nBc4HUZaDzTcTn5k8NJDJMD6bGsA-~RQchpnH3a11NsGt4UOzmbrFAZy5Ek03xYBbNrbMTst10KLU-VEaJrU8-W~-cIDVe2rhLqvY0fpb~ziG6GaIwehNcP6r8xsCB30T6~ynrPHUN9hkLTpvw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_36_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/137/image/image.jpg?Expires=1776732224&Signature=DjoTSHBAwhRtpe60JG3v-2YJR8MJzA9hZ4kC2e7lj2D8EIn7-JWi5kPp6vkJc9jyARPZf5bY~jGIy6mCDsfNkLLvqitgnGHoyiH4YN7XNRg8awcGIMgjtjNFT1WDOGmx9lLnxiMZLNP6~N2YewGPEpOj6tSgh7249txsCOWUQgNH3YOXQr1yP1SITohdtYFlmrZOV9jOK35RKx7oo3q1jYOZfo9q9knxSCGkXjwTzslq6tTxuBrzAwwlCAOo6vqK3KmpiDfoiMPvYJ5Kdm41cRv6YS-aanw65QxBaBC4OMzgLT8HguKmhyk9M9x6CRkkbH-LrNtxZACq96PccYxeDA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000137.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 37,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/137/image/image.jpg?Expires=1776732224&Signature=DjoTSHBAwhRtpe60JG3v-2YJR8MJzA9hZ4kC2e7lj2D8EIn7-JWi5kPp6vkJc9jyARPZf5bY~jGIy6mCDsfNkLLvqitgnGHoyiH4YN7XNRg8awcGIMgjtjNFT1WDOGmx9lLnxiMZLNP6~N2YewGPEpOj6tSgh7249txsCOWUQgNH3YOXQr1yP1SITohdtYFlmrZOV9jOK35RKx7oo3q1jYOZfo9q9knxSCGkXjwTzslq6tTxuBrzAwwlCAOo6vqK3KmpiDfoiMPvYJ5Kdm41cRv6YS-aanw65QxBaBC4OMzgLT8HguKmhyk9M9x6CRkkbH-LrNtxZACq96PccYxeDA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_37_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/138/image/image.jpg?Expires=1776732224&Signature=YPkHxnNLc~BGr3vTMlnGYqa5gTOiiVtAmKOdu~JxZjuSX0YTGEsz4~qW58JfsGpZDKsig9ADRWGLHcYtPrdlV8eb~r4mOCm5eovb87QsKOjgQXaztd0qun2jEr7iR7OlqssnIuRrg5pYkkMC8QoNQpxMdQ3tFgxAsHNnkTVeAB4df-ZqR4F9jlSJCj3CozeE55Myxm7JANPem6ELJfiORPAiFueOniuvk02N~eFfzWoXpHxOkXRmzsrI53ecMm~aPkGRI2aJFkp-ZGf1sclvDkzzfgJ2os1QlLJu2QoNT9od6wNqQReB7N6-mpfg6WIc0InaRMchcpJPeHATqdK2uw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000138.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 38,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/138/image/image.jpg?Expires=1776732224&Signature=YPkHxnNLc~BGr3vTMlnGYqa5gTOiiVtAmKOdu~JxZjuSX0YTGEsz4~qW58JfsGpZDKsig9ADRWGLHcYtPrdlV8eb~r4mOCm5eovb87QsKOjgQXaztd0qun2jEr7iR7OlqssnIuRrg5pYkkMC8QoNQpxMdQ3tFgxAsHNnkTVeAB4df-ZqR4F9jlSJCj3CozeE55Myxm7JANPem6ELJfiORPAiFueOniuvk02N~eFfzWoXpHxOkXRmzsrI53ecMm~aPkGRI2aJFkp-ZGf1sclvDkzzfgJ2os1QlLJu2QoNT9od6wNqQReB7N6-mpfg6WIc0InaRMchcpJPeHATqdK2uw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_38_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/139/image/image.jpg?Expires=1776732224&Signature=iCcuSAC464qRhjWLBEcuygkdcUQHAYexr1Gtwf0Sm~kePLVRVA0VXufxDxjmIqQR39TFDe90uIaSOk7GH9nQFbunVYDWnVPE2wN1Gy0I-hqxX13fpVRrFg54wc2OybkfYJQCV6ZdO1e28tLeGjq-RHPBUw0dTt8qwl~vBiXeURpWxxvx1M-6wLCFsO4zn-YXcy7yWo9g~AqFljRgrXJJZ96aaGrcOZLt6FsWLyjnctoIdC1lS963S~tl33YiEnwqo7HKAOymAnMOlk8Eckdopq1vyd0ukYbgwGZFQGvpYNFt7BFk5u~6vjJg3F-E7pKHPf8x25KqVMEO9jp-xxOeNA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000139.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 39,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/139/image/image.jpg?Expires=1776732224&Signature=iCcuSAC464qRhjWLBEcuygkdcUQHAYexr1Gtwf0Sm~kePLVRVA0VXufxDxjmIqQR39TFDe90uIaSOk7GH9nQFbunVYDWnVPE2wN1Gy0I-hqxX13fpVRrFg54wc2OybkfYJQCV6ZdO1e28tLeGjq-RHPBUw0dTt8qwl~vBiXeURpWxxvx1M-6wLCFsO4zn-YXcy7yWo9g~AqFljRgrXJJZ96aaGrcOZLt6FsWLyjnctoIdC1lS963S~tl33YiEnwqo7HKAOymAnMOlk8Eckdopq1vyd0ukYbgwGZFQGvpYNFt7BFk5u~6vjJg3F-E7pKHPf8x25KqVMEO9jp-xxOeNA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_39_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/140/image/image.jpg?Expires=1776732224&Signature=Vq8iJY9ORn5ghZfnmhkPchwLpswPKou305zdz--zMulY2v3yVc6MUEZlyNhvxGav-OMmtim3YNb1-K6PyUSDwTqOfrOL0lH1c5PSTwMsr2Y4Dn22CDC80W4r8GvFL2X0~Esa3MVUw191dzAWXG8Wgli2AnYQvwaxBM3hVEo9BrX1chd58FoWa9CpScM7A5AlvggDr-dKgC74yK3EcB9oaAXYkHmmrg19Xrs8l6syplSxiI10krnINZB8xEXxbayzCNicWS-YQyxhimSBb2QTFK-hmUtsjd4QiCd5s0kwfYv~A6nBCZu6EivkkvKi4-~MG~Rx5a4ihv9McwRzS3c2vw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000140.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 40,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/140/image/image.jpg?Expires=1776732224&Signature=Vq8iJY9ORn5ghZfnmhkPchwLpswPKou305zdz--zMulY2v3yVc6MUEZlyNhvxGav-OMmtim3YNb1-K6PyUSDwTqOfrOL0lH1c5PSTwMsr2Y4Dn22CDC80W4r8GvFL2X0~Esa3MVUw191dzAWXG8Wgli2AnYQvwaxBM3hVEo9BrX1chd58FoWa9CpScM7A5AlvggDr-dKgC74yK3EcB9oaAXYkHmmrg19Xrs8l6syplSxiI10krnINZB8xEXxbayzCNicWS-YQyxhimSBb2QTFK-hmUtsjd4QiCd5s0kwfYv~A6nBCZu6EivkkvKi4-~MG~Rx5a4ihv9McwRzS3c2vw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_40_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/141/image/image.jpg?Expires=1776732224&Signature=h-3lUfh9ewtm5~LTm0LQbOd1OjPqvrDW3YDw6G0QJUGuRoKOOiqU0Zcw1lpP-j2QCG7HzZksr5m50XrEOj~YvkiGtrCKE1tfjC-XyQqHuVZHTjktOhs3c2R~fPpngPzYEECLXtYbZKt2qTP2of9ZBk-XInpo5DYwXRSSTZ~BG7IG8l-t-bXk4k2rZeV2tbi99f1ip-akRvgz5qY50ADfgSybyoe5OMt0U03ua8hoiS4scDjZR9Sy8Eodf-nldhL0~6PVUTBR0Vb6BSDjddP-0LbvI8bsm3HZYz-pfm4Ee-ScoFQV3zIHECIp1LjgT8LDGKU9RWwum78TeDdUKy7dfg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000141.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 41,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/141/image/image.jpg?Expires=1776732224&Signature=h-3lUfh9ewtm5~LTm0LQbOd1OjPqvrDW3YDw6G0QJUGuRoKOOiqU0Zcw1lpP-j2QCG7HzZksr5m50XrEOj~YvkiGtrCKE1tfjC-XyQqHuVZHTjktOhs3c2R~fPpngPzYEECLXtYbZKt2qTP2of9ZBk-XInpo5DYwXRSSTZ~BG7IG8l-t-bXk4k2rZeV2tbi99f1ip-akRvgz5qY50ADfgSybyoe5OMt0U03ua8hoiS4scDjZR9Sy8Eodf-nldhL0~6PVUTBR0Vb6BSDjddP-0LbvI8bsm3HZYz-pfm4Ee-ScoFQV3zIHECIp1LjgT8LDGKU9RWwum78TeDdUKy7dfg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_41_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/142/image/image.jpg?Expires=1776732224&Signature=RuGtTSnwjOHGW9I2igappA2slaHhIf9uLntdeOqIwoskua3MeNfiSxOaiGj~yGpKWJnKrkTmRAdF2WFxPgSNNrJyXvPV9o6KlFGrsjmqfEROgbkGmFaZdXWSNPQq75vL0ttWHFNncFcDJxK-KPwnGIRF66BEiWjVJW81B-oTMJO45yVhmBUC7Pj0Bar24b7tm75jnDnPepjDC8Zwa6qqoKvWjSKjVqGqzS2jpmE59BoEN4bOvBJyjRILZUm3zNYPc5ScO5p~YMs6do1A8RQplpyq0g0fIsG5yjFG9IWstI3A8RJbt1Pw8Ad39AOl6zZt3QRRemfk3iPZvvT9SXnd0A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000142.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 42,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/142/image/image.jpg?Expires=1776732224&Signature=RuGtTSnwjOHGW9I2igappA2slaHhIf9uLntdeOqIwoskua3MeNfiSxOaiGj~yGpKWJnKrkTmRAdF2WFxPgSNNrJyXvPV9o6KlFGrsjmqfEROgbkGmFaZdXWSNPQq75vL0ttWHFNncFcDJxK-KPwnGIRF66BEiWjVJW81B-oTMJO45yVhmBUC7Pj0Bar24b7tm75jnDnPepjDC8Zwa6qqoKvWjSKjVqGqzS2jpmE59BoEN4bOvBJyjRILZUm3zNYPc5ScO5p~YMs6do1A8RQplpyq0g0fIsG5yjFG9IWstI3A8RJbt1Pw8Ad39AOl6zZt3QRRemfk3iPZvvT9SXnd0A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_42_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/143/image/image.jpg?Expires=1776732224&Signature=ujw3pvhOQK61MBDtUPSpHxTEBHYnFqWOUK1R43AejKAYi1ZZCeypD81W0PGvc4bSOv3kA8WTV1fWHNniZStufAmXnUmvsooxowXv0-6biEei3Si16IIs3NS36pQvezXvqthXI6P--K-XwR614abHJ7XEtS3uB-9bsd07PK1bNHgD~QUQhTVHVK66-Z9IQrH46~WRSY2qHJR1wL4JuMi6X0FSIaOFs109G-fyhFZuqNuEVN7r4zA-fRnwfwQygflGWEkSIVTUCnKG3zhmCPMKvB9e-CiMTjQD~etky39v3-gkR3fqUGgb0PgnaGr8qYObCxHrQhdbsTvntqnThtAwxw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000143.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 43,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/143/image/image.jpg?Expires=1776732224&Signature=ujw3pvhOQK61MBDtUPSpHxTEBHYnFqWOUK1R43AejKAYi1ZZCeypD81W0PGvc4bSOv3kA8WTV1fWHNniZStufAmXnUmvsooxowXv0-6biEei3Si16IIs3NS36pQvezXvqthXI6P--K-XwR614abHJ7XEtS3uB-9bsd07PK1bNHgD~QUQhTVHVK66-Z9IQrH46~WRSY2qHJR1wL4JuMi6X0FSIaOFs109G-fyhFZuqNuEVN7r4zA-fRnwfwQygflGWEkSIVTUCnKG3zhmCPMKvB9e-CiMTjQD~etky39v3-gkR3fqUGgb0PgnaGr8qYObCxHrQhdbsTvntqnThtAwxw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_43_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/144/image/image.jpg?Expires=1776732224&Signature=VmV0JLX7ibirKmFk1o7POi1jSclxJdjO042ESuvlXAfvAh3HlTuBkXtC0GssT~0M~uN-cghopEBYyoIXZWluGsx-kwLUJpRJjN9PJ1WnBaoZ8QOX8Xv9BUu40umf5zFYYvQafLweUrJh0I2m0-ofNzxg~htwK3VE78TVIx9LGb1oNJ8wW6z-GQ8sJLyxppv5Nnu--ykRGYCEK9801v8yDMK25aaP9kactWYnY0kVSmRyBqKWoTE6PLSCL0bz~lUb5A1Psjo8agZ2RV9VWDAYQeWQNiOmyLE4-HJwUsg~r6834qsFzjuK7qRSzFdxM17wWLKB2ctI~XlyTfbauqhy~g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000144.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 44,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/144/image/image.jpg?Expires=1776732224&Signature=VmV0JLX7ibirKmFk1o7POi1jSclxJdjO042ESuvlXAfvAh3HlTuBkXtC0GssT~0M~uN-cghopEBYyoIXZWluGsx-kwLUJpRJjN9PJ1WnBaoZ8QOX8Xv9BUu40umf5zFYYvQafLweUrJh0I2m0-ofNzxg~htwK3VE78TVIx9LGb1oNJ8wW6z-GQ8sJLyxppv5Nnu--ykRGYCEK9801v8yDMK25aaP9kactWYnY0kVSmRyBqKWoTE6PLSCL0bz~lUb5A1Psjo8agZ2RV9VWDAYQeWQNiOmyLE4-HJwUsg~r6834qsFzjuK7qRSzFdxM17wWLKB2ctI~XlyTfbauqhy~g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_44_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/145/image/image.jpg?Expires=1776732224&Signature=qcjVU3~wt09XNxMCck7L78Qs0bc6k3tSRKK97r3uP22NVn4cC~v5TppVh4khXnNtdLSghMV40LJkiTZ07cGWJhx-9sUnVHO4iHcl5L~jQ~nNWSRADh8MfcrPSDvsbVLZcMu3y~xFhAprGFNUPp-Z-wKHvLLW-V96kvuHAyvd7H8sNsSKi5LZmDL-XQGwJEBbsYhLLkIZ9h2JXrf~roJl5PZ9G8bHMci1vLsI3O4gTLmI-Z-lhoRkWWuO~lORL6NR1bS57j~CQsyHCcVmMRSODaikaBnRT6RAQ3YXw1QWM85TmsKjBNs5S6DhtXnXDgT6RiQgHKA8xtc8JJW1OeaPpQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000145.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 45,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/145/image/image.jpg?Expires=1776732224&Signature=qcjVU3~wt09XNxMCck7L78Qs0bc6k3tSRKK97r3uP22NVn4cC~v5TppVh4khXnNtdLSghMV40LJkiTZ07cGWJhx-9sUnVHO4iHcl5L~jQ~nNWSRADh8MfcrPSDvsbVLZcMu3y~xFhAprGFNUPp-Z-wKHvLLW-V96kvuHAyvd7H8sNsSKi5LZmDL-XQGwJEBbsYhLLkIZ9h2JXrf~roJl5PZ9G8bHMci1vLsI3O4gTLmI-Z-lhoRkWWuO~lORL6NR1bS57j~CQsyHCcVmMRSODaikaBnRT6RAQ3YXw1QWM85TmsKjBNs5S6DhtXnXDgT6RiQgHKA8xtc8JJW1OeaPpQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_45_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/146/image/image.jpg?Expires=1776732224&Signature=d9Ks9wGXaxEGFHlGfHHAdnBmNLV9tWmUcP4JtMCIFn574owfC~E7xQ9qd2TWcrbpRT7dQS3L-7GW1WV19WKFiTqKrA2rQX3m4KET~0~LRvosGJGP2CvCjiopP5egNgBV8SBtYpTny7qCS8-5J9pHNbUxWjp0d5dH4U84SmWLRgk5b72sqzQ2mMMo9rCgETsfEGYwFdj8d0kDZY4zY3NSF94ZlH5Hl7tMwyij11QgiUGacvCUFhHdvj8MV3G7luqprU20vwgAuImfNGR9o5vsyp0P8EDX~RGB8MjtADc6UhzpU5sIwVpRlzlW20zc79nsSvaY-XP8E85I91XgY9E~Zw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000146.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 46,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/146/image/image.jpg?Expires=1776732224&Signature=d9Ks9wGXaxEGFHlGfHHAdnBmNLV9tWmUcP4JtMCIFn574owfC~E7xQ9qd2TWcrbpRT7dQS3L-7GW1WV19WKFiTqKrA2rQX3m4KET~0~LRvosGJGP2CvCjiopP5egNgBV8SBtYpTny7qCS8-5J9pHNbUxWjp0d5dH4U84SmWLRgk5b72sqzQ2mMMo9rCgETsfEGYwFdj8d0kDZY4zY3NSF94ZlH5Hl7tMwyij11QgiUGacvCUFhHdvj8MV3G7luqprU20vwgAuImfNGR9o5vsyp0P8EDX~RGB8MjtADc6UhzpU5sIwVpRlzlW20zc79nsSvaY-XP8E85I91XgY9E~Zw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_46_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/147/image/image.jpg?Expires=1776732224&Signature=IlqiDWe-ZjK7CFA3dgRIP6nRUJj2yehN7bbxVWXknxOfJkVUAh7Au9~1BsDWkV~VJi0vBA23fBcA91oLkc6isnHu9Qa~y-PaeLmqa4WRz7rl59ASFopUnP2V1lGoyuYYJrEaKC4kwLTiBLJhjvWYw6e-5smvPN6AOC7FoDcaWUzrCJ~fejNrTrHswSZlduEpy3R9xA7t1ow5berQS5yO2ZkSfNvmPM6pxDCAZxcJlpGEluxKprtf3kQ-jKLR0lC6bndDLdUyVGlEVMWjzeajWwgFBKan1y27DCyUprjoUadv8n6sBpua~rJVxeoD3gzR8scZ2va6PK5JzsyAbmZaSg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000147.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 47,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/147/image/image.jpg?Expires=1776732224&Signature=IlqiDWe-ZjK7CFA3dgRIP6nRUJj2yehN7bbxVWXknxOfJkVUAh7Au9~1BsDWkV~VJi0vBA23fBcA91oLkc6isnHu9Qa~y-PaeLmqa4WRz7rl59ASFopUnP2V1lGoyuYYJrEaKC4kwLTiBLJhjvWYw6e-5smvPN6AOC7FoDcaWUzrCJ~fejNrTrHswSZlduEpy3R9xA7t1ow5berQS5yO2ZkSfNvmPM6pxDCAZxcJlpGEluxKprtf3kQ-jKLR0lC6bndDLdUyVGlEVMWjzeajWwgFBKan1y27DCyUprjoUadv8n6sBpua~rJVxeoD3gzR8scZ2va6PK5JzsyAbmZaSg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_47_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/148/image/image.jpg?Expires=1776732224&Signature=H0icPpSzg6hBO8Vrb3mwsyRgBFJnn4E7MF80Uat5ygxFhnY68Lu-Yw9EkhKQjpOMGZTJmu7VVhVFmt306UnboKCM8DNp11xJSVOZv86R~UO7Y1fZDN2xQHEEGqxu-rLwdAYyCa0DDg77kjtQhOSyvuE2EZItz-ZYIB6xt396exCDYvwNSdwAQ6EFYICc80qLFmvIdPSnkLbC0f5uSYheGFv0Wi3mZcZV9fG89i79KGQSb8mTQYqWNr3GyNY163mQfCckq8aopaX9PKJjSpc7d7IKydwcPFxnWLfpsIWPelAUhEMlOx1s8KivPcayaUw~GcV0Gxg3iX9HlDf5TtISdg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000148.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 48,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/148/image/image.jpg?Expires=1776732224&Signature=H0icPpSzg6hBO8Vrb3mwsyRgBFJnn4E7MF80Uat5ygxFhnY68Lu-Yw9EkhKQjpOMGZTJmu7VVhVFmt306UnboKCM8DNp11xJSVOZv86R~UO7Y1fZDN2xQHEEGqxu-rLwdAYyCa0DDg77kjtQhOSyvuE2EZItz-ZYIB6xt396exCDYvwNSdwAQ6EFYICc80qLFmvIdPSnkLbC0f5uSYheGFv0Wi3mZcZV9fG89i79KGQSb8mTQYqWNr3GyNY163mQfCckq8aopaX9PKJjSpc7d7IKydwcPFxnWLfpsIWPelAUhEMlOx1s8KivPcayaUw~GcV0Gxg3iX9HlDf5TtISdg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_48_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/149/image/image.jpg?Expires=1776732224&Signature=uPuJxFuLI~CJMF9HJhJb2jzjILyp8x1~fwjo8z4bVQFb7dVreAc6uA6Es4YKdVm6sIuTdDBsXEBtizWa8D6RNKuiSWcV0-BNGpb6L6EKhY6GmhKPwCr0~clFm-uDrYlVMim~lUXCuUE2Ya4WSJqu2nG7Tvuezm17wpcLXDoDePMW0bH9nCD9dEbaNWLTco5xEbiIOoGtZCS2amoogYs89s7KpWnEfSfVYiJjib9eEUXK2AoPrBFODyb4VdNDSPv2tHMk0DCoQYA4ivDxvBXsXoVyJuBqTVlFI7wvQAksjc5G3Sqet24p0XGGnPfSE1~chnM-Bmn0wFiEkjXfwCz7CQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000149.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 49,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/149/image/image.jpg?Expires=1776732224&Signature=uPuJxFuLI~CJMF9HJhJb2jzjILyp8x1~fwjo8z4bVQFb7dVreAc6uA6Es4YKdVm6sIuTdDBsXEBtizWa8D6RNKuiSWcV0-BNGpb6L6EKhY6GmhKPwCr0~clFm-uDrYlVMim~lUXCuUE2Ya4WSJqu2nG7Tvuezm17wpcLXDoDePMW0bH9nCD9dEbaNWLTco5xEbiIOoGtZCS2amoogYs89s7KpWnEfSfVYiJjib9eEUXK2AoPrBFODyb4VdNDSPv2tHMk0DCoQYA4ivDxvBXsXoVyJuBqTVlFI7wvQAksjc5G3Sqet24p0XGGnPfSE1~chnM-Bmn0wFiEkjXfwCz7CQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_49_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/150/image/image.jpg?Expires=1776732224&Signature=y4GCP~cO783ARWd3FYkv8YRPi2ly3vUc0uoBV66yYy20Iw1qzOYqBkM12NmAIwe3jk5FQ1w~CP0b~oYF5i3wckvI-zforAhfTM6XFEhPwCyFtQSEYLFaLmut-31UbmypS8dK0cts9sW7xjYUKwG2rEoe6YgTJcs0NxDJAtUFPOTfEhyOLFUIYrMpj86jKAyt5aMPQZ-kbxJSZHgFHbqC~uIGDH57oHQgqpRurPBuFW6eLtCGbZatfYPnKvaerGxwkcemt09n00qv-lN17K4JAGU268xHtvyZGkKqyqmAVLHmaGMJO9Z3eM5VbZ5kTnKLWV4hCnTAsX~6L6E~s0JQ3g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000150.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 50,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/150/image/image.jpg?Expires=1776732224&Signature=y4GCP~cO783ARWd3FYkv8YRPi2ly3vUc0uoBV66yYy20Iw1qzOYqBkM12NmAIwe3jk5FQ1w~CP0b~oYF5i3wckvI-zforAhfTM6XFEhPwCyFtQSEYLFaLmut-31UbmypS8dK0cts9sW7xjYUKwG2rEoe6YgTJcs0NxDJAtUFPOTfEhyOLFUIYrMpj86jKAyt5aMPQZ-kbxJSZHgFHbqC~uIGDH57oHQgqpRurPBuFW6eLtCGbZatfYPnKvaerGxwkcemt09n00qv-lN17K4JAGU268xHtvyZGkKqyqmAVLHmaGMJO9Z3eM5VbZ5kTnKLWV4hCnTAsX~6L6E~s0JQ3g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_50_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/151/image/image.jpg?Expires=1776732224&Signature=Y~7CRNZyqQSmGpjuGL2j8-HZoQRucRBxQUAC~H-BYhS0dwLq~gccUlFmCQvlCcRSpv3JzE7uFSCA5-7O6dO69d9ZjyEswkGupzifxd7tJ3N9Uc5vOjO-TEwwXLxuMvwNpPLerXg9mBHgvUna3~Y2RYBRCcmuyC9z9ImaJWtKKs1nQpr05QXcmbgZhvs49QicAhaUS5gq0nIUJd9yEaBY56JIlSBtLTb4BOGtLGze~4tFg0prMu~4zfIR0mJ5fKl-wc3eNkShDc3taWUE6RvC2x7z2y4cNiAlK3K1xjSI73K-Pj9eZ4rdERc-p0U9feEO4BBTcTTw-N~Xg1Qw-x121A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000151.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 51,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/151/image/image.jpg?Expires=1776732224&Signature=Y~7CRNZyqQSmGpjuGL2j8-HZoQRucRBxQUAC~H-BYhS0dwLq~gccUlFmCQvlCcRSpv3JzE7uFSCA5-7O6dO69d9ZjyEswkGupzifxd7tJ3N9Uc5vOjO-TEwwXLxuMvwNpPLerXg9mBHgvUna3~Y2RYBRCcmuyC9z9ImaJWtKKs1nQpr05QXcmbgZhvs49QicAhaUS5gq0nIUJd9yEaBY56JIlSBtLTb4BOGtLGze~4tFg0prMu~4zfIR0mJ5fKl-wc3eNkShDc3taWUE6RvC2x7z2y4cNiAlK3K1xjSI73K-Pj9eZ4rdERc-p0U9feEO4BBTcTTw-N~Xg1Qw-x121A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_51_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/152/image/image.jpg?Expires=1776732224&Signature=Unh5AyHaMV64rR3vnFYlQ~fZPTkvs3QQ1OHwB0JSGbObMsn3vcjC~dVHmA980136kxGfrcDPkMfRoGOhiRXbXQmVPez-SAgCTgRyEaNXlS5wKHImRVs6CgsSqS~6dZ19alGf6NBQgaAWQMHX-shrduGphJwnwrVFyCkajM7Y9N1-ndXTGJGO9~bSHppixTr-UH-1STgHQ4V5QemHnpuQPEXM8uwIFXDF4iargnLSiadDaih8FUwSgMOdJVy2LGnw0wVMgYvdoogjxbIiaFpCchlGhzsxsA~-zklwytOzWdJYQv-kior4EFQ6JaYI1ELH~RYbHl2oFoPCZdgsuWg9jA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000152.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 52,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/152/image/image.jpg?Expires=1776732224&Signature=Unh5AyHaMV64rR3vnFYlQ~fZPTkvs3QQ1OHwB0JSGbObMsn3vcjC~dVHmA980136kxGfrcDPkMfRoGOhiRXbXQmVPez-SAgCTgRyEaNXlS5wKHImRVs6CgsSqS~6dZ19alGf6NBQgaAWQMHX-shrduGphJwnwrVFyCkajM7Y9N1-ndXTGJGO9~bSHppixTr-UH-1STgHQ4V5QemHnpuQPEXM8uwIFXDF4iargnLSiadDaih8FUwSgMOdJVy2LGnw0wVMgYvdoogjxbIiaFpCchlGhzsxsA~-zklwytOzWdJYQv-kior4EFQ6JaYI1ELH~RYbHl2oFoPCZdgsuWg9jA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_52_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/153/image/image.jpg?Expires=1776732224&Signature=h6VoNQHl3OIWxjkYjXjwEx4iAgvHI4nWw4m6hJUTxyapx8~ysLQQTjduOnqbxWyqyT46LXu-D~g7j6HNEpbONgMJIDa5j0NhvkvTL-VAPQTeSiLPcmnqAyQPqDjyv4uMMML5g6kXArGYXIFoh41~XogYtMsGCNaqFkXnlnVs6uoJ7WED7hPTIK3-jj-m~L5bfkhtfAIO3~Lkqdt~KavlQBKgQnMJeMgRL1P9adm~7gMMCBGzDcHF8vP-ctx7lFVmP-6yXdio0DAHw0dTpq7g21nljnfsCSPbZpvPcfiywCXmPupJa-9r~Cql7n7MBn2nXdUniBvqmMlkadl9B9MJVA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000153.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 53,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/153/image/image.jpg?Expires=1776732224&Signature=h6VoNQHl3OIWxjkYjXjwEx4iAgvHI4nWw4m6hJUTxyapx8~ysLQQTjduOnqbxWyqyT46LXu-D~g7j6HNEpbONgMJIDa5j0NhvkvTL-VAPQTeSiLPcmnqAyQPqDjyv4uMMML5g6kXArGYXIFoh41~XogYtMsGCNaqFkXnlnVs6uoJ7WED7hPTIK3-jj-m~L5bfkhtfAIO3~Lkqdt~KavlQBKgQnMJeMgRL1P9adm~7gMMCBGzDcHF8vP-ctx7lFVmP-6yXdio0DAHw0dTpq7g21nljnfsCSPbZpvPcfiywCXmPupJa-9r~Cql7n7MBn2nXdUniBvqmMlkadl9B9MJVA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_53_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/154/image/image.jpg?Expires=1776732224&Signature=CmkvtQ8kYw8mIX~qgQrXlsQ07~I17hIP7giC4XkE~xyBeqoi-vwJBbpzEl3gdvQ5ScfJq-mt8qXcK8SBIfZfBlj5VTZ6-tRaeePH2bGe53utJ3J1ut8FDe2-SlXwu0EJVUvuD6XYVucau7xKp4DkS84Tl6YhWGvuA4Vbwl1izcaHwJqf0AsnjHCVnqDM-IU4iRv6KzZwdhoT2sBsOY2JPfT~HQxsHb-op4FKpYXEJIAxn1PCgLwwvppF~6mp9~9H2irtWl4tQ1F5rl47dd34WpzHNTwLMG2rhBdFtJFLruyDP5s0e9PMRn4qJSh6VjqH3MwIk5ERwgj-yKCcWo5cAg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000154.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 54,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/154/image/image.jpg?Expires=1776732224&Signature=CmkvtQ8kYw8mIX~qgQrXlsQ07~I17hIP7giC4XkE~xyBeqoi-vwJBbpzEl3gdvQ5ScfJq-mt8qXcK8SBIfZfBlj5VTZ6-tRaeePH2bGe53utJ3J1ut8FDe2-SlXwu0EJVUvuD6XYVucau7xKp4DkS84Tl6YhWGvuA4Vbwl1izcaHwJqf0AsnjHCVnqDM-IU4iRv6KzZwdhoT2sBsOY2JPfT~HQxsHb-op4FKpYXEJIAxn1PCgLwwvppF~6mp9~9H2irtWl4tQ1F5rl47dd34WpzHNTwLMG2rhBdFtJFLruyDP5s0e9PMRn4qJSh6VjqH3MwIk5ERwgj-yKCcWo5cAg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_54_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/155/image/image.jpg?Expires=1776732224&Signature=nv0TCblMA3Bat7t~s5m4tQ8BIRD0pBYM-gGliZM~6YDo3aCVOWMF6p3VBpLr2KRtqR3W0tfF55QCUZEGL7r9OlI9GdLAb7BmnnnpeKDuGiWwIV-asBXTdU9OFg7L~Mxu-omJA~rlkwCfUzjyEzYix4nIT49Azo46wvX3Y6tyFY~OKojAk6WXPQI-X3kudqXS8c7B1xMg~Z8EvNE6f3tVUGwGPp2tmfZxAKFRzeQtGyJYYrxuYOHqINWQIeltqYeLICIkxBRzLppy0f2rGU4vnRSzjgStTga2rQdbkIJlfPk3G4gJWUPpOeLZZ1r690hOTzIe5KoXjvZBdTOOoUHs~A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000155.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 55,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/155/image/image.jpg?Expires=1776732224&Signature=nv0TCblMA3Bat7t~s5m4tQ8BIRD0pBYM-gGliZM~6YDo3aCVOWMF6p3VBpLr2KRtqR3W0tfF55QCUZEGL7r9OlI9GdLAb7BmnnnpeKDuGiWwIV-asBXTdU9OFg7L~Mxu-omJA~rlkwCfUzjyEzYix4nIT49Azo46wvX3Y6tyFY~OKojAk6WXPQI-X3kudqXS8c7B1xMg~Z8EvNE6f3tVUGwGPp2tmfZxAKFRzeQtGyJYYrxuYOHqINWQIeltqYeLICIkxBRzLppy0f2rGU4vnRSzjgStTga2rQdbkIJlfPk3G4gJWUPpOeLZZ1r690hOTzIe5KoXjvZBdTOOoUHs~A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_55_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/156/image/image.jpg?Expires=1776732224&Signature=bzC9OqUOnkiWdEPny5pvvI7oWPyzvyA5QgCh953BS1ehKUoHl2aH2hqz5kC3p-ZsECMPZbulXxjzYRPFs6time7QiNLhw475XToddN6iyUG4lcyi152z6hXie355zrWsw8Los8jGLCPX2CSLrVAr~HqM8DnwvJZfOChHt5WGWhEFUAHaqpUYLWPJsu4gU3Qg2QGaCP-usOGX6MKNf4iEo~jaGRSMVr9AjD98H1t2ixxkeY4~sRSPCaM50LGY~~176d-Hrg5GylGeY8R4wroCYZDjjoOBaGmrJsptMyEHBQy7vJS~LUqygaTGghspPPPj42Urdx97SI0Tzn2y9kI5rA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000156.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 56,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/156/image/image.jpg?Expires=1776732224&Signature=bzC9OqUOnkiWdEPny5pvvI7oWPyzvyA5QgCh953BS1ehKUoHl2aH2hqz5kC3p-ZsECMPZbulXxjzYRPFs6time7QiNLhw475XToddN6iyUG4lcyi152z6hXie355zrWsw8Los8jGLCPX2CSLrVAr~HqM8DnwvJZfOChHt5WGWhEFUAHaqpUYLWPJsu4gU3Qg2QGaCP-usOGX6MKNf4iEo~jaGRSMVr9AjD98H1t2ixxkeY4~sRSPCaM50LGY~~176d-Hrg5GylGeY8R4wroCYZDjjoOBaGmrJsptMyEHBQy7vJS~LUqygaTGghspPPPj42Urdx97SI0Tzn2y9kI5rA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_56_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/157/image/image.jpg?Expires=1776732224&Signature=GHhuI18u00g4TlSKtQWg9Bw6lVX3k1cSQlZvJvP4x72oy17uVNbmgOKfUbRY-6T4fGue2Xlje-kJqFuTHni6~7MQBN-oLhwLSOWytua0b4JvoOWi5DJmFbBIHgr8JlGnB~jmZitGCSO2K0L-HJbcjnzINSOSjhJ8JcGHIhtjKgqB3UgiEYykUpBC4y8KJp9GGKG2hz6gwmSiLeNns71BLvwAnsQgbZsEbTXch9nowRnysQZn1mDAV3pfbL2RPHVf6yUP9bIalBlwIP0iZVBKq~9NAAWAfDKuJ8MpD8ws3Sd7LYay9ZQnnurCfEO93v~QRAcxyXLBLwo~nIhQ4QXBOw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000157.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 57,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/157/image/image.jpg?Expires=1776732224&Signature=GHhuI18u00g4TlSKtQWg9Bw6lVX3k1cSQlZvJvP4x72oy17uVNbmgOKfUbRY-6T4fGue2Xlje-kJqFuTHni6~7MQBN-oLhwLSOWytua0b4JvoOWi5DJmFbBIHgr8JlGnB~jmZitGCSO2K0L-HJbcjnzINSOSjhJ8JcGHIhtjKgqB3UgiEYykUpBC4y8KJp9GGKG2hz6gwmSiLeNns71BLvwAnsQgbZsEbTXch9nowRnysQZn1mDAV3pfbL2RPHVf6yUP9bIalBlwIP0iZVBKq~9NAAWAfDKuJ8MpD8ws3Sd7LYay9ZQnnurCfEO93v~QRAcxyXLBLwo~nIhQ4QXBOw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_57_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/158/image/image.jpg?Expires=1776732224&Signature=OIo0O3WVnKdXtMLdryQO9He0NUxOojxb2EQBiWBHjv8sYhjnXsywI1u~YDeCAfHtJ3oBM1HufNpCg-O5ngNaQ0w7fMf0yQ3qXlRhpQHtVcnDtQQdXIs34BYDcrNvc2SCQMzCn~l47CqavOu8Bpha2zDB4A9K2FSZgBALIf5hJe8npaXUr~nnmHeg4EGVBdQ9w7Z0zuRqACUWB2L5L2FS7LbYzS86AOZLh6yJwiMkI~EQWehnVSppyLwUhQeE2VDZJIrmzLMXknPKB8y1D9BEkPmdP46a7sYX2oAk7LZiU9slc~6yBjPK5b-KGlTxMjvJM1Lv-ZENg2CE18qhkqYSWg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000158.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 58,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/158/image/image.jpg?Expires=1776732224&Signature=OIo0O3WVnKdXtMLdryQO9He0NUxOojxb2EQBiWBHjv8sYhjnXsywI1u~YDeCAfHtJ3oBM1HufNpCg-O5ngNaQ0w7fMf0yQ3qXlRhpQHtVcnDtQQdXIs34BYDcrNvc2SCQMzCn~l47CqavOu8Bpha2zDB4A9K2FSZgBALIf5hJe8npaXUr~nnmHeg4EGVBdQ9w7Z0zuRqACUWB2L5L2FS7LbYzS86AOZLh6yJwiMkI~EQWehnVSppyLwUhQeE2VDZJIrmzLMXknPKB8y1D9BEkPmdP46a7sYX2oAk7LZiU9slc~6yBjPK5b-KGlTxMjvJM1Lv-ZENg2CE18qhkqYSWg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_58_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/159/image/image.jpg?Expires=1776732224&Signature=U5Lgh5VWxtFdRCtHv8MQqfGVSieFVLNyu8LrZQtJBaSCBoPdQ24GPJhY1kqW5cxHDRCeQI12oFwKMGbLs9Z1U8wn-8BKSIrcq1fDihpQExNMOA-CAACH36Vhq7M2YKueMCuZXCHEa2pea~aJknC068Wx6tvWFZeAk5iPZQoZQdnl0wpH9HFvFqUaQPV5sZ7G-7T4F5xYAtP2RboSVzT-PoCQ3ronDkV1hySCxgyWxvVKckB-ZrVyjU8-5wG31ifpOTkoLP~Nnx~69F3c7YkBmmPTuaAR1BFziMbLCcT-R1G-g~ju5CIn-As0Lp1B30izkzwq40611Q3bAu4Z1gfxMQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000159.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 59,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/159/image/image.jpg?Expires=1776732224&Signature=U5Lgh5VWxtFdRCtHv8MQqfGVSieFVLNyu8LrZQtJBaSCBoPdQ24GPJhY1kqW5cxHDRCeQI12oFwKMGbLs9Z1U8wn-8BKSIrcq1fDihpQExNMOA-CAACH36Vhq7M2YKueMCuZXCHEa2pea~aJknC068Wx6tvWFZeAk5iPZQoZQdnl0wpH9HFvFqUaQPV5sZ7G-7T4F5xYAtP2RboSVzT-PoCQ3ronDkV1hySCxgyWxvVKckB-ZrVyjU8-5wG31ifpOTkoLP~Nnx~69F3c7YkBmmPTuaAR1BFziMbLCcT-R1G-g~ju5CIn-As0Lp1B30izkzwq40611Q3bAu4Z1gfxMQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_59_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/160/image/image.jpg?Expires=1776732224&Signature=ZxzDlzXDF8BYutfWa0aTNvfMiFf5w6yr68Kqs96ti4di7fIhnL6HJTA5pLS-EUl6fcSqvrAcQ2rAqO3mr6m3yVuozS106QMg274JKRv3RfCmMf78A-NbrspDq-Wtwpk-tsdMbvmcPvIyajxhsU-xMexupUsH7LGm7bS2p3DanUgrimsBfUa0SCOVqYBEqPkS8CxIlz9wk4rifBYFdyBY71vsRWadn-1lIoSD5PBjJoI5US~Vn3Cg60ixHm-e2dqRuOsDcIAbyiSgM1deTca2vt9ASORj~scFwcXsDPO6pQMZP-gv0Vf2bjQFQmguxazP4s7L8nArxhRWvxN~EcmC8w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000160.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 60,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/160/image/image.jpg?Expires=1776732224&Signature=ZxzDlzXDF8BYutfWa0aTNvfMiFf5w6yr68Kqs96ti4di7fIhnL6HJTA5pLS-EUl6fcSqvrAcQ2rAqO3mr6m3yVuozS106QMg274JKRv3RfCmMf78A-NbrspDq-Wtwpk-tsdMbvmcPvIyajxhsU-xMexupUsH7LGm7bS2p3DanUgrimsBfUa0SCOVqYBEqPkS8CxIlz9wk4rifBYFdyBY71vsRWadn-1lIoSD5PBjJoI5US~Vn3Cg60ixHm-e2dqRuOsDcIAbyiSgM1deTca2vt9ASORj~scFwcXsDPO6pQMZP-gv0Vf2bjQFQmguxazP4s7L8nArxhRWvxN~EcmC8w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_60_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/161/image/image.jpg?Expires=1776732224&Signature=GpHNF4HTUGkoLrwwK3blcaJFZ1UYisfYDKu4IOTdtIY1u4Zw2UEZjkvRpSecZyIKBxD0Y7wrPB6yRgy6rglZsIkwDvgU-qU2pOUrj0GxURVf0sDns5YUQ3tyAvwioIXgHjFvZ4O0a8D1ADem7B-hPn3DbV6Ld1sSl7sb3NUl1aBQdNMvVRIPXMPuYqLK8X-cOvsk58wGiwIxux-BDxMiFDaAeiZIdhCiudCYm3skn4qWOMUfEhtN6W5wf-M9K3TTtyHECnGgsxLPYBdXEoBwdHWk2~LDx0b529-AmKXy2q37XQkSyabKqPY6K0tWh4O-1IYEz2~TFflsrnPjFiuZOQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000161.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 61,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/161/image/image.jpg?Expires=1776732224&Signature=GpHNF4HTUGkoLrwwK3blcaJFZ1UYisfYDKu4IOTdtIY1u4Zw2UEZjkvRpSecZyIKBxD0Y7wrPB6yRgy6rglZsIkwDvgU-qU2pOUrj0GxURVf0sDns5YUQ3tyAvwioIXgHjFvZ4O0a8D1ADem7B-hPn3DbV6Ld1sSl7sb3NUl1aBQdNMvVRIPXMPuYqLK8X-cOvsk58wGiwIxux-BDxMiFDaAeiZIdhCiudCYm3skn4qWOMUfEhtN6W5wf-M9K3TTtyHECnGgsxLPYBdXEoBwdHWk2~LDx0b529-AmKXy2q37XQkSyabKqPY6K0tWh4O-1IYEz2~TFflsrnPjFiuZOQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_61_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/162/image/image.jpg?Expires=1776732224&Signature=a8-FHtJh~LEzrYW2vOiAGbHgSUszfYcZg9AW9tLeAsrgnSmle~Mft8ExiLpWjfWBC~YsnhKP28udqXG-SB0iKOiNjXHsZYCPHbGCmAJcBJw9xOrmZNnSUIM9QGMndVgNDelDM6GB6EsGvDZIvuUteoinKAX1SfVq9yNAHLLi4T6-ljVWsWsVyJStccrxyK95oUhQL57wltu8-mca5N9exKdlsEUyaZ5P2p6s~8kf5oOG2x3kOhu8cVtEyAnZD2GW0~x2pAa2pwdHf2tet7Wi9ZmPRF42jp~rn-a1MxrXEaXplWW1Ot0qLy23Dnqk1jSstPDrZYE7mWHWE8S3U75BQg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000162.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 62,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/162/image/image.jpg?Expires=1776732224&Signature=a8-FHtJh~LEzrYW2vOiAGbHgSUszfYcZg9AW9tLeAsrgnSmle~Mft8ExiLpWjfWBC~YsnhKP28udqXG-SB0iKOiNjXHsZYCPHbGCmAJcBJw9xOrmZNnSUIM9QGMndVgNDelDM6GB6EsGvDZIvuUteoinKAX1SfVq9yNAHLLi4T6-ljVWsWsVyJStccrxyK95oUhQL57wltu8-mca5N9exKdlsEUyaZ5P2p6s~8kf5oOG2x3kOhu8cVtEyAnZD2GW0~x2pAa2pwdHf2tet7Wi9ZmPRF42jp~rn-a1MxrXEaXplWW1Ot0qLy23Dnqk1jSstPDrZYE7mWHWE8S3U75BQg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_62_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/163/image/image.jpg?Expires=1776732224&Signature=g638b6gthR~NBJGyHlsN4Uexqco2txPUcgkkvhQ9hCA8Jq4LothPZOnu5SqwAjKeUJThNxDlM-av87qlmbkHPMHJT~~ypSFvFSFWeqqS7tIN8Lf6YXycn28DwjJsJ98G99mul8erOZgFUk8zSTnVf1-yG6p5Q8znAQbOHMdZcEJf1QIwXCnT~hYhi3UJ7Jl4UvZauRSP3jjzpnGHy2C5yclTpgAc6S5btWyHed54XjmXLy~1q4KTzaRoow9m6xhNZ2OpSxf0GdmBO-z5WlgPa4dyiSXZzs6jDhk2EjO7o05Ct876luPoAi0SgUwIJR9iEAdDuVvd-eM2l4gY1j0NGA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000163.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 63,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/163/image/image.jpg?Expires=1776732224&Signature=g638b6gthR~NBJGyHlsN4Uexqco2txPUcgkkvhQ9hCA8Jq4LothPZOnu5SqwAjKeUJThNxDlM-av87qlmbkHPMHJT~~ypSFvFSFWeqqS7tIN8Lf6YXycn28DwjJsJ98G99mul8erOZgFUk8zSTnVf1-yG6p5Q8znAQbOHMdZcEJf1QIwXCnT~hYhi3UJ7Jl4UvZauRSP3jjzpnGHy2C5yclTpgAc6S5btWyHed54XjmXLy~1q4KTzaRoow9m6xhNZ2OpSxf0GdmBO-z5WlgPa4dyiSXZzs6jDhk2EjO7o05Ct876luPoAi0SgUwIJR9iEAdDuVvd-eM2l4gY1j0NGA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_63_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/164/image/image.jpg?Expires=1776732224&Signature=QaFwd6MmPbNwX9-S7WEgYVqLAkLAHUxTYVQuIpVSlIMbFQJVFg7rLWDeVlSUapHgQHRBzw7sK07rqLk~uw~VnXoCfoHL09DTQJ5K-AIpW~2YLS256~Zx6P1fEhgWWY3YDFviGMNtmf0Lv5itxRY91gMxcsX115b6N30sk2Ve~k6zycfiAcEKY6v7R7K0aVvbHR3REZw8hiB2bP8640--U4ZZdmV3~pqIKgc7Ci-kO1f~RfrmHH~gzcCDgrqXd5k52xhjmAl5XmeI61QTNFS5vq-jh89hxYOYR6rKiKRRz~EgU3PKMoP1DoSdP3V5UxWyaEdmfdf2HuFU1BYiPZDJ6w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000164.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 64,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/164/image/image.jpg?Expires=1776732224&Signature=QaFwd6MmPbNwX9-S7WEgYVqLAkLAHUxTYVQuIpVSlIMbFQJVFg7rLWDeVlSUapHgQHRBzw7sK07rqLk~uw~VnXoCfoHL09DTQJ5K-AIpW~2YLS256~Zx6P1fEhgWWY3YDFviGMNtmf0Lv5itxRY91gMxcsX115b6N30sk2Ve~k6zycfiAcEKY6v7R7K0aVvbHR3REZw8hiB2bP8640--U4ZZdmV3~pqIKgc7Ci-kO1f~RfrmHH~gzcCDgrqXd5k52xhjmAl5XmeI61QTNFS5vq-jh89hxYOYR6rKiKRRz~EgU3PKMoP1DoSdP3V5UxWyaEdmfdf2HuFU1BYiPZDJ6w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_64_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/165/image/image.jpg?Expires=1776732224&Signature=taaEy9z86bYVUJ22KKQNM8auZOIQH7FR~OF-ZNJlWB1o4vUOT4eAtlV16APoohG2yh29n83MPswSblvxmVQt1Ig47A-0QV3t7UZYSSYPtsNcB8jzIWf2XBEZLHwbJcjz8zF2XiUFR0x6E3JFTmyWiwF9ukmIdySWUdvtlimD1u5NWVGowORUoIbSDdtZat1A1KTmzHf3fNm98kd9f5-8rDt0nWG3Tv09cWD39E4dsZM2uANNZIUOMW4oseh-GRM5St7lKPDPZmLn3p4fpkqSPi4BtVvZe5O7ZbFL-YqV02fkBZHTKdS4CiDcIrERa98V~Tv6IomCRclbzZn7prHpvg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000165.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 65,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/165/image/image.jpg?Expires=1776732224&Signature=taaEy9z86bYVUJ22KKQNM8auZOIQH7FR~OF-ZNJlWB1o4vUOT4eAtlV16APoohG2yh29n83MPswSblvxmVQt1Ig47A-0QV3t7UZYSSYPtsNcB8jzIWf2XBEZLHwbJcjz8zF2XiUFR0x6E3JFTmyWiwF9ukmIdySWUdvtlimD1u5NWVGowORUoIbSDdtZat1A1KTmzHf3fNm98kd9f5-8rDt0nWG3Tv09cWD39E4dsZM2uANNZIUOMW4oseh-GRM5St7lKPDPZmLn3p4fpkqSPi4BtVvZe5O7ZbFL-YqV02fkBZHTKdS4CiDcIrERa98V~Tv6IomCRclbzZn7prHpvg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_65_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/166/image/image.jpg?Expires=1776732224&Signature=bfXLzW5kQjuI0-7VmKSgXcVkt3ZdL9r354-Pkus86xAKXvZmW~lW2TetqK3~4yIHohx2LVxJPMZ1JoKgE7qEDxlHUvZiUtRe5FanaUF1SBT~bKpSAkCvgLOkbJ-ZG~AVUDxXIjAXg-AhPbG8gdyy7M~WJX~yM5VoQnTn4yC6QnzNAi4OgoIio6utDI6FeQihmS8CvRcaKWkbyi6uiP19YEaYFcyiDoaTrU86shjDfuEX5YzIPhykbNCB-Ke6bEV-ZpffeYPamh7Qjc42NgwVjP943hy87QJ7uNq36iHl3RyNCeIVY~ktYz6eKzVv81IXAczrFkmN26kqph3LmdNd3g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000166.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 66,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/166/image/image.jpg?Expires=1776732224&Signature=bfXLzW5kQjuI0-7VmKSgXcVkt3ZdL9r354-Pkus86xAKXvZmW~lW2TetqK3~4yIHohx2LVxJPMZ1JoKgE7qEDxlHUvZiUtRe5FanaUF1SBT~bKpSAkCvgLOkbJ-ZG~AVUDxXIjAXg-AhPbG8gdyy7M~WJX~yM5VoQnTn4yC6QnzNAi4OgoIio6utDI6FeQihmS8CvRcaKWkbyi6uiP19YEaYFcyiDoaTrU86shjDfuEX5YzIPhykbNCB-Ke6bEV-ZpffeYPamh7Qjc42NgwVjP943hy87QJ7uNq36iHl3RyNCeIVY~ktYz6eKzVv81IXAczrFkmN26kqph3LmdNd3g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_66_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/167/image/image.jpg?Expires=1776732224&Signature=NvGBn-g~QU4KaCEYA73aRV7pnczVUltNiU2EbTZXbbEr~DcfGavzLfQjVQzjEDySTojA30raiYzHt-T0frFY7iJXcLZXKxqoJg5mJtXOuo~x4CIXa6~JB0MgZG6Fo8jRr1lrPzeZ148WpRSG8e5~k6dllKWk~Ws2UcgTfNn-tHCfAWaWJL26C8qI4nlGErwixP-3-bVSbr2rEgZ4YNVtAWuf~dM7IavHm1Chge6hlhrzpXJJecKgIbR669KhM2chuHKH3eElBJKWSct8WSYBv~7bC8kYZFHMSUu3DdKDh~GB6Dy89J2ni6sVH3DA5UxmMF9WrogOS7xbHyQuuTOaZA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000167.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 67,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/167/image/image.jpg?Expires=1776732224&Signature=NvGBn-g~QU4KaCEYA73aRV7pnczVUltNiU2EbTZXbbEr~DcfGavzLfQjVQzjEDySTojA30raiYzHt-T0frFY7iJXcLZXKxqoJg5mJtXOuo~x4CIXa6~JB0MgZG6Fo8jRr1lrPzeZ148WpRSG8e5~k6dllKWk~Ws2UcgTfNn-tHCfAWaWJL26C8qI4nlGErwixP-3-bVSbr2rEgZ4YNVtAWuf~dM7IavHm1Chge6hlhrzpXJJecKgIbR669KhM2chuHKH3eElBJKWSct8WSYBv~7bC8kYZFHMSUu3DdKDh~GB6Dy89J2ni6sVH3DA5UxmMF9WrogOS7xbHyQuuTOaZA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_67_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/168/image/image.jpg?Expires=1776732224&Signature=pWbeFf9Ka0J2qr9kpL6U14wOtOXCNkxlf5T3dbKNVPSGJR8N7IFfE0pcj6hIkGF5AcTafyOalXScMilLwyafWfQZgIwRP9n0Lq8KqqtonT2OkafcRbrvLIcOUDTzZZB3pMkq5osAEtbCMLkMqkQV53exAISLefA~XEe4jqilhecXR6FlhZ9WfiBXCtVkHQoVwkN4BWUbvFMTUvVx4IuCjIt5DuKT23GIXchgiE0U4bLwbNkkLOA459pM8Qot8Tvu1dlW18zyVi9lNs401x7MHOhPoZVND4QguTwIANdSw3Ea4BdRssomxThXks65Pdu1eGT3Gf4YVZ1nhLoPDDgA4w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000168.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 68,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/168/image/image.jpg?Expires=1776732224&Signature=pWbeFf9Ka0J2qr9kpL6U14wOtOXCNkxlf5T3dbKNVPSGJR8N7IFfE0pcj6hIkGF5AcTafyOalXScMilLwyafWfQZgIwRP9n0Lq8KqqtonT2OkafcRbrvLIcOUDTzZZB3pMkq5osAEtbCMLkMqkQV53exAISLefA~XEe4jqilhecXR6FlhZ9WfiBXCtVkHQoVwkN4BWUbvFMTUvVx4IuCjIt5DuKT23GIXchgiE0U4bLwbNkkLOA459pM8Qot8Tvu1dlW18zyVi9lNs401x7MHOhPoZVND4QguTwIANdSw3Ea4BdRssomxThXks65Pdu1eGT3Gf4YVZ1nhLoPDDgA4w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_68_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/169/image/image.jpg?Expires=1776732224&Signature=fpJg71Qe9UzgvTsIG-lDbD5zM8qH00Dbizu3nOgqe5y-FxnI0RSCFAUG4ZmAE9dBAT7vN52UeSiAvC2T4Ed~cLVowTgWyK19KePQbPmXWLuaG-FBz-WsyJp1EC4IfdpJ5wdsRLaPeDrWZ18mVTqnDWPawJ9jNGcqiIWD~vqKKnTJECCJlrubQFsoM-KLqp7YveOw6jOiQaUnwWusDZ6133yWh97q67DpWrOaq8BCM8k7m-M4mGPbiXJ~aBZGwgl-~cylbt6PqYpSX4l9h7EhDo-27fATI2---spmmzoRgRNnVHSmrWUQEG0JEUHKo~HEiKGgvGtBDbg1UWT759kRbA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000169.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 69,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/169/image/image.jpg?Expires=1776732224&Signature=fpJg71Qe9UzgvTsIG-lDbD5zM8qH00Dbizu3nOgqe5y-FxnI0RSCFAUG4ZmAE9dBAT7vN52UeSiAvC2T4Ed~cLVowTgWyK19KePQbPmXWLuaG-FBz-WsyJp1EC4IfdpJ5wdsRLaPeDrWZ18mVTqnDWPawJ9jNGcqiIWD~vqKKnTJECCJlrubQFsoM-KLqp7YveOw6jOiQaUnwWusDZ6133yWh97q67DpWrOaq8BCM8k7m-M4mGPbiXJ~aBZGwgl-~cylbt6PqYpSX4l9h7EhDo-27fATI2---spmmzoRgRNnVHSmrWUQEG0JEUHKo~HEiKGgvGtBDbg1UWT759kRbA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_69_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/170/image/image.jpg?Expires=1776732224&Signature=B-dE-JQIIbK3MBEDBtY0kx22upHfVR5BP4F4I6NSyeN2XAeyvbs4XMji6KhkWeGyeZBkD6kijH2knc3hog91q4PbbeU3EbnUv4fILFpvEoQgfCY0UZdvAUZ3R72~8dwPpxhVBhHuBSnlgCQrfJY3-luqwHFvTpmp978vE3BlRrWJ9ByYnYVqrJdSWRjj~ovqJBc5mkm6032HwHDOUvKuhFTklwUyAJA-ce77r4OiqTaLPR61siAVVoRvHXVedPyVfSRcycxtgnxGBq8s~cjQkNxiNzwwPSq~U-hPgatGANes1PLDxOWvJa8yRVX5vpeDvLsAanJ4xV8pTwsZj8IFTg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000170.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 70,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/170/image/image.jpg?Expires=1776732224&Signature=B-dE-JQIIbK3MBEDBtY0kx22upHfVR5BP4F4I6NSyeN2XAeyvbs4XMji6KhkWeGyeZBkD6kijH2knc3hog91q4PbbeU3EbnUv4fILFpvEoQgfCY0UZdvAUZ3R72~8dwPpxhVBhHuBSnlgCQrfJY3-luqwHFvTpmp978vE3BlRrWJ9ByYnYVqrJdSWRjj~ovqJBc5mkm6032HwHDOUvKuhFTklwUyAJA-ce77r4OiqTaLPR61siAVVoRvHXVedPyVfSRcycxtgnxGBq8s~cjQkNxiNzwwPSq~U-hPgatGANes1PLDxOWvJa8yRVX5vpeDvLsAanJ4xV8pTwsZj8IFTg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_70_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/171/image/image.jpg?Expires=1776732224&Signature=UD91U4kEZUurJcinmXeOXNsh5LbAMeZwA30p7SJR6-IZVRS8V6J-DCdmDj1-77NvCdLwwjLMpteg4wkhQFXqOe-0HYfxwPLwMgbb~OxQGuZjRZRqsryrooklAKJisH8Ks4QMgV6HsS68~1NzFzZkKXvLcIZNblN2xx-KttHBXhI1GJo-~eavPg1MTMOKBAJVbsRO0TXPsIXYcHhiEVRAdFiosGFQfXsLsxgVIJXejHt~B5AWfNLY-vsH~VBBMj0XcNEgfMwY14dgMP0DxzUMecyVlFxoVtt-Z2TcKXka9M4KEuigpaitNRpoB3x2BupmMQyjZE675Q8OM84oy~zruA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000171.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 71,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/171/image/image.jpg?Expires=1776732224&Signature=UD91U4kEZUurJcinmXeOXNsh5LbAMeZwA30p7SJR6-IZVRS8V6J-DCdmDj1-77NvCdLwwjLMpteg4wkhQFXqOe-0HYfxwPLwMgbb~OxQGuZjRZRqsryrooklAKJisH8Ks4QMgV6HsS68~1NzFzZkKXvLcIZNblN2xx-KttHBXhI1GJo-~eavPg1MTMOKBAJVbsRO0TXPsIXYcHhiEVRAdFiosGFQfXsLsxgVIJXejHt~B5AWfNLY-vsH~VBBMj0XcNEgfMwY14dgMP0DxzUMecyVlFxoVtt-Z2TcKXka9M4KEuigpaitNRpoB3x2BupmMQyjZE675Q8OM84oy~zruA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_71_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/172/image/image.jpg?Expires=1776732224&Signature=I7A9YCDYDSXrN6KC9pVL1R8rbYlfVl6JvU8erAqKcjdJYvvbVS6ZUOsZah1cfyWeK20C5W-f~4hBLanpqMYJmE4k5pqORn2~j2mRFbU9tYIEvZIgVGLWNSh13ZhPeUKNfBwKev4Kp9dHIFIrcXiJBsBOpN9J-wQ0~vbb8WKQoCOjG1zCj4BI2EkIqBFU3tjzPz3MWBe-WGJGZxhugii4eVkJjLM2AHFt-WYmhfJUQSimwBYTpe2RJ-jgUjHQFbCUmW7-6LmSEenZ8RN4w4MvgZSOkGntZuZ3xrguscNmqRPdueYuACMefnhe0Fyb9FRdPPRkRQ9TY0RHJLvPzoH8iQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000172.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 72,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/172/image/image.jpg?Expires=1776732224&Signature=I7A9YCDYDSXrN6KC9pVL1R8rbYlfVl6JvU8erAqKcjdJYvvbVS6ZUOsZah1cfyWeK20C5W-f~4hBLanpqMYJmE4k5pqORn2~j2mRFbU9tYIEvZIgVGLWNSh13ZhPeUKNfBwKev4Kp9dHIFIrcXiJBsBOpN9J-wQ0~vbb8WKQoCOjG1zCj4BI2EkIqBFU3tjzPz3MWBe-WGJGZxhugii4eVkJjLM2AHFt-WYmhfJUQSimwBYTpe2RJ-jgUjHQFbCUmW7-6LmSEenZ8RN4w4MvgZSOkGntZuZ3xrguscNmqRPdueYuACMefnhe0Fyb9FRdPPRkRQ9TY0RHJLvPzoH8iQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_72_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/173/image/image.jpg?Expires=1776732224&Signature=z34UnsgeDU9xtBdKiWQf8Xjuuddw4d7YIXIPd5asY4MgVenGyFlZYeVT12-c~wViHWJqm-gENgJ7yqjxq51FPsO2Bru31awzxhErhxJwSXjqK9rviMOB4YrAb6hd0RchTps-PszLXfxHgNOL8t7klh9MQ217H3YH6ZDi8SOcA7ZzTR2rUr84MiTi0qmx82U6BPt-aKlAf~5A4CcWDhuPdKBqKU7p3ayoMJoNSd0nyCyy3keYS-nS3VXqd-LuQ4Q4D0eeqACibtdV282gNH1r~rXa--mjTWwY3ySzftHuSYNKcd~zw6LgYqMIRQfv3hXKfCM8PbqQc5GwSPacJ~OAWg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000173.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 73,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/173/image/image.jpg?Expires=1776732224&Signature=z34UnsgeDU9xtBdKiWQf8Xjuuddw4d7YIXIPd5asY4MgVenGyFlZYeVT12-c~wViHWJqm-gENgJ7yqjxq51FPsO2Bru31awzxhErhxJwSXjqK9rviMOB4YrAb6hd0RchTps-PszLXfxHgNOL8t7klh9MQ217H3YH6ZDi8SOcA7ZzTR2rUr84MiTi0qmx82U6BPt-aKlAf~5A4CcWDhuPdKBqKU7p3ayoMJoNSd0nyCyy3keYS-nS3VXqd-LuQ4Q4D0eeqACibtdV282gNH1r~rXa--mjTWwY3ySzftHuSYNKcd~zw6LgYqMIRQfv3hXKfCM8PbqQc5GwSPacJ~OAWg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_73_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/174/image/image.jpg?Expires=1776732224&Signature=R~iGDigxEZLRVEm2obYpJZcL1smw8AD1vKSZ5U1PpP7N6cE9GzrLaSLyw-j0UyHOO5OLTA3sqDmAR5jf99-2NmUwLUulPivN8oYR-BK0~5sJII8iLTq46MWxicTDRsTr3qcnsWZT2psjxMcqaeNwJGvc02S0TSNaEOwW7bB7076zelacFvV2yvX5ikr04CLDIltcPweIlSfpGsk0H8ztsHdnKpJIMbN-tBKuwFDGj9Trb0DsUsxJP0Enf8J9nGmUukeVY7NRKigZswh33jre646ud1hch0cK9aZz8E6suqqQtosqp849dn5QLJJQYtSAUOhnA5u1G4hF6XzeTKuPnA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000174.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 74,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/174/image/image.jpg?Expires=1776732224&Signature=R~iGDigxEZLRVEm2obYpJZcL1smw8AD1vKSZ5U1PpP7N6cE9GzrLaSLyw-j0UyHOO5OLTA3sqDmAR5jf99-2NmUwLUulPivN8oYR-BK0~5sJII8iLTq46MWxicTDRsTr3qcnsWZT2psjxMcqaeNwJGvc02S0TSNaEOwW7bB7076zelacFvV2yvX5ikr04CLDIltcPweIlSfpGsk0H8ztsHdnKpJIMbN-tBKuwFDGj9Trb0DsUsxJP0Enf8J9nGmUukeVY7NRKigZswh33jre646ud1hch0cK9aZz8E6suqqQtosqp849dn5QLJJQYtSAUOhnA5u1G4hF6XzeTKuPnA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_74_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/175/image/image.jpg?Expires=1776732224&Signature=nhhVRVD5rMpzKPMqcKHLRag94saKmOp1Xt~4f0qCEmku3N1XosL06P8IXvoq55NxYnqPdR1y5t-yBtMHfA7DCKpeSeeQ8Pj6ez3Le1AqBokq0QpVFSnb0lZxnXBUro-kAEnJsEj~TNdEklHhWnkBqJNSmxVaSocWani70XCFRH6D~XPX69bhc3hdZvOSpXQs~g8zgrAwmqGS-7xTp7pqx4UcEcXJn5u1PirVgv32o07NYAcSZPi4PH1ENQa-LJQxpVxULiQYQPc4~DRr~9u~n2EaJZDw2WiXXlRA6aW-E7sJOyjspxS5Qmz6MOhEvIA~Oj81~5E-aUJcrlgWAsFO7w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000175.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 75,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/175/image/image.jpg?Expires=1776732224&Signature=nhhVRVD5rMpzKPMqcKHLRag94saKmOp1Xt~4f0qCEmku3N1XosL06P8IXvoq55NxYnqPdR1y5t-yBtMHfA7DCKpeSeeQ8Pj6ez3Le1AqBokq0QpVFSnb0lZxnXBUro-kAEnJsEj~TNdEklHhWnkBqJNSmxVaSocWani70XCFRH6D~XPX69bhc3hdZvOSpXQs~g8zgrAwmqGS-7xTp7pqx4UcEcXJn5u1PirVgv32o07NYAcSZPi4PH1ENQa-LJQxpVxULiQYQPc4~DRr~9u~n2EaJZDw2WiXXlRA6aW-E7sJOyjspxS5Qmz6MOhEvIA~Oj81~5E-aUJcrlgWAsFO7w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_75_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/176/image/image.jpg?Expires=1776732224&Signature=bkGvuFOx017cLjQb-eqQaLbSopSRxYJELU2FTZbXbzJaJ3Gh-vyrYDKXXxSXqDJK-imE0BjnTBoOQ705Qb9mPPcWEFSmV3zb2kT~o43clQlndFX~GyTQ0uK8zRV6FDCZ-jpx-Be1ooKHkkIN1E7-0Z9YqukHdWA3HI2R0UzbVun1rnP3hZ61GZjjXS-8Rq5DbNaTTeuVNpHlfHUFJMsZAt2Rp4gt8mR6DBt4K2lFBNhJ75L-6QjNVBpS-Onyijl6LDT9LBgcImAjliMczPCVvncSbZbeI2HWffuHQRFi~ylHSJs2Syp4Ii~Y7rv5xAbNZwaDeXF2e2vshaS0jlHKYg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000176.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 76,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/176/image/image.jpg?Expires=1776732224&Signature=bkGvuFOx017cLjQb-eqQaLbSopSRxYJELU2FTZbXbzJaJ3Gh-vyrYDKXXxSXqDJK-imE0BjnTBoOQ705Qb9mPPcWEFSmV3zb2kT~o43clQlndFX~GyTQ0uK8zRV6FDCZ-jpx-Be1ooKHkkIN1E7-0Z9YqukHdWA3HI2R0UzbVun1rnP3hZ61GZjjXS-8Rq5DbNaTTeuVNpHlfHUFJMsZAt2Rp4gt8mR6DBt4K2lFBNhJ75L-6QjNVBpS-Onyijl6LDT9LBgcImAjliMczPCVvncSbZbeI2HWffuHQRFi~ylHSJs2Syp4Ii~Y7rv5xAbNZwaDeXF2e2vshaS0jlHKYg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_76_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/177/image/image.jpg?Expires=1776732224&Signature=kaKnaPd9FTLBzlR0nhRvTSpQ7pOyoHTg7TvOxDawexBb0oWMf1CJpt7nhO2CMLb5iTD0si1aRuaH0sUssrjp5l8gtiZj7FetQldlaHW3yL42ymd61WpiaF-XxcIuJnDvVvZGCBfBC5kel2dSfR~7t5lMpEsu9YG-0l0qa3V8QDN18QUFE8CUG5txoW2yex9A6UqwsJOI2xsRDDlxjkEeMozKqUhNrTK0TMte0JDzzxX8ASEqEP7tnqLBi7-arKP~spyvIUNsxe-x7wTUlQTElIkciQLyKXz-dqaATfHHgIPn28G8cmWEniTVMjoSmV7rBsmuHv9-S60-g6MEffcZdA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000177.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 77,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/177/image/image.jpg?Expires=1776732224&Signature=kaKnaPd9FTLBzlR0nhRvTSpQ7pOyoHTg7TvOxDawexBb0oWMf1CJpt7nhO2CMLb5iTD0si1aRuaH0sUssrjp5l8gtiZj7FetQldlaHW3yL42ymd61WpiaF-XxcIuJnDvVvZGCBfBC5kel2dSfR~7t5lMpEsu9YG-0l0qa3V8QDN18QUFE8CUG5txoW2yex9A6UqwsJOI2xsRDDlxjkEeMozKqUhNrTK0TMte0JDzzxX8ASEqEP7tnqLBi7-arKP~spyvIUNsxe-x7wTUlQTElIkciQLyKXz-dqaATfHHgIPn28G8cmWEniTVMjoSmV7rBsmuHv9-S60-g6MEffcZdA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_77_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/178/image/image.jpg?Expires=1776732224&Signature=Bj-7QZWcXtazPRCK9mP~mLWYgk40G0vNfwVRQR9G9GID1~7W620YkrlgCaKZ0wFYOBGRmZAaGYUMSDVYgIADB-zsu1pGB7V9K4vpPw2bzj70AHXtFOWJ3K6upLuXdyX13045vTPwTLLj5IfLxM9aqJhYbfT4heTn5fUAOlHOSWGBa0sfDtSofAmfX7NgU~7HUaUOafRF62cZWi-d8fP4utahzNj1ctLsyt9UQWzdBG3-3NlkVMWKg1B2P5GgmJT4gBBNn2vmGLq1GkSo3kuDSLhAsL0DFpxXqxZb5uCatIBoWNfwRSDo4fpYkuM1Ep5d7vADaI9zgy0Lgw-00lOwLQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000178.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 78,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/178/image/image.jpg?Expires=1776732224&Signature=Bj-7QZWcXtazPRCK9mP~mLWYgk40G0vNfwVRQR9G9GID1~7W620YkrlgCaKZ0wFYOBGRmZAaGYUMSDVYgIADB-zsu1pGB7V9K4vpPw2bzj70AHXtFOWJ3K6upLuXdyX13045vTPwTLLj5IfLxM9aqJhYbfT4heTn5fUAOlHOSWGBa0sfDtSofAmfX7NgU~7HUaUOafRF62cZWi-d8fP4utahzNj1ctLsyt9UQWzdBG3-3NlkVMWKg1B2P5GgmJT4gBBNn2vmGLq1GkSo3kuDSLhAsL0DFpxXqxZb5uCatIBoWNfwRSDo4fpYkuM1Ep5d7vADaI9zgy0Lgw-00lOwLQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_78_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/179/image/image.jpg?Expires=1776732224&Signature=OW1EJCGCV3sQlAI-ENAH89oJ-XZnte6bASNclaXUzycR9phGRxjOGuxxQw5csRHEyyTivLE6WHbfAqrkK~YplFqsV-OUFO~xSJ9M6BWxoHldQAZYnbQzch6UHp5j0H~jqdOULr5YGhHMPJ1gc9WDgXHQ9bp0XLyCyBMglcE6ymWZrMqmhAyYkHVqc1YhvqiSVMzXixgqZaOnEq4rAFn20BqsP8yFtN2vMZqn7YajLjaX7sVU0QInJEmjVrnigcU9GQ87AiEsLYTVJORdyOmMGxyjqiSrg4618yTJ1-N20b0D5fISXQCbcsxgeZ~PQo2fk2AQOYBDxDyV~qugIsX6NA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000179.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 79,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/179/image/image.jpg?Expires=1776732224&Signature=OW1EJCGCV3sQlAI-ENAH89oJ-XZnte6bASNclaXUzycR9phGRxjOGuxxQw5csRHEyyTivLE6WHbfAqrkK~YplFqsV-OUFO~xSJ9M6BWxoHldQAZYnbQzch6UHp5j0H~jqdOULr5YGhHMPJ1gc9WDgXHQ9bp0XLyCyBMglcE6ymWZrMqmhAyYkHVqc1YhvqiSVMzXixgqZaOnEq4rAFn20BqsP8yFtN2vMZqn7YajLjaX7sVU0QInJEmjVrnigcU9GQ87AiEsLYTVJORdyOmMGxyjqiSrg4618yTJ1-N20b0D5fISXQCbcsxgeZ~PQo2fk2AQOYBDxDyV~qugIsX6NA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_79_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/180/image/image.jpg?Expires=1776732224&Signature=QaAkbT93s616DLKWYZUKlx9XCg1P-X0Uc44Ur4RvCpkhb~e2jPWANEwdqitQAWlO3m04sZ9ivQNl-GXzgQ7NYHBT7M0qJvmZ0Q2Kl1zigC55N04EWYGdamHt89FnJ3Nm31MBoxCYMo3G~oWaMkQPdNxOcgsH9hpUkyDbFUkm7JuHfv9M-DEeH2KGwISHRTgNQPw5nwPdV7jmkAjBDYJeq62LSOpd6zkWg18pCSAPYWXnojfaI8wim6v6JjPc5VvpqboSGbVwFQF3NztTwUs6pnq5n9qIuIY6sdSoKVbJDTWFrGBHb85175pWAmFe2IZU07QZCeCKKo3e6OVqWkW-9w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000180.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 80,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/180/image/image.jpg?Expires=1776732224&Signature=QaAkbT93s616DLKWYZUKlx9XCg1P-X0Uc44Ur4RvCpkhb~e2jPWANEwdqitQAWlO3m04sZ9ivQNl-GXzgQ7NYHBT7M0qJvmZ0Q2Kl1zigC55N04EWYGdamHt89FnJ3Nm31MBoxCYMo3G~oWaMkQPdNxOcgsH9hpUkyDbFUkm7JuHfv9M-DEeH2KGwISHRTgNQPw5nwPdV7jmkAjBDYJeq62LSOpd6zkWg18pCSAPYWXnojfaI8wim6v6JjPc5VvpqboSGbVwFQF3NztTwUs6pnq5n9qIuIY6sdSoKVbJDTWFrGBHb85175pWAmFe2IZU07QZCeCKKo3e6OVqWkW-9w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_80_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/181/image/image.jpg?Expires=1776732224&Signature=dPgyK4Gqo~w6iLOgPzx5yyyK76wlZ98lvpF1-4pFocSnIijqaMos2XH~eSl2cXH8i-uy9gTEk3ve9YZH2I1SevWiiNdJplwzecYWlUJpviGuqLvvyrYeBfdIsfghuJV3cGGy7tjreaXRoua6ghp67RycOHhGu36mCs5yHQTQPRW763bKwsC3Igr9tYwiTeExor5tY0M0T9Hn5irn-aDBDr-1IXz3-8Fut3EeET2WQrztlDhKqUlHk0guM6zFDu2a1hyRw7ZZSofdUnUhKRymUJfuuZ2~w-YYaThKtQ7NlTB5gD6zJXwZvpdRNWJR4TLnG64w~KCvVIIGVrjjx~M8Qw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000181.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 81,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/181/image/image.jpg?Expires=1776732224&Signature=dPgyK4Gqo~w6iLOgPzx5yyyK76wlZ98lvpF1-4pFocSnIijqaMos2XH~eSl2cXH8i-uy9gTEk3ve9YZH2I1SevWiiNdJplwzecYWlUJpviGuqLvvyrYeBfdIsfghuJV3cGGy7tjreaXRoua6ghp67RycOHhGu36mCs5yHQTQPRW763bKwsC3Igr9tYwiTeExor5tY0M0T9Hn5irn-aDBDr-1IXz3-8Fut3EeET2WQrztlDhKqUlHk0guM6zFDu2a1hyRw7ZZSofdUnUhKRymUJfuuZ2~w-YYaThKtQ7NlTB5gD6zJXwZvpdRNWJR4TLnG64w~KCvVIIGVrjjx~M8Qw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_81_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/182/image/image.jpg?Expires=1776732224&Signature=DrsgoxvpqtY5v12yfd00-EHBUKyzmFmjNB~bMzYC13IfDoMMV1gZ1b0pt4KMp9zVEbGadPu~ESeer2Sf7E0mblYpW6c56zMmHkyrrw9kJD6PEOGF3qkXbROBGiuL8KhPB3792VqNLhNu4zqOMf8IPLy16imBMmOdsibLqUJlChhkKuM8AA6GhMmCw~2dvn4tDNH5lXa1akQaaunyI9l7wBi5kKfNzclTVjjcwX6~enL17SOZcnR~GR8~kpiKBokuUHs3ar6LkfI9MQslh-C70ANRGmiv0oxIv1w5eKuwsm3p2Iyz0Cv7gJnzQbApsmnEL9CrnRFZVSpWLVJFV2xwhA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000182.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 82,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/182/image/image.jpg?Expires=1776732224&Signature=DrsgoxvpqtY5v12yfd00-EHBUKyzmFmjNB~bMzYC13IfDoMMV1gZ1b0pt4KMp9zVEbGadPu~ESeer2Sf7E0mblYpW6c56zMmHkyrrw9kJD6PEOGF3qkXbROBGiuL8KhPB3792VqNLhNu4zqOMf8IPLy16imBMmOdsibLqUJlChhkKuM8AA6GhMmCw~2dvn4tDNH5lXa1akQaaunyI9l7wBi5kKfNzclTVjjcwX6~enL17SOZcnR~GR8~kpiKBokuUHs3ar6LkfI9MQslh-C70ANRGmiv0oxIv1w5eKuwsm3p2Iyz0Cv7gJnzQbApsmnEL9CrnRFZVSpWLVJFV2xwhA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_82_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/183/image/image.jpg?Expires=1776732224&Signature=G-6w-rgko-BarrVGw27lwIS~B14mcQntesA5YANuvx-MlL8j-zpH4zUTkUv271dCHtjxfwvIoa7YfHHpNhhunwezW06YYL2gu90P3kUofXHyIp3VJwoBsgLRmtWzcK65rsyfmTLUrErKRaDbEWP5tBqJ8VHsTYQdue8qwpazR~JlQ5kGjgWzcTDT8QkB-ut0wKGwLZ-qK4qUOThqHNTPT2fqSvqigj8on7hmhFPoHBbpXVabVoUEkHmVXVX3wdHSvtfh7pUSuJHFTDTYwuLoq6oJMsh-hBOsKA8dq2n8QJObucKMYRb-qBXjwiXQc~2HNl8rH3uCI1NMMjclDIXc9A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000183.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 83,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/183/image/image.jpg?Expires=1776732224&Signature=G-6w-rgko-BarrVGw27lwIS~B14mcQntesA5YANuvx-MlL8j-zpH4zUTkUv271dCHtjxfwvIoa7YfHHpNhhunwezW06YYL2gu90P3kUofXHyIp3VJwoBsgLRmtWzcK65rsyfmTLUrErKRaDbEWP5tBqJ8VHsTYQdue8qwpazR~JlQ5kGjgWzcTDT8QkB-ut0wKGwLZ-qK4qUOThqHNTPT2fqSvqigj8on7hmhFPoHBbpXVabVoUEkHmVXVX3wdHSvtfh7pUSuJHFTDTYwuLoq6oJMsh-hBOsKA8dq2n8QJObucKMYRb-qBXjwiXQc~2HNl8rH3uCI1NMMjclDIXc9A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_83_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/184/image/image.jpg?Expires=1776732224&Signature=nt6FIsf-LPkMF9Y7O~Zw3SVMQ7gc~Fz~JXnPvR7KcktMxW7kUg4-3ltT3jrl6E2ZoMM9HLElWPe8gNsPV8eBh0EFIx7wHPqiYUPjJz4Y9rcuXuCm4YLSJ4lujCAQn4HUjYlC0iE5vZ1VNil5z5Wfl~95FNx1jh093T4~2nxkFuA3yD7aRXcTbr6yDe0Vk7gQ4IYfuNYgTBSPPeK6F7dNTMyV8cF6kWEEmOrMxBGirCl9LG5BRq~zFh9jDpXDp8FOXyEIoUP-W2pM~uB74KX-mkUa9u1wjVKXS0OjYVZUqaFgDwTqWm~8RB3U2XMtkO5CB8UtkwHQoVA7snmy-GThdw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000184.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 84,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/184/image/image.jpg?Expires=1776732224&Signature=nt6FIsf-LPkMF9Y7O~Zw3SVMQ7gc~Fz~JXnPvR7KcktMxW7kUg4-3ltT3jrl6E2ZoMM9HLElWPe8gNsPV8eBh0EFIx7wHPqiYUPjJz4Y9rcuXuCm4YLSJ4lujCAQn4HUjYlC0iE5vZ1VNil5z5Wfl~95FNx1jh093T4~2nxkFuA3yD7aRXcTbr6yDe0Vk7gQ4IYfuNYgTBSPPeK6F7dNTMyV8cF6kWEEmOrMxBGirCl9LG5BRq~zFh9jDpXDp8FOXyEIoUP-W2pM~uB74KX-mkUa9u1wjVKXS0OjYVZUqaFgDwTqWm~8RB3U2XMtkO5CB8UtkwHQoVA7snmy-GThdw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_84_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/185/image/image.jpg?Expires=1776732224&Signature=o373jtlTSm5rk1tjgnC2GHZ24GbMhpJiKgPaaWMeVcqs7~g1Qt0Krmsu1FNwMdv1iDUcZ1n6Zbs5Ol4GOeG2kFY6FHbGOCBAA5ENKEsiw50gcIyKHLG3fg7wi0gZANSl5bVoTpmuzVthPckyjrw1Qd-IItMGnDfgUzoGPPC2AcVqjkh-YJqv5geWvpQ49grPE8HXkVo-4BGUY4dcI3MSwrZ2rPFL0hIL78VFUYt4mbE~2gwNG5B48VJnxr0sk2hvZ0BQ8gyBIu~2P4BsbIrGbQLXy7Pq36NYLrA6fVxsUK7zIF~AIvV00rJofNWK~m2fRhLlKr5aJ6ROtLqre7Fwng__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000185.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 85,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/185/image/image.jpg?Expires=1776732224&Signature=o373jtlTSm5rk1tjgnC2GHZ24GbMhpJiKgPaaWMeVcqs7~g1Qt0Krmsu1FNwMdv1iDUcZ1n6Zbs5Ol4GOeG2kFY6FHbGOCBAA5ENKEsiw50gcIyKHLG3fg7wi0gZANSl5bVoTpmuzVthPckyjrw1Qd-IItMGnDfgUzoGPPC2AcVqjkh-YJqv5geWvpQ49grPE8HXkVo-4BGUY4dcI3MSwrZ2rPFL0hIL78VFUYt4mbE~2gwNG5B48VJnxr0sk2hvZ0BQ8gyBIu~2P4BsbIrGbQLXy7Pq36NYLrA6fVxsUK7zIF~AIvV00rJofNWK~m2fRhLlKr5aJ6ROtLqre7Fwng__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_85_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/186/image/image.jpg?Expires=1776732224&Signature=tsFtaWCvQxSI847xG6GwkLumFjs-1S3hYkdt5uZH3KTIdvRMIbNuCpiTgyAxynfQwHR1hOoBl0u6cnU8ZScjA9ai2BD9k2UNBFZbvEDeYgYckpU~StcUvKhwLnp6VQq7EB~itnKLCYjEjak8cpubfnM8AVzZMSBMovaELkAn6D5EtYPcUOnynEX-~8uNZhS-NM1CxKpfA-UuyhB5lm~hutvxaA8z5zxm41AQLwIi64mvPlUqghMwVC2gmaVcnMI29RiCx-uR3oCMtTThaqYA8ap3Uz74Dmk91iIsvZUsSzSjeRhsUWqciQLW1zMreRowO0BpBPEQhPpQb-uhjANTcg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000186.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 86,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/186/image/image.jpg?Expires=1776732224&Signature=tsFtaWCvQxSI847xG6GwkLumFjs-1S3hYkdt5uZH3KTIdvRMIbNuCpiTgyAxynfQwHR1hOoBl0u6cnU8ZScjA9ai2BD9k2UNBFZbvEDeYgYckpU~StcUvKhwLnp6VQq7EB~itnKLCYjEjak8cpubfnM8AVzZMSBMovaELkAn6D5EtYPcUOnynEX-~8uNZhS-NM1CxKpfA-UuyhB5lm~hutvxaA8z5zxm41AQLwIi64mvPlUqghMwVC2gmaVcnMI29RiCx-uR3oCMtTThaqYA8ap3Uz74Dmk91iIsvZUsSzSjeRhsUWqciQLW1zMreRowO0BpBPEQhPpQb-uhjANTcg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_86_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/187/image/image.jpg?Expires=1776732224&Signature=ttbfDbs1pCECv~v-SfWRzq~b3bLMW3uK2beMvn6EV8PVvt7MeQJaXA5dVSdMKRMCAepjKCRmHdRsNK5pVtLD3LCR5MmT6~gzxERGCyALYXdey26~M5SI-PqqbqZo8WHz8rXpSKv4YjJOshwKMfTcxkvityvLtqnONwuMrRMSoiYKfcIhFZMPmLH~kcuoxH4k~hhqCrwZXWTOInKR7HB2dw6Muo2ElGYpCLtwA6c2JUSP34d31NuAEJKLML-u3PzJFC1v6RJXfahkJzjd~KKXondtKVVMPeR6F98PQf74fAhn~CK0YPHYa~FNuGcqJnuUBux7cxIFC~yAKUKPrBiBfg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000187.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 87,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/187/image/image.jpg?Expires=1776732224&Signature=ttbfDbs1pCECv~v-SfWRzq~b3bLMW3uK2beMvn6EV8PVvt7MeQJaXA5dVSdMKRMCAepjKCRmHdRsNK5pVtLD3LCR5MmT6~gzxERGCyALYXdey26~M5SI-PqqbqZo8WHz8rXpSKv4YjJOshwKMfTcxkvityvLtqnONwuMrRMSoiYKfcIhFZMPmLH~kcuoxH4k~hhqCrwZXWTOInKR7HB2dw6Muo2ElGYpCLtwA6c2JUSP34d31NuAEJKLML-u3PzJFC1v6RJXfahkJzjd~KKXondtKVVMPeR6F98PQf74fAhn~CK0YPHYa~FNuGcqJnuUBux7cxIFC~yAKUKPrBiBfg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_87_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/188/image/image.jpg?Expires=1776732224&Signature=1Sbm9bnSrBKn9iWx25oJjp9Hw-WbvYwUoE85YeOE4nDl7oVmhK3G39zZEJkludFM6FJqPOOs8IQYZv6NadwJN7crWLGLwMd4Kx0hmHtYhfmOJqvCfbeYmA1S~0gGyxx0YVqPYBypajNMCNlKwyLxWV1ex9ZZCeOXZzvY4iP9A8byXjIYy0~LFjTdSSdcdqrjtjlVmO5CUismPnkRqP18UxjRV5gR6qhZIjV3ds3k2H7701CFspBcVO3W30SA3UycXYqSfrCwD1BJ4mSqjDBRm72KvrMHrFk5Ermh20SkmSIHsI-mxT5KBqjQ8uQfhq2vMZiacdmHqIGMnCpCXUAgdQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000188.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 88,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/188/image/image.jpg?Expires=1776732224&Signature=1Sbm9bnSrBKn9iWx25oJjp9Hw-WbvYwUoE85YeOE4nDl7oVmhK3G39zZEJkludFM6FJqPOOs8IQYZv6NadwJN7crWLGLwMd4Kx0hmHtYhfmOJqvCfbeYmA1S~0gGyxx0YVqPYBypajNMCNlKwyLxWV1ex9ZZCeOXZzvY4iP9A8byXjIYy0~LFjTdSSdcdqrjtjlVmO5CUismPnkRqP18UxjRV5gR6qhZIjV3ds3k2H7701CFspBcVO3W30SA3UycXYqSfrCwD1BJ4mSqjDBRm72KvrMHrFk5Ermh20SkmSIHsI-mxT5KBqjQ8uQfhq2vMZiacdmHqIGMnCpCXUAgdQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_88_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/189/image/image.jpg?Expires=1776732224&Signature=I~R4~YpFZhrbO73BJrwBtnmfwdEQ5brm51iQ5CiLWdpMYiKHg8w2rzTZHQwdPpxZHcXiPE4d3VGfU5ckwc2VJiednbIHXg2dekVZXzE94whVknCu3eOeBqImJ6y6xa3HN-d40y-VGDvOpJZE7AjFp0RQ4MVKHC3IawTRuSj8ay3XfwmgAP-2uvxlbNYNvZxU1ldyYb6KmrwZhEr0mnB9KA~ALyJDkVmisO64gZ1Q2OPRuf8Op8XoHLM-fB58g53tUG3NUAgERi-xaD2Kn0JEbIbVvL1j2HhHkcpjSSdu9KP~3FVSFFitshONn2WU4TTwerDrIzo9GvUiQvNY79wC8g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000189.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 89,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/189/image/image.jpg?Expires=1776732224&Signature=I~R4~YpFZhrbO73BJrwBtnmfwdEQ5brm51iQ5CiLWdpMYiKHg8w2rzTZHQwdPpxZHcXiPE4d3VGfU5ckwc2VJiednbIHXg2dekVZXzE94whVknCu3eOeBqImJ6y6xa3HN-d40y-VGDvOpJZE7AjFp0RQ4MVKHC3IawTRuSj8ay3XfwmgAP-2uvxlbNYNvZxU1ldyYb6KmrwZhEr0mnB9KA~ALyJDkVmisO64gZ1Q2OPRuf8Op8XoHLM-fB58g53tUG3NUAgERi-xaD2Kn0JEbIbVvL1j2HhHkcpjSSdu9KP~3FVSFFitshONn2WU4TTwerDrIzo9GvUiQvNY79wC8g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_89_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/190/image/image.jpg?Expires=1776732224&Signature=qqNDeaRGr8drCvFX4djEjvWshiysyR4vlvTtUaQGitDKNG65ZAyJskeDOOWwjVM3nplSNHQU1mZ0xkC4EYc6pZv37Ulk2TKhtdiIoqbpTPfL1P-lsVjiXtORZhke933iPn2kkRIBg38tv~UGMF0OZdS5t8T5Eoa5TlCT7kGi~JAugKGbW5D~P-pDItQewO~Y8PU0IbO3yJqOURkiB4QTuRSIlYnv6M61hA5gN6bGh1Msj0-AzWq6~fLnOrPD8ge0mEC8ex9FzJdnrSCgoz3W2-EbCWdC-OTK4ZCyUE0QfZfwY8Z8wreSltD1FiF2TdVqkUMkpZzJJ3MSMOAjH04o-w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000190.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 90,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/190/image/image.jpg?Expires=1776732224&Signature=qqNDeaRGr8drCvFX4djEjvWshiysyR4vlvTtUaQGitDKNG65ZAyJskeDOOWwjVM3nplSNHQU1mZ0xkC4EYc6pZv37Ulk2TKhtdiIoqbpTPfL1P-lsVjiXtORZhke933iPn2kkRIBg38tv~UGMF0OZdS5t8T5Eoa5TlCT7kGi~JAugKGbW5D~P-pDItQewO~Y8PU0IbO3yJqOURkiB4QTuRSIlYnv6M61hA5gN6bGh1Msj0-AzWq6~fLnOrPD8ge0mEC8ex9FzJdnrSCgoz3W2-EbCWdC-OTK4ZCyUE0QfZfwY8Z8wreSltD1FiF2TdVqkUMkpZzJJ3MSMOAjH04o-w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_90_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/191/image/image.jpg?Expires=1776732224&Signature=gAgYw9EHxyhWsZFFp630EbuirWwo-njC~Jxeix86A5fB2IK3W4tJ~wKEtAt5RfQATf6yMhuTMvQnW1zlJN9Be~EHOW7Z3zpgoUsF3OMXZxXZKUO6P8w1pfpMXU1DL9ERIYB8fte4bkpfC21mXFLSnSxJB96EIqf2LODtntIQWNrVx7M5D1ZP~Ny5YvjA89p6LKTk5CuMy0TThHOUXd0f-2ukBeGL01POwl-dOT0BlaJkeLRN-cVHKcTlLeloA5XNsm12yNMABeASmbaAlvjKw8JJp58XZdTFBBK-A4So-aGIW21pKaK1mi0GboBB5zcHf9UHGtp4mKE2mTbzKJISaw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000191.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 91,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/191/image/image.jpg?Expires=1776732224&Signature=gAgYw9EHxyhWsZFFp630EbuirWwo-njC~Jxeix86A5fB2IK3W4tJ~wKEtAt5RfQATf6yMhuTMvQnW1zlJN9Be~EHOW7Z3zpgoUsF3OMXZxXZKUO6P8w1pfpMXU1DL9ERIYB8fte4bkpfC21mXFLSnSxJB96EIqf2LODtntIQWNrVx7M5D1ZP~Ny5YvjA89p6LKTk5CuMy0TThHOUXd0f-2ukBeGL01POwl-dOT0BlaJkeLRN-cVHKcTlLeloA5XNsm12yNMABeASmbaAlvjKw8JJp58XZdTFBBK-A4So-aGIW21pKaK1mi0GboBB5zcHf9UHGtp4mKE2mTbzKJISaw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_91_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/192/image/image.jpg?Expires=1776732224&Signature=Pv4BSAuZiL7N1zeEyLzn2NLN5m2WyxYGj4hRQJnnBDGnZ9dOOzBvBEXh8IV6PKJ1bx1Qmmrc2ZayosWX~kAgbf2oIyh0z0rxWCDxM5KzRLdr~OzP4Jb7SjjKtwJ9OwegBsOQUfaLb6SH263DBTAbz7qmeU6uyio1iAdv4GJXMphDQfcJdxfOosT~F0kocU0E4scIzIRWn8Ym8TQNYAfJ6kRvlZFwX1V-slRQspAkqItBhEBuau8OqhO4DjmUVwe8z9u2rOYXwEoT1mcyVBCE3QHkMyH6EP4WMBU18h6KK7ZN79CetlFZvJugecz9SocpwU85APukhxbN7ePsBj56~w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000192.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 92,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/192/image/image.jpg?Expires=1776732224&Signature=Pv4BSAuZiL7N1zeEyLzn2NLN5m2WyxYGj4hRQJnnBDGnZ9dOOzBvBEXh8IV6PKJ1bx1Qmmrc2ZayosWX~kAgbf2oIyh0z0rxWCDxM5KzRLdr~OzP4Jb7SjjKtwJ9OwegBsOQUfaLb6SH263DBTAbz7qmeU6uyio1iAdv4GJXMphDQfcJdxfOosT~F0kocU0E4scIzIRWn8Ym8TQNYAfJ6kRvlZFwX1V-slRQspAkqItBhEBuau8OqhO4DjmUVwe8z9u2rOYXwEoT1mcyVBCE3QHkMyH6EP4WMBU18h6KK7ZN79CetlFZvJugecz9SocpwU85APukhxbN7ePsBj56~w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_92_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/193/image/image.jpg?Expires=1776732224&Signature=nQED2IP16ZJ3I2jtkuTAmSs8Y33RPF-0joLp1aIixVCdTFSB5MmI85nQ6-~XPBpDTY9O8aY-DcQM6SxS9KDR9MgChMdQlD1tjla9reOxD5D-r-mfMTv~zVrAvf7v6OGhnCSAEVSekI4pKA1EPNG3NE4dzl59~Y28Sxn3rzg1jHONYT1QaJSHLagObAqAmGp30FLC-YzLKsgNy7wGdnlb8hwQt5sA2VZmlCXRBHvCh2M6v2gi0WjMfymlfA0rUr~FgEpjH-FclWsKG~xVfjj5NU4LgEQLzDrvzvUy2AO7TOnGJFQzQkAj7nOfPtL3YVsF7Fgvb57yItAx4e-cPVl1Hw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000193.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 93,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/193/image/image.jpg?Expires=1776732224&Signature=nQED2IP16ZJ3I2jtkuTAmSs8Y33RPF-0joLp1aIixVCdTFSB5MmI85nQ6-~XPBpDTY9O8aY-DcQM6SxS9KDR9MgChMdQlD1tjla9reOxD5D-r-mfMTv~zVrAvf7v6OGhnCSAEVSekI4pKA1EPNG3NE4dzl59~Y28Sxn3rzg1jHONYT1QaJSHLagObAqAmGp30FLC-YzLKsgNy7wGdnlb8hwQt5sA2VZmlCXRBHvCh2M6v2gi0WjMfymlfA0rUr~FgEpjH-FclWsKG~xVfjj5NU4LgEQLzDrvzvUy2AO7TOnGJFQzQkAj7nOfPtL3YVsF7Fgvb57yItAx4e-cPVl1Hw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_93_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/194/image/image.jpg?Expires=1776732224&Signature=eg4gW2BXV94E3pwv6uXiP1DZowx-XTGCCsGWtIUnqXZ6OntJFntzURwPq0RKlqvdwALeZxOCY1hPQkSf4VsKekCGIDvrvfwWd66H8nWS3EyXcPqM9cNlmhEn43KJjJQbTv5aO6sTFhUrKNUABDnFZ99BVfSxR-you7qd0LWrRgvZj~8-x-7Qwsd~3YsDFE4n~LORVtBeRAfUvdH-V94YSupsl-cpgjwVcXpSq5x2CtzR~kif1jYgClwZZm3jlk9i5fDQUYRZ-GrhMrOrE0M4iVoKje-NWZBcDRPO04-s~h0fbcKPa-I1V~uQzIimyhvFvxg4EEupy--WDOkKPina2w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000194.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 94,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/194/image/image.jpg?Expires=1776732224&Signature=eg4gW2BXV94E3pwv6uXiP1DZowx-XTGCCsGWtIUnqXZ6OntJFntzURwPq0RKlqvdwALeZxOCY1hPQkSf4VsKekCGIDvrvfwWd66H8nWS3EyXcPqM9cNlmhEn43KJjJQbTv5aO6sTFhUrKNUABDnFZ99BVfSxR-you7qd0LWrRgvZj~8-x-7Qwsd~3YsDFE4n~LORVtBeRAfUvdH-V94YSupsl-cpgjwVcXpSq5x2CtzR~kif1jYgClwZZm3jlk9i5fDQUYRZ-GrhMrOrE0M4iVoKje-NWZBcDRPO04-s~h0fbcKPa-I1V~uQzIimyhvFvxg4EEupy--WDOkKPina2w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_94_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/195/image/image.jpg?Expires=1776732224&Signature=fNpFtIMc~bW-mAj8wRqipjzCPxG4jqeix~ypOOKMgURC4fBfHc6MfeOPFk1ucpsUDYp2vdE4lhfLn8nkjpx1roPyxwmhFAe7seX2vdH3a4RyYwHhY4jVSfljM8uCPynDBc4-oChYXvaaG1McC8exzH4kKehXAFkqt1ZU7W4ji1mi62i~PCYH9RVtStZblAikilXK0bzuVZyyInTTW3hFTD5FaMxhVxMGgqTdzpEwV1M59OGgqvXZQuXFGd7uUbJUACsROU1Eme0Q30j5N5X8oyEaPSw0MMMMJ4t0hFep3OLzWzjjDFTo2YwBrOd3B7b5uS80lQmIhEWEhhpEU6UCCw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000195.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 95,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/195/image/image.jpg?Expires=1776732224&Signature=fNpFtIMc~bW-mAj8wRqipjzCPxG4jqeix~ypOOKMgURC4fBfHc6MfeOPFk1ucpsUDYp2vdE4lhfLn8nkjpx1roPyxwmhFAe7seX2vdH3a4RyYwHhY4jVSfljM8uCPynDBc4-oChYXvaaG1McC8exzH4kKehXAFkqt1ZU7W4ji1mi62i~PCYH9RVtStZblAikilXK0bzuVZyyInTTW3hFTD5FaMxhVxMGgqTdzpEwV1M59OGgqvXZQuXFGd7uUbJUACsROU1Eme0Q30j5N5X8oyEaPSw0MMMMJ4t0hFep3OLzWzjjDFTo2YwBrOd3B7b5uS80lQmIhEWEhhpEU6UCCw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_95_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/196/image/image.jpg?Expires=1776732224&Signature=KkPEQMsppn70~LT6zBGBmLqExw4aC4Eca1qX05kRnYIW4IJaOUc4JXGn43bmu1gduui4SpsgwGPBVekiu0EKOZ~~lt33N-kC3crT3-~2bUUb7NSrG8v6R0E~ngFV3fS9LDpSyPueRtUvMxKIUbrr~8kD1AwB7PIRcHobwyi1wkQLRQ9-KYiXipxNNTaJNOA0s6vpXLrFDpYuEYqmn7HcuNBl5T5kcMoPrUh9fjky8m1y8WFMioXMT9xTiE36TCWde~qTt20VsILlc00-6QqdiXGAp3Aq5QnXni2FWOOe6boE~tulqyiWeaqAzHX2H8rGlXvOwl-vGWSO8Dek7d44bQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000196.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 96,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/196/image/image.jpg?Expires=1776732224&Signature=KkPEQMsppn70~LT6zBGBmLqExw4aC4Eca1qX05kRnYIW4IJaOUc4JXGn43bmu1gduui4SpsgwGPBVekiu0EKOZ~~lt33N-kC3crT3-~2bUUb7NSrG8v6R0E~ngFV3fS9LDpSyPueRtUvMxKIUbrr~8kD1AwB7PIRcHobwyi1wkQLRQ9-KYiXipxNNTaJNOA0s6vpXLrFDpYuEYqmn7HcuNBl5T5kcMoPrUh9fjky8m1y8WFMioXMT9xTiE36TCWde~qTt20VsILlc00-6QqdiXGAp3Aq5QnXni2FWOOe6boE~tulqyiWeaqAzHX2H8rGlXvOwl-vGWSO8Dek7d44bQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_96_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/197/image/image.jpg?Expires=1776732224&Signature=ZSqOdTI12yrUAFzGzXzwTkUTc9g-Nk4zboCjeLGbnfWtJVD63nJ75aknmRG1CnDPVhrYloaLJwoRqZ0~vLcOrUXJNOvFjKqtVgbc8uRm4QKKaBBch5xgegaMAYEDVDthjcDMlq5CDO7tWmi4ea0sHy9DUslYNBcTuhrI1EfnrpLQK7HLVzQ6eKrIGYafKzTSZixdTc~cewFSS0cDnsw~DoTbX9bSEWrUwgY~o19QENGZ-nLR7PyMXN0mGMKpoXWfacL8s1xc5LBGROWUYO1gUJyvBCDsvsBa2fr4zetj~dxzcYjHS-SojV0dWKxDdORL2uhJiDdLhrN6kJtxwEZ-ow__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000197.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 97,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/197/image/image.jpg?Expires=1776732224&Signature=ZSqOdTI12yrUAFzGzXzwTkUTc9g-Nk4zboCjeLGbnfWtJVD63nJ75aknmRG1CnDPVhrYloaLJwoRqZ0~vLcOrUXJNOvFjKqtVgbc8uRm4QKKaBBch5xgegaMAYEDVDthjcDMlq5CDO7tWmi4ea0sHy9DUslYNBcTuhrI1EfnrpLQK7HLVzQ6eKrIGYafKzTSZixdTc~cewFSS0cDnsw~DoTbX9bSEWrUwgY~o19QENGZ-nLR7PyMXN0mGMKpoXWfacL8s1xc5LBGROWUYO1gUJyvBCDsvsBa2fr4zetj~dxzcYjHS-SojV0dWKxDdORL2uhJiDdLhrN6kJtxwEZ-ow__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_97_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/198/image/image.jpg?Expires=1776732224&Signature=T7cqDDNodfus0V61646cE9Yvf-NbrS5UJXehW9jxHBGwWwxPmPR9VJavk8Ckm3gEz3NFMQVG3-OBjhYjzkA4yZh0aE60oEpb6G~UpaN3qCC21iOfudmSOIv6XWyQqJn~ZXAuWzboAgv6HP7~wFstnqdwT-fggCk4LlY4zClWpSp-ZZ4TEPHdCZgaYOFYPOhSfVuH3au-kf8gWGW03fI6YyVyb4NSO1D9oR5mpAccqXsJQYydIlWyTBwhGB14HObT~ixrdyI2UtNoGUr3jrf4wK6~7zJdapCiwTeYtB0Ko3PhI-C3lIlulEbtyGdEcNaKjVzQCMXI7cbao~-Y3~s3XQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000198.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 98,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/198/image/image.jpg?Expires=1776732224&Signature=T7cqDDNodfus0V61646cE9Yvf-NbrS5UJXehW9jxHBGwWwxPmPR9VJavk8Ckm3gEz3NFMQVG3-OBjhYjzkA4yZh0aE60oEpb6G~UpaN3qCC21iOfudmSOIv6XWyQqJn~ZXAuWzboAgv6HP7~wFstnqdwT-fggCk4LlY4zClWpSp-ZZ4TEPHdCZgaYOFYPOhSfVuH3au-kf8gWGW03fI6YyVyb4NSO1D9oR5mpAccqXsJQYydIlWyTBwhGB14HObT~ixrdyI2UtNoGUr3jrf4wK6~7zJdapCiwTeYtB0Ko3PhI-C3lIlulEbtyGdEcNaKjVzQCMXI7cbao~-Y3~s3XQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_98_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/199/image/image.jpg?Expires=1776732224&Signature=SYmdrFF5PsYwgBDq4ZXQoKwvksn-4fUYSBCIN-6FPiNmptY4RmFrstOaXY6L5UYHhrxnyd8t5qpPkCB1NLLInlT4S8gJCITli8sZKd3~RpsiyDcRNf0NqXoBbYn9C73cZ3HtGHf6CgHvoCZF5J~80GmSSud0GuKXdLdr6tGrsiB9cm1UbFFc79uWbJJj-q8ddP4vxGdjSJa947cudXFy-faxmljnNh7ESAfBvYTmdwlu3Up306bAxsXyCJzmPVafoYE5D1fH4kihcnbB988XOSO~Ol30ASN4aRytNqNh5o2PBqJWjuy2IUXolbpaGiAPXRxVcEI5BQ6AO28IokBLuQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000199.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 99,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/199/image/image.jpg?Expires=1776732224&Signature=SYmdrFF5PsYwgBDq4ZXQoKwvksn-4fUYSBCIN-6FPiNmptY4RmFrstOaXY6L5UYHhrxnyd8t5qpPkCB1NLLInlT4S8gJCITli8sZKd3~RpsiyDcRNf0NqXoBbYn9C73cZ3HtGHf6CgHvoCZF5J~80GmSSud0GuKXdLdr6tGrsiB9cm1UbFFc79uWbJJj-q8ddP4vxGdjSJa947cudXFy-faxmljnNh7ESAfBvYTmdwlu3Up306bAxsXyCJzmPVafoYE5D1fH4kihcnbB988XOSO~Ol30ASN4aRytNqNh5o2PBqJWjuy2IUXolbpaGiAPXRxVcEI5BQ6AO28IokBLuQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_99_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/200/image/image.jpg?Expires=1776732225&Signature=q9~OpAZ0-MvFGtUfpBLDEs85upehppRqB1tzYFqS98uVGSfmIsF07nZlrNpaDOubydez-WqTwPSrH4nsgR6XQ-Dk~8BiYlSlUvva1poD7ZKcVCF3gky2R0tijcqb7TEyLPgYBgOkJRjyXULXvaGndVICayNAyafXFB0LsKC-lbvWn4YjmxNT85HeNQmOWY~Je6a-TWzQn9TWXXLUqkS12X8XKxsbrdqFOuEbnrXoIjVi4WlrRtq4PnVbHSW8sSBWGNVLRSNuHjWR1FLZv-ylUm1cwZXt3H3Jlc-AxBmOFmnyBCh2D2HJnQJfi9IKBpPXEVyDLW-Uo2joWz0bsnR~Og__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000200.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 0,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/200/image/image.jpg?Expires=1776732225&Signature=q9~OpAZ0-MvFGtUfpBLDEs85upehppRqB1tzYFqS98uVGSfmIsF07nZlrNpaDOubydez-WqTwPSrH4nsgR6XQ-Dk~8BiYlSlUvva1poD7ZKcVCF3gky2R0tijcqb7TEyLPgYBgOkJRjyXULXvaGndVICayNAyafXFB0LsKC-lbvWn4YjmxNT85HeNQmOWY~Je6a-TWzQn9TWXXLUqkS12X8XKxsbrdqFOuEbnrXoIjVi4WlrRtq4PnVbHSW8sSBWGNVLRSNuHjWR1FLZv-ylUm1cwZXt3H3Jlc-AxBmOFmnyBCh2D2HJnQJfi9IKBpPXEVyDLW-Uo2joWz0bsnR~Og__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_0_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/201/image/image.jpg?Expires=1776732225&Signature=Vmo-JHWEvkP4ugNagc9SACOZf43KT5cKIuWSAcX-N5gJdoyajZ1oACQhVhkK0lsX2cIpnlNFBQtgUDDOr0-0qxsdsJZ0omzAXa1l5~jYyjDojkmxR80o4TODimE2e1ALR52kACsPD5l3jPkTcJ4ofmSwRPCIXIEt5CF9qQJs3B7Q15mKClYwTdhFX5qq7QJXGfwBehA7tKtnUDUUCgA8gNKV8a9TeTlZGte~-A1eFj45N7syLAH0FAx69mon6pq-m4r7gmIns5KYCUuMVP1bjd-lhP86nINnRB1ng2~efUPJNIqgn1DxjU3MEtkDyrXJWRgQ2Zg7XnXqFxFS0M6uug__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000201.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 1,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/201/image/image.jpg?Expires=1776732225&Signature=Vmo-JHWEvkP4ugNagc9SACOZf43KT5cKIuWSAcX-N5gJdoyajZ1oACQhVhkK0lsX2cIpnlNFBQtgUDDOr0-0qxsdsJZ0omzAXa1l5~jYyjDojkmxR80o4TODimE2e1ALR52kACsPD5l3jPkTcJ4ofmSwRPCIXIEt5CF9qQJs3B7Q15mKClYwTdhFX5qq7QJXGfwBehA7tKtnUDUUCgA8gNKV8a9TeTlZGte~-A1eFj45N7syLAH0FAx69mon6pq-m4r7gmIns5KYCUuMVP1bjd-lhP86nINnRB1ng2~efUPJNIqgn1DxjU3MEtkDyrXJWRgQ2Zg7XnXqFxFS0M6uug__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_1_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/202/image/image.jpg?Expires=1776732225&Signature=W76eTtQMF3VjF4cAdXAitocDgPgIsC9tl2LJldIl3M4fkICOWooQ20UoLc67U4w3a7DuRd2km0bOhfBfBjto2o4i7eDM7YviG~Xa14lEC7CXbNwpZwMuD2KVCwXGbncZuY7byLfwxh7UYm-XAHJB4idlefer6FL1a95R4MrnBSAxhMvv3AJHKUbWzHwX3GC-xi-l5~Ok5SiIeCPKYsiPpjMjFLSt-lh4YEhsf07tv8Mz5CVvRCte2G7MyihOYWwt4bol9QH~1YY9pcBkMIokobKZVqQsTq6OU48jIODMyglJ96UFWCgrQrC5Rx65KOltxgAieBfFXLAuOsAo3TlHCQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000202.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 2,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/202/image/image.jpg?Expires=1776732225&Signature=W76eTtQMF3VjF4cAdXAitocDgPgIsC9tl2LJldIl3M4fkICOWooQ20UoLc67U4w3a7DuRd2km0bOhfBfBjto2o4i7eDM7YviG~Xa14lEC7CXbNwpZwMuD2KVCwXGbncZuY7byLfwxh7UYm-XAHJB4idlefer6FL1a95R4MrnBSAxhMvv3AJHKUbWzHwX3GC-xi-l5~Ok5SiIeCPKYsiPpjMjFLSt-lh4YEhsf07tv8Mz5CVvRCte2G7MyihOYWwt4bol9QH~1YY9pcBkMIokobKZVqQsTq6OU48jIODMyglJ96UFWCgrQrC5Rx65KOltxgAieBfFXLAuOsAo3TlHCQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_2_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/203/image/image.jpg?Expires=1776732225&Signature=Cv2FKDxEz1V0yly6zRjld3GLoQMZLAJ6fAVHSaVIUTrwbh763YuR0VMESa2mnVcdaQREMYu7U0ctnAwZk1pandoWPMsw-7yJ36vNiX4FI2GOtmwerGQlLBH~ybLAt~u2uSndcLJSby8RWgALRn2oWUDBdmvxif4BunWL-6LPDrXd34WBIvWZLbpHV3uBy0PyxB2ZtHw8GyzByxUXDuHZ26uJIvAJ4DN~GXSEbfUHyuwcww5aSlnts7JDpOyJKE~BmpRiH3PMs3qRTWBHeGBN1FLC9Ne93iUAk30vthHopMrd9bo2BvFRU-SgR~QtqTKZL6GVOvfwyr9o0qc7qPAVJg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000203.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 3,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/203/image/image.jpg?Expires=1776732225&Signature=Cv2FKDxEz1V0yly6zRjld3GLoQMZLAJ6fAVHSaVIUTrwbh763YuR0VMESa2mnVcdaQREMYu7U0ctnAwZk1pandoWPMsw-7yJ36vNiX4FI2GOtmwerGQlLBH~ybLAt~u2uSndcLJSby8RWgALRn2oWUDBdmvxif4BunWL-6LPDrXd34WBIvWZLbpHV3uBy0PyxB2ZtHw8GyzByxUXDuHZ26uJIvAJ4DN~GXSEbfUHyuwcww5aSlnts7JDpOyJKE~BmpRiH3PMs3qRTWBHeGBN1FLC9Ne93iUAk30vthHopMrd9bo2BvFRU-SgR~QtqTKZL6GVOvfwyr9o0qc7qPAVJg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_3_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/204/image/image.jpg?Expires=1776732225&Signature=r96KT791RY1R7nbh9JDnzY8dYRaA4h2IQkfJ-Kjd4JCRcvfx40kIGKcduAewmd1zb-3txyM7BGy3G3~F~VVt90txFzfMXoWFtlWguT74rIEC94ccAi~djj8WWyfudKwWq6Bhbab8TLVdVNsuHH4gQnxNpplOyjxzyUFJcje0LUvGWms7U0UM3yPg9YVpza5Huc2TJEMuuL54x00KZmZnlf-0VmRR41pIGMpz~is9gXwX80Vmm~NAWehdTatoIhw8irEajobD8zmZ8kdWhUyZFXZ2gRVEW0gX9gzYlhSc8Uo4vpAQGv2-XZ2aEgTgC2A-39Av-Daf2Nr9CDzP1LdFBA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000204.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 4,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/204/image/image.jpg?Expires=1776732225&Signature=r96KT791RY1R7nbh9JDnzY8dYRaA4h2IQkfJ-Kjd4JCRcvfx40kIGKcduAewmd1zb-3txyM7BGy3G3~F~VVt90txFzfMXoWFtlWguT74rIEC94ccAi~djj8WWyfudKwWq6Bhbab8TLVdVNsuHH4gQnxNpplOyjxzyUFJcje0LUvGWms7U0UM3yPg9YVpza5Huc2TJEMuuL54x00KZmZnlf-0VmRR41pIGMpz~is9gXwX80Vmm~NAWehdTatoIhw8irEajobD8zmZ8kdWhUyZFXZ2gRVEW0gX9gzYlhSc8Uo4vpAQGv2-XZ2aEgTgC2A-39Av-Daf2Nr9CDzP1LdFBA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_4_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/205/image/image.jpg?Expires=1776732225&Signature=XkVCHXmYrGDE05-KwcUq51iWCjoIP9TrNGdh9PvN5kQ6NjNmX1SoynQ4k87CEesE-y11MdfoMbmstQuf8Btk-p73C3mTJdtul-lhS110WiV7oj86hc~oapNlntcpuO1UqdxDvpdAHogthcGZva7OT01DH-OR3sNN~DWuDkF3zAxU7T-K3r8wqfkYDbhjMQyOSN9An3a1a2VtA1nXAsay9GRocgDKvAOqt9VtVhbL-BkQd4yhmFISLr4Ky0RRUYvRXBleta5FDFDGuPqQQN1ib6NPsQr5enBzTFK6d8EtxsFVi4yA6bjA5vtq9KUP5iKtPDoNUamu~3e9IDJ6YkS4qg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000205.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 5,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/205/image/image.jpg?Expires=1776732225&Signature=XkVCHXmYrGDE05-KwcUq51iWCjoIP9TrNGdh9PvN5kQ6NjNmX1SoynQ4k87CEesE-y11MdfoMbmstQuf8Btk-p73C3mTJdtul-lhS110WiV7oj86hc~oapNlntcpuO1UqdxDvpdAHogthcGZva7OT01DH-OR3sNN~DWuDkF3zAxU7T-K3r8wqfkYDbhjMQyOSN9An3a1a2VtA1nXAsay9GRocgDKvAOqt9VtVhbL-BkQd4yhmFISLr4Ky0RRUYvRXBleta5FDFDGuPqQQN1ib6NPsQr5enBzTFK6d8EtxsFVi4yA6bjA5vtq9KUP5iKtPDoNUamu~3e9IDJ6YkS4qg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_5_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/206/image/image.jpg?Expires=1776732225&Signature=eIK9tPKx6D5ykIpTt9ZU58GCYwLb-hUXH~x6RQRSUdFemmC2Gf6ntH0iylbXM95eBeACn-W84lah8YOVRCbsHthHxKajF-7ZGlnTxug0Io7XiSNjUcczdXbC0IFzzLCPb~ttJIBJHzosa0cswIqI83xj0DNp~1JmilB5pO4Rki5Zih05UdtdkjFSMbdzptHvJ~mYdchpnmWINcPZO8zq~3ws-kl3sm-vTg9SUrIupLzXsm9W9Pr~NFHawGmBCsVfzwjhiVC-33yujfl12oHZenEqCSb~f4n~jP1eafbHnKlFLjp2P8b~XIXQ4cT-Kv11LwwWcePASCtMjOdTSm2ybw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000206.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 6,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/206/image/image.jpg?Expires=1776732225&Signature=eIK9tPKx6D5ykIpTt9ZU58GCYwLb-hUXH~x6RQRSUdFemmC2Gf6ntH0iylbXM95eBeACn-W84lah8YOVRCbsHthHxKajF-7ZGlnTxug0Io7XiSNjUcczdXbC0IFzzLCPb~ttJIBJHzosa0cswIqI83xj0DNp~1JmilB5pO4Rki5Zih05UdtdkjFSMbdzptHvJ~mYdchpnmWINcPZO8zq~3ws-kl3sm-vTg9SUrIupLzXsm9W9Pr~NFHawGmBCsVfzwjhiVC-33yujfl12oHZenEqCSb~f4n~jP1eafbHnKlFLjp2P8b~XIXQ4cT-Kv11LwwWcePASCtMjOdTSm2ybw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_6_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/207/image/image.jpg?Expires=1776732225&Signature=fq9wdcaes8H5edvTmPyblQ9Gclbb8X5HzbSQR9z2RfDiT4cneDTw9KqiOt-tcFdIhTnz1s-hsV7Zn5pJ3zp5h2GiMVOxScFZxk-QrRzLkcRwSyziyjCu8O~G2VQiyM8SlgxZPwIDvCL9KmbHpuyAYorQJ924WTGvF1cSQUOuDob82mu2ePmxUNi45yRy8UvXvWN4RFved6RE3b7OTrXTfEiAWRMn7BjeZ77PEM5iiVloTrBkWFtRsz7PJVKqNZHWtA9S06y53nJLWVWo7L8N6AFvLYd0hQneywZvFkW06VzX~wDfNj-m4Wpuv-EXNp7WstCG3hTDOld50Xc7k8s-9A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000207.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 7,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/207/image/image.jpg?Expires=1776732225&Signature=fq9wdcaes8H5edvTmPyblQ9Gclbb8X5HzbSQR9z2RfDiT4cneDTw9KqiOt-tcFdIhTnz1s-hsV7Zn5pJ3zp5h2GiMVOxScFZxk-QrRzLkcRwSyziyjCu8O~G2VQiyM8SlgxZPwIDvCL9KmbHpuyAYorQJ924WTGvF1cSQUOuDob82mu2ePmxUNi45yRy8UvXvWN4RFved6RE3b7OTrXTfEiAWRMn7BjeZ77PEM5iiVloTrBkWFtRsz7PJVKqNZHWtA9S06y53nJLWVWo7L8N6AFvLYd0hQneywZvFkW06VzX~wDfNj-m4Wpuv-EXNp7WstCG3hTDOld50Xc7k8s-9A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_7_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/208/image/image.jpg?Expires=1776732225&Signature=Bl4L55TNjWkohBCkYl0LWChrtfQ0C2jecHI3BOR1VeCzbytG~V8RBEkZg4V7EQd~vulfC4YUi07ZBCfrf7hyDujKZtIiqmOsk-vhAvsMkC54VrOIL9J6cKQYw2mlmVQ0xz1IMi2Vk9vhgnr5-Lg657d0yLJp5ny0MnyfWw4ZP7x7qJRu3mwG8tcOLA8JS6F5uKrnwDIZmW1ltFGDpYE4wPmpGYew2Bj07FlBqSRfmxNmWRoihNW31uNI7dSMyV6JB5~26g5t1TQTfbTMpAg61a-Es6lX1rNri2tfQtjW5CGckEG7U65Vw-zF~cpc3GFfqciCQwrmBhvb5obaw48YGg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000208.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 8,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/208/image/image.jpg?Expires=1776732225&Signature=Bl4L55TNjWkohBCkYl0LWChrtfQ0C2jecHI3BOR1VeCzbytG~V8RBEkZg4V7EQd~vulfC4YUi07ZBCfrf7hyDujKZtIiqmOsk-vhAvsMkC54VrOIL9J6cKQYw2mlmVQ0xz1IMi2Vk9vhgnr5-Lg657d0yLJp5ny0MnyfWw4ZP7x7qJRu3mwG8tcOLA8JS6F5uKrnwDIZmW1ltFGDpYE4wPmpGYew2Bj07FlBqSRfmxNmWRoihNW31uNI7dSMyV6JB5~26g5t1TQTfbTMpAg61a-Es6lX1rNri2tfQtjW5CGckEG7U65Vw-zF~cpc3GFfqciCQwrmBhvb5obaw48YGg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_8_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/209/image/image.jpg?Expires=1776732225&Signature=eNpTDz~z20SkJ7gXxnWeuwB~epjZPyjJq4iKzVVZixIdhwboV6aq99Y9duA8w9pKyjssiKOnwL3rNQSoc5bl5tOmURZ3FSnFW292ebBPJcZJRn7YhFlflZNcvRSIdMlx5W3RFiEVJfpavRWzxXil4ZLCd5u-6o7~a-BEVt09NbDXL-oyU12XHP-8u6Kk5WKuIHlpIcM0LrDqd80KO5bA1Cm5b3XYDLPbEeMz4kSXoKdjX0ZWuJtE93-Hx4HEJmFLPc6k5MO7cccnsdw61xpQmqRIEVfv-u9ehKKffGl6ue-X7EUw0~QWCOY7l0ltqjc9hUYuTl3q4tGN5SURAEWRWQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000209.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 9,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/209/image/image.jpg?Expires=1776732225&Signature=eNpTDz~z20SkJ7gXxnWeuwB~epjZPyjJq4iKzVVZixIdhwboV6aq99Y9duA8w9pKyjssiKOnwL3rNQSoc5bl5tOmURZ3FSnFW292ebBPJcZJRn7YhFlflZNcvRSIdMlx5W3RFiEVJfpavRWzxXil4ZLCd5u-6o7~a-BEVt09NbDXL-oyU12XHP-8u6Kk5WKuIHlpIcM0LrDqd80KO5bA1Cm5b3XYDLPbEeMz4kSXoKdjX0ZWuJtE93-Hx4HEJmFLPc6k5MO7cccnsdw61xpQmqRIEVfv-u9ehKKffGl6ue-X7EUw0~QWCOY7l0ltqjc9hUYuTl3q4tGN5SURAEWRWQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_9_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/210/image/image.jpg?Expires=1776732225&Signature=BcBr~olGUWaTOqreQQoiDUuYjsK42YUbxY5ZNXG1trVwbae4dpXrTzuCmcAzHFdM~yiVJxcQuh6~bLUgSQOt1Rqk-nc~Y3UxHpgzfkijVRltJkrCbAslp19szukvMfki9C1S~ZfDIgMkuOhyw8lJZJ9nAcj7gC0LANffWVYAAc4xDZQuZ5u~R3L4nitG1pMihK4di6sKwc-GEIcL40fQn7F4O2ly79FHp66KrAHLcmQVLOmmgm-MDmW9m8wld3~jx8seODBmo2tKAkHzreM8o4FwpxUEWVYphpKxfCKTUler4g0s44PMppyDn80ovEMcoIOpVhuUDf8l7JXN1q7NCw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000210.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 10,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/210/image/image.jpg?Expires=1776732225&Signature=BcBr~olGUWaTOqreQQoiDUuYjsK42YUbxY5ZNXG1trVwbae4dpXrTzuCmcAzHFdM~yiVJxcQuh6~bLUgSQOt1Rqk-nc~Y3UxHpgzfkijVRltJkrCbAslp19szukvMfki9C1S~ZfDIgMkuOhyw8lJZJ9nAcj7gC0LANffWVYAAc4xDZQuZ5u~R3L4nitG1pMihK4di6sKwc-GEIcL40fQn7F4O2ly79FHp66KrAHLcmQVLOmmgm-MDmW9m8wld3~jx8seODBmo2tKAkHzreM8o4FwpxUEWVYphpKxfCKTUler4g0s44PMppyDn80ovEMcoIOpVhuUDf8l7JXN1q7NCw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_10_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/211/image/image.jpg?Expires=1776732225&Signature=JChk951bTIx93sQ4~0iPuY0jaGfP-QAqiw~8ezNXrNwobRGDydOPHzGLd2w~dE-CpOUixCBpxUi1rbkTUoPb9YWjll~Z-Ljs4q9myFer~4wJlywlANM9rhFsNMpdXekQvR1eBUCfKJw1Ugt8b2Jw~WOXbz9wXW1wHsAwaRd~bpyfSkEL6KXlwGU31Jb2gEIfFwLgsd4xQmOIuDZdkWswP4LTqY29oIXiBKswasaA8XZ0GcrYewlDR1n29C7dzVPQ2~tfXFXE12QQZbjS62soBZSxcA2JT3VgrQWpXLX~vOqqdoUbtNr7sT~KIspyWBwvOImDchgMx8lQ9yXv9SViPg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000211.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 11,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/211/image/image.jpg?Expires=1776732225&Signature=JChk951bTIx93sQ4~0iPuY0jaGfP-QAqiw~8ezNXrNwobRGDydOPHzGLd2w~dE-CpOUixCBpxUi1rbkTUoPb9YWjll~Z-Ljs4q9myFer~4wJlywlANM9rhFsNMpdXekQvR1eBUCfKJw1Ugt8b2Jw~WOXbz9wXW1wHsAwaRd~bpyfSkEL6KXlwGU31Jb2gEIfFwLgsd4xQmOIuDZdkWswP4LTqY29oIXiBKswasaA8XZ0GcrYewlDR1n29C7dzVPQ2~tfXFXE12QQZbjS62soBZSxcA2JT3VgrQWpXLX~vOqqdoUbtNr7sT~KIspyWBwvOImDchgMx8lQ9yXv9SViPg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_11_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/212/image/image.jpg?Expires=1776732225&Signature=s2sNvHPm2O7mqYnYZmdKnF1u5MLGtQJfijaYf7Zah5lG5F1BrtXxuTF6YATCi6W7vtnfQoX8gAIHpkE1zBvAdinhE3H2BjykZQutweIc34gqH3k~s20JWAHQdqpDjaoiViXmQHMigH1KLgBYw4zrgYAQdjJ8sueRpcUNOjaz9kX~k3FA3GyvbEPCxwA9bduHzzfO5GWIU2HbveTk9xA7FPR1MxkuvfsJhIMubErqS0AIqZQ7AwjCYaiHfLk6qozYgK4-5Z8M1XxlG38j70h1GySdxFYE85Y~13UH4Qrl532RzE2ebcLA7jKtW7k2QLGhUWlwZV7S~nf72pv5D39NKA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000212.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 12,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/212/image/image.jpg?Expires=1776732225&Signature=s2sNvHPm2O7mqYnYZmdKnF1u5MLGtQJfijaYf7Zah5lG5F1BrtXxuTF6YATCi6W7vtnfQoX8gAIHpkE1zBvAdinhE3H2BjykZQutweIc34gqH3k~s20JWAHQdqpDjaoiViXmQHMigH1KLgBYw4zrgYAQdjJ8sueRpcUNOjaz9kX~k3FA3GyvbEPCxwA9bduHzzfO5GWIU2HbveTk9xA7FPR1MxkuvfsJhIMubErqS0AIqZQ7AwjCYaiHfLk6qozYgK4-5Z8M1XxlG38j70h1GySdxFYE85Y~13UH4Qrl532RzE2ebcLA7jKtW7k2QLGhUWlwZV7S~nf72pv5D39NKA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_12_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/213/image/image.jpg?Expires=1776732225&Signature=yjRHI-c~jkGYUJx9tduDxL-xYNm0NzoAyjV2GfENdjwCYZzWF-fB9ut~AIpicc9m9yZU7y999T85-em~yMzNjSsPowNn7IolkuLhKxhaH17iQFD0nCL6OS0486IiWVu4Om44UsAbA2ni0doZa2JKvSkJCbg-7CJhQH9cQx~xUHx0KK5Y0zfePg7vY2c7c~LQQvhbdZgsmp4EwktjJMAuL~xbmPQfNAwkMnEJzQpC5e9lg9GO48ohl8P~TxPCN8bTux4j70t~bJJkHTc4fO6ej5aVDgv75nDsuhpQgMjN16wbvP0HE~eBmnFrB7BaklNJHWSZQLtAych9sHJMkesdpg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000213.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 13,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/213/image/image.jpg?Expires=1776732225&Signature=yjRHI-c~jkGYUJx9tduDxL-xYNm0NzoAyjV2GfENdjwCYZzWF-fB9ut~AIpicc9m9yZU7y999T85-em~yMzNjSsPowNn7IolkuLhKxhaH17iQFD0nCL6OS0486IiWVu4Om44UsAbA2ni0doZa2JKvSkJCbg-7CJhQH9cQx~xUHx0KK5Y0zfePg7vY2c7c~LQQvhbdZgsmp4EwktjJMAuL~xbmPQfNAwkMnEJzQpC5e9lg9GO48ohl8P~TxPCN8bTux4j70t~bJJkHTc4fO6ej5aVDgv75nDsuhpQgMjN16wbvP0HE~eBmnFrB7BaklNJHWSZQLtAych9sHJMkesdpg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_13_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/214/image/image.jpg?Expires=1776732225&Signature=e7951W5lJEh-QZu1q6UOTFVdPn-GKIsotoEa9tBQgfRFL0oIwKgIKSIiey48vpTVp~z55ICPsEyisi4phQmg9C-9szAIKcFgLw1jlB6JP6YW8ybHrPsCeFXAkHmfT2w1jEdgfGrLaEwhADM0sMMHvTocTEqSwvg8K7O1EmK1ljGflUGoY7V8t1jWTuoQYB0Y8BsY7GarQWUsHYG4t4ZhOvBca1O3kKqqdunbVJq2BC8XRfoWMoad4FVD~yMs48Ubnnu3ElKELgCyxl4he1uVMb8e6o-KR4Q5BEpKITD~sc-yJpzd4G3j0frCX-HF-NkeizHhl8jenj3xbK6PETEn0g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000214.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 14,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/214/image/image.jpg?Expires=1776732225&Signature=e7951W5lJEh-QZu1q6UOTFVdPn-GKIsotoEa9tBQgfRFL0oIwKgIKSIiey48vpTVp~z55ICPsEyisi4phQmg9C-9szAIKcFgLw1jlB6JP6YW8ybHrPsCeFXAkHmfT2w1jEdgfGrLaEwhADM0sMMHvTocTEqSwvg8K7O1EmK1ljGflUGoY7V8t1jWTuoQYB0Y8BsY7GarQWUsHYG4t4ZhOvBca1O3kKqqdunbVJq2BC8XRfoWMoad4FVD~yMs48Ubnnu3ElKELgCyxl4he1uVMb8e6o-KR4Q5BEpKITD~sc-yJpzd4G3j0frCX-HF-NkeizHhl8jenj3xbK6PETEn0g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_14_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/215/image/image.jpg?Expires=1776732225&Signature=SSwo1HJFAw3nsGWjdhkzoCOfFj6Ny5-wfDseP7JxkbIqse5Xz2Q-vjWuLALycpZ6kwkGKD70XfI6vHajsXy1GHWFFPyI5YzQkvAlqpmbwrRoN88UewkM3O2-5TQ0FxKCIQ0zbzEwjW3fkhXvPsMRatZpVt2Wf~demxjhw1T8hfx0rTMWZIs~ak~eHoJA9Y93h047tH7e7c4MEoLj01SaWYTcHhwOTmOPvG42bovmsg0gCBt9SS7DpNkw3aLuvSqFm4hdzeti6rGDc1K39mJ963squ5bGC-T2SGxLKowH3qUN~Uv1Xgt~UkluHRkHDfzFcXIsM3qNygLcaUesEuv1bQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000215.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 15,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/215/image/image.jpg?Expires=1776732225&Signature=SSwo1HJFAw3nsGWjdhkzoCOfFj6Ny5-wfDseP7JxkbIqse5Xz2Q-vjWuLALycpZ6kwkGKD70XfI6vHajsXy1GHWFFPyI5YzQkvAlqpmbwrRoN88UewkM3O2-5TQ0FxKCIQ0zbzEwjW3fkhXvPsMRatZpVt2Wf~demxjhw1T8hfx0rTMWZIs~ak~eHoJA9Y93h047tH7e7c4MEoLj01SaWYTcHhwOTmOPvG42bovmsg0gCBt9SS7DpNkw3aLuvSqFm4hdzeti6rGDc1K39mJ963squ5bGC-T2SGxLKowH3qUN~Uv1Xgt~UkluHRkHDfzFcXIsM3qNygLcaUesEuv1bQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_15_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/216/image/image.jpg?Expires=1776732225&Signature=gBVJIVEhZgN42wldMvKHJPmeougNED8bzpudgHqzL~gp1doIgXz9pkaA9EvuzajvnKHuhihXwh~AhRP-Me2zoet0ZcTV5hTzwxQB5471T9qBCdjQRF1vCOqKtX7xC6EQvY385H1mRVM6NbpDh621ErdlQDN~ZjbKta~zst7lcQ4MOU~p-~0NuKA94RN7LcWXbksfhuew1YmX0A4jwUwX~3tbmIZukABsNK1WO47JX2wQpP6RA~iGFOMEZYQlskezTv4hFXJeMf0D2zkF~X-2TYWg~8c6orEz4Vs8YzXSZqmxQhjFKEUUUFqi-FVw1K7TDv6soKUicIC3sjJP3W1v5g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000216.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 16,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/216/image/image.jpg?Expires=1776732225&Signature=gBVJIVEhZgN42wldMvKHJPmeougNED8bzpudgHqzL~gp1doIgXz9pkaA9EvuzajvnKHuhihXwh~AhRP-Me2zoet0ZcTV5hTzwxQB5471T9qBCdjQRF1vCOqKtX7xC6EQvY385H1mRVM6NbpDh621ErdlQDN~ZjbKta~zst7lcQ4MOU~p-~0NuKA94RN7LcWXbksfhuew1YmX0A4jwUwX~3tbmIZukABsNK1WO47JX2wQpP6RA~iGFOMEZYQlskezTv4hFXJeMf0D2zkF~X-2TYWg~8c6orEz4Vs8YzXSZqmxQhjFKEUUUFqi-FVw1K7TDv6soKUicIC3sjJP3W1v5g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_16_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/217/image/image.jpg?Expires=1776732225&Signature=GUIow3Z9LKCEkB-S~UdXF9jXk3uHK92o~d7SL-xfCKJgNT49MhdRCxAoABkK44MqhavKHBUQ1S7YV9D7So8PiQmhzzuLdK1VsQ1VTkbQUSVULPid80yBNvlEPX566ZIr26vUsfsBS7iEYU6cCHE13pCXikzTsEfIzjckQXxKUfLuY9CornKMu8wPcqdL5nL3pFAIjHVkI~t-VFLz8J566ZptovdKcxf0uFkfM4OiLiZ2KexhoOcIKKqMJo1~nsPiD45He59EJJ4om0bXZAaBKAzN7SlPAnc6unJunRYgoTkmudf9QZ-OSt4nOxwrnRGLqLB-2~os~tGgPbxXgxwOFw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000217.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 17,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/217/image/image.jpg?Expires=1776732225&Signature=GUIow3Z9LKCEkB-S~UdXF9jXk3uHK92o~d7SL-xfCKJgNT49MhdRCxAoABkK44MqhavKHBUQ1S7YV9D7So8PiQmhzzuLdK1VsQ1VTkbQUSVULPid80yBNvlEPX566ZIr26vUsfsBS7iEYU6cCHE13pCXikzTsEfIzjckQXxKUfLuY9CornKMu8wPcqdL5nL3pFAIjHVkI~t-VFLz8J566ZptovdKcxf0uFkfM4OiLiZ2KexhoOcIKKqMJo1~nsPiD45He59EJJ4om0bXZAaBKAzN7SlPAnc6unJunRYgoTkmudf9QZ-OSt4nOxwrnRGLqLB-2~os~tGgPbxXgxwOFw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_17_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/218/image/image.jpg?Expires=1776732225&Signature=0fA-LYrgOW9aKHqf-hesWSmJpiOyPqZrNu9g9LRCj5yF1nzo5eR-CPtiNA2sQ6Yz-J3c2xTOwFz64fYYqQeX1bFS7You4pK3USaurnwga3job7iwmGDJC~6u7aULSQOHLFOoVIvB-WGSpe5cSWzYqYx-~aP6YJKaa9DipECEH~HfmAMZW7k~hPsS3slDdOWw6w0QlARGx7P3WgaXdsm2p-TVMsNNWk2i~7mmZk-Y-1xPX0ypE4bLzC3bvoyjR~6GiSdQWrHL0uoPHH~UIthH7TooVXdYRS4CjVEB4fvpMPGjxGFiNsdErpuJfIzbAbrlvoQvNGT5Si7wmFKK47flFQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000218.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 18,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/218/image/image.jpg?Expires=1776732225&Signature=0fA-LYrgOW9aKHqf-hesWSmJpiOyPqZrNu9g9LRCj5yF1nzo5eR-CPtiNA2sQ6Yz-J3c2xTOwFz64fYYqQeX1bFS7You4pK3USaurnwga3job7iwmGDJC~6u7aULSQOHLFOoVIvB-WGSpe5cSWzYqYx-~aP6YJKaa9DipECEH~HfmAMZW7k~hPsS3slDdOWw6w0QlARGx7P3WgaXdsm2p-TVMsNNWk2i~7mmZk-Y-1xPX0ypE4bLzC3bvoyjR~6GiSdQWrHL0uoPHH~UIthH7TooVXdYRS4CjVEB4fvpMPGjxGFiNsdErpuJfIzbAbrlvoQvNGT5Si7wmFKK47flFQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_18_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/219/image/image.jpg?Expires=1776732225&Signature=Q24u6yyS64hFTppeJcQ1l9drxBly2bb4zAeF2gbnbiNSsDlzTxq-noqyyDuDstlL0LkjF1t5-qsbvlOL2gcBuThKXUmrdNfgaC6EUdqKHS2GEIZHHn1PqjYe-DeOqapi92z1D--vTpERmBkhQdnJNIjaplBpo0gXHs5ESuArX~kwNuAH7ruFVaTgTjeL~dbaAkLrWqE1n0xjiabWy2K~pa9xKE8Uk4YSYimQII8MI7ipkc-xFRmNfjydNg9jnRMbXa-Ip3Bvj1R9pnqhcnDe2v2YxQSrluB2X6OzEgIPMZ0s8mMfBMgyzghI63SQykxcCPbrKiKJ6dnPbFEE4p4AMQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000219.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 19,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/219/image/image.jpg?Expires=1776732225&Signature=Q24u6yyS64hFTppeJcQ1l9drxBly2bb4zAeF2gbnbiNSsDlzTxq-noqyyDuDstlL0LkjF1t5-qsbvlOL2gcBuThKXUmrdNfgaC6EUdqKHS2GEIZHHn1PqjYe-DeOqapi92z1D--vTpERmBkhQdnJNIjaplBpo0gXHs5ESuArX~kwNuAH7ruFVaTgTjeL~dbaAkLrWqE1n0xjiabWy2K~pa9xKE8Uk4YSYimQII8MI7ipkc-xFRmNfjydNg9jnRMbXa-Ip3Bvj1R9pnqhcnDe2v2YxQSrluB2X6OzEgIPMZ0s8mMfBMgyzghI63SQykxcCPbrKiKJ6dnPbFEE4p4AMQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_19_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/220/image/image.jpg?Expires=1776732225&Signature=JmgtY8evBsdTYtT5Skls2qN8VPwOuma~vaXX~o9PesYf5qWGgkzsxGLA2HDgkaPuacXGR9bEReW1zLtKB4ljSP1PoPlMFEW-~hxupQwK0JzaOYKDbtI9RzJmA5HBGjyruJDSaip-FEdQnbpEQVeaIxaEpx-NmtnWz8wE4TIr71CEjGFwUGv-8fF8wkKzTW3QXsVMzr-vkcNEyCXuBYo7lOJcXFUNsLaJZbVGVRYPSwAgDjLhCMUSJUytXM5KzpJYWEnpcQuYrEbgn3VHN1Rj4tcZxImCpdy7GPN99x9yZgh~IGEW8DEMiAj9cEHPpvgR-bJyJEMzP9xZxPYiE4kjrA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000220.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 20,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/220/image/image.jpg?Expires=1776732225&Signature=JmgtY8evBsdTYtT5Skls2qN8VPwOuma~vaXX~o9PesYf5qWGgkzsxGLA2HDgkaPuacXGR9bEReW1zLtKB4ljSP1PoPlMFEW-~hxupQwK0JzaOYKDbtI9RzJmA5HBGjyruJDSaip-FEdQnbpEQVeaIxaEpx-NmtnWz8wE4TIr71CEjGFwUGv-8fF8wkKzTW3QXsVMzr-vkcNEyCXuBYo7lOJcXFUNsLaJZbVGVRYPSwAgDjLhCMUSJUytXM5KzpJYWEnpcQuYrEbgn3VHN1Rj4tcZxImCpdy7GPN99x9yZgh~IGEW8DEMiAj9cEHPpvgR-bJyJEMzP9xZxPYiE4kjrA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_20_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/221/image/image.jpg?Expires=1776732225&Signature=VihnbYwcaUAgU8CRT3fdCYO3XZLcWV~oDu3uWZepko5PKGwr4xiDGpHkEkC2dHgmKwCxcgjTqnZGYmYPuZALoTleXEOH3bDvHRya1oYVvp4zKVhsVSUAZYIM2llQ3kzQ~COfkOpcTdMz4cQaw8H7iVOgrNMosI7Aljyc-j29BsYLYTdkY8JPpXdfzK5JsF2Pv~yXUS3W~Gxza8DfySFm8MF~35JmWphATr9XANAuAu1d78RNhHUlJIOw5F9Lhbf7T7CVGF0OgXhSa1fHtMb0OCemWFTileYWWim7b8IGDNKL5t2dlnZBEZ7M80ezBBGYUbAQHdMuf37jrCLw3vYQMg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000221.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 21,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/221/image/image.jpg?Expires=1776732225&Signature=VihnbYwcaUAgU8CRT3fdCYO3XZLcWV~oDu3uWZepko5PKGwr4xiDGpHkEkC2dHgmKwCxcgjTqnZGYmYPuZALoTleXEOH3bDvHRya1oYVvp4zKVhsVSUAZYIM2llQ3kzQ~COfkOpcTdMz4cQaw8H7iVOgrNMosI7Aljyc-j29BsYLYTdkY8JPpXdfzK5JsF2Pv~yXUS3W~Gxza8DfySFm8MF~35JmWphATr9XANAuAu1d78RNhHUlJIOw5F9Lhbf7T7CVGF0OgXhSa1fHtMb0OCemWFTileYWWim7b8IGDNKL5t2dlnZBEZ7M80ezBBGYUbAQHdMuf37jrCLw3vYQMg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_21_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/222/image/image.jpg?Expires=1776732225&Signature=rBb1S-C5f76Bo4K0VoBFKDHgJz9H5KWAfGXm0s-JsDkZK7nCXIpQTGs1mJcvlNPw~Y8K7K3xd~sNjBVVb1pA4A3-XQUMpf3qh1K~nHX8rcQn39Wc-ixz5cIqC73LtiOLQe5RncRl2ukVC6AuK0vp6mvL7kACF6CT0ky~zg30v1ObkkK60MgpXTc4UiDtqK7RT~ikzDPbcYRzJT0-dmM6kc~n-Na-gd04fUJS30ekqsM2rTtvbM3PEji5dLUAYz-UPXGh68q~vLevs-HWUL1BnXUNrRBLEPKzf1xGZwgVwWOaWf~0uQCUPCyU0yvbf9lgJon4gCEYQW1KyIqnB802ew__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000222.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 22,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/222/image/image.jpg?Expires=1776732225&Signature=rBb1S-C5f76Bo4K0VoBFKDHgJz9H5KWAfGXm0s-JsDkZK7nCXIpQTGs1mJcvlNPw~Y8K7K3xd~sNjBVVb1pA4A3-XQUMpf3qh1K~nHX8rcQn39Wc-ixz5cIqC73LtiOLQe5RncRl2ukVC6AuK0vp6mvL7kACF6CT0ky~zg30v1ObkkK60MgpXTc4UiDtqK7RT~ikzDPbcYRzJT0-dmM6kc~n-Na-gd04fUJS30ekqsM2rTtvbM3PEji5dLUAYz-UPXGh68q~vLevs-HWUL1BnXUNrRBLEPKzf1xGZwgVwWOaWf~0uQCUPCyU0yvbf9lgJon4gCEYQW1KyIqnB802ew__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_22_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/223/image/image.jpg?Expires=1776732225&Signature=mQKDUUWCiafpFkCzxUxbfuXwGc8pPBdMtxcvVCn3yv-MQyxITCzkv0a07rwGNmnc5cjXuZy0XsHnSg2CILDv66-NDe51Fx-ATM-RUNDsCXvOcyByZf03Nnj36blqJRnJHc32TE0OuAokKE6kLArmSQMGFgqIaXxYnLJjEzjv1BIy-pfBgmwjwh6cxLRco46jQDVj4sWiyGZJiQDkd0i8L0Ne6XW5NYnA8O~e~r0Xa2S6z8ShfwlZDv57f2VKBW4Izq9GudBakBtKC5s09w8kjj6tKCA8qGMbORN4aWwEs19dpyzDBKzDt8UMUEiGwx6fgJgyV9L0gJK5C3OoNmZ8Kw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000223.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 23,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/223/image/image.jpg?Expires=1776732225&Signature=mQKDUUWCiafpFkCzxUxbfuXwGc8pPBdMtxcvVCn3yv-MQyxITCzkv0a07rwGNmnc5cjXuZy0XsHnSg2CILDv66-NDe51Fx-ATM-RUNDsCXvOcyByZf03Nnj36blqJRnJHc32TE0OuAokKE6kLArmSQMGFgqIaXxYnLJjEzjv1BIy-pfBgmwjwh6cxLRco46jQDVj4sWiyGZJiQDkd0i8L0Ne6XW5NYnA8O~e~r0Xa2S6z8ShfwlZDv57f2VKBW4Izq9GudBakBtKC5s09w8kjj6tKCA8qGMbORN4aWwEs19dpyzDBKzDt8UMUEiGwx6fgJgyV9L0gJK5C3OoNmZ8Kw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_23_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/224/image/image.jpg?Expires=1776732225&Signature=kZDMiv-KMJf04rs4TZma2Sr187mSaE-otYKbdPD9CW7iaO3d~C3~4KPq4g-5BqrztbPKurNb4keTsiWBFE6~njerNT02wO-O-EX-y816ag-hSxonZXYAmlTXKUUWK2fIYqLLFOti3~VCsJ7ffgprJaQmVTXMvrVn0Jd~gnnFQQbMNxy2IxAv1hLGvrqk5JIj7CewjStEyPo649hFDnvVEbCSYa4X6OZLSgyO6BYEcim05MRMW46Vu3H8iuCKAy-HSXAHXcIa2qnYjCAd~5IxhANCC9gyz5BbMHvDzZzA6NlIl68EnyFEgHjFax1Gfwi2tguliUEQhapNlzNv4XtfuQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000224.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 24,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/224/image/image.jpg?Expires=1776732225&Signature=kZDMiv-KMJf04rs4TZma2Sr187mSaE-otYKbdPD9CW7iaO3d~C3~4KPq4g-5BqrztbPKurNb4keTsiWBFE6~njerNT02wO-O-EX-y816ag-hSxonZXYAmlTXKUUWK2fIYqLLFOti3~VCsJ7ffgprJaQmVTXMvrVn0Jd~gnnFQQbMNxy2IxAv1hLGvrqk5JIj7CewjStEyPo649hFDnvVEbCSYa4X6OZLSgyO6BYEcim05MRMW46Vu3H8iuCKAy-HSXAHXcIa2qnYjCAd~5IxhANCC9gyz5BbMHvDzZzA6NlIl68EnyFEgHjFax1Gfwi2tguliUEQhapNlzNv4XtfuQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_24_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/225/image/image.jpg?Expires=1776732225&Signature=iAFuOcf9mIz5YdadunG-Zl5K99H8n9shYt-ZnIFTXc5l5qZCI2C7joI0-k0zL2nV-e1g2MokBll3gsf5SNk4uPhv6n-ETDkHVXMjwSvEy6TlyKttqu359dUigRlrsaLzpUTkgix51ARjrxDfd3FJ4M9405d2ruM3uQ8nZam94U1zl-ams3xhBJkFoypns3B45rEZnUY11cLvTkN~tLQ308KAkNOEqgMYeosaMvxBMftnLYnPwrcSq5wTIXqi0yF4Mv0dmvkiCVyUxYSYFtA4EkcW7Djx8gBiT8B7sOA7fMcueQ4q2glABWgw48b1qHy~5AlCdysxP2POugFxgB3~nw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000225.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 25,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/225/image/image.jpg?Expires=1776732225&Signature=iAFuOcf9mIz5YdadunG-Zl5K99H8n9shYt-ZnIFTXc5l5qZCI2C7joI0-k0zL2nV-e1g2MokBll3gsf5SNk4uPhv6n-ETDkHVXMjwSvEy6TlyKttqu359dUigRlrsaLzpUTkgix51ARjrxDfd3FJ4M9405d2ruM3uQ8nZam94U1zl-ams3xhBJkFoypns3B45rEZnUY11cLvTkN~tLQ308KAkNOEqgMYeosaMvxBMftnLYnPwrcSq5wTIXqi0yF4Mv0dmvkiCVyUxYSYFtA4EkcW7Djx8gBiT8B7sOA7fMcueQ4q2glABWgw48b1qHy~5AlCdysxP2POugFxgB3~nw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_25_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/226/image/image.jpg?Expires=1776732225&Signature=xeZYUOVu42ChuC4i7oxIPdMbQuBX2PjEan8pcCv2wiITEbSU3JCKEpcO7DJxZNzId1jAX4z13q749n16Fmt~MKRqpvBrDssITn4qT7QOqjbQld6DmaWJk3JffqPiW2G0nzZjHwQM7hi1gknneN4ee91fo8w51u3EAcozP7QoR1B5qIFN7x4e9zgFWL-uJOnHgMrRHpMwtJnEqPioWX8mOG~jTaZ6gSeZMbd-2WdGbzFwCOTrI-YtuasqMpExGinyzfCYHf0rw5~rpsVu4gmUEfW6U0Qgw3zHUdSyzZdljg9Dm2AzRr23H4nURWO3KN4iR4X9b1lqUy5Sjat~FBKVDQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000226.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 26,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/226/image/image.jpg?Expires=1776732225&Signature=xeZYUOVu42ChuC4i7oxIPdMbQuBX2PjEan8pcCv2wiITEbSU3JCKEpcO7DJxZNzId1jAX4z13q749n16Fmt~MKRqpvBrDssITn4qT7QOqjbQld6DmaWJk3JffqPiW2G0nzZjHwQM7hi1gknneN4ee91fo8w51u3EAcozP7QoR1B5qIFN7x4e9zgFWL-uJOnHgMrRHpMwtJnEqPioWX8mOG~jTaZ6gSeZMbd-2WdGbzFwCOTrI-YtuasqMpExGinyzfCYHf0rw5~rpsVu4gmUEfW6U0Qgw3zHUdSyzZdljg9Dm2AzRr23H4nURWO3KN4iR4X9b1lqUy5Sjat~FBKVDQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_26_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/227/image/image.jpg?Expires=1776732225&Signature=2jy5oPDsqL1P4KhspPL7k7ugCqAsGpZQ7x~4RJsnWsiCzJW3s4S9JzGiH~Ek8q-5vj8GsGDslkZgrbrTImZyiEtDFhmc3GGpLp-vrwFHaADoY0cU-yn-FEL4so5DxM8gl624U3~NqhiCIHvWS~v7CAqCQTWlis7Pv27H6VNrvoSumu2ZhzeyuiEla4dbc~MYwcLIEfElAXLvHB8ak3JWjwi-HeWlKzl5fDHldUR1RGvNzwKnVTs2xXOWvBhakN23FLnEFvChNrd0gfzFuyUf68h~lMEraHP~8vI~x5rQlYS-2ui1iJpDfdTThTCcLAcL-htyuF0ctGMpJuULm-jfpA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000227.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 27,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/227/image/image.jpg?Expires=1776732225&Signature=2jy5oPDsqL1P4KhspPL7k7ugCqAsGpZQ7x~4RJsnWsiCzJW3s4S9JzGiH~Ek8q-5vj8GsGDslkZgrbrTImZyiEtDFhmc3GGpLp-vrwFHaADoY0cU-yn-FEL4so5DxM8gl624U3~NqhiCIHvWS~v7CAqCQTWlis7Pv27H6VNrvoSumu2ZhzeyuiEla4dbc~MYwcLIEfElAXLvHB8ak3JWjwi-HeWlKzl5fDHldUR1RGvNzwKnVTs2xXOWvBhakN23FLnEFvChNrd0gfzFuyUf68h~lMEraHP~8vI~x5rQlYS-2ui1iJpDfdTThTCcLAcL-htyuF0ctGMpJuULm-jfpA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_27_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/228/image/image.jpg?Expires=1776732225&Signature=BH6mVnmr71NLODnvN-3QMFUvC6xcwr7hscCA83jq81dfBgl2IVkf9BVpc0birDpgjshhFi5c-ejeG-KKcFAdQZMW~1GUZz0I3v07PnEqEvz94nYec18BNx2YMC-4Ny0n1yDcT9-A7GnTAs2Bxr5qd0zJ-1RBB1x~bOLeFypWZbkbmAt87hEc3pzpX3Yre82G1MzoqASGiQAB8smoA9YpEKev4zCXg4-zoucCn4fdVl-bxhE4-va80fqj-lIQUI7hEF7w5NmmfPmLwS6zDC1pkYbYtRkK1s6foKc28G68mgmqYagvmbh5epsNE7oqt8hzWfNBRZl1I0r-B2S04K99pg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000228.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 28,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/228/image/image.jpg?Expires=1776732225&Signature=BH6mVnmr71NLODnvN-3QMFUvC6xcwr7hscCA83jq81dfBgl2IVkf9BVpc0birDpgjshhFi5c-ejeG-KKcFAdQZMW~1GUZz0I3v07PnEqEvz94nYec18BNx2YMC-4Ny0n1yDcT9-A7GnTAs2Bxr5qd0zJ-1RBB1x~bOLeFypWZbkbmAt87hEc3pzpX3Yre82G1MzoqASGiQAB8smoA9YpEKev4zCXg4-zoucCn4fdVl-bxhE4-va80fqj-lIQUI7hEF7w5NmmfPmLwS6zDC1pkYbYtRkK1s6foKc28G68mgmqYagvmbh5epsNE7oqt8hzWfNBRZl1I0r-B2S04K99pg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_28_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/229/image/image.jpg?Expires=1776732225&Signature=Wi9PHz-~xmrnTXleMqH2Tmz4bo-95D6-Jc7A9ydYv5JZleiEwj4zH16gZcGX~4225vz8PBYmVevloJRoRzki8IPe2xKhjk7w-NuKeyhKi9Ph7H1h3sUc9XI26zYtnO21jVDXfT~UAxnk9qNQ1wi~Gr3rOW1xFsZ-MagmeZ~0eI21FzGoqZVkQMi~e4cWHirgHiUlZ1y4398z~7rydrI2pzcnA3MBN0geKb9ej-31WvquR-obFg7upAzI9e5fnfUGoSXOh9swogVDEYB9UqKGI9hrXcUZM8jtn~g7oYaIOvi5mev0w5NF3hfozY0NiPOwSGw-s1iAlRitPTvqejZv8Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000229.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 29,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/229/image/image.jpg?Expires=1776732225&Signature=Wi9PHz-~xmrnTXleMqH2Tmz4bo-95D6-Jc7A9ydYv5JZleiEwj4zH16gZcGX~4225vz8PBYmVevloJRoRzki8IPe2xKhjk7w-NuKeyhKi9Ph7H1h3sUc9XI26zYtnO21jVDXfT~UAxnk9qNQ1wi~Gr3rOW1xFsZ-MagmeZ~0eI21FzGoqZVkQMi~e4cWHirgHiUlZ1y4398z~7rydrI2pzcnA3MBN0geKb9ej-31WvquR-obFg7upAzI9e5fnfUGoSXOh9swogVDEYB9UqKGI9hrXcUZM8jtn~g7oYaIOvi5mev0w5NF3hfozY0NiPOwSGw-s1iAlRitPTvqejZv8Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_29_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/230/image/image.jpg?Expires=1776732225&Signature=nw9UPdHUHyMqBQVXWCE0mooc4vUXiUSA5LcTy~r1AxaCL-gpYdoqNIWpKLBRdzEJZpTSUqvkpCplAhx9lyEfzLWy55tQSmXPy2PtyIgaO6~YHwWatxEJAl2f2DN7za-Iezw4sNP4guvvFZ7~vKxmHXSn4zyOJ4rCLEmsJmHGz7b2T5OHPJ3F7WIdRRvATG8siKVaYDeWCJi5F8EpWQXOSADJu~Rb-LjiyE98cT-n4Le60SPmu8BC~OKiur5NoecpVs6bD6cAAU4X9FvD7YOXfC3QaZNE2Cz~GP5jhWLoh4L9Oz3Rgq6ZNeYxt3GZ-2tyvEnXJL-YayAH7tuuJP2pqg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000230.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 30,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/230/image/image.jpg?Expires=1776732225&Signature=nw9UPdHUHyMqBQVXWCE0mooc4vUXiUSA5LcTy~r1AxaCL-gpYdoqNIWpKLBRdzEJZpTSUqvkpCplAhx9lyEfzLWy55tQSmXPy2PtyIgaO6~YHwWatxEJAl2f2DN7za-Iezw4sNP4guvvFZ7~vKxmHXSn4zyOJ4rCLEmsJmHGz7b2T5OHPJ3F7WIdRRvATG8siKVaYDeWCJi5F8EpWQXOSADJu~Rb-LjiyE98cT-n4Le60SPmu8BC~OKiur5NoecpVs6bD6cAAU4X9FvD7YOXfC3QaZNE2Cz~GP5jhWLoh4L9Oz3Rgq6ZNeYxt3GZ-2tyvEnXJL-YayAH7tuuJP2pqg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_30_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/231/image/image.jpg?Expires=1776732225&Signature=A1CiZjWqp9vLVwIfksb9oOf~QHvTyL98m6izf3M0sJjgAhGhLku2rrSGt54Fzd4Vj5Uxn1N9HaM9y95GkDDa4ZgsoDmCEiaKEwO6v9C~aXuvk~xrSHM1wJ9CXN9afJ0In7FoARkBsnNzGuBdWclVKWaEpu6tu6z6SjcY22yveXFHJOVDY2Yl7O4-IAp10g18saJqA2L0JU33AziR2VN-RE10duQcSf3aRxO9KwCq6S5rNOTKTUbLVsk8I6xplQMt4jChecVNk2u9-toQU8kq-wC5PCAL773q6Viphg4axunawmbK0W0~wvRI2j4k~-JEFx3Ca7z742XnQUYskF67uw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000231.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 31,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/231/image/image.jpg?Expires=1776732225&Signature=A1CiZjWqp9vLVwIfksb9oOf~QHvTyL98m6izf3M0sJjgAhGhLku2rrSGt54Fzd4Vj5Uxn1N9HaM9y95GkDDa4ZgsoDmCEiaKEwO6v9C~aXuvk~xrSHM1wJ9CXN9afJ0In7FoARkBsnNzGuBdWclVKWaEpu6tu6z6SjcY22yveXFHJOVDY2Yl7O4-IAp10g18saJqA2L0JU33AziR2VN-RE10duQcSf3aRxO9KwCq6S5rNOTKTUbLVsk8I6xplQMt4jChecVNk2u9-toQU8kq-wC5PCAL773q6Viphg4axunawmbK0W0~wvRI2j4k~-JEFx3Ca7z742XnQUYskF67uw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_31_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/232/image/image.jpg?Expires=1776732225&Signature=KaYnqT8E~GI2xO2H4fwuG7JQYMAlhfauWTZfaUreLZmyLFC3yIBOEOsyNb9G1Mzj4x94tLDx5Gnaa3enGOfPtZYc5wOF0sNoLVr~xB5cEVq29U32UaHuGOVAN~Dy~c~bbsqO8DxMGDr-gouJjOPLqsz5xwZsxb3VxcZHCl7NTUWW5wNu1nPppSsVH04Z25K0ryp4agWclyEr~eXxUlhov~hCcSW-8~YeM1cHgfLDjdU17hQjFqMTpiAESbP8lIoL1w2qMDZXbfFbNa0McjirKpinuzmUeJGd9PePnwpSK9M8qWotDmByEJxw3Wsw1~ttFj4z5zPf1mMRDyBI038Hag__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000232.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 32,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/232/image/image.jpg?Expires=1776732225&Signature=KaYnqT8E~GI2xO2H4fwuG7JQYMAlhfauWTZfaUreLZmyLFC3yIBOEOsyNb9G1Mzj4x94tLDx5Gnaa3enGOfPtZYc5wOF0sNoLVr~xB5cEVq29U32UaHuGOVAN~Dy~c~bbsqO8DxMGDr-gouJjOPLqsz5xwZsxb3VxcZHCl7NTUWW5wNu1nPppSsVH04Z25K0ryp4agWclyEr~eXxUlhov~hCcSW-8~YeM1cHgfLDjdU17hQjFqMTpiAESbP8lIoL1w2qMDZXbfFbNa0McjirKpinuzmUeJGd9PePnwpSK9M8qWotDmByEJxw3Wsw1~ttFj4z5zPf1mMRDyBI038Hag__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_32_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/233/image/image.jpg?Expires=1776732225&Signature=HVFNjWE7RlPOp~YShNqkImgELrqMbinMu6~8iMVUgmkkoPCJBRMWNPgnhpLpkA-326bzqCxxbROgwTA9qRZZlpSGkIyMJhrhLdpFemLn8H-4nKF5cF7ID9Nncw4UgsQf0wrehB~4HmtnvxvWQNigJMOU3PRXuHkMeP0-CGeaL~MmJsPj1~3aB866ByTBTv6z2QoF9zmhX2DrZ2tkuN0tl2EZp53kqTJCNh6UoiTxAUFLukAtGRck3dXVRc7XuCSZ~QN~QwywWC4y3kuMAzghm6TF9oMdLHDkfs5LZU8ebEL-gio1v6bdqkNZwRGHSjHfpshtpS19mwPJy8dLOBzjrQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000233.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 33,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/233/image/image.jpg?Expires=1776732225&Signature=HVFNjWE7RlPOp~YShNqkImgELrqMbinMu6~8iMVUgmkkoPCJBRMWNPgnhpLpkA-326bzqCxxbROgwTA9qRZZlpSGkIyMJhrhLdpFemLn8H-4nKF5cF7ID9Nncw4UgsQf0wrehB~4HmtnvxvWQNigJMOU3PRXuHkMeP0-CGeaL~MmJsPj1~3aB866ByTBTv6z2QoF9zmhX2DrZ2tkuN0tl2EZp53kqTJCNh6UoiTxAUFLukAtGRck3dXVRc7XuCSZ~QN~QwywWC4y3kuMAzghm6TF9oMdLHDkfs5LZU8ebEL-gio1v6bdqkNZwRGHSjHfpshtpS19mwPJy8dLOBzjrQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_33_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/234/image/image.jpg?Expires=1776732225&Signature=uTeTIibhnTG9DVIHElg20AeWPnuhc54ZeeuJb6ELB6KL8TywMnnQ9VKdnYo8XbrIntWEmIvEG2qbV2XJ-Bky5LmN4Pglq77RwJg4VF1EAIYyOyMvPA9I7T1xJQqwC~gR5Ui0A92Lx96JhViUS35jz1fgpa-6zyPudQlLeXyTZImMg1w6R6TgJFP10pJt45oUtrukIEYCuwqZ27UhGOtQxMibr2jwZqOP01RC62CBGRQM7tgyZ3kK5q6CIojThPNn1UqRKLenMxcnjuZYRFfKwZlWwarifVwl~StuyYOsZ3nsQ-eHqA9pyqH1zgE6oAGvJeL3lJue6106gvVyp0surw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000234.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 34,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/234/image/image.jpg?Expires=1776732225&Signature=uTeTIibhnTG9DVIHElg20AeWPnuhc54ZeeuJb6ELB6KL8TywMnnQ9VKdnYo8XbrIntWEmIvEG2qbV2XJ-Bky5LmN4Pglq77RwJg4VF1EAIYyOyMvPA9I7T1xJQqwC~gR5Ui0A92Lx96JhViUS35jz1fgpa-6zyPudQlLeXyTZImMg1w6R6TgJFP10pJt45oUtrukIEYCuwqZ27UhGOtQxMibr2jwZqOP01RC62CBGRQM7tgyZ3kK5q6CIojThPNn1UqRKLenMxcnjuZYRFfKwZlWwarifVwl~StuyYOsZ3nsQ-eHqA9pyqH1zgE6oAGvJeL3lJue6106gvVyp0surw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_34_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/235/image/image.jpg?Expires=1776732225&Signature=HYSD6GsGnbrkQx2daJe~Vrri3PFoZn9ZiA5gUG7~FVaSGHrr7Kik4l2TOqzhYh-uP-r05HDRHf~Z5CQWkYn5AzBUgTuGwiw53V7~SYl8IYDmz9slOSMS-pI8iDclikvsk6AfMJfl3fMKv0nSi8T~xE8gZdgsAr0T8y9YBXly9dJFNkRkHrGhI8Ch7WD5Wt-Y48AE2B3hz~2BAp2HeTx3blLAxCDn2sk9ZWflXfSbmuzll8KV5VtG9JraXJGPEJxgF80St~JiDtwkdXh3SQH9CqgptTdlkoExa3x-sVYK7WVcDew8BNCc7mrrqxzHrGB1nUB1pZ34reTvQR~RqIhxhQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000235.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 35,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/235/image/image.jpg?Expires=1776732225&Signature=HYSD6GsGnbrkQx2daJe~Vrri3PFoZn9ZiA5gUG7~FVaSGHrr7Kik4l2TOqzhYh-uP-r05HDRHf~Z5CQWkYn5AzBUgTuGwiw53V7~SYl8IYDmz9slOSMS-pI8iDclikvsk6AfMJfl3fMKv0nSi8T~xE8gZdgsAr0T8y9YBXly9dJFNkRkHrGhI8Ch7WD5Wt-Y48AE2B3hz~2BAp2HeTx3blLAxCDn2sk9ZWflXfSbmuzll8KV5VtG9JraXJGPEJxgF80St~JiDtwkdXh3SQH9CqgptTdlkoExa3x-sVYK7WVcDew8BNCc7mrrqxzHrGB1nUB1pZ34reTvQR~RqIhxhQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_35_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/236/image/image.jpg?Expires=1776732225&Signature=woIqzJLwYHbDzYXoBivx6JsXKceIrV6IyEda77TYhNxJcjKSjlGTg6Xg~DZtThzLj27VdCuuD-d6gut8uVrG87JmRyPxOmJYgIG4P97xh6sMc7oWXLaP-pX26Kqr-ZxYwWcx2ihrW7tz9UnHXrxJnHH68Y3aL60jrKLj9uaOa1nxDuG511Nn8FTfjjwdSVzLFsm~63Rnu4Z5CgB4uP3dDEADRfN7qyN76Hr~BygIi66VEFuvVngALfjEsev9xh8HgS8Jre7fDnh7-autENX4aaDC6HZ6x4hy~QbOL5sQ78oB9nSnlfx1PgJHvbgC2XtruxbLCh-olJf3ogHN5NnJnA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000236.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 36,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/236/image/image.jpg?Expires=1776732225&Signature=woIqzJLwYHbDzYXoBivx6JsXKceIrV6IyEda77TYhNxJcjKSjlGTg6Xg~DZtThzLj27VdCuuD-d6gut8uVrG87JmRyPxOmJYgIG4P97xh6sMc7oWXLaP-pX26Kqr-ZxYwWcx2ihrW7tz9UnHXrxJnHH68Y3aL60jrKLj9uaOa1nxDuG511Nn8FTfjjwdSVzLFsm~63Rnu4Z5CgB4uP3dDEADRfN7qyN76Hr~BygIi66VEFuvVngALfjEsev9xh8HgS8Jre7fDnh7-autENX4aaDC6HZ6x4hy~QbOL5sQ78oB9nSnlfx1PgJHvbgC2XtruxbLCh-olJf3ogHN5NnJnA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_36_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/237/image/image.jpg?Expires=1776732225&Signature=FqWkjnHsQO5B4ECI2gln4gBlqY7BJHZwZDetuCaLD9Ruzij2Vk6BNspMGlnQfULn4BXdTV2jA5HhLhv2MzGrqD9JnXe3VysWB~8~URdG2TtFknB7fRANwJ9W20baNE~wGrwg-~wxM6SseNMJusIkVg4qQFvf52YTZWGfRQjMRhV-yS9VCh1REA0rI0vzJ8nX6XxKthzDmDL99S4M3pe7ii2Nah1SEADumaac05L6Hgn3mervmA~EVDJpKGoJfHqloFBTVSnIKfQM0bPwasT-YCrK9Eop6a2P~xJtcndkFZ~dIKfvo~5k47aaGUiIefdvpgvdvlJ67koq3vyPw7PJiQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000237.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 37,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/237/image/image.jpg?Expires=1776732225&Signature=FqWkjnHsQO5B4ECI2gln4gBlqY7BJHZwZDetuCaLD9Ruzij2Vk6BNspMGlnQfULn4BXdTV2jA5HhLhv2MzGrqD9JnXe3VysWB~8~URdG2TtFknB7fRANwJ9W20baNE~wGrwg-~wxM6SseNMJusIkVg4qQFvf52YTZWGfRQjMRhV-yS9VCh1REA0rI0vzJ8nX6XxKthzDmDL99S4M3pe7ii2Nah1SEADumaac05L6Hgn3mervmA~EVDJpKGoJfHqloFBTVSnIKfQM0bPwasT-YCrK9Eop6a2P~xJtcndkFZ~dIKfvo~5k47aaGUiIefdvpgvdvlJ67koq3vyPw7PJiQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_37_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/238/image/image.jpg?Expires=1776732225&Signature=qjoyl3LfIg0gxckV6rj0MJ-h7a3TcMwoe8Z4Pkm9lw~g4GdkJj9CE3zsCMkEh-d40kHD4BEN9~LaOgJoYLxlxsW3FLtfpii1AvGC9RnEVsBUhvID8iEq1QZggB20Tl1WiU0fkdtGr4OdDrjMb6Ff0rdPM8T5QieTnrvyPmyO~YW6o0JVX7JEEJejk55tzg2RHi4RZ8SgEE9rhbVVQNsPzDhRAId7hooWWdWmxRJRmT1i~Z4oGIcsz8suBSYG8i8-JxJW8Uc2-dkae3rGYfkYAJmtdKU4gv~MOJItO9QwA8J~0FffYcPyciBgf09naghzCL~uOj66TKbcw--ZKPLKtg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000238.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 38,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/238/image/image.jpg?Expires=1776732225&Signature=qjoyl3LfIg0gxckV6rj0MJ-h7a3TcMwoe8Z4Pkm9lw~g4GdkJj9CE3zsCMkEh-d40kHD4BEN9~LaOgJoYLxlxsW3FLtfpii1AvGC9RnEVsBUhvID8iEq1QZggB20Tl1WiU0fkdtGr4OdDrjMb6Ff0rdPM8T5QieTnrvyPmyO~YW6o0JVX7JEEJejk55tzg2RHi4RZ8SgEE9rhbVVQNsPzDhRAId7hooWWdWmxRJRmT1i~Z4oGIcsz8suBSYG8i8-JxJW8Uc2-dkae3rGYfkYAJmtdKU4gv~MOJItO9QwA8J~0FffYcPyciBgf09naghzCL~uOj66TKbcw--ZKPLKtg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_38_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/239/image/image.jpg?Expires=1776732225&Signature=QmUed-KNxa3UA8p-rOBgA6KV2UOnXPDq~k9dk9Uw6y5j4-r1KwUth4Jwp1Ht40kdNxbSGverQPfIxddsmupmUIlpFy2UrENN-Zr1grqdeCXzAXFVugEFqEPIEqSuDxpJ7jCbxDJNR~cMGGVWapvZBkpDyLoJD5RJgZ4Yvb2qXBykZpPHqLAe5C0qaa1wh0AfBlfh64nAsN4~zmG-bGgPYactTrEsb4rPZ87Zb-9uiqg9RN4MHIHsDtfEQSOY4VCst3KiTlT0le8yCGJJT9aTsLNarmdx44G9t1dgP6-v5WJN8vJPYVC2ff53YwwZjSSQ1IZ5pE997R8aGEA15-IIKw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000239.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 39,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/239/image/image.jpg?Expires=1776732225&Signature=QmUed-KNxa3UA8p-rOBgA6KV2UOnXPDq~k9dk9Uw6y5j4-r1KwUth4Jwp1Ht40kdNxbSGverQPfIxddsmupmUIlpFy2UrENN-Zr1grqdeCXzAXFVugEFqEPIEqSuDxpJ7jCbxDJNR~cMGGVWapvZBkpDyLoJD5RJgZ4Yvb2qXBykZpPHqLAe5C0qaa1wh0AfBlfh64nAsN4~zmG-bGgPYactTrEsb4rPZ87Zb-9uiqg9RN4MHIHsDtfEQSOY4VCst3KiTlT0le8yCGJJT9aTsLNarmdx44G9t1dgP6-v5WJN8vJPYVC2ff53YwwZjSSQ1IZ5pE997R8aGEA15-IIKw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_39_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/240/image/image.jpg?Expires=1776732225&Signature=rgPyUYVUogKTdgwQnd95iJaVy0KJJHIbzkPZG8EI8YFtAL3Sw5wKNHwDS7gSThnEyM5qMilJ~386-kh1TZtv-xKtMOxWJDylh0hh8mv4F7xTE5RWp2VwN9jH6y-ewwTQttmSuIAQhx5zbqGJWgtH1vFGg4QLVHqTAGavqEgugMrJqyVfa26owFk0rEeQQJA3mC3W2VOLXBbpHBSzJYIeWmq1Mk68PSnPCsNhh-kP5IdbLGuM~uPbHePlwvKTVIf2o3nd4Duja~a5t6KOwlQ~fXckbQjSmAs7SOP~WDqCqeUvwFAYwgSREAbmv6b5LstrnXFaPKPkaARWiyN4-M-A~g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000240.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 40,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/240/image/image.jpg?Expires=1776732225&Signature=rgPyUYVUogKTdgwQnd95iJaVy0KJJHIbzkPZG8EI8YFtAL3Sw5wKNHwDS7gSThnEyM5qMilJ~386-kh1TZtv-xKtMOxWJDylh0hh8mv4F7xTE5RWp2VwN9jH6y-ewwTQttmSuIAQhx5zbqGJWgtH1vFGg4QLVHqTAGavqEgugMrJqyVfa26owFk0rEeQQJA3mC3W2VOLXBbpHBSzJYIeWmq1Mk68PSnPCsNhh-kP5IdbLGuM~uPbHePlwvKTVIf2o3nd4Duja~a5t6KOwlQ~fXckbQjSmAs7SOP~WDqCqeUvwFAYwgSREAbmv6b5LstrnXFaPKPkaARWiyN4-M-A~g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_40_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/241/image/image.jpg?Expires=1776732225&Signature=h-aKAc7DzYcr0dAl64y67VSbmstiIt3B7~MZwK~9X~CRxduvx2SeK0LitMJhy2n~jZF6dOEWAQrlp0YUsWqPcC9oDtWmU4l6cg0wmbYeaMFLbawQJHz2xcZwghT~NsIrFV80UQhg58HluGYVTmNMrv4a6JIgP7CxRlg3CHIAWPUwKsDbQTIVUMHHzzH~-iDs~sOdSux4l1M1dxhBgVVOzqGT3G~LDksAsNcYyYKsaiLFAvb1Bc7C3A2SjmHOEqO3AqzWhdcpp5~8qRiJGBkdiyc7PZHJVZEufdoMaVhfsMOoJIxmXkPCp0WUqDk2FZKoR6Qvgdd1pnQ1zsXwHJb1dw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000241.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 41,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/241/image/image.jpg?Expires=1776732225&Signature=h-aKAc7DzYcr0dAl64y67VSbmstiIt3B7~MZwK~9X~CRxduvx2SeK0LitMJhy2n~jZF6dOEWAQrlp0YUsWqPcC9oDtWmU4l6cg0wmbYeaMFLbawQJHz2xcZwghT~NsIrFV80UQhg58HluGYVTmNMrv4a6JIgP7CxRlg3CHIAWPUwKsDbQTIVUMHHzzH~-iDs~sOdSux4l1M1dxhBgVVOzqGT3G~LDksAsNcYyYKsaiLFAvb1Bc7C3A2SjmHOEqO3AqzWhdcpp5~8qRiJGBkdiyc7PZHJVZEufdoMaVhfsMOoJIxmXkPCp0WUqDk2FZKoR6Qvgdd1pnQ1zsXwHJb1dw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_41_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/242/image/image.jpg?Expires=1776732225&Signature=UD8wa4jZembB0rDO7e1SGvRKZbdiktaEMGPuRxerZrt0esaos5aBQ9VdQYeOsWyO-sruVzB49s2dfn3CB~qwLDyxJUzDPrj1k9efV6nK5q0gQY4szprR9pkCmHWdHvpkINop7Z8soZLeXH0uMDWxT6bimiDrtpBVgt~Tkq4nelC8M6sQSTZRc5d7hCbISbelPWeqnQg-RGDKWuY-i7kD7VF~v-ow0Dra1EIj8e4VQ6copFqsMLmuyq5Ia~pmkR91nH5asWO0j9YS3VlKPzfEsH2JAh3fnd1Yg5nI6mtL0juNQ8aalALoF2e5xw2tBHkqbEJqTPiohyM0eDp7tYzAiw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000242.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 42,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/242/image/image.jpg?Expires=1776732225&Signature=UD8wa4jZembB0rDO7e1SGvRKZbdiktaEMGPuRxerZrt0esaos5aBQ9VdQYeOsWyO-sruVzB49s2dfn3CB~qwLDyxJUzDPrj1k9efV6nK5q0gQY4szprR9pkCmHWdHvpkINop7Z8soZLeXH0uMDWxT6bimiDrtpBVgt~Tkq4nelC8M6sQSTZRc5d7hCbISbelPWeqnQg-RGDKWuY-i7kD7VF~v-ow0Dra1EIj8e4VQ6copFqsMLmuyq5Ia~pmkR91nH5asWO0j9YS3VlKPzfEsH2JAh3fnd1Yg5nI6mtL0juNQ8aalALoF2e5xw2tBHkqbEJqTPiohyM0eDp7tYzAiw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_42_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/243/image/image.jpg?Expires=1776732225&Signature=zMFko-8ak4HizOeTp8030zYzX0DwTC~6uATDtOm4haRhN3X12X-907H91Ke19ZVb0D~QneCgIGa4TV0gSh4DDAxNtLcY8Xou5UPUxUjOHaKtaEJbZvs7nN-rIzfOJQ8SruOHIo94a3ros2assxHzLRygwFuXfHbq-~23dt6c3eSeLh~vR6gwUDo9btmV5PR8G621ihzGppDYzEPG9ukSB25Dmgi6srwiYUUcKyRaZDeDoNatXE7lz~gQvXvbk8fZUDcciij8W5MxzBBOVnkx51bR7STMZfUdjFCqgcbZN0I4DftjuzEzFXDWbrtc-7z~JFX2oP2EfqD2Gp1bWd0EJA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000243.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 43,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/243/image/image.jpg?Expires=1776732225&Signature=zMFko-8ak4HizOeTp8030zYzX0DwTC~6uATDtOm4haRhN3X12X-907H91Ke19ZVb0D~QneCgIGa4TV0gSh4DDAxNtLcY8Xou5UPUxUjOHaKtaEJbZvs7nN-rIzfOJQ8SruOHIo94a3ros2assxHzLRygwFuXfHbq-~23dt6c3eSeLh~vR6gwUDo9btmV5PR8G621ihzGppDYzEPG9ukSB25Dmgi6srwiYUUcKyRaZDeDoNatXE7lz~gQvXvbk8fZUDcciij8W5MxzBBOVnkx51bR7STMZfUdjFCqgcbZN0I4DftjuzEzFXDWbrtc-7z~JFX2oP2EfqD2Gp1bWd0EJA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_43_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/244/image/image.jpg?Expires=1776732225&Signature=FqCeEFNG8v8mCLx2~t~J05HNnTO~2veiJc9L1~cBJnYYUWvGpWGlTacGxJNayg1j97fs1fLHD8Uy5RYlZiPgcZe4KZRTh7SlHfA8aGACQzFcvDVZARd-q43ELg6eX-rQA6oeU1OZnZqBmfxfC7C0oe03rlyLKEpmJhubdyin83NaePvIF~O5OJDnn-g9OgQER62VS6bkl-HYlvMy318RWWMuCIWoMENm2oi4SU7AUXaOG0sMR3ThMDqhZ9dcJG69k2IZ2ZMP5DdVOR7ienDmhnMAfbGgQTFHAc33oJ6moIvkt-f~tzA6bhkJVP4mCqEHL6iQIIaIglpryt8QHvz4zA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000244.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 44,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/244/image/image.jpg?Expires=1776732225&Signature=FqCeEFNG8v8mCLx2~t~J05HNnTO~2veiJc9L1~cBJnYYUWvGpWGlTacGxJNayg1j97fs1fLHD8Uy5RYlZiPgcZe4KZRTh7SlHfA8aGACQzFcvDVZARd-q43ELg6eX-rQA6oeU1OZnZqBmfxfC7C0oe03rlyLKEpmJhubdyin83NaePvIF~O5OJDnn-g9OgQER62VS6bkl-HYlvMy318RWWMuCIWoMENm2oi4SU7AUXaOG0sMR3ThMDqhZ9dcJG69k2IZ2ZMP5DdVOR7ienDmhnMAfbGgQTFHAc33oJ6moIvkt-f~tzA6bhkJVP4mCqEHL6iQIIaIglpryt8QHvz4zA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_44_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/245/image/image.jpg?Expires=1776732225&Signature=ROxtFGnRUxb7jqDZFriAORz3d6FPthe7VTA-GeaXfvVw-QAjDyWQV87-nPluy56Bh51kMivlxB-Uhc0~8ybAGRQ1fh-tgcxZLM52uySw~g2-M1U~IXK2yJDn2kfgaIvioA1m4rxV8Jp3qYckVKvKVI67ESnqTKp5yyuzhcLnsm0ZOJ4K1R-a4BR4NdEiAB4rtpmJieZzOLzo3fxe5k5C2i~dfP0O6ee1w~t14HCxWXQBX-THtfdH~RgKOXvxIs4SNpt6ort47kCNzyKU-V3YxPThi0KR-fLiZnNj~DTSL9WBbKU3UB2PMoZ1HFe-HgSsGJkWhghFHDOuIutgC9CJxw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000245.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 45,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/245/image/image.jpg?Expires=1776732225&Signature=ROxtFGnRUxb7jqDZFriAORz3d6FPthe7VTA-GeaXfvVw-QAjDyWQV87-nPluy56Bh51kMivlxB-Uhc0~8ybAGRQ1fh-tgcxZLM52uySw~g2-M1U~IXK2yJDn2kfgaIvioA1m4rxV8Jp3qYckVKvKVI67ESnqTKp5yyuzhcLnsm0ZOJ4K1R-a4BR4NdEiAB4rtpmJieZzOLzo3fxe5k5C2i~dfP0O6ee1w~t14HCxWXQBX-THtfdH~RgKOXvxIs4SNpt6ort47kCNzyKU-V3YxPThi0KR-fLiZnNj~DTSL9WBbKU3UB2PMoZ1HFe-HgSsGJkWhghFHDOuIutgC9CJxw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_45_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/246/image/image.jpg?Expires=1776732225&Signature=PU3M1lhw~~QaZrmqvH1K7W0KZrXtYdHk~vgdxaAVHjk07y3OTpDqOijBtPByt988ft67CqBxc8ghWBJaFhFqEBJwV0~JJc858KQ~vDDeIbnDCX4-9eo2O73vww2Za78jrj0kuYQsDo9Kd1YdBfD3IkzG76N~vBuHwOMiNnyZsrZtbTKbHYk3Vyio4H-JYxrAqg8vWIyRCQGL9rrEzET5f3IAD4rAJkljBQl~PUWlTMR1UuihjlaVYDJip4e1DAiNfwyn5NmNcMC2eVqri8TzCzgvpKErsN0r32bSGuuYwhAUqqRKMPjVTbN-4JDTsn4mHQinJ6wsALqQ3ESnrP3lzQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000246.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 46,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/246/image/image.jpg?Expires=1776732225&Signature=PU3M1lhw~~QaZrmqvH1K7W0KZrXtYdHk~vgdxaAVHjk07y3OTpDqOijBtPByt988ft67CqBxc8ghWBJaFhFqEBJwV0~JJc858KQ~vDDeIbnDCX4-9eo2O73vww2Za78jrj0kuYQsDo9Kd1YdBfD3IkzG76N~vBuHwOMiNnyZsrZtbTKbHYk3Vyio4H-JYxrAqg8vWIyRCQGL9rrEzET5f3IAD4rAJkljBQl~PUWlTMR1UuihjlaVYDJip4e1DAiNfwyn5NmNcMC2eVqri8TzCzgvpKErsN0r32bSGuuYwhAUqqRKMPjVTbN-4JDTsn4mHQinJ6wsALqQ3ESnrP3lzQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_46_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/247/image/image.jpg?Expires=1776732225&Signature=O~cOg-8wRT4zCenu5JTSXvq~c2R41~NSjcI8DZTf4rg3r6KOlbF83gOo0UvuaKlC5g61-FAAua8yXRozuAA9XPLVRye3NjQ4kBa-nA~xwmukD7L44aZZzdZlMDoTe4Tw8lSf0dExokguFVc4kPJY64jhlrR3fhT3vJNhxmRI2xAzQu6hmeDGoLpSzrc5pNPjYJ9Xf3JjpnHEdvdhZmATJmzncnCtai524b9Ahy4SETALB62KsGGPY64VfXrD8mAcw2xrw9QI-I~Hodicdk1He~-3NObpKmF9C8jV3h8oxaHnYkdO6RZ0HRI0AeMjbFQthb5sjcLBkAckQ92naVrZAg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000247.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 47,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/247/image/image.jpg?Expires=1776732225&Signature=O~cOg-8wRT4zCenu5JTSXvq~c2R41~NSjcI8DZTf4rg3r6KOlbF83gOo0UvuaKlC5g61-FAAua8yXRozuAA9XPLVRye3NjQ4kBa-nA~xwmukD7L44aZZzdZlMDoTe4Tw8lSf0dExokguFVc4kPJY64jhlrR3fhT3vJNhxmRI2xAzQu6hmeDGoLpSzrc5pNPjYJ9Xf3JjpnHEdvdhZmATJmzncnCtai524b9Ahy4SETALB62KsGGPY64VfXrD8mAcw2xrw9QI-I~Hodicdk1He~-3NObpKmF9C8jV3h8oxaHnYkdO6RZ0HRI0AeMjbFQthb5sjcLBkAckQ92naVrZAg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_47_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/248/image/image.jpg?Expires=1776732225&Signature=vl8sjYIz2tDa2vdk1xHrwmKiUUgUZnz1jrgzjDXd2NE3vycnQLiSPtwnAhCSZi5U9Ge0Qj52UIU961z83Ofnez7ITbFuy0~R1NmQfHfMgxumwOqLqVbqBOEEe-aknCshISYIWNlSlwPc9t0UHYJKWxzgCBX~0lblwhBxJ93km3gOcQqoRK4WYltPWMHFu~DCkMeWoocivxEFxm2wcPQk0w~PPc4T7c8eDTfEFTxCcOS52oRhHiQnN2nSloUasIlwKYRf5jD5W4N6HbY7q0XBz~Rfeuk83YE249-3SwRUIWQ90RxgI8qJU5qYkPzwoLMzPUo8AI2vsJISuFPjF5frQw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000248.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 48,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/248/image/image.jpg?Expires=1776732225&Signature=vl8sjYIz2tDa2vdk1xHrwmKiUUgUZnz1jrgzjDXd2NE3vycnQLiSPtwnAhCSZi5U9Ge0Qj52UIU961z83Ofnez7ITbFuy0~R1NmQfHfMgxumwOqLqVbqBOEEe-aknCshISYIWNlSlwPc9t0UHYJKWxzgCBX~0lblwhBxJ93km3gOcQqoRK4WYltPWMHFu~DCkMeWoocivxEFxm2wcPQk0w~PPc4T7c8eDTfEFTxCcOS52oRhHiQnN2nSloUasIlwKYRf5jD5W4N6HbY7q0XBz~Rfeuk83YE249-3SwRUIWQ90RxgI8qJU5qYkPzwoLMzPUo8AI2vsJISuFPjF5frQw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_48_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/249/image/image.jpg?Expires=1776732225&Signature=U00blJu4q5R3NbTQ1fcepkzH7YURdqHIXSxnzKGFeBoTOI-fI~xCd464nrdAJt~T0Zi5a~tpnVBNTdgKZWULKs88MDx5blfbSp9fU9IRWvwWsmuMOyDKvaF8UHFVuNCYig-q7y-jGpoP38gvkWW8oHeCltxnHkPOfjT63sRBYQwyUKQT1T6aeZXrm9dyrB-NW9xMBYdXK35p1dTWLZB2DUMUHdnf4W049mLS0VgmFrjwUfxb0PjHVJQ8-U8dTDc-j~oG-T6gtOP8ajfy~PMdI927N7I31f0tPRoi4RRp1uxHvMtksF-5y7oaQzTaFduXI9AuT2qF6EzK9g3kRqEHtA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000249.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 49,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/249/image/image.jpg?Expires=1776732225&Signature=U00blJu4q5R3NbTQ1fcepkzH7YURdqHIXSxnzKGFeBoTOI-fI~xCd464nrdAJt~T0Zi5a~tpnVBNTdgKZWULKs88MDx5blfbSp9fU9IRWvwWsmuMOyDKvaF8UHFVuNCYig-q7y-jGpoP38gvkWW8oHeCltxnHkPOfjT63sRBYQwyUKQT1T6aeZXrm9dyrB-NW9xMBYdXK35p1dTWLZB2DUMUHdnf4W049mLS0VgmFrjwUfxb0PjHVJQ8-U8dTDc-j~oG-T6gtOP8ajfy~PMdI927N7I31f0tPRoi4RRp1uxHvMtksF-5y7oaQzTaFduXI9AuT2qF6EzK9g3kRqEHtA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_49_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/250/image/image.jpg?Expires=1776732225&Signature=k6BhHqsk-~8OByheJnFNnNkvfxyAIvQqb2hVo-LaA7B8jJlZP8cxZLm6IWtjuCLaTerBGhY4w38UlB1NkowyCuOYrbvHS3GQWvap85NJYCgvX0-iRJco74UZqdj-lZp4-5PihpEx~WfRcww4JjehhoVBSTUlP85OTKrg6H-qMRWBXuJhN4N2lHp4xeE1-vPlFoSbx86LftrXz~5VwtoyQqTh5M6whrenLlUZR212QrVE9EXAl0w6WAUuWCFk0FkLtPCrfMeIdiJSaKo6ZZpO2qFmD8sn~UEpqDOAeZxI2Mznrx14xsv9dlghpOJcwfJTYfazt76rzkomkggUy8n7EQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000250.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 50,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/250/image/image.jpg?Expires=1776732225&Signature=k6BhHqsk-~8OByheJnFNnNkvfxyAIvQqb2hVo-LaA7B8jJlZP8cxZLm6IWtjuCLaTerBGhY4w38UlB1NkowyCuOYrbvHS3GQWvap85NJYCgvX0-iRJco74UZqdj-lZp4-5PihpEx~WfRcww4JjehhoVBSTUlP85OTKrg6H-qMRWBXuJhN4N2lHp4xeE1-vPlFoSbx86LftrXz~5VwtoyQqTh5M6whrenLlUZR212QrVE9EXAl0w6WAUuWCFk0FkLtPCrfMeIdiJSaKo6ZZpO2qFmD8sn~UEpqDOAeZxI2Mznrx14xsv9dlghpOJcwfJTYfazt76rzkomkggUy8n7EQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_50_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/251/image/image.jpg?Expires=1776732225&Signature=ptFq2TfwxGCmYhQ2Ic-qIjCnTJ3zJ7ZsO7VNzAVIfjaWItLIx~c9QPYV-ed9F4hmbTbmbEzvOB4Qj2rMc20OWSgvXFSQ5S9ph7uxtcAo5Hq7i8LF1tf2XnnYmpQruzpOpzFXQTzndRsn18mhJFcGdvjBsKiRSUCzk0dCkIFrB~bqGMJkjNBfp49Ef7D2E8CauzKpWJPABp2MGdW8RXrHRBCiOMfFILDapHsKh3cJ9TdKjykuv4GZE4pG8VOHlGkWuZ3Qxfm9dz0OS01ImQx8WEbdUyn2xpJIrpx8vxIbzaF5v99jvfq7HB0LRXosCTf5VCqD73PgkMAwRrxpyacFAw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000251.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 51,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/251/image/image.jpg?Expires=1776732225&Signature=ptFq2TfwxGCmYhQ2Ic-qIjCnTJ3zJ7ZsO7VNzAVIfjaWItLIx~c9QPYV-ed9F4hmbTbmbEzvOB4Qj2rMc20OWSgvXFSQ5S9ph7uxtcAo5Hq7i8LF1tf2XnnYmpQruzpOpzFXQTzndRsn18mhJFcGdvjBsKiRSUCzk0dCkIFrB~bqGMJkjNBfp49Ef7D2E8CauzKpWJPABp2MGdW8RXrHRBCiOMfFILDapHsKh3cJ9TdKjykuv4GZE4pG8VOHlGkWuZ3Qxfm9dz0OS01ImQx8WEbdUyn2xpJIrpx8vxIbzaF5v99jvfq7HB0LRXosCTf5VCqD73PgkMAwRrxpyacFAw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_51_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/252/image/image.jpg?Expires=1776732225&Signature=OKgfcr73t6v3F8FVno28KLRE3jweXpEHEy1NlPILokG5iwDW2eH18JOajbANQZUM25zp-p~3ta9q2uxhZaieavmsNm-2a3ucesbdILTM1CU6xNpx~k4mezaWWauHsFcHTM217JD4CoIGSfpZ~PWuqqgW7wfmmPQCN62OR1iw3tJ2-8g9P1iSbazNBlAKYcmSpTXCNdSuLC4UbTGlPiqGzDGQOQFWOnf2tFsXzBCiVyJVtxgLQubuSi95oAmlRh1bs0CpyJz~MTBlBItyt1hwz4PUO-nfOJSmwFid0H9oBnj-OlZjVZcrSBO9hrfQ93OdVIWalxNpcnNOfbPw4SBuTw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000252.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 52,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/252/image/image.jpg?Expires=1776732225&Signature=OKgfcr73t6v3F8FVno28KLRE3jweXpEHEy1NlPILokG5iwDW2eH18JOajbANQZUM25zp-p~3ta9q2uxhZaieavmsNm-2a3ucesbdILTM1CU6xNpx~k4mezaWWauHsFcHTM217JD4CoIGSfpZ~PWuqqgW7wfmmPQCN62OR1iw3tJ2-8g9P1iSbazNBlAKYcmSpTXCNdSuLC4UbTGlPiqGzDGQOQFWOnf2tFsXzBCiVyJVtxgLQubuSi95oAmlRh1bs0CpyJz~MTBlBItyt1hwz4PUO-nfOJSmwFid0H9oBnj-OlZjVZcrSBO9hrfQ93OdVIWalxNpcnNOfbPw4SBuTw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_52_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/253/image/image.jpg?Expires=1776732225&Signature=oRRlA8Ed-AsxRZh~3SRIDii-~xYeIPdMBqXihSKhwSyVnDnNmOK-t2EvUpcf1d9O500wwOXXK2eYeOijG8URNtY63rvEpXE0WhR9XaaYQCDc7pzg64lLrawqMjgx~yBdha-eISCZTquBtimO26E2-j4kwfhRW4GaPDN5GUtTCvCMoQjMmhYTKISnuFtajAmaam02K~pZvLLSsLwlj5vwdt1uyowguJijz59n~stXItfrF6mzqtHhD9FB0Ccov3NNsFl3gAvUBACpu5h-57f0NGrS5U-scO6vjoSWYYp6bBYhMsiK379Aztl5q4plrGQV3ZLS407kW0mwYPypGREeQw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000253.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 53,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/253/image/image.jpg?Expires=1776732225&Signature=oRRlA8Ed-AsxRZh~3SRIDii-~xYeIPdMBqXihSKhwSyVnDnNmOK-t2EvUpcf1d9O500wwOXXK2eYeOijG8URNtY63rvEpXE0WhR9XaaYQCDc7pzg64lLrawqMjgx~yBdha-eISCZTquBtimO26E2-j4kwfhRW4GaPDN5GUtTCvCMoQjMmhYTKISnuFtajAmaam02K~pZvLLSsLwlj5vwdt1uyowguJijz59n~stXItfrF6mzqtHhD9FB0Ccov3NNsFl3gAvUBACpu5h-57f0NGrS5U-scO6vjoSWYYp6bBYhMsiK379Aztl5q4plrGQV3ZLS407kW0mwYPypGREeQw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_53_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/254/image/image.jpg?Expires=1776732225&Signature=g9eAVvy4wdcKM8iWgGvYeojMW5IfJpsC~MzDGGC5CkbflArgvV0lNTzVjrBR6-gjFQYo7uYvOBbDve~1nnAV1FgguFdi4~iw3VXTwpHDC4eVTLkfm1HfFnL0ILCz9RwwAx4WZFSsZNbOTcV9BKmfyzOI4j3GwfEpyOBVRMWGgbREWdHkRolhA~wN24BGYNlmLlRO6VVxnk5a3Yn12TtM7Lm8ISxb-m67TfDEAAr3UpMzkgDDnH1f0gzvcYA1aAGzR4NV79gbU0Ng~oU39Yf2zXCuTrNmSzwZVv4U-eeuWJbxUUiD3OPyX~oWjMgGvv9F-1U8601gZl4uGI1nxaDSlA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000254.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 54,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/254/image/image.jpg?Expires=1776732225&Signature=g9eAVvy4wdcKM8iWgGvYeojMW5IfJpsC~MzDGGC5CkbflArgvV0lNTzVjrBR6-gjFQYo7uYvOBbDve~1nnAV1FgguFdi4~iw3VXTwpHDC4eVTLkfm1HfFnL0ILCz9RwwAx4WZFSsZNbOTcV9BKmfyzOI4j3GwfEpyOBVRMWGgbREWdHkRolhA~wN24BGYNlmLlRO6VVxnk5a3Yn12TtM7Lm8ISxb-m67TfDEAAr3UpMzkgDDnH1f0gzvcYA1aAGzR4NV79gbU0Ng~oU39Yf2zXCuTrNmSzwZVv4U-eeuWJbxUUiD3OPyX~oWjMgGvv9F-1U8601gZl4uGI1nxaDSlA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_54_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/255/image/image.jpg?Expires=1776732225&Signature=Hd~pfsH9k28I7WUd039YP7asMLTlSxJVhRW7BVW-v8f~kfaOigwAgr3CwpESwvQ49wsXw~PxWtp1me11EWHPyYy3rp-sMI3UbBgYHzCBxOgoE6f6O33eCJb~m7Q0LbZ0Fo-8ByC6mbLycVXo3~86-NFwt1kkSHkXpmkSISy89wuZ-FpcOg~oweIxnBwYQr0lyQy5cI0oI9cs1H0CSdf13m67NWEYt4ZAzyBstEgils8gcZwYf63xv8MEQJkwFLD1sYwtaiB7yHkR3riqNLqW9kHO2HAVKd2aOelU4hL6873Yxz2V10Dyz4F9MxPN2Ab7en8YBBVFbDiPlczbcmCMwg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000255.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 55,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/255/image/image.jpg?Expires=1776732225&Signature=Hd~pfsH9k28I7WUd039YP7asMLTlSxJVhRW7BVW-v8f~kfaOigwAgr3CwpESwvQ49wsXw~PxWtp1me11EWHPyYy3rp-sMI3UbBgYHzCBxOgoE6f6O33eCJb~m7Q0LbZ0Fo-8ByC6mbLycVXo3~86-NFwt1kkSHkXpmkSISy89wuZ-FpcOg~oweIxnBwYQr0lyQy5cI0oI9cs1H0CSdf13m67NWEYt4ZAzyBstEgils8gcZwYf63xv8MEQJkwFLD1sYwtaiB7yHkR3riqNLqW9kHO2HAVKd2aOelU4hL6873Yxz2V10Dyz4F9MxPN2Ab7en8YBBVFbDiPlczbcmCMwg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_55_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/256/image/image.jpg?Expires=1776732225&Signature=QwyjchhKv2SCoQ0GcrYXBps-h6bkDkKep1ntCgwM15ta~FZf6gT9NZRR4BJ0ahbQvuM8Sit9ZODZwHuxl2ql6JgVnqNStXn1iDbjh13c16F6lCsSi9D0M8HOFs25QV2nelEuRuyX1M7u-BhVioDToOqQDRePD6GXFa3MQapAbxGwu1x2fwj5UVTKRDwzc5vPUCTptTBayFqc7dYTiA~T3OBubASRl63zgr4l~RKsxkUBF2LTKhfO2SWGzCxfMIrBPnAQhXN6BHwKlTea~CUGMM92fwlpV6vY0heps4lNhpWnpxrA~6WIeGgOhngYTUGjuy4MSP5x59ZyFD5OXDO-Og__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000256.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 56,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/256/image/image.jpg?Expires=1776732225&Signature=QwyjchhKv2SCoQ0GcrYXBps-h6bkDkKep1ntCgwM15ta~FZf6gT9NZRR4BJ0ahbQvuM8Sit9ZODZwHuxl2ql6JgVnqNStXn1iDbjh13c16F6lCsSi9D0M8HOFs25QV2nelEuRuyX1M7u-BhVioDToOqQDRePD6GXFa3MQapAbxGwu1x2fwj5UVTKRDwzc5vPUCTptTBayFqc7dYTiA~T3OBubASRl63zgr4l~RKsxkUBF2LTKhfO2SWGzCxfMIrBPnAQhXN6BHwKlTea~CUGMM92fwlpV6vY0heps4lNhpWnpxrA~6WIeGgOhngYTUGjuy4MSP5x59ZyFD5OXDO-Og__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_56_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/257/image/image.jpg?Expires=1776732225&Signature=OPUYhBdhx-evMJGKZgPyMcAq1-ifPtJu0jeZtDJZVgt7BXLFatPnDdJ~9ku4NbQHwuF4WabYdJdsSWq0UEgAfPex~3kKmSBWbpTMSAI3hsPi8oh0YxXaJGKO1AV7Haf0MzjnZmMi~lIqPe8cyLnhIKGl45Hm08lBOUj1ZhKfJEDOUjwibd4wQipmS4Yz9ZMxQqlKq-FywEkLi565StL22koLwla-MXp8KhRU2~F2QY3oO-VIkFxaiIg-0dYgt~d5LdM2KGTupqFPseoVvDfwANrMtdEkEJ~lIkYdCoJ35nsEGAuIe12RJe2pMmEr9OvFBamZfogV1tgRdQSXb-KTcg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000257.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 57,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/257/image/image.jpg?Expires=1776732225&Signature=OPUYhBdhx-evMJGKZgPyMcAq1-ifPtJu0jeZtDJZVgt7BXLFatPnDdJ~9ku4NbQHwuF4WabYdJdsSWq0UEgAfPex~3kKmSBWbpTMSAI3hsPi8oh0YxXaJGKO1AV7Haf0MzjnZmMi~lIqPe8cyLnhIKGl45Hm08lBOUj1ZhKfJEDOUjwibd4wQipmS4Yz9ZMxQqlKq-FywEkLi565StL22koLwla-MXp8KhRU2~F2QY3oO-VIkFxaiIg-0dYgt~d5LdM2KGTupqFPseoVvDfwANrMtdEkEJ~lIkYdCoJ35nsEGAuIe12RJe2pMmEr9OvFBamZfogV1tgRdQSXb-KTcg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_57_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/258/image/image.jpg?Expires=1776732225&Signature=lUBspHSyYvq2ojnoUa6kIr5tAWQ4GOochOF6LCtkiui4a-TH2u1qPpfJk84r2Kh3zSgVXXRTHkM5O4BPYr7Vyu7GkxsPuYSDUAE62W3tJAlvMLXa-7oLd5yFc4IPubyv1WuJTg27klwAlXbghS0n1zTGjP7AAdF3AxXOZVp7ZwGPxEK3-DXirOpoO5rqPc3JHmqspzLYxqAtfO90jSkA3aXKo5Ygb6CeDKNign-dtictTcEEaSpj7x5zSaZ-Jp1GmPHaIu87iZxwyU9EttccehAbzL5SP8vxsiAkLKkt~SRl~7o8yeaO9gP~5n84m41ugbkCrac3mNYjem6ZwYGSvQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000258.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 58,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/258/image/image.jpg?Expires=1776732225&Signature=lUBspHSyYvq2ojnoUa6kIr5tAWQ4GOochOF6LCtkiui4a-TH2u1qPpfJk84r2Kh3zSgVXXRTHkM5O4BPYr7Vyu7GkxsPuYSDUAE62W3tJAlvMLXa-7oLd5yFc4IPubyv1WuJTg27klwAlXbghS0n1zTGjP7AAdF3AxXOZVp7ZwGPxEK3-DXirOpoO5rqPc3JHmqspzLYxqAtfO90jSkA3aXKo5Ygb6CeDKNign-dtictTcEEaSpj7x5zSaZ-Jp1GmPHaIu87iZxwyU9EttccehAbzL5SP8vxsiAkLKkt~SRl~7o8yeaO9gP~5n84m41ugbkCrac3mNYjem6ZwYGSvQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_58_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/259/image/image.jpg?Expires=1776732225&Signature=gIX2xPifQuXiXubIx1SNDBHBY1vQgCJycZ5~RJqpdwgtaj9DcvpwSeDM7F3R7Ha1PClw1qz5f3H5eKuY4k5VKgfcTSlLialsLamgI77ErZ7EhXzvZQ~LsI8hG-X-s1Ca-UrcET3uyZtqDW7ylVQrJih59miRemRc8ZEwoO-OaXW-7hbVUx7m~BWuCHyHIYEr0UVdj0shHvbMWgqlRhicPJ0aP6ilejjETDRd6P3lrQ0yWC0pXGlfPXCzglkcPYIK7X99OQfJo6UbZGDIFrFd46Ybp2qns1qNGE3bWxjyp0w~gRIEYFQOGy7dfUTMLZoapEsnww5JrKS7pB~SRlVN3g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000259.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 59,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/259/image/image.jpg?Expires=1776732225&Signature=gIX2xPifQuXiXubIx1SNDBHBY1vQgCJycZ5~RJqpdwgtaj9DcvpwSeDM7F3R7Ha1PClw1qz5f3H5eKuY4k5VKgfcTSlLialsLamgI77ErZ7EhXzvZQ~LsI8hG-X-s1Ca-UrcET3uyZtqDW7ylVQrJih59miRemRc8ZEwoO-OaXW-7hbVUx7m~BWuCHyHIYEr0UVdj0shHvbMWgqlRhicPJ0aP6ilejjETDRd6P3lrQ0yWC0pXGlfPXCzglkcPYIK7X99OQfJo6UbZGDIFrFd46Ybp2qns1qNGE3bWxjyp0w~gRIEYFQOGy7dfUTMLZoapEsnww5JrKS7pB~SRlVN3g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_59_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/260/image/image.jpg?Expires=1776732225&Signature=aE95wqVtV4oFeoB2UzD2k8kn9zPT2YmyoVEjcw6T5dQ-YxOtaEue753JfM7xs01RDx4TylXHp9akw45ozEuOsV60Iy~h0rAncQjvNV-YHmVyhDvz7KPcO4pA4JY4qOD3BXyzKvQQdUGKAXYp-v-UCtGGEvm8HNl~PNwM64ABztK4QQeGDagUzU7tr6gxUpvuZys6bgCOVgLTTzffPWVaDP4omDnB-NL0LNQUVhVFbaAFd-bo3NDdpOREpnvXwNgRnwefSYMCpeZvumjSUGz~gIFdp9kYu0Q9efHCDQfgm5MOTb9YlWaP5T~HcSO26GMyudGsZtT-9uvBL5ThvCPNxw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000260.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 60,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/260/image/image.jpg?Expires=1776732225&Signature=aE95wqVtV4oFeoB2UzD2k8kn9zPT2YmyoVEjcw6T5dQ-YxOtaEue753JfM7xs01RDx4TylXHp9akw45ozEuOsV60Iy~h0rAncQjvNV-YHmVyhDvz7KPcO4pA4JY4qOD3BXyzKvQQdUGKAXYp-v-UCtGGEvm8HNl~PNwM64ABztK4QQeGDagUzU7tr6gxUpvuZys6bgCOVgLTTzffPWVaDP4omDnB-NL0LNQUVhVFbaAFd-bo3NDdpOREpnvXwNgRnwefSYMCpeZvumjSUGz~gIFdp9kYu0Q9efHCDQfgm5MOTb9YlWaP5T~HcSO26GMyudGsZtT-9uvBL5ThvCPNxw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_60_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/261/image/image.jpg?Expires=1776732225&Signature=auBlJRHAsHhq-4DbpWsyqZgodUgYkMLk5J-tf8x-U-BUuN1BjGMaYnYlzLXqE2wA3Npe4h42HdhCvlv7QGIAsSwTBegp3RMz1NL9LVdrsYEonLFVtFsxOfkqg8gn9lWedze0LOmFLVFIKlGco4KSPbmvZz7Tob0EHjBSZM3RYJ1ZDbNRTPSFX7gXbWnhFs8DT4eqGCINLBxeFNm4a4BCQvZ-L6lcR8bFU6zGBJ2ewk1Vt~gXelIT7eX1pr7gDhp7~reu0J8e~mZ86ruy~0b6H2g1gUXmdmk2oRCXo~LdELhal5ou9FMHNylhoW-fKPLAbeoWPrxZoYyOBwTRYyLRMA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000261.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 61,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/261/image/image.jpg?Expires=1776732225&Signature=auBlJRHAsHhq-4DbpWsyqZgodUgYkMLk5J-tf8x-U-BUuN1BjGMaYnYlzLXqE2wA3Npe4h42HdhCvlv7QGIAsSwTBegp3RMz1NL9LVdrsYEonLFVtFsxOfkqg8gn9lWedze0LOmFLVFIKlGco4KSPbmvZz7Tob0EHjBSZM3RYJ1ZDbNRTPSFX7gXbWnhFs8DT4eqGCINLBxeFNm4a4BCQvZ-L6lcR8bFU6zGBJ2ewk1Vt~gXelIT7eX1pr7gDhp7~reu0J8e~mZ86ruy~0b6H2g1gUXmdmk2oRCXo~LdELhal5ou9FMHNylhoW-fKPLAbeoWPrxZoYyOBwTRYyLRMA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_61_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/262/image/image.jpg?Expires=1776732225&Signature=PIIQ5SkSJzZQdWJ1blOvxtBPc181BsUyJAeqdog1sChz8LHIpgb7WzQrkscOVaoQ3LXI-EgQj0ojqfPS5516O3DO-3LbWBBL2vA59-E7-LPpvYpHxUqxR6rIxSvLDUYowBu2Q0CsIdx5N9i87ig4YH25jPBEKolnl3yU8kmZ~juNG9WVkhTObv9BF7RXVk1YQ6~RKeSbZudsykImWswbDtdp34g2mSvl1zwiHNSycnlG6tNKBT3wMh9g-mfdtZa9iS9ECifdYOcSZaC6ljttFHMaCOKJtkxBzOvsrtdnwMjk2-Vj6cBqjdhQwYRM5a~7HX4gJT9tnoX1KCV08eDnIw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000262.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 62,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/262/image/image.jpg?Expires=1776732225&Signature=PIIQ5SkSJzZQdWJ1blOvxtBPc181BsUyJAeqdog1sChz8LHIpgb7WzQrkscOVaoQ3LXI-EgQj0ojqfPS5516O3DO-3LbWBBL2vA59-E7-LPpvYpHxUqxR6rIxSvLDUYowBu2Q0CsIdx5N9i87ig4YH25jPBEKolnl3yU8kmZ~juNG9WVkhTObv9BF7RXVk1YQ6~RKeSbZudsykImWswbDtdp34g2mSvl1zwiHNSycnlG6tNKBT3wMh9g-mfdtZa9iS9ECifdYOcSZaC6ljttFHMaCOKJtkxBzOvsrtdnwMjk2-Vj6cBqjdhQwYRM5a~7HX4gJT9tnoX1KCV08eDnIw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_62_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/263/image/image.jpg?Expires=1776732225&Signature=ehZ7Iv~hrGoWsVIX5ySOmTCiBOzbAqF5d5B50vFLSEWGn0GZh3LxYbyApNn682X3oo7qu2ksyAtwr7zDvVBwQ8PiQqc69TT7WaUwoKS1O-h72iMbg4-0LgFfbeTgtZc7v5QfqPnSpy4adNuX3-vUvR~BuC7CKIi6-5hYVm5ep3GLIQI-jZaAvoPMv1Ca1FSKgMSNgplHed03R1dl5ygmcKOEqMwQTu32usTAcQPY~Dn1xWB6hOrrnn4zg6fFONI5qijjktLunFwDQf8lvEDn1ZOT2mm~A2qsPD65fXMNmsXQ1G7WzK2gASdzsvJGz9xdxchGqbIgOoH0x8prYQJelA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000263.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 63,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/263/image/image.jpg?Expires=1776732225&Signature=ehZ7Iv~hrGoWsVIX5ySOmTCiBOzbAqF5d5B50vFLSEWGn0GZh3LxYbyApNn682X3oo7qu2ksyAtwr7zDvVBwQ8PiQqc69TT7WaUwoKS1O-h72iMbg4-0LgFfbeTgtZc7v5QfqPnSpy4adNuX3-vUvR~BuC7CKIi6-5hYVm5ep3GLIQI-jZaAvoPMv1Ca1FSKgMSNgplHed03R1dl5ygmcKOEqMwQTu32usTAcQPY~Dn1xWB6hOrrnn4zg6fFONI5qijjktLunFwDQf8lvEDn1ZOT2mm~A2qsPD65fXMNmsXQ1G7WzK2gASdzsvJGz9xdxchGqbIgOoH0x8prYQJelA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_63_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/264/image/image.jpg?Expires=1776732225&Signature=N3p4PhMZlEpnYOS6Z0aE3hNrKyDuU5AvXX1EwWXkxKM5QA4Iz2iJulM0Rpm-4SgE3wUtm8fr5Ry3nDxKeEZhd6mCv7dBiPHmOLKmOFlOn102HZfxxpJuhKc3mtzFVWGUw9SNfvH4LPZzjicmjv3I-YnKPxv~UYy4pepRZb9Kq2kz1LLAnrIoGXxImtfCm1-c6nLn44zLD8ss-4VYgVqVBMvDEVkOybcESFXkb0CVmgwAtDkNlzRUworXWFUqoKMliH~F1oK3J2Tu706J~b-z1bSCMW-JEon4cKi7c~ud3cHsnWEPYIHRpN4~AGnKOfWpfohevwqVk~c2UnvgzTsZAA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000264.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 64,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/264/image/image.jpg?Expires=1776732225&Signature=N3p4PhMZlEpnYOS6Z0aE3hNrKyDuU5AvXX1EwWXkxKM5QA4Iz2iJulM0Rpm-4SgE3wUtm8fr5Ry3nDxKeEZhd6mCv7dBiPHmOLKmOFlOn102HZfxxpJuhKc3mtzFVWGUw9SNfvH4LPZzjicmjv3I-YnKPxv~UYy4pepRZb9Kq2kz1LLAnrIoGXxImtfCm1-c6nLn44zLD8ss-4VYgVqVBMvDEVkOybcESFXkb0CVmgwAtDkNlzRUworXWFUqoKMliH~F1oK3J2Tu706J~b-z1bSCMW-JEon4cKi7c~ud3cHsnWEPYIHRpN4~AGnKOfWpfohevwqVk~c2UnvgzTsZAA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_64_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/265/image/image.jpg?Expires=1776732225&Signature=JxXHjCNKvmHCStKSzA~xqtdEPe23-CxD6qqbg3WNUwJ4rakEwkJP6rh6XFgpQN2PfsZbUxNsXBwcyYGxhzJJ77--ZOYSn1VMqHshsDnRz5rdg46UYfkOR0dmSP8K3yJZfHKGE7AigIUoeHp0VDDZn7AYyPiCYeUoCq4puKl6MKEk~Hsm9cvRvx0DOZd5yAR7sl7I4WUl674TXZS5J2SaKTIeh0dxGZH06XBKOC7LE8FqVZ3DWOcwHCtCNZdYx7qXenxdybBya3cIpWWa9Cm5C8p4py7Pf6O02JaVR2DeqpY5nVIE0pDo4yhXnQ05D4TyLyp~dxNQV~K8tzBht4h68A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000265.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 65,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/265/image/image.jpg?Expires=1776732225&Signature=JxXHjCNKvmHCStKSzA~xqtdEPe23-CxD6qqbg3WNUwJ4rakEwkJP6rh6XFgpQN2PfsZbUxNsXBwcyYGxhzJJ77--ZOYSn1VMqHshsDnRz5rdg46UYfkOR0dmSP8K3yJZfHKGE7AigIUoeHp0VDDZn7AYyPiCYeUoCq4puKl6MKEk~Hsm9cvRvx0DOZd5yAR7sl7I4WUl674TXZS5J2SaKTIeh0dxGZH06XBKOC7LE8FqVZ3DWOcwHCtCNZdYx7qXenxdybBya3cIpWWa9Cm5C8p4py7Pf6O02JaVR2DeqpY5nVIE0pDo4yhXnQ05D4TyLyp~dxNQV~K8tzBht4h68A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_65_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/266/image/image.jpg?Expires=1776732225&Signature=cWVL0dW1mbsVrqpAHIo3Ue8vtUIVB9xqSOu4hVkF29EWRmVd3jzGWoMzKqgmgoETbLufYjAEH7RFxDg5FXKuCMu4gQB3yrNC8S~lWR7VQDqxETKTnbcwTEiRWGxP3lg9FamBCJXh9Oh~r7A5xp838VyHZhz8Qkrmv08fFQvkH3TlBbiyaXQRTmgMLjvhBUBidLSWbCkfX6d0-ikAg8X8HkLCOD62uHLGrq7CIm3MMcLKDbAoiDGPrwb-kkOxaNCDsc6CJqw6Ry1~ZQY4JFOBHuJQ1fFuCOF~HMjpfn2Rhpdz9WjdntFr5Ym9zn-bcGKGhlslrFbYJq88VvRsnv9RpA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000266.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 66,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/266/image/image.jpg?Expires=1776732225&Signature=cWVL0dW1mbsVrqpAHIo3Ue8vtUIVB9xqSOu4hVkF29EWRmVd3jzGWoMzKqgmgoETbLufYjAEH7RFxDg5FXKuCMu4gQB3yrNC8S~lWR7VQDqxETKTnbcwTEiRWGxP3lg9FamBCJXh9Oh~r7A5xp838VyHZhz8Qkrmv08fFQvkH3TlBbiyaXQRTmgMLjvhBUBidLSWbCkfX6d0-ikAg8X8HkLCOD62uHLGrq7CIm3MMcLKDbAoiDGPrwb-kkOxaNCDsc6CJqw6Ry1~ZQY4JFOBHuJQ1fFuCOF~HMjpfn2Rhpdz9WjdntFr5Ym9zn-bcGKGhlslrFbYJq88VvRsnv9RpA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_66_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/267/image/image.jpg?Expires=1776732225&Signature=lkoa~dhF7VCPcQEmeJ5k0z1bwRn6XT9Q4xmsJIqMFIn9CCFrTgN6etdM54mDCd9Xv~Qk6kfnFmxdZZyqOxblZE~pqJ2WVTVR0k8yEfuOauGEfBNiYhAJUjsyBwbyzLVOpr6HlQR0tmlM6sK1Ha7I65AaTo0dvTqgG9lKaTPw1A954KS1UoD12b~V6xruqj9soO~pTCwEwPO04FJhw2vXmUJ4y-Hx-tlAC4jQiVuydwPwy8PzJRi~Ls6Slhm3p0JoOdN0JV8pxYoKXzTcMvDEYtTBz~JcA0WueH7-HGNPLv7qn6dNBeowmTdvKZqPJW5FAo6KF5sDGbytzlXCq9bq7Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000267.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 67,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/267/image/image.jpg?Expires=1776732225&Signature=lkoa~dhF7VCPcQEmeJ5k0z1bwRn6XT9Q4xmsJIqMFIn9CCFrTgN6etdM54mDCd9Xv~Qk6kfnFmxdZZyqOxblZE~pqJ2WVTVR0k8yEfuOauGEfBNiYhAJUjsyBwbyzLVOpr6HlQR0tmlM6sK1Ha7I65AaTo0dvTqgG9lKaTPw1A954KS1UoD12b~V6xruqj9soO~pTCwEwPO04FJhw2vXmUJ4y-Hx-tlAC4jQiVuydwPwy8PzJRi~Ls6Slhm3p0JoOdN0JV8pxYoKXzTcMvDEYtTBz~JcA0WueH7-HGNPLv7qn6dNBeowmTdvKZqPJW5FAo6KF5sDGbytzlXCq9bq7Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_67_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/268/image/image.jpg?Expires=1776732225&Signature=kjPxTvvx7whduFe895yJpwn5lm8Jkvv5usFmg5ApVxiB1Xamt-YkVjPA69ttsLr1nt4DTRtsbqQimz5B5mJKg6WOBCnD8nFMOMKTzeBGRYzoRKRUBE-K7RkTPTDIJgXN84K~qofAZiw6~h-QcpDd57~HdOQQR4dex1tyRkYAhbJwuNrHtWlhMy8O3bZbsrMdtXnCMOmGHLSEH1fJD7bUOANENLB9TXfdGuCJEPYzF3cbFU5xQEPQ7PTtInjDQpJq4nQZh7n1Fq3bgPHnGSKhLQGPNcD~2u4XzfdedvqQ0AwyREJrD9MEcqduHUZcBMLmbBSHiNRK693PYiEfJb01bQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000268.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 68,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/268/image/image.jpg?Expires=1776732225&Signature=kjPxTvvx7whduFe895yJpwn5lm8Jkvv5usFmg5ApVxiB1Xamt-YkVjPA69ttsLr1nt4DTRtsbqQimz5B5mJKg6WOBCnD8nFMOMKTzeBGRYzoRKRUBE-K7RkTPTDIJgXN84K~qofAZiw6~h-QcpDd57~HdOQQR4dex1tyRkYAhbJwuNrHtWlhMy8O3bZbsrMdtXnCMOmGHLSEH1fJD7bUOANENLB9TXfdGuCJEPYzF3cbFU5xQEPQ7PTtInjDQpJq4nQZh7n1Fq3bgPHnGSKhLQGPNcD~2u4XzfdedvqQ0AwyREJrD9MEcqduHUZcBMLmbBSHiNRK693PYiEfJb01bQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_68_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/269/image/image.jpg?Expires=1776732225&Signature=imNJKmDw8ZAAtddRWXUechiUeZijcPQyyyh-p6Z3jhW8n1PSFqadOcwFAp9Z7eKtRzriNNUbkJ2WnCKJ9KDXvNg2C3rNu5NhyiyNU2UEOjGGdPjGpD1rmDT-yr4s3lG-06tXuiZuoqAr8yFrq4KvKbqAQNjB-lYnn~n7oTvumf9kN0ANNA7KEIuq4sicF4UzUqQdygVAMy7QrCN8qdYEum7Lqs-f2TrN1sJ~b0p7zgk6Ggo-apQ79bU0kh~dlDO4ov7Zo~~Cmboj~G7v0-8VdwFODocbRKESMjlyovJFnTfD5PDq-RfDl3B4J0V3nXudh7Ech-quGdss0ASPeEdKTQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000269.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 69,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/269/image/image.jpg?Expires=1776732225&Signature=imNJKmDw8ZAAtddRWXUechiUeZijcPQyyyh-p6Z3jhW8n1PSFqadOcwFAp9Z7eKtRzriNNUbkJ2WnCKJ9KDXvNg2C3rNu5NhyiyNU2UEOjGGdPjGpD1rmDT-yr4s3lG-06tXuiZuoqAr8yFrq4KvKbqAQNjB-lYnn~n7oTvumf9kN0ANNA7KEIuq4sicF4UzUqQdygVAMy7QrCN8qdYEum7Lqs-f2TrN1sJ~b0p7zgk6Ggo-apQ79bU0kh~dlDO4ov7Zo~~Cmboj~G7v0-8VdwFODocbRKESMjlyovJFnTfD5PDq-RfDl3B4J0V3nXudh7Ech-quGdss0ASPeEdKTQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_69_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/270/image/image.jpg?Expires=1776732225&Signature=ID69NSAFUkbJD0pkvHEXBbFsEoeE4azEzBY~GWFl-RO34zClRIOusW3VppTUOh5BwzULdCZMVMdPnTvr2CssV4vswGoY00CWYfAE1Ag77y9d75pirWPQeHue2l4zJvZ9TErpRxoUwEQKMMyN78tPn9iN4mf4U59RjoJhBsP0k14XvdAiJGbUHI~EPCBUakTGGLIcazXsD~oP3-YVUYG01kG93oXPDX9zUbETpaHQe8WK1y6QjBtjQ-pC3lyx7OAVuLX~bK~gpIL-K~O~fsESFYVDrB3FbKpuRLlqSDiOAOMb8KM4kr4c7IeewEuZf8KCHptAx4FzWnCQ~JT0gm9nwg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000270.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 70,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/270/image/image.jpg?Expires=1776732225&Signature=ID69NSAFUkbJD0pkvHEXBbFsEoeE4azEzBY~GWFl-RO34zClRIOusW3VppTUOh5BwzULdCZMVMdPnTvr2CssV4vswGoY00CWYfAE1Ag77y9d75pirWPQeHue2l4zJvZ9TErpRxoUwEQKMMyN78tPn9iN4mf4U59RjoJhBsP0k14XvdAiJGbUHI~EPCBUakTGGLIcazXsD~oP3-YVUYG01kG93oXPDX9zUbETpaHQe8WK1y6QjBtjQ-pC3lyx7OAVuLX~bK~gpIL-K~O~fsESFYVDrB3FbKpuRLlqSDiOAOMb8KM4kr4c7IeewEuZf8KCHptAx4FzWnCQ~JT0gm9nwg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_70_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/271/image/image.jpg?Expires=1776732225&Signature=G4MqktvfTdeaFKbExAjXrlBVtRUyAbBMoKIHzS84BBo8NGA6IrUusl0oRJIGzUn0ARXYpZpsfzbX0PIgjdhKBTb3vytye7kOXXRSZc3ICkgDFLqMc~W6C7KVsREFPVNs9X-gOS-2Ma1gngrB9Lzb230j934ZLQonokAoESPKlaKhQ9fHurdTCWkph3o1onhXgQO31BNd8NHTRUZUEpThHCRFq61mxjZV9PMZxRCsPcObfvbWVCIQL2PB~7pdmSoxsnQHYJHifYGE97ynNmml32fOSXoU5VswW7M5B~12K1qBPhuoeiUWJUvrAmO2ecc-Bb-IMaxSXdNoPXxYsLTRJg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000271.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 71,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/271/image/image.jpg?Expires=1776732225&Signature=G4MqktvfTdeaFKbExAjXrlBVtRUyAbBMoKIHzS84BBo8NGA6IrUusl0oRJIGzUn0ARXYpZpsfzbX0PIgjdhKBTb3vytye7kOXXRSZc3ICkgDFLqMc~W6C7KVsREFPVNs9X-gOS-2Ma1gngrB9Lzb230j934ZLQonokAoESPKlaKhQ9fHurdTCWkph3o1onhXgQO31BNd8NHTRUZUEpThHCRFq61mxjZV9PMZxRCsPcObfvbWVCIQL2PB~7pdmSoxsnQHYJHifYGE97ynNmml32fOSXoU5VswW7M5B~12K1qBPhuoeiUWJUvrAmO2ecc-Bb-IMaxSXdNoPXxYsLTRJg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_71_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/272/image/image.jpg?Expires=1776732225&Signature=XwXBKj6lqQPFYRvy1c4N7AJFZ8wcA3psYsqNDInerQ9jwmUd5V0TD~N8KYfTr7bQMdcAlqaftM6LbYgiC1Gwee~UiBN1afxwM8aq5-HXUD2C-5PhSK21Er7DEH36hMPqfQtrjBY6BDtFxgwkNl-AtNyHCcC2t8ga3of6N-0YUkEqCADMArX08Xz6ukT~yHVyVeO4hiLqTZKJ0YaBepguVAowDdytl8Q~3paN8E7ujVMBv8W5HeVz2UfEQjTLZ8JKkPaY19DBxLdORb5mI1ei~6Y4IkzQmw1bzkqwGBQVy2nscNvpinWq9FogRWYLkglYB-kSQQvPjJE4L9rDouxeyw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000272.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 72,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/272/image/image.jpg?Expires=1776732225&Signature=XwXBKj6lqQPFYRvy1c4N7AJFZ8wcA3psYsqNDInerQ9jwmUd5V0TD~N8KYfTr7bQMdcAlqaftM6LbYgiC1Gwee~UiBN1afxwM8aq5-HXUD2C-5PhSK21Er7DEH36hMPqfQtrjBY6BDtFxgwkNl-AtNyHCcC2t8ga3of6N-0YUkEqCADMArX08Xz6ukT~yHVyVeO4hiLqTZKJ0YaBepguVAowDdytl8Q~3paN8E7ujVMBv8W5HeVz2UfEQjTLZ8JKkPaY19DBxLdORb5mI1ei~6Y4IkzQmw1bzkqwGBQVy2nscNvpinWq9FogRWYLkglYB-kSQQvPjJE4L9rDouxeyw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_72_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/273/image/image.jpg?Expires=1776732225&Signature=0YUgE2AWPtdajnIjE7nbBMsCOm7i74dcY-NDd786yvZTKxdsAJ3Mcl~T7JfyXGf5ZfsF8Z0O3Z-Br1TVHVILgVDz9sR9yzIWOKSid8bj5PLZlUP0-RyOdGPqxVFgAHJ2ZrmMBMEKVqLkncE9XAlldQEmVhryAROEXTgrSg9khG35mbt8ZNXw~VUgVm6TTmbJa0~EbQ6sM-bHjkMIiGJg2ylaM7Er5Ir63YmOoLG47tbYZ3g0R1UlJX6XjWFvtFDQTiH6MUCF9iPikjsEXio~9LSmJ~R3d42UJ8tf7~VEBKWCfOwxVJts~dKXXVE~jGAm4vaL-eOg1uuG7VkbbFpWzw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000273.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 73,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/273/image/image.jpg?Expires=1776732225&Signature=0YUgE2AWPtdajnIjE7nbBMsCOm7i74dcY-NDd786yvZTKxdsAJ3Mcl~T7JfyXGf5ZfsF8Z0O3Z-Br1TVHVILgVDz9sR9yzIWOKSid8bj5PLZlUP0-RyOdGPqxVFgAHJ2ZrmMBMEKVqLkncE9XAlldQEmVhryAROEXTgrSg9khG35mbt8ZNXw~VUgVm6TTmbJa0~EbQ6sM-bHjkMIiGJg2ylaM7Er5Ir63YmOoLG47tbYZ3g0R1UlJX6XjWFvtFDQTiH6MUCF9iPikjsEXio~9LSmJ~R3d42UJ8tf7~VEBKWCfOwxVJts~dKXXVE~jGAm4vaL-eOg1uuG7VkbbFpWzw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_73_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/274/image/image.jpg?Expires=1776732225&Signature=YaXNvaqjwJIMX3z6h6HuisjauAP0Ayg~y7TDgp1OWqU-jtVPtyCCIq8~KiWML7FK6D~8ST0uNtXkY5SWsJ3r444ts~gpkK3XPeO66cjBL50W76zWZdjXnL-gGwkkA8XV7fSiTz5bVN5jeZwFhZNVoaMSzyZ1QnuZbpkl0-O3AC8OJFIxfzyJfQwCl319sF3LuucLCjK0e0xjIeppNSscM-VFby4bIdToGPv~4Nve3YovdMu1ftv0RhFx~K~HJvgrziTAJVADN0HhwYol2Yfzyy6~U~3vT0DgLqA~8t-68PL9i20m1ImcXr3aQHMUjUNDZ3Vami6Icmn~kSRakBhR-g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000274.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 74,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/274/image/image.jpg?Expires=1776732225&Signature=YaXNvaqjwJIMX3z6h6HuisjauAP0Ayg~y7TDgp1OWqU-jtVPtyCCIq8~KiWML7FK6D~8ST0uNtXkY5SWsJ3r444ts~gpkK3XPeO66cjBL50W76zWZdjXnL-gGwkkA8XV7fSiTz5bVN5jeZwFhZNVoaMSzyZ1QnuZbpkl0-O3AC8OJFIxfzyJfQwCl319sF3LuucLCjK0e0xjIeppNSscM-VFby4bIdToGPv~4Nve3YovdMu1ftv0RhFx~K~HJvgrziTAJVADN0HhwYol2Yfzyy6~U~3vT0DgLqA~8t-68PL9i20m1ImcXr3aQHMUjUNDZ3Vami6Icmn~kSRakBhR-g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_74_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/275/image/image.jpg?Expires=1776732225&Signature=h4QKfFbYihYXpUMN0gMj9HFp2OvlZNs6siVdH2ZkzcNCNGnFyCxpp7JZpCiKSh1UmGzgRoRLmIjupVrL2-2Cin2Q-Hhh1h4bza~SyNC2efKK5d5bxvntMWmAHyK5Xonpl70bATznqZGYkq0q12btUujcNwPdjn2~MLTa4d~qCwWGOJOdQJo4FLF9sI~xgfuAsVw~QHANgSePJXkufY21gMeV716a9~7ex0fWVoODY1kizmbB8qdbVR~WqOa~d6lOGgDchoKKw41fZxGLjb95SZe3viCpzU6daXOSN8QrZpj4IBmttele7e1F1Im~tBoVf50lw8nvwXJ6U~MKVn246Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000275.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 75,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/275/image/image.jpg?Expires=1776732225&Signature=h4QKfFbYihYXpUMN0gMj9HFp2OvlZNs6siVdH2ZkzcNCNGnFyCxpp7JZpCiKSh1UmGzgRoRLmIjupVrL2-2Cin2Q-Hhh1h4bza~SyNC2efKK5d5bxvntMWmAHyK5Xonpl70bATznqZGYkq0q12btUujcNwPdjn2~MLTa4d~qCwWGOJOdQJo4FLF9sI~xgfuAsVw~QHANgSePJXkufY21gMeV716a9~7ex0fWVoODY1kizmbB8qdbVR~WqOa~d6lOGgDchoKKw41fZxGLjb95SZe3viCpzU6daXOSN8QrZpj4IBmttele7e1F1Im~tBoVf50lw8nvwXJ6U~MKVn246Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_75_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/276/image/image.jpg?Expires=1776732225&Signature=07L38L-aLYYBhvTF6ecRHj47Wq6UFYRzZOFCBcaScl84qC61JpNa8-GaGffaqJbX4mA4sIckADfDkD8dFtFGSKzrDkcOOcw~QLGx5qT9W2sCaAIeAC1pRTYy6~IJsPESapdDf53pzvm~NtsqYUm0iFmuJgQT6EXzL4D~oLT1K8GRuupxNviIPRnVKqMIsx5X-Q2ygofrAKAvZ8UD7qwGYepTRyJ3LBDATpVaOjYMKN10~qbk6Za6khh-1ywVQUY9KZV2NZpVrH26JC0AitaNiKb2G~zvgGDLnD0xlRjFz3HKBmWQQ1M3hsH~XyQFmBzwm7izICzf3PAmDqouURCvAQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000276.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 76,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/276/image/image.jpg?Expires=1776732225&Signature=07L38L-aLYYBhvTF6ecRHj47Wq6UFYRzZOFCBcaScl84qC61JpNa8-GaGffaqJbX4mA4sIckADfDkD8dFtFGSKzrDkcOOcw~QLGx5qT9W2sCaAIeAC1pRTYy6~IJsPESapdDf53pzvm~NtsqYUm0iFmuJgQT6EXzL4D~oLT1K8GRuupxNviIPRnVKqMIsx5X-Q2ygofrAKAvZ8UD7qwGYepTRyJ3LBDATpVaOjYMKN10~qbk6Za6khh-1ywVQUY9KZV2NZpVrH26JC0AitaNiKb2G~zvgGDLnD0xlRjFz3HKBmWQQ1M3hsH~XyQFmBzwm7izICzf3PAmDqouURCvAQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_76_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/277/image/image.jpg?Expires=1776732225&Signature=H6MIJoJ2CrsPhHCiF3BF5W8bPEy3XmTSLWzYp6NArh0liIJBTuyU7FLuB-vXoqkpTbf5SOaGg1AYjcvdOe~e1j96n2cQ8WkAzuKDMU8XN1b~se~UNxgFcxws~0SGsjdeqv7d02iLoKhCHxOLYH~7mdIHDW-WRauMPxvSZUyDpUcBYBQN09ktzNg9MTfUXIUNZEaX4CR8ri2lbcJXLDOMPOVqQe7SMggxXnub-4jol9iK78jP-Z5EcvT-iF2WrZoWmzfqgVyziuLZ677QH-mDbyKIDaTvruoDPCM-vunQdr8O18syrj--Nom1lf5dUDIlSOjSbxASCP6AdE8EsT-M0w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000277.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 77,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/277/image/image.jpg?Expires=1776732225&Signature=H6MIJoJ2CrsPhHCiF3BF5W8bPEy3XmTSLWzYp6NArh0liIJBTuyU7FLuB-vXoqkpTbf5SOaGg1AYjcvdOe~e1j96n2cQ8WkAzuKDMU8XN1b~se~UNxgFcxws~0SGsjdeqv7d02iLoKhCHxOLYH~7mdIHDW-WRauMPxvSZUyDpUcBYBQN09ktzNg9MTfUXIUNZEaX4CR8ri2lbcJXLDOMPOVqQe7SMggxXnub-4jol9iK78jP-Z5EcvT-iF2WrZoWmzfqgVyziuLZ677QH-mDbyKIDaTvruoDPCM-vunQdr8O18syrj--Nom1lf5dUDIlSOjSbxASCP6AdE8EsT-M0w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_77_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/278/image/image.jpg?Expires=1776732225&Signature=YTd-mG4HZYMrrHUSwl1VCo7EFX94MImOVuVd-4b0G3qSQeKJblAe6Bt0UCZoAj73Q7f9Dk7K3knW3o6PxWWlHm3mDZjAlpm4qgjvmGwhSHhvecooKehUeFmsSSBYULsUxazaHyt2q7yK~lJxQtHvruBUeF5rgNDTuN~PYUCIyDmLz9fHhHSb-Gk8aGbjum5GAfUnRa~h6H9FM9L6WrMH25mTgu6p~ldIxdex7jSevBILzQuYzIrgKmuIbvQGCGWz6zjh7QjUbkye9CDlx8yYFShyEsJ7GgFUm8eV2Oa9SOilvNecj6ZN1N8iDu58OlS8U3bbeNp1AYIG1W~VLohbdg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000278.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 78,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/278/image/image.jpg?Expires=1776732225&Signature=YTd-mG4HZYMrrHUSwl1VCo7EFX94MImOVuVd-4b0G3qSQeKJblAe6Bt0UCZoAj73Q7f9Dk7K3knW3o6PxWWlHm3mDZjAlpm4qgjvmGwhSHhvecooKehUeFmsSSBYULsUxazaHyt2q7yK~lJxQtHvruBUeF5rgNDTuN~PYUCIyDmLz9fHhHSb-Gk8aGbjum5GAfUnRa~h6H9FM9L6WrMH25mTgu6p~ldIxdex7jSevBILzQuYzIrgKmuIbvQGCGWz6zjh7QjUbkye9CDlx8yYFShyEsJ7GgFUm8eV2Oa9SOilvNecj6ZN1N8iDu58OlS8U3bbeNp1AYIG1W~VLohbdg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_78_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/279/image/image.jpg?Expires=1776732225&Signature=MkwugQuSkgiEmBJwy3BoKDDpaZ1iVVhJkYCeaAZ1muQ~3jOalips0pGrc09xR1MN~zIvBFZMZWvYfwO58E2hDot7j8JbL~Ji9feEcz0-Axo-FOix2UmDeE6AMucC-1RoJNpyhZeaeBcyM8zSEkysSZX5xOezvGExtnnsXyLYog-G6tlDeX6g~zHRMoZR3l4hC9J5xcOl1ag3lVd-uhVEJ8D~J20N-FXNPt6YWTbOEAwMHgJkZW9lFzOo~w2ShBdowHKaoV3ZeokfHPM6NOx0KKlHsqaR-DlvgGw5Y8UxVSOTyVY-6AVl8IDf342-Jgb-D2Z89JL0-F2LHWEoEmqOtg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000279.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 79,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/279/image/image.jpg?Expires=1776732225&Signature=MkwugQuSkgiEmBJwy3BoKDDpaZ1iVVhJkYCeaAZ1muQ~3jOalips0pGrc09xR1MN~zIvBFZMZWvYfwO58E2hDot7j8JbL~Ji9feEcz0-Axo-FOix2UmDeE6AMucC-1RoJNpyhZeaeBcyM8zSEkysSZX5xOezvGExtnnsXyLYog-G6tlDeX6g~zHRMoZR3l4hC9J5xcOl1ag3lVd-uhVEJ8D~J20N-FXNPt6YWTbOEAwMHgJkZW9lFzOo~w2ShBdowHKaoV3ZeokfHPM6NOx0KKlHsqaR-DlvgGw5Y8UxVSOTyVY-6AVl8IDf342-Jgb-D2Z89JL0-F2LHWEoEmqOtg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_79_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/280/image/image.jpg?Expires=1776732225&Signature=2y5i-XUhVFFW2goANviJCBcizWdELGoSxTUtmv8hj41vIZDtvDfvWvgC3Bs4RDRpw~I3eiJxXRkKCS4BRVpKQHV4yFylaoQRP7wTuSBnTHZ7vwVWS5XQfN0T2KTwG1FYVW5KNBItEwxSs2kBVLNXIKwcrklVuFZqmiLQ~Fs3kb5d3Yi2b8qD8282OkgMKMlI6f4JMnUkz-wVlpWE58FhraJTJIBSDz4k~lQSQQl8Z4dR13g2e7~whYLsU4mj9XDcXBbQdc8ZWXiF5ACGW4Hg91dDGreJtDspPFdqAQjNwPftBmgrlXZk7HJffce7nJZn0XtPElRcM~9Khq-9-3RNww__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000280.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 80,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/280/image/image.jpg?Expires=1776732225&Signature=2y5i-XUhVFFW2goANviJCBcizWdELGoSxTUtmv8hj41vIZDtvDfvWvgC3Bs4RDRpw~I3eiJxXRkKCS4BRVpKQHV4yFylaoQRP7wTuSBnTHZ7vwVWS5XQfN0T2KTwG1FYVW5KNBItEwxSs2kBVLNXIKwcrklVuFZqmiLQ~Fs3kb5d3Yi2b8qD8282OkgMKMlI6f4JMnUkz-wVlpWE58FhraJTJIBSDz4k~lQSQQl8Z4dR13g2e7~whYLsU4mj9XDcXBbQdc8ZWXiF5ACGW4Hg91dDGreJtDspPFdqAQjNwPftBmgrlXZk7HJffce7nJZn0XtPElRcM~9Khq-9-3RNww__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_80_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/281/image/image.jpg?Expires=1776732225&Signature=FDNEyVTamvTlcV6zlFvyVC1sZU-S3YTqitGyd18J14zZxCdyXNZxqfNgpQVXMa01dyMcGpmHmlb6DdFunXbQ5ujn6Mxczd4pK~EfB0uLwsGjNA9vv8f1PbDCI4ECX4NvhLvw53isxgXYnJJQp960idjIfqkm6B7a3SnDYdlcVq1D~qVmCZpHB3EcGDIzfy~Dzya9oYWkdcs0l~BVfyTD6ZOvC0xNyEROFNt2RRIni8xCCGKtKhe6dDQdGGszd4cwPcYEQz5zrv2IIaeOp4trRzC1sGRVQ5jqKYmuwRHXKuMLZa1VzBuMkUCPBXl1vUGz3G~nHiF9hYulTg7P6bFAPw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000281.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 81,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/281/image/image.jpg?Expires=1776732225&Signature=FDNEyVTamvTlcV6zlFvyVC1sZU-S3YTqitGyd18J14zZxCdyXNZxqfNgpQVXMa01dyMcGpmHmlb6DdFunXbQ5ujn6Mxczd4pK~EfB0uLwsGjNA9vv8f1PbDCI4ECX4NvhLvw53isxgXYnJJQp960idjIfqkm6B7a3SnDYdlcVq1D~qVmCZpHB3EcGDIzfy~Dzya9oYWkdcs0l~BVfyTD6ZOvC0xNyEROFNt2RRIni8xCCGKtKhe6dDQdGGszd4cwPcYEQz5zrv2IIaeOp4trRzC1sGRVQ5jqKYmuwRHXKuMLZa1VzBuMkUCPBXl1vUGz3G~nHiF9hYulTg7P6bFAPw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_81_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/282/image/image.jpg?Expires=1776732225&Signature=LsteQF9jBmr4pvUs6ZzeHsl5ayVdsDk-QRuTy3ov7LcX5xQRPla1VNO0TnWuj2RwuWfUW1umlW-d29RTCYBifXJ5rntdk3V~l3fuyhpiv44wwYCTzJ-01ipk1u9VYHFzMtVw2YAmYskitmRFZdYIm-c67P2cDGWjzJP6jmP91pg8P4Mn9WiYfb76UQvZQBPH9p5P72ICf54cC7aiV~p9KHNTpyXMQzAPpRSn2xMzhRAnZKv7qQsCfpmdOEvF062rkz7kUuyyCbSAGIBrpS9Zg48PuL-sy5TSzbk2tP-tWTkRMIepNIir3hr50kNcwalFpVvRViNR0Ni~jLcylcg7jw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000282.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 82,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/282/image/image.jpg?Expires=1776732225&Signature=LsteQF9jBmr4pvUs6ZzeHsl5ayVdsDk-QRuTy3ov7LcX5xQRPla1VNO0TnWuj2RwuWfUW1umlW-d29RTCYBifXJ5rntdk3V~l3fuyhpiv44wwYCTzJ-01ipk1u9VYHFzMtVw2YAmYskitmRFZdYIm-c67P2cDGWjzJP6jmP91pg8P4Mn9WiYfb76UQvZQBPH9p5P72ICf54cC7aiV~p9KHNTpyXMQzAPpRSn2xMzhRAnZKv7qQsCfpmdOEvF062rkz7kUuyyCbSAGIBrpS9Zg48PuL-sy5TSzbk2tP-tWTkRMIepNIir3hr50kNcwalFpVvRViNR0Ni~jLcylcg7jw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_82_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/283/image/image.jpg?Expires=1776732225&Signature=bfcsmm9d7JYmN4qnbK5fhfNs5fx6xvaoMqFnH-phNcXVOSIVZP362LGQ4fVZyI8CkNGZzs15Pc0EUfDgZEVKHzmzyO5g5HRKGjL23EDPTyjHPGFwISZnEDAXAs3HdMMGgqUVKyk-IqYYbrcUlU65Kjvjr4rJOFXOtgJ40pL8ECnGVvUtSSF8WmeqFHooWYS-xfF-o5rFBurtbH2sNqE7wlIWWD~g2GpWwFVd-OJEQ8VGP0IVPOQXGOxnoPajmMHlUWrSrEOjicqSncNOKtBTe92qEp5adGgitdWFwIcJrH97UJbluVbu6URFuu9cskfAIWpNfS1Gt3I6mTqYv5MGFw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000283.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 83,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/283/image/image.jpg?Expires=1776732225&Signature=bfcsmm9d7JYmN4qnbK5fhfNs5fx6xvaoMqFnH-phNcXVOSIVZP362LGQ4fVZyI8CkNGZzs15Pc0EUfDgZEVKHzmzyO5g5HRKGjL23EDPTyjHPGFwISZnEDAXAs3HdMMGgqUVKyk-IqYYbrcUlU65Kjvjr4rJOFXOtgJ40pL8ECnGVvUtSSF8WmeqFHooWYS-xfF-o5rFBurtbH2sNqE7wlIWWD~g2GpWwFVd-OJEQ8VGP0IVPOQXGOxnoPajmMHlUWrSrEOjicqSncNOKtBTe92qEp5adGgitdWFwIcJrH97UJbluVbu6URFuu9cskfAIWpNfS1Gt3I6mTqYv5MGFw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_83_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/284/image/image.jpg?Expires=1776732225&Signature=nQOvNUY9lrn10WY8ujcz62zbFZ48KdX2f3fXa8aMFrl2C-Z0Uqu47JUFAro6RV3urD6AJ6mlELEIDGhcToP-1QnqdvztBude1nBKimvdhO9clAQZYsDcLuGwBT~cCRCQRWW63OC6AXjoBmtddF~FlH1ymXViPczwqMuzyqV6qCtRzViO9tvVc5hNHwF6H78VoqwbthtcIT9zDrojkL11X~cANT2JcmSP4dmsQp-yU8aDjjT60HyrLGfj6oJOnPG6naZvsuiBr5WpiZ7xBJ~F1at7d-XSYA3gy7SbgqxkMtyvOi3st-oSxvTkEIJkGf9~d191XWc5kSHF8jtJ64R5ww__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000284.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 84,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/284/image/image.jpg?Expires=1776732225&Signature=nQOvNUY9lrn10WY8ujcz62zbFZ48KdX2f3fXa8aMFrl2C-Z0Uqu47JUFAro6RV3urD6AJ6mlELEIDGhcToP-1QnqdvztBude1nBKimvdhO9clAQZYsDcLuGwBT~cCRCQRWW63OC6AXjoBmtddF~FlH1ymXViPczwqMuzyqV6qCtRzViO9tvVc5hNHwF6H78VoqwbthtcIT9zDrojkL11X~cANT2JcmSP4dmsQp-yU8aDjjT60HyrLGfj6oJOnPG6naZvsuiBr5WpiZ7xBJ~F1at7d-XSYA3gy7SbgqxkMtyvOi3st-oSxvTkEIJkGf9~d191XWc5kSHF8jtJ64R5ww__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_84_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/285/image/image.jpg?Expires=1776732225&Signature=fdzZdDQwwvPk3eY-HjMGCxxXiENby2GNPgGSekRQ6pnkwuz0doFiB9QtyMbVIAsOm9sgJckERstXFjVcVdFJ17MVM1qjQf5LTelkVDWwy3Qh8MrwyQ~aLkOBoR7XAkG8OEPyYYOj3BRBfBXBF34LuhX9snY0fHXK~KvQnY4ri1iVlV5IcRK01Q3X7p8ALRxufVbJbEx69kmTBTtnyyUhK8zK-nh~GuF9Cck49hcxtUoTtMrTMgqgk3HIcd6PXzbNHhwI1yiJ8d7HC6ii9FDvr~jS0NxQ6YnhMiM1gk3JRL7P9lDu1vJ47ISd7B6UzbXLjyWyfcm~gCC-d9qEKuw7VA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000285.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 85,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/285/image/image.jpg?Expires=1776732225&Signature=fdzZdDQwwvPk3eY-HjMGCxxXiENby2GNPgGSekRQ6pnkwuz0doFiB9QtyMbVIAsOm9sgJckERstXFjVcVdFJ17MVM1qjQf5LTelkVDWwy3Qh8MrwyQ~aLkOBoR7XAkG8OEPyYYOj3BRBfBXBF34LuhX9snY0fHXK~KvQnY4ri1iVlV5IcRK01Q3X7p8ALRxufVbJbEx69kmTBTtnyyUhK8zK-nh~GuF9Cck49hcxtUoTtMrTMgqgk3HIcd6PXzbNHhwI1yiJ8d7HC6ii9FDvr~jS0NxQ6YnhMiM1gk3JRL7P9lDu1vJ47ISd7B6UzbXLjyWyfcm~gCC-d9qEKuw7VA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_85_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/286/image/image.jpg?Expires=1776732225&Signature=KFMCzh1AO2gufR0g5ckRNTR21MusPpWTZJtXvl2RrD5DD8qGn9bKvqaE4zLu6PtzWUp8z~8XRaDNczlU28cyobT91VUwY9uNggPfkeND5Zd5v-I~I3oDLEmM0DJM3CixlUpXZVjcuANvLZMJXcxWM6MRbnC7ewip8kREn3eTU0ODrTdq27BxJSqgwB10190a0wnIH-MLZwxutOyeiCRgqWjmvZJq1GPp19Asg6w5nC9ZIGA~HBzvbouDyE9evbwutf6LUd5xmhDvbZ4WAqjboVLYkkzxKbdEf3KvUpWogXDjpcMwrrqU0Bf3FzrcrG2AQ7DP1MFsGKiKk3no0H9zAA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000286.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 86,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/286/image/image.jpg?Expires=1776732225&Signature=KFMCzh1AO2gufR0g5ckRNTR21MusPpWTZJtXvl2RrD5DD8qGn9bKvqaE4zLu6PtzWUp8z~8XRaDNczlU28cyobT91VUwY9uNggPfkeND5Zd5v-I~I3oDLEmM0DJM3CixlUpXZVjcuANvLZMJXcxWM6MRbnC7ewip8kREn3eTU0ODrTdq27BxJSqgwB10190a0wnIH-MLZwxutOyeiCRgqWjmvZJq1GPp19Asg6w5nC9ZIGA~HBzvbouDyE9evbwutf6LUd5xmhDvbZ4WAqjboVLYkkzxKbdEf3KvUpWogXDjpcMwrrqU0Bf3FzrcrG2AQ7DP1MFsGKiKk3no0H9zAA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_86_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/287/image/image.jpg?Expires=1776732225&Signature=f3XU5afZN76Up3QsmKAUcLZqG0aoeYwt8n9Zy5KspZjv2Q~AqjpvQQiuO1tE4lat5VJxoQbsBpxvo2YJ6VRykZqMA6yTgw7rU4AIQSVwGpmaB9df34h2mGy3cApg~S8LDHwysZdD2uJ50ks9l509R6Y2eTXE8xITmLJNe7jMdJrXtWit1CshHy8eCMypKSu0h8EtpRvZkMIVHiTy74SMmAUTcjYmtzUMV2LLhN5BlKivBaZPujuZQLzLbWR2X1Ie80T8TU0utiEGZjlrFPnjEtYpeUo~-Vr9iMx2324hI3lVvW8b4ufqKIGf6DC2EGyphO8k34BNodbTv9uJMjI2jQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000287.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 87,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/287/image/image.jpg?Expires=1776732225&Signature=f3XU5afZN76Up3QsmKAUcLZqG0aoeYwt8n9Zy5KspZjv2Q~AqjpvQQiuO1tE4lat5VJxoQbsBpxvo2YJ6VRykZqMA6yTgw7rU4AIQSVwGpmaB9df34h2mGy3cApg~S8LDHwysZdD2uJ50ks9l509R6Y2eTXE8xITmLJNe7jMdJrXtWit1CshHy8eCMypKSu0h8EtpRvZkMIVHiTy74SMmAUTcjYmtzUMV2LLhN5BlKivBaZPujuZQLzLbWR2X1Ie80T8TU0utiEGZjlrFPnjEtYpeUo~-Vr9iMx2324hI3lVvW8b4ufqKIGf6DC2EGyphO8k34BNodbTv9uJMjI2jQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_87_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/288/image/image.jpg?Expires=1776732225&Signature=R2ifYJxlxefBokHa0lXnwjEfuxNmJ5V4UfylJCEfVbZJJtBve3E7tHFIEBI8uiXOF3-fYjaa4LrmbydjlC1mvlehn-lM3nH7ipa2SDfI-Tp-5y8o3dLbZ2EbiPCsBAapWGlPE7nBwSGtelj2h9JFq2nwYtcARlHCXiTgYu2r10Qsvsi9XaJ0MxZrsavi7Rr6t-iNPv91HVfEO6IpUcywRnEUpt9b3qKxS~WuelZcSf58Whzv0yKo4mU0MO-0dfSYVoHau2FHu0~cJUplzDWxX4~5X31zCdM~k2-HI0I5azRG4W9tC1jZP6d6to22r6noR6IyNwiih5Hyp~ujfBiWdg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000288.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 88,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/288/image/image.jpg?Expires=1776732225&Signature=R2ifYJxlxefBokHa0lXnwjEfuxNmJ5V4UfylJCEfVbZJJtBve3E7tHFIEBI8uiXOF3-fYjaa4LrmbydjlC1mvlehn-lM3nH7ipa2SDfI-Tp-5y8o3dLbZ2EbiPCsBAapWGlPE7nBwSGtelj2h9JFq2nwYtcARlHCXiTgYu2r10Qsvsi9XaJ0MxZrsavi7Rr6t-iNPv91HVfEO6IpUcywRnEUpt9b3qKxS~WuelZcSf58Whzv0yKo4mU0MO-0dfSYVoHau2FHu0~cJUplzDWxX4~5X31zCdM~k2-HI0I5azRG4W9tC1jZP6d6to22r6noR6IyNwiih5Hyp~ujfBiWdg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_88_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/289/image/image.jpg?Expires=1776732225&Signature=2ic5GB-BCJlXh-y-XQVtTjFyi2vP93ZH~ymA9iy6KTdy5d8qw0lVk6j-P8KEffgaGP5nnIYupdGSc1fRqupUmCZR4brAGOyOputHRS3XjhHR--vzg15~8ajBtRcxBSa0~ZPOJNwtZPDUrrH0XIaxFFUIxlZ9MP~v8WtBamdsNt9phoK4P64ka~rBJNR7BW1xkIo3Zo27yY-v1DrsKNjNPjOM5HII9tRAGhydMHMTKBM4xYK-j-ciWNvYrwJrI5cfLSTliV8QcwrgZJ28qUnI8KzxnQsMgcnlJPxA7XVbxas-0t~LheMEYsARHpnwjHPT5w4cDZvxRLwjyJv-UPievA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000289.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 89,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/289/image/image.jpg?Expires=1776732225&Signature=2ic5GB-BCJlXh-y-XQVtTjFyi2vP93ZH~ymA9iy6KTdy5d8qw0lVk6j-P8KEffgaGP5nnIYupdGSc1fRqupUmCZR4brAGOyOputHRS3XjhHR--vzg15~8ajBtRcxBSa0~ZPOJNwtZPDUrrH0XIaxFFUIxlZ9MP~v8WtBamdsNt9phoK4P64ka~rBJNR7BW1xkIo3Zo27yY-v1DrsKNjNPjOM5HII9tRAGhydMHMTKBM4xYK-j-ciWNvYrwJrI5cfLSTliV8QcwrgZJ28qUnI8KzxnQsMgcnlJPxA7XVbxas-0t~LheMEYsARHpnwjHPT5w4cDZvxRLwjyJv-UPievA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_89_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/290/image/image.jpg?Expires=1776732225&Signature=OeyFpnDwY8ZIS6AnWG20WkEOuKmjQiciDIuTjQbGqEPc8GK-vmXledBb76PQKknnD7ivMTPN~AjkuKnNjExLdU4LphOxU9IF0HJdw3Q3FNfgQ91LaQD8-SDawJkKZcFMl2M4r2qELDp~Odd70HHLdpKx5UCTYkaIaI7NfxZ3pulYHv~okXAh3IMiczj3KrJpB1q77jvN2MNtVDgqRouysjv3-6gmQmwEdZLW73fEVSd3BL3Ytr-2dnmak4vzE~KcgG8azMzAF6VPtTd9wsRWEfVIEEzsyt-TiAkSrrQnZWVoXb9Ur-ClB6OAcO1S9bkizOX50IpBZ~WiLbP3DUp0~Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000290.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 90,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/290/image/image.jpg?Expires=1776732225&Signature=OeyFpnDwY8ZIS6AnWG20WkEOuKmjQiciDIuTjQbGqEPc8GK-vmXledBb76PQKknnD7ivMTPN~AjkuKnNjExLdU4LphOxU9IF0HJdw3Q3FNfgQ91LaQD8-SDawJkKZcFMl2M4r2qELDp~Odd70HHLdpKx5UCTYkaIaI7NfxZ3pulYHv~okXAh3IMiczj3KrJpB1q77jvN2MNtVDgqRouysjv3-6gmQmwEdZLW73fEVSd3BL3Ytr-2dnmak4vzE~KcgG8azMzAF6VPtTd9wsRWEfVIEEzsyt-TiAkSrrQnZWVoXb9Ur-ClB6OAcO1S9bkizOX50IpBZ~WiLbP3DUp0~Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_90_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/291/image/image.jpg?Expires=1776732225&Signature=xFtOc0-RsYQpY3uqqZs9uXkbwUovdfoE72-uyCaWav5AdMf1d2y-KDCQEpxKh717yM5lNmF-jn-DXZmfAeg7MD2mMFJ3FLZww9wYjyQjpeYnWTURc8EP86tqVrYulGjSWorYRIXvm-h09gS3a0D0ZecLIfo1CzewsPKaH1viPLGHHjzIC4OchyfY5en2NAqvjiVfHv53xS7H1hfEwvS~9jpNeFmyvEIhcVDgb1Fxac9LFvw2ZN~j1vA09KmbllrzQ36VPwkZmxHJ4NauYQYPWkGkGgoK8fW4pYKgqUHc7Wm87z8-c-L13-qPfQPy9PYkh75SbBYVF~W1xS1qwfSRDQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000291.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 91,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/291/image/image.jpg?Expires=1776732225&Signature=xFtOc0-RsYQpY3uqqZs9uXkbwUovdfoE72-uyCaWav5AdMf1d2y-KDCQEpxKh717yM5lNmF-jn-DXZmfAeg7MD2mMFJ3FLZww9wYjyQjpeYnWTURc8EP86tqVrYulGjSWorYRIXvm-h09gS3a0D0ZecLIfo1CzewsPKaH1viPLGHHjzIC4OchyfY5en2NAqvjiVfHv53xS7H1hfEwvS~9jpNeFmyvEIhcVDgb1Fxac9LFvw2ZN~j1vA09KmbllrzQ36VPwkZmxHJ4NauYQYPWkGkGgoK8fW4pYKgqUHc7Wm87z8-c-L13-qPfQPy9PYkh75SbBYVF~W1xS1qwfSRDQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_91_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/292/image/image.jpg?Expires=1776732225&Signature=Sk9sHe8BclLvdNNwRBI0TcBmG6rutGX~9OvhlzV8MTra7axzXFZN3Q4q1fS1XXV7UI4P6eK1MFcxKf8EllWhIiZcZrsSRNfK1JOy2jJ9ZEh2V7lgsQVhmH0nscVTRDy2~HiXCB3Dc3yhPwKWHdr3GJrRfc~4TsHudVOG3FwFXIl8nnEiPD3uHDHEnCA7qkmM53JBNJElELWyKEggLcnfH9zfzX4XVgdoizhmCO~0ibwJLKe1OpzdmYvwNGdgzqO270PJdXh15JisnNHnDaRGI7Aqyy8WAfZGcf8Djs~FTUUbf00rdIbjcV8C7v5c02Pu~IrxzrPas4~Y-J8sa7di4g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000292.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 92,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/292/image/image.jpg?Expires=1776732225&Signature=Sk9sHe8BclLvdNNwRBI0TcBmG6rutGX~9OvhlzV8MTra7axzXFZN3Q4q1fS1XXV7UI4P6eK1MFcxKf8EllWhIiZcZrsSRNfK1JOy2jJ9ZEh2V7lgsQVhmH0nscVTRDy2~HiXCB3Dc3yhPwKWHdr3GJrRfc~4TsHudVOG3FwFXIl8nnEiPD3uHDHEnCA7qkmM53JBNJElELWyKEggLcnfH9zfzX4XVgdoizhmCO~0ibwJLKe1OpzdmYvwNGdgzqO270PJdXh15JisnNHnDaRGI7Aqyy8WAfZGcf8Djs~FTUUbf00rdIbjcV8C7v5c02Pu~IrxzrPas4~Y-J8sa7di4g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_92_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/293/image/image.jpg?Expires=1776732225&Signature=NcnAyS-EA0-tdedJ2oAq7bpzaiB92Onmoc7UyVZuSQTHQGpsSrpv27092mfhNKyHUSdOgb2PYSQtsO3KxKPQ-LzHjkTg2y4nSb4~qxyE1jvVpZI1stHSGJbF3OFMc~jsB3voNqzPBBJWBLmO7lnKO6Vtejy3STilKGdecddWwNYDfHbmiFdCA9ruxEUG6kmAgBELUE4ybXTnuTh5x61STvPc7Dq-iu1wzNP55gaDye75CApedeG-quaEtrybUdVD52bOVYl~V960Xr-zjigk95EcApGF4t2UDitbe-HmDWPcA7JX~Pk-hw7h1iWR4HbDhbpOAyXnG91J2w0LXdseqw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000293.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 93,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/293/image/image.jpg?Expires=1776732225&Signature=NcnAyS-EA0-tdedJ2oAq7bpzaiB92Onmoc7UyVZuSQTHQGpsSrpv27092mfhNKyHUSdOgb2PYSQtsO3KxKPQ-LzHjkTg2y4nSb4~qxyE1jvVpZI1stHSGJbF3OFMc~jsB3voNqzPBBJWBLmO7lnKO6Vtejy3STilKGdecddWwNYDfHbmiFdCA9ruxEUG6kmAgBELUE4ybXTnuTh5x61STvPc7Dq-iu1wzNP55gaDye75CApedeG-quaEtrybUdVD52bOVYl~V960Xr-zjigk95EcApGF4t2UDitbe-HmDWPcA7JX~Pk-hw7h1iWR4HbDhbpOAyXnG91J2w0LXdseqw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_93_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/294/image/image.jpg?Expires=1776732225&Signature=ROZbjk~8C6I5mBsiwmoAhbzH36WibSUwuiwk-b-BcanW2B7PVbE0Ca7a5lZzVum4kX2MccvP5B-Ng2xwkXrji6y4lcpY624Izu8rOnU59vKfH79PUTHRafx5TOrGJhy-uQ0Lk1fKS82bFgpKAOlfbpXGqqsk-rlqvKMhaZRgrCtnPRJtBCMQ5IxhBvMSlXsMym3TrydvEL~MFFGgbMdYm~yE1SbFlyD98GPjgh2tiBsmRhoGqrlutaz4PABlp7iMYkZ764QgG11Ptg04ZiR~KQCh45jYnQAMuv5UuZKROxdQL9G-Pkxp9o4OM6uS3JI1iKMgPG81z4IIbQjtgshzDw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000294.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 94,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/294/image/image.jpg?Expires=1776732225&Signature=ROZbjk~8C6I5mBsiwmoAhbzH36WibSUwuiwk-b-BcanW2B7PVbE0Ca7a5lZzVum4kX2MccvP5B-Ng2xwkXrji6y4lcpY624Izu8rOnU59vKfH79PUTHRafx5TOrGJhy-uQ0Lk1fKS82bFgpKAOlfbpXGqqsk-rlqvKMhaZRgrCtnPRJtBCMQ5IxhBvMSlXsMym3TrydvEL~MFFGgbMdYm~yE1SbFlyD98GPjgh2tiBsmRhoGqrlutaz4PABlp7iMYkZ764QgG11Ptg04ZiR~KQCh45jYnQAMuv5UuZKROxdQL9G-Pkxp9o4OM6uS3JI1iKMgPG81z4IIbQjtgshzDw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_94_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/295/image/image.jpg?Expires=1776732225&Signature=JP91F4R0CkpIVWckwilJMbnlPTmqoEVpBF~~oQqd6oUMzxI4DqJHKXX8fhNHgQ7p~4~2Zg6Gmr~zUnriQja55LPopQrRmWSzvpKDzmMuIg7l7looecAPh2sP1~xbGNwtUlGDTz14WNuA~iNfAmulRI6pyRu9ERfhb38DaTrEcVJVbFjR5zEOwVt9Rb~mV0Krwgln4ojKgnca0z-0Zm9aPd7SZFzhEohnCD9VrQ3AUN6G2ymVatTWSGA5P0mVNFTn7aJSiKQEFLEtWSjWfLdRrEnldkDfCYpsHjWnmi~fghBuQPunLPe6-QkqYZ6~8OS1NeITPaRPUwRp5EEirF4lAA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000295.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 95,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/295/image/image.jpg?Expires=1776732225&Signature=JP91F4R0CkpIVWckwilJMbnlPTmqoEVpBF~~oQqd6oUMzxI4DqJHKXX8fhNHgQ7p~4~2Zg6Gmr~zUnriQja55LPopQrRmWSzvpKDzmMuIg7l7looecAPh2sP1~xbGNwtUlGDTz14WNuA~iNfAmulRI6pyRu9ERfhb38DaTrEcVJVbFjR5zEOwVt9Rb~mV0Krwgln4ojKgnca0z-0Zm9aPd7SZFzhEohnCD9VrQ3AUN6G2ymVatTWSGA5P0mVNFTn7aJSiKQEFLEtWSjWfLdRrEnldkDfCYpsHjWnmi~fghBuQPunLPe6-QkqYZ6~8OS1NeITPaRPUwRp5EEirF4lAA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_95_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/296/image/image.jpg?Expires=1776732225&Signature=BbXUHpiUN5DHpgTMuvuEvGtHYZvLXdUqK~SjiatJJXgmBgf3WNkdm-nBct3LrXxrVPrpqVQh4kg8nAdCiWlDAsQ4PoExdGtqyhQYL4p5Bhro~C9cAKGXl69SGQ~txe3z2wmWqRj8qrAk6Al0RhI7-iw8OEhmTRnnvlAogf5xOE3WtjyySNis~d9U~htQOirX6jhnaLysgtp~osD4SZFuR~35Tu8ECY9iw~hbycCoW7wkwO7AYOGML5IppI2m4himrqqVsVQPV5sIn8O4Pdg3r1EQ~mBLUefHHMAnAoY5tlh7y1FW9Mc6wBlwdaxGS0FKvGlAtH-KleHGdgJXYVUM4w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000296.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 96,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/296/image/image.jpg?Expires=1776732225&Signature=BbXUHpiUN5DHpgTMuvuEvGtHYZvLXdUqK~SjiatJJXgmBgf3WNkdm-nBct3LrXxrVPrpqVQh4kg8nAdCiWlDAsQ4PoExdGtqyhQYL4p5Bhro~C9cAKGXl69SGQ~txe3z2wmWqRj8qrAk6Al0RhI7-iw8OEhmTRnnvlAogf5xOE3WtjyySNis~d9U~htQOirX6jhnaLysgtp~osD4SZFuR~35Tu8ECY9iw~hbycCoW7wkwO7AYOGML5IppI2m4himrqqVsVQPV5sIn8O4Pdg3r1EQ~mBLUefHHMAnAoY5tlh7y1FW9Mc6wBlwdaxGS0FKvGlAtH-KleHGdgJXYVUM4w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_96_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/297/image/image.jpg?Expires=1776732225&Signature=o9yN7OJL6nFjnvmyq46YjSy1YzujdQz0x-2I15SLhPp5njpKeab3d0XjmTko1fBsidRZJRKBFf0b18P4OV81EBTxY8TzuvyxqYSqe7jXh-TqqgHaMp0rsqB-av4GpsQFsRvwyZ9F0u8xP9v5SUcyqdzKI6Mq4AE93B2q7A1Ouisg69ILODAqQPsnHYf37eJrApdlM49eAO0n2gxkpWeItMSi36PmOP~AzCILUJJHoZPwwNddCee95kg9oQe2YsAUTQevwMc3uy-wpRwfhVxVoF5Ja4xjOeShszzZb733saQfhopitbdcoO6TppeZcnuDd2uopP295H0DxSPnIN2Psw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000297.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 97,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/297/image/image.jpg?Expires=1776732225&Signature=o9yN7OJL6nFjnvmyq46YjSy1YzujdQz0x-2I15SLhPp5njpKeab3d0XjmTko1fBsidRZJRKBFf0b18P4OV81EBTxY8TzuvyxqYSqe7jXh-TqqgHaMp0rsqB-av4GpsQFsRvwyZ9F0u8xP9v5SUcyqdzKI6Mq4AE93B2q7A1Ouisg69ILODAqQPsnHYf37eJrApdlM49eAO0n2gxkpWeItMSi36PmOP~AzCILUJJHoZPwwNddCee95kg9oQe2YsAUTQevwMc3uy-wpRwfhVxVoF5Ja4xjOeShszzZb733saQfhopitbdcoO6TppeZcnuDd2uopP295H0DxSPnIN2Psw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_97_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/298/image/image.jpg?Expires=1776732225&Signature=q6GkYtgDVSte3b4XFEKB31D7tTWXfMiLTinjCZmuFdKT2LY-YJmdLNfArqg5n3J7TeVvbGZXcvCBCxnqbvIm9W6aa5RS8WoZu~bhlWiWBIhfIDDwcbahszornEOnZ~qDkUO-xzPVaBJ6lI1izDceCv70653Ur3GW~tFmGPxwe93LGiWkfJIU-tWJVTBr-5Jlcze04zom3havOEBmNxt6sQfTV-FgPwlyknwTJ0bnUsJrfrGEKzzdOefH8~EcVQByX2bsIfNH4xcNV~4C~6YxGoAUl~BOtFAYpuwUXxtkiwyEiPqz0LdlfHUyG~dNU6Z5EHZr8fiLxyNeVP52a7KOSw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000298.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 98,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/298/image/image.jpg?Expires=1776732225&Signature=q6GkYtgDVSte3b4XFEKB31D7tTWXfMiLTinjCZmuFdKT2LY-YJmdLNfArqg5n3J7TeVvbGZXcvCBCxnqbvIm9W6aa5RS8WoZu~bhlWiWBIhfIDDwcbahszornEOnZ~qDkUO-xzPVaBJ6lI1izDceCv70653Ur3GW~tFmGPxwe93LGiWkfJIU-tWJVTBr-5Jlcze04zom3havOEBmNxt6sQfTV-FgPwlyknwTJ0bnUsJrfrGEKzzdOefH8~EcVQByX2bsIfNH4xcNV~4C~6YxGoAUl~BOtFAYpuwUXxtkiwyEiPqz0LdlfHUyG~dNU6Z5EHZr8fiLxyNeVP52a7KOSw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_98_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/299/image/image.jpg?Expires=1776732225&Signature=KS7RSww2WWs-XBFFectkhoh0mVTlzoRK9kgJBUe6kq5sZGH~Iid4nzetuXYeH-1~ej4TR~tDJVL63pJHgHEKoRp~Dp78~P8ts9hy9NNS9xf5mPMHNFXTnD~eMLhAO0i6YEaeYfIJph~K-29EhSkoaoxvdGkD301dll8d-pWIpS~q7v0JBgubCPlbKWs2mvj5Bng49fwn2LYuOfhBTDp9yJeATAb4BFco2OefYTWF0GEWvbPVYO81j6~moDsg5VGKdBJbAJworQ4Gf~PllYbT-NpcFdDJ7IEwESBTanIytYkJOpNcq8PyA7mYuP0ispeAdsikfZmd2UW8pSVAvipy2g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000299.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 99,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/299/image/image.jpg?Expires=1776732225&Signature=KS7RSww2WWs-XBFFectkhoh0mVTlzoRK9kgJBUe6kq5sZGH~Iid4nzetuXYeH-1~ej4TR~tDJVL63pJHgHEKoRp~Dp78~P8ts9hy9NNS9xf5mPMHNFXTnD~eMLhAO0i6YEaeYfIJph~K-29EhSkoaoxvdGkD301dll8d-pWIpS~q7v0JBgubCPlbKWs2mvj5Bng49fwn2LYuOfhBTDp9yJeATAb4BFco2OefYTWF0GEWvbPVYO81j6~moDsg5VGKdBJbAJworQ4Gf~PllYbT-NpcFdDJ7IEwESBTanIytYkJOpNcq8PyA7mYuP0ispeAdsikfZmd2UW8pSVAvipy2g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_99_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/300/image/image.jpg?Expires=1776732226&Signature=MjX4uKQiiu-o5dBjmgaotnSyOvibfg5tRI7DAHnMfL2C4Nt7KpvM4rGBtImZRivNkGmcmcPdAc4PgApPSbmR4rgSrImfQcrpGi7YoH7qO7G8psLWLclCMoJILE73KkKrtZKYAvKMKLTJSb91OhebonMs27Q2hEQ2C33CFh1qqKi7-frIs8EjgXVe4gOlcSBiA1vdjVO4yDCEvEppoykciXi8TrWQtiZDQwse6EpOwajL7c-VPsI1rq9nqWIyCokBp-M0gre0QTI4cc~j2gnUun5PMGKF~CgAFO3JIRZ0yAkmxiFf9wQcl3OCcrHN5MWpLiqtGtZTMc4Xn7nCS59vWw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000300.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 0,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/300/image/image.jpg?Expires=1776732226&Signature=MjX4uKQiiu-o5dBjmgaotnSyOvibfg5tRI7DAHnMfL2C4Nt7KpvM4rGBtImZRivNkGmcmcPdAc4PgApPSbmR4rgSrImfQcrpGi7YoH7qO7G8psLWLclCMoJILE73KkKrtZKYAvKMKLTJSb91OhebonMs27Q2hEQ2C33CFh1qqKi7-frIs8EjgXVe4gOlcSBiA1vdjVO4yDCEvEppoykciXi8TrWQtiZDQwse6EpOwajL7c-VPsI1rq9nqWIyCokBp-M0gre0QTI4cc~j2gnUun5PMGKF~CgAFO3JIRZ0yAkmxiFf9wQcl3OCcrHN5MWpLiqtGtZTMc4Xn7nCS59vWw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_0_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/301/image/image.jpg?Expires=1776732226&Signature=b50Nw0VO9BrjsGEvEPWJebvzXIa41sHq-Uzo-3aHHDxpNQYTtA9niOTMlyRm2kMG6ZA36GkQV9r5B2H~UAvdeRBmj9CzAmMxcJQqKwMoIaoRuHR0jL1ny2XlbBFJJ7jXJLVZHDPMee1zy5whLAWDttcVE34dBeT3LC1WSsK8LUza~b-GVDn7R1qSYow7PAJF8MxbXzjrURlyypJcsEeqg3O~hMjw8f~v~bogASRFmv8CbIlmzh176yzyHQ31gnwK8B7MFpDcetNlxT2aA~YDGpSRlrQz3PQPQlM8glczSx6MMRHzeojyrTpf8V0RwSsXwUgn6O8gP-HUlmhkSNgBfw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000301.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 1,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/301/image/image.jpg?Expires=1776732226&Signature=b50Nw0VO9BrjsGEvEPWJebvzXIa41sHq-Uzo-3aHHDxpNQYTtA9niOTMlyRm2kMG6ZA36GkQV9r5B2H~UAvdeRBmj9CzAmMxcJQqKwMoIaoRuHR0jL1ny2XlbBFJJ7jXJLVZHDPMee1zy5whLAWDttcVE34dBeT3LC1WSsK8LUza~b-GVDn7R1qSYow7PAJF8MxbXzjrURlyypJcsEeqg3O~hMjw8f~v~bogASRFmv8CbIlmzh176yzyHQ31gnwK8B7MFpDcetNlxT2aA~YDGpSRlrQz3PQPQlM8glczSx6MMRHzeojyrTpf8V0RwSsXwUgn6O8gP-HUlmhkSNgBfw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_1_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/302/image/image.jpg?Expires=1776732226&Signature=McPqcoHD0AI-D00DwYMSg4gAvuUxgaZ4ZXD1Gj6uR2Es5OOwkopPO7VHnLmtxe3RS00AyUT4N53KPnMfo3BegkdE5o9gkHDZPvW6aVQwgaApWzQ3eyD5FLJWK8ZmSIcufk50GPjrZ3~w9e2lRjzQnqnfB0X5wsGmziK0JRzVHqFv5fCI--SD54Wj0cuzmZmrOgMoDa4nBWD0HvTx1LuK~G-bk4qHTQPI6xhBHllLSA8qfQMQB61sJtI9lnl~gB5D4VFlOLQS9KOh9yIGFWgBZ4PubnG2uiijTucebLdQdTy2AFDqKD1c-xH9eHkO7ztg3~VnrCpISYS2SbFQcLcyjA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000302.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 2,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/302/image/image.jpg?Expires=1776732226&Signature=McPqcoHD0AI-D00DwYMSg4gAvuUxgaZ4ZXD1Gj6uR2Es5OOwkopPO7VHnLmtxe3RS00AyUT4N53KPnMfo3BegkdE5o9gkHDZPvW6aVQwgaApWzQ3eyD5FLJWK8ZmSIcufk50GPjrZ3~w9e2lRjzQnqnfB0X5wsGmziK0JRzVHqFv5fCI--SD54Wj0cuzmZmrOgMoDa4nBWD0HvTx1LuK~G-bk4qHTQPI6xhBHllLSA8qfQMQB61sJtI9lnl~gB5D4VFlOLQS9KOh9yIGFWgBZ4PubnG2uiijTucebLdQdTy2AFDqKD1c-xH9eHkO7ztg3~VnrCpISYS2SbFQcLcyjA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_2_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/303/image/image.jpg?Expires=1776732226&Signature=FsQ5fJsycxrN62CA8d7Wtdl9ZUmBVeQpOPIMjs0eklYucVlnlo~l4b2aouiA2IdtTecNSm~LvIsyzsFCbRKfKtMsG0WJqFuGa0yIn65-tGzvKhSLMGq36wXuw9yfo~Pa~YpZ5FkaEJTB7KfJlj8qWqKix2gO6-0d4j4euh-2kqUawcHZcxdqdS2e1J6tz7yKhpKeiyk~JTlaZQB~T2jPVxBKkH7~0UxCF3hKeSHsUbDPRdynj6hqI-E6KdFMfJyiF4nY~73rLrXTuKnInam4KuazyT9cttMoWDBf6uKoBSMlyE8UC0TAPH3cdYAKupnLCpGH4KEUk5PXTysL46nXbw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000303.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 3,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/303/image/image.jpg?Expires=1776732226&Signature=FsQ5fJsycxrN62CA8d7Wtdl9ZUmBVeQpOPIMjs0eklYucVlnlo~l4b2aouiA2IdtTecNSm~LvIsyzsFCbRKfKtMsG0WJqFuGa0yIn65-tGzvKhSLMGq36wXuw9yfo~Pa~YpZ5FkaEJTB7KfJlj8qWqKix2gO6-0d4j4euh-2kqUawcHZcxdqdS2e1J6tz7yKhpKeiyk~JTlaZQB~T2jPVxBKkH7~0UxCF3hKeSHsUbDPRdynj6hqI-E6KdFMfJyiF4nY~73rLrXTuKnInam4KuazyT9cttMoWDBf6uKoBSMlyE8UC0TAPH3cdYAKupnLCpGH4KEUk5PXTysL46nXbw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_3_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/304/image/image.jpg?Expires=1776732226&Signature=YsDbd~sgCQ5bsnzR4Si6oJYWRRZSYuBF4-7CZUvZRoPG~CVWtEr~lKIIptQzm4uNozf5~QQUSeo9ilmqRVIpetsS39GesHvB6p2sDTDGqvLkoPyPjc061IFItEMaZjZafoPnxkAUuAW2B5ga9~vBHpSI2LR4P-fBQXP3dqjF-qFL-c6A6o3buhVYWIUqnmffh~8Ry5ZZrC437zeF7EPlkW8sPACjlEU4FyhTsdYU9QbmwVfEaJGVD92JXhcdYZbDxE3RfqaeqiYjmz2KTGhKQRglIHn~u-s4WjOri-bBNTaoxyahO-~6v7488T-t4OGPzPXKQKPud6ln6fzX3nbPdQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000304.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 4,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/304/image/image.jpg?Expires=1776732226&Signature=YsDbd~sgCQ5bsnzR4Si6oJYWRRZSYuBF4-7CZUvZRoPG~CVWtEr~lKIIptQzm4uNozf5~QQUSeo9ilmqRVIpetsS39GesHvB6p2sDTDGqvLkoPyPjc061IFItEMaZjZafoPnxkAUuAW2B5ga9~vBHpSI2LR4P-fBQXP3dqjF-qFL-c6A6o3buhVYWIUqnmffh~8Ry5ZZrC437zeF7EPlkW8sPACjlEU4FyhTsdYU9QbmwVfEaJGVD92JXhcdYZbDxE3RfqaeqiYjmz2KTGhKQRglIHn~u-s4WjOri-bBNTaoxyahO-~6v7488T-t4OGPzPXKQKPud6ln6fzX3nbPdQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_4_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/305/image/image.jpg?Expires=1776732226&Signature=Xe6IrxL9~O4ZKki-OiwKEIim-po-vwymLA-wACSEblxX9fRqtSsDpy07VY6Q92CWq9SZlf5hpSWu0sy8KPPLyVd24cZw5m2Lw~mm0M33mlTrYnwSFHLs4i0MRApjnKteQxU3tEL3atoaeeJTX9zqzvV5JXlxTyrTmDIjUw6XvWeBVD2ZdiDA-6VCEiHZwM9QUSgeKzXEIi60MWruV8O0DkuSmiIVIdqLpeTTP~iGhFDZAjie1y8cDjP5efQTR7KlwFHlvbc~3QEG3jg6c67CsDIimH7NMm9Ve9a2pQa~QfHW7~3x51jpeEjmsc5t5Ur-t2TbllLhPlRzAuWGP81H~Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000305.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 5,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/305/image/image.jpg?Expires=1776732226&Signature=Xe6IrxL9~O4ZKki-OiwKEIim-po-vwymLA-wACSEblxX9fRqtSsDpy07VY6Q92CWq9SZlf5hpSWu0sy8KPPLyVd24cZw5m2Lw~mm0M33mlTrYnwSFHLs4i0MRApjnKteQxU3tEL3atoaeeJTX9zqzvV5JXlxTyrTmDIjUw6XvWeBVD2ZdiDA-6VCEiHZwM9QUSgeKzXEIi60MWruV8O0DkuSmiIVIdqLpeTTP~iGhFDZAjie1y8cDjP5efQTR7KlwFHlvbc~3QEG3jg6c67CsDIimH7NMm9Ve9a2pQa~QfHW7~3x51jpeEjmsc5t5Ur-t2TbllLhPlRzAuWGP81H~Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_5_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/306/image/image.jpg?Expires=1776732226&Signature=NJ~pNQv9mp99fSkc6Gy-9VQu6A0DgVkG2sKV77iuPa0Uy75TnEjydMJhTT0RHuwO42vy~AHa9goXxVpDSrxagO~vCXUAu8eDquQhO1O-c28ip2ssY3AAM4fZ2mkPhRlHLGt9sEMr3iBZpIYfU62pp~u4sfzcz00QoquVo0595x5yRyBcUhq-73FRkYKyyWgl46J3aA7lMCID6jknRCiL5Fle356PLzvy4fZyk0fILtJYJ6ztY0hbhahBN0Ozc9YqaprqD4-5vupwm1VVbxpkNPrJafDZEZuz7F0U-VQBk3UHq1BnXTIFMoQBsUS0DOkw-ySd75~XqNAnO0eCcKCROw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000306.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 6,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/306/image/image.jpg?Expires=1776732226&Signature=NJ~pNQv9mp99fSkc6Gy-9VQu6A0DgVkG2sKV77iuPa0Uy75TnEjydMJhTT0RHuwO42vy~AHa9goXxVpDSrxagO~vCXUAu8eDquQhO1O-c28ip2ssY3AAM4fZ2mkPhRlHLGt9sEMr3iBZpIYfU62pp~u4sfzcz00QoquVo0595x5yRyBcUhq-73FRkYKyyWgl46J3aA7lMCID6jknRCiL5Fle356PLzvy4fZyk0fILtJYJ6ztY0hbhahBN0Ozc9YqaprqD4-5vupwm1VVbxpkNPrJafDZEZuz7F0U-VQBk3UHq1BnXTIFMoQBsUS0DOkw-ySd75~XqNAnO0eCcKCROw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_6_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/307/image/image.jpg?Expires=1776732226&Signature=VBr8NVvAqd7e-SgN7es7~Ggf~6M3LxeWHqiimyEnB7oUgAUXbIvUcu-RP~8MgBAU4NORKC8mmFxybWyczUFWDU7pOGju35VCQKexltIBd1bGH1TdpvxcexZqjpghH5MTY46KR4W-9OYJzk~pCTFsvBbtbCjuM79hAO~HUls4hGBB5VoxDohHG2XAwmd2RD84ILGbA8H15vclJOqMc-9jNINBcSaKHctnYtFHpWcDCAThRgmTfWrnJ6vqGWyswJrExPh8JF~2-dBrn8dkGsB8FtWVa8g6k5O1q4YUR4JCQTjIy7CLSL-KrTjvzCdIOoAHoYxsCUA13EPgQE~CM4nxaA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000307.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 7,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/307/image/image.jpg?Expires=1776732226&Signature=VBr8NVvAqd7e-SgN7es7~Ggf~6M3LxeWHqiimyEnB7oUgAUXbIvUcu-RP~8MgBAU4NORKC8mmFxybWyczUFWDU7pOGju35VCQKexltIBd1bGH1TdpvxcexZqjpghH5MTY46KR4W-9OYJzk~pCTFsvBbtbCjuM79hAO~HUls4hGBB5VoxDohHG2XAwmd2RD84ILGbA8H15vclJOqMc-9jNINBcSaKHctnYtFHpWcDCAThRgmTfWrnJ6vqGWyswJrExPh8JF~2-dBrn8dkGsB8FtWVa8g6k5O1q4YUR4JCQTjIy7CLSL-KrTjvzCdIOoAHoYxsCUA13EPgQE~CM4nxaA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_7_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/308/image/image.jpg?Expires=1776732226&Signature=y8km9BXYChusuCHmqwzxnU~-fTrOCZX2z9fv-uSr2mjUd53EyZ86A5fybYrurmddAvnemPJysf9~vC-3~p-ekF~IKYLoGjhkpyb7fW8mwhKGF60CF8YpCgN4fsU5rLo8WDr3mNKzJUk6a70N8Xd408ghnE-VtULK3FWCYr-QW0No5ohLjxZC9RNmQ8OcOIUVoBdbTygJxl3QlPj4nyU7EmXBixdy~QgHM8UZdcIiFoTVf-2R2yWqIV-iwT4JMgKOtNeybHc2QZS~NIndI0mMSzBbbilYyE~WMKk2i8jNbW-6Vg2iri1nzOxP2T6r0ATwoD4c7mYLTDldWN6JAnFP5A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000308.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 8,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/308/image/image.jpg?Expires=1776732226&Signature=y8km9BXYChusuCHmqwzxnU~-fTrOCZX2z9fv-uSr2mjUd53EyZ86A5fybYrurmddAvnemPJysf9~vC-3~p-ekF~IKYLoGjhkpyb7fW8mwhKGF60CF8YpCgN4fsU5rLo8WDr3mNKzJUk6a70N8Xd408ghnE-VtULK3FWCYr-QW0No5ohLjxZC9RNmQ8OcOIUVoBdbTygJxl3QlPj4nyU7EmXBixdy~QgHM8UZdcIiFoTVf-2R2yWqIV-iwT4JMgKOtNeybHc2QZS~NIndI0mMSzBbbilYyE~WMKk2i8jNbW-6Vg2iri1nzOxP2T6r0ATwoD4c7mYLTDldWN6JAnFP5A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_8_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/309/image/image.jpg?Expires=1776732226&Signature=WgkKWIBzK83kfiaAjH2e5~mhLcX-aaw6Th0IgSbqOz4eQWAiUE9l8kx5D0AqbHGyYnNH2H63awjlb0q~8cnDcTTP8YH9kLAasPjMbXcYI2Y1E6bf-SojJodb48Oiq6Xok7MWOQ90r7~ou4Ew0NsLZ0tzj4A03om7evgjeAXPPRoo8OB6lfrAMrXmw386e2-tJMCx8DmlGMkMz0m8wFfVo1H2qIXVFzD8-wOE2coygigLefHHr82up2tpKipB59r9G1ZAyDLepnMFmwF3ENzwyIWcCXevZFuJiVUmGp23ZQJX0onx~8NXHhmF-3a4ZNGKoEhrpwNFqt1jaYOMCK9wLQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000309.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 9,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/309/image/image.jpg?Expires=1776732226&Signature=WgkKWIBzK83kfiaAjH2e5~mhLcX-aaw6Th0IgSbqOz4eQWAiUE9l8kx5D0AqbHGyYnNH2H63awjlb0q~8cnDcTTP8YH9kLAasPjMbXcYI2Y1E6bf-SojJodb48Oiq6Xok7MWOQ90r7~ou4Ew0NsLZ0tzj4A03om7evgjeAXPPRoo8OB6lfrAMrXmw386e2-tJMCx8DmlGMkMz0m8wFfVo1H2qIXVFzD8-wOE2coygigLefHHr82up2tpKipB59r9G1ZAyDLepnMFmwF3ENzwyIWcCXevZFuJiVUmGp23ZQJX0onx~8NXHhmF-3a4ZNGKoEhrpwNFqt1jaYOMCK9wLQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_9_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/310/image/image.jpg?Expires=1776732226&Signature=ImBjX9AtoNb4TSZPpU0eHIYTX8UibrC4UyeqFznWCwkzx8GycZcxbg3FuzCllhju-rnY0R~tcnenwBZGp9Rb1ASNNGPs1kcGr2-deyd5~j5MG94Jp501JVuoqHChiaeilPSxQm-FeHOrD1j1UzgGq~QK0TGtQbzCz3vt~zQMbMdGF4siWWSxCYrLMzG4wPXSkRDo72HK9QMoj1FISjjF9hfCvXnzSNsfa1XkRW2UwANeROgEo4y8TcTthqsRY3z8ks1~0hRSxyvJKZ7L64JgCl9nMJGxfKRyLE-lvryHpUr-cDoEIq~AA7S~yXxU~jlSoVB~dRasbVlABCaV7ltGvA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000310.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 10,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/310/image/image.jpg?Expires=1776732226&Signature=ImBjX9AtoNb4TSZPpU0eHIYTX8UibrC4UyeqFznWCwkzx8GycZcxbg3FuzCllhju-rnY0R~tcnenwBZGp9Rb1ASNNGPs1kcGr2-deyd5~j5MG94Jp501JVuoqHChiaeilPSxQm-FeHOrD1j1UzgGq~QK0TGtQbzCz3vt~zQMbMdGF4siWWSxCYrLMzG4wPXSkRDo72HK9QMoj1FISjjF9hfCvXnzSNsfa1XkRW2UwANeROgEo4y8TcTthqsRY3z8ks1~0hRSxyvJKZ7L64JgCl9nMJGxfKRyLE-lvryHpUr-cDoEIq~AA7S~yXxU~jlSoVB~dRasbVlABCaV7ltGvA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_10_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/311/image/image.jpg?Expires=1776732226&Signature=TD0zYUVkQfM2MN9mywgUlWKuiqRHHmLlqtvpAwXBzUumFzl1P2xrx7NNCwyByXgMIvn7EJUPnRDyoE61x8dmjeCSX6hqyODmkEoMRsA~MFYlZeMQuezN-UF2D-HZBZZGnevl8383O9cch9uMaU7kCLraSiIc2~OnaUQUlaHjprQpUUJ0UUYoEiRfY-aqN72VrrOG9ZudqBC9rFro7QmJoJnOFDbpRCde56PrXYgNBP76Ew3UW0zlHSmQhamQHFkdbaHd71-UO1C5uqhyU1HzNJo-vBnYrEIbeWOaUu4QutldHpxrHZLRSIMQoXBwg6EDEZC~72F-P46CGiBekh33tA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000311.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 11,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/311/image/image.jpg?Expires=1776732226&Signature=TD0zYUVkQfM2MN9mywgUlWKuiqRHHmLlqtvpAwXBzUumFzl1P2xrx7NNCwyByXgMIvn7EJUPnRDyoE61x8dmjeCSX6hqyODmkEoMRsA~MFYlZeMQuezN-UF2D-HZBZZGnevl8383O9cch9uMaU7kCLraSiIc2~OnaUQUlaHjprQpUUJ0UUYoEiRfY-aqN72VrrOG9ZudqBC9rFro7QmJoJnOFDbpRCde56PrXYgNBP76Ew3UW0zlHSmQhamQHFkdbaHd71-UO1C5uqhyU1HzNJo-vBnYrEIbeWOaUu4QutldHpxrHZLRSIMQoXBwg6EDEZC~72F-P46CGiBekh33tA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_11_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/312/image/image.jpg?Expires=1776732226&Signature=Ui23z3AL1WI4ueygGOvozjIZIwVoeT4E7ZQv0r~WFKHg6bWJsZdMps5J4DOeC1bqUBK-C4pCKggFVndmxRBqE7LGWYTAKvrRgRxfUrSzuUwxQypl02r61NGZjpHBiPd0yjnlnp3JLRAyDtbUc0K~LGCUCDqzBwGHpvibMcFk0m05JkUKd-AUoMgP8iZBPY1kgkDpjraVbftGuKp2nOtZM9wemza-qaqBHnkcfez6Rn3bDXx-j-mxIYvv8OOiiOVDFDMRt~MJYvcKQ-~75~6o2etkRgHTB89CinbXQjEfCtJddC70qV2onPM57ajrSxtjAtT2GIQRG-kUGdvXE7gK6A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000312.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 12,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/312/image/image.jpg?Expires=1776732226&Signature=Ui23z3AL1WI4ueygGOvozjIZIwVoeT4E7ZQv0r~WFKHg6bWJsZdMps5J4DOeC1bqUBK-C4pCKggFVndmxRBqE7LGWYTAKvrRgRxfUrSzuUwxQypl02r61NGZjpHBiPd0yjnlnp3JLRAyDtbUc0K~LGCUCDqzBwGHpvibMcFk0m05JkUKd-AUoMgP8iZBPY1kgkDpjraVbftGuKp2nOtZM9wemza-qaqBHnkcfez6Rn3bDXx-j-mxIYvv8OOiiOVDFDMRt~MJYvcKQ-~75~6o2etkRgHTB89CinbXQjEfCtJddC70qV2onPM57ajrSxtjAtT2GIQRG-kUGdvXE7gK6A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_12_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/313/image/image.jpg?Expires=1776732226&Signature=hGODS6GhORGCZgmUmkcdFydtoDaLTcLZzJSpIsqcJo4tfSAXGwcz19~vWL~C5Z4mQX4cyYaPCSuQjP8Ghgnfg4gMV-x7YX3u8Xr44c98vFt-Rs120L6mx5rLohfzFy7Uri9Czt5SI4SqzOHXula4zHPXqUq3fTvmyvL7I33CEOPW~38NjUuAjTCS8pRuvcQ2MWz1aBrYv1HiXK8nPqUPJ3QKNWH8RlLtm1oXhOe-zgi2w9YpLSZI1Wd21ML9yDhnj~QLtp0N1nCEsRkstDBqqgzZC3Ju~g0j4mAqYp3OnntoxdX~-Qn~fXkMUDTRxvNJ06LcwnVZtPCeM8lIRX5Kew__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000313.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 13,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/313/image/image.jpg?Expires=1776732226&Signature=hGODS6GhORGCZgmUmkcdFydtoDaLTcLZzJSpIsqcJo4tfSAXGwcz19~vWL~C5Z4mQX4cyYaPCSuQjP8Ghgnfg4gMV-x7YX3u8Xr44c98vFt-Rs120L6mx5rLohfzFy7Uri9Czt5SI4SqzOHXula4zHPXqUq3fTvmyvL7I33CEOPW~38NjUuAjTCS8pRuvcQ2MWz1aBrYv1HiXK8nPqUPJ3QKNWH8RlLtm1oXhOe-zgi2w9YpLSZI1Wd21ML9yDhnj~QLtp0N1nCEsRkstDBqqgzZC3Ju~g0j4mAqYp3OnntoxdX~-Qn~fXkMUDTRxvNJ06LcwnVZtPCeM8lIRX5Kew__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_13_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/314/image/image.jpg?Expires=1776732226&Signature=MKKxVqty5gRPGS0V4WQPPjcJI3uMfXAZhxUfkyRlpy9pGRcjRA64sceRpZyKK3wf-RGyVP4pNFFs9uoRGZNDID32DVmYRcV75v2fIm73DcmmK5Tbjp7BbfqDw3~2Jnmr1COku9EB5DQC45wR4Ov1-gH5xObGDX7lVuEqTvyIk1dkBCcEmesWhJP2aIYUTNl7~AC3iANOLcnpXSYmsfORau6RwMjwjWCZxZykO6DpxTje~17F-GIM6iSrVJ3kyrf3LRYuy8e7KfIfLD4l3sLKqOImzGWKe2QGIYXl3pl3551vGEIa47ilTSzN6e6gRDav8qpkRnvpjrXzWvDYxwgMyA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000314.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 14,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/314/image/image.jpg?Expires=1776732226&Signature=MKKxVqty5gRPGS0V4WQPPjcJI3uMfXAZhxUfkyRlpy9pGRcjRA64sceRpZyKK3wf-RGyVP4pNFFs9uoRGZNDID32DVmYRcV75v2fIm73DcmmK5Tbjp7BbfqDw3~2Jnmr1COku9EB5DQC45wR4Ov1-gH5xObGDX7lVuEqTvyIk1dkBCcEmesWhJP2aIYUTNl7~AC3iANOLcnpXSYmsfORau6RwMjwjWCZxZykO6DpxTje~17F-GIM6iSrVJ3kyrf3LRYuy8e7KfIfLD4l3sLKqOImzGWKe2QGIYXl3pl3551vGEIa47ilTSzN6e6gRDav8qpkRnvpjrXzWvDYxwgMyA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_14_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/315/image/image.jpg?Expires=1776732226&Signature=ktZh1teS0ZclbiIUnBMxtfBXGHKyeSx8Wgx~orjuEWjVEkaM7BdeKpyclTgxXRzwNi~6g9obHrYM7aCvsIkBzZ3ydx5nnbz5OJi3V4qmn-BILpT21MUe8jEKJ90UJAkzGXppWfmSKXWyHdOQ6Nyne7WkFJhS2YowLlpeJPspB~LAceKcqreqB9srenACEJdXDhcxz4x84CRUlF4KSL5jz9oaYt4jjeLlB1mE5tKzUVmbXqB77qHVAxPaNnpSrUZ5wnO0T~WqYtdtdtWKTg5yHy7Cuq7TXgdORP3ipY4qHEj0Y-DzJGJDijUhlwQ0KzjR9PJ6WqtwLdPb6YVweIwUsA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000315.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 15,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/315/image/image.jpg?Expires=1776732226&Signature=ktZh1teS0ZclbiIUnBMxtfBXGHKyeSx8Wgx~orjuEWjVEkaM7BdeKpyclTgxXRzwNi~6g9obHrYM7aCvsIkBzZ3ydx5nnbz5OJi3V4qmn-BILpT21MUe8jEKJ90UJAkzGXppWfmSKXWyHdOQ6Nyne7WkFJhS2YowLlpeJPspB~LAceKcqreqB9srenACEJdXDhcxz4x84CRUlF4KSL5jz9oaYt4jjeLlB1mE5tKzUVmbXqB77qHVAxPaNnpSrUZ5wnO0T~WqYtdtdtWKTg5yHy7Cuq7TXgdORP3ipY4qHEj0Y-DzJGJDijUhlwQ0KzjR9PJ6WqtwLdPb6YVweIwUsA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_15_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/316/image/image.jpg?Expires=1776732226&Signature=V68HYRvPK2Rm2FY8kOB60gcG~KFNkXGqhb~Kt~PB5DCFB0zrv6CTMQg-q4YE5Xb4Ao32o65dBPkKhyNK5N7ivLwFub~2J7VhhXTdgZL0HIIYT7ZjVyaj5EtEDOpPaervtPoEAsDexplFuuIlbZXehS04pNLhinvrSrE368vKIfTRzOBx7pbzMXavxLcedrQ4ckTsydI6FAL7i12xJwuOkmLiF9fD32tIc1seeeBAPbF1I1ESKcjzxPP2prXcKBoMpEx0~PuHS4N16NLVu6NacBFbjyEO3aZmIjI0cwjJI6VB70wxpDIf9nv4G3mvMR23t6MRayC6Bu5ZyqjIrYHzWQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000316.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 16,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/316/image/image.jpg?Expires=1776732226&Signature=V68HYRvPK2Rm2FY8kOB60gcG~KFNkXGqhb~Kt~PB5DCFB0zrv6CTMQg-q4YE5Xb4Ao32o65dBPkKhyNK5N7ivLwFub~2J7VhhXTdgZL0HIIYT7ZjVyaj5EtEDOpPaervtPoEAsDexplFuuIlbZXehS04pNLhinvrSrE368vKIfTRzOBx7pbzMXavxLcedrQ4ckTsydI6FAL7i12xJwuOkmLiF9fD32tIc1seeeBAPbF1I1ESKcjzxPP2prXcKBoMpEx0~PuHS4N16NLVu6NacBFbjyEO3aZmIjI0cwjJI6VB70wxpDIf9nv4G3mvMR23t6MRayC6Bu5ZyqjIrYHzWQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_16_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/317/image/image.jpg?Expires=1776732226&Signature=HtfP45qGU2GpAPbkj4lDm2EWam0CDl2sqTZuzyA3t2~4NgcgAS1Sy8rmtZMnV-2OvkhhFSRfyQvH3qjXCw8sQfCd7LP44s3nM9NTn9IkFE4PBPTBrWS3WqeSOeCeq7N0sRB~FBfh~bAyUfcBmDwlPgZSArWFeYLJk78cryOSfrSE7kWOi-lvvUWoLR32fS1QOHtnRTiKXYjyvhRs2DbtZfCdPAYN6xjTMMD7r6p-r3UbNOjnDe9Z41T2fhm3WKyM9E633eeY-z79MK7ArYgyYreCCcsZuqNQMcwwcyLF-yHJS0SuF6DYf9gR5QXqm0fo9b9FDUiu~rtRM2GB~XwyEQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000317.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 17,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/317/image/image.jpg?Expires=1776732226&Signature=HtfP45qGU2GpAPbkj4lDm2EWam0CDl2sqTZuzyA3t2~4NgcgAS1Sy8rmtZMnV-2OvkhhFSRfyQvH3qjXCw8sQfCd7LP44s3nM9NTn9IkFE4PBPTBrWS3WqeSOeCeq7N0sRB~FBfh~bAyUfcBmDwlPgZSArWFeYLJk78cryOSfrSE7kWOi-lvvUWoLR32fS1QOHtnRTiKXYjyvhRs2DbtZfCdPAYN6xjTMMD7r6p-r3UbNOjnDe9Z41T2fhm3WKyM9E633eeY-z79MK7ArYgyYreCCcsZuqNQMcwwcyLF-yHJS0SuF6DYf9gR5QXqm0fo9b9FDUiu~rtRM2GB~XwyEQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_17_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/318/image/image.jpg?Expires=1776732226&Signature=JfeKQ4B4RQkPJ9dFXAui91B7v6RmhYV37NdZecqPS0rx4H3nt1kTR03sSZp6ElpTB5KDUBMCvOmaCJdli3ZCLWP~nGsf4L-nGM0gdwnqSv4e~2JvS8A09CeMfvs9sv8A3QZiMwFgMMeFdxNBuNocj6qFU8hyhACoYIRNleVfgKkC0BKv7BP3Q9LitVssa3hg0J3Pjs0BxgXXF67xYG-C1eUNfQ~DHaDYVquRHACliQSUVPnA7zYng4CXztySHk2ZmzsTWnzNMXaUeUWLq73AloEpOsc8k8Xo-~-wYr7PtO35OrRi7YE6Oi1kwKYRnqR2oQSgb6s4nyWNFhZVKJZVMg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000318.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 18,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/318/image/image.jpg?Expires=1776732226&Signature=JfeKQ4B4RQkPJ9dFXAui91B7v6RmhYV37NdZecqPS0rx4H3nt1kTR03sSZp6ElpTB5KDUBMCvOmaCJdli3ZCLWP~nGsf4L-nGM0gdwnqSv4e~2JvS8A09CeMfvs9sv8A3QZiMwFgMMeFdxNBuNocj6qFU8hyhACoYIRNleVfgKkC0BKv7BP3Q9LitVssa3hg0J3Pjs0BxgXXF67xYG-C1eUNfQ~DHaDYVquRHACliQSUVPnA7zYng4CXztySHk2ZmzsTWnzNMXaUeUWLq73AloEpOsc8k8Xo-~-wYr7PtO35OrRi7YE6Oi1kwKYRnqR2oQSgb6s4nyWNFhZVKJZVMg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_18_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/319/image/image.jpg?Expires=1776732226&Signature=0sUMTcNFE~CLkStZJT43NNF~BZcvFyxrg6RVtOxmHEbZjueHkW9zaOsP7wN51nnIuJAPBIHFUINqlwkNc66oZRO7kh2z0YtKlb8mlcce-BwKzT87ETtHALLBMVbI5Ebe5qRJmVzN4j-1OP~bhe1sLi6r00BaYx5dDwvVwIkoyJDwvd4t96XD8yjKNzdqKRrxlLxJbRRWjAFRrjxF0POCTfFkyvvvK5O9FLdjznbTjdSuNPfKxBKiVam14L-DIv6Y6vIXLWfy01arJKoYAdrXS88qWOs1K~0QpnJasaHnTcdG4MPTfTzFm76QgTr67c76pzfx2JjL3CEeLmaQZCG5kQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000319.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 19,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/319/image/image.jpg?Expires=1776732226&Signature=0sUMTcNFE~CLkStZJT43NNF~BZcvFyxrg6RVtOxmHEbZjueHkW9zaOsP7wN51nnIuJAPBIHFUINqlwkNc66oZRO7kh2z0YtKlb8mlcce-BwKzT87ETtHALLBMVbI5Ebe5qRJmVzN4j-1OP~bhe1sLi6r00BaYx5dDwvVwIkoyJDwvd4t96XD8yjKNzdqKRrxlLxJbRRWjAFRrjxF0POCTfFkyvvvK5O9FLdjznbTjdSuNPfKxBKiVam14L-DIv6Y6vIXLWfy01arJKoYAdrXS88qWOs1K~0QpnJasaHnTcdG4MPTfTzFm76QgTr67c76pzfx2JjL3CEeLmaQZCG5kQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_19_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/320/image/image.jpg?Expires=1776732226&Signature=Oxzk-DZxBnlgdAguEgIRKaTL~OcnnQ4Y6vt9fplPQND1K4s3XMr6bUjCH99biz2C4NsXCKAqZ~25Q~~lhMlsoiJZx2I0lWGyzD8vmeV~z6GNLIHpOK3bJI6bbJjKpHHVGysqrqgw7SRVsYdsmJENKYSeBg5mMAbvS5jKf0R6RW31gkhg14oX-SqD2ArUEen4~vCSnMtgRHieHmuQC2g6u-YblLGJDwNJi9rsdLKYnMotRC8rVcB~KwQYMmOrtNrw7-NZZU7W7Qs8on4uSXeyHXrmDKNPpnzcoO621HZ4NOlBruOr9oVW38pQK1mrpyxsne3HySokZ0ByK38~OnS5xw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000320.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 20,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/320/image/image.jpg?Expires=1776732226&Signature=Oxzk-DZxBnlgdAguEgIRKaTL~OcnnQ4Y6vt9fplPQND1K4s3XMr6bUjCH99biz2C4NsXCKAqZ~25Q~~lhMlsoiJZx2I0lWGyzD8vmeV~z6GNLIHpOK3bJI6bbJjKpHHVGysqrqgw7SRVsYdsmJENKYSeBg5mMAbvS5jKf0R6RW31gkhg14oX-SqD2ArUEen4~vCSnMtgRHieHmuQC2g6u-YblLGJDwNJi9rsdLKYnMotRC8rVcB~KwQYMmOrtNrw7-NZZU7W7Qs8on4uSXeyHXrmDKNPpnzcoO621HZ4NOlBruOr9oVW38pQK1mrpyxsne3HySokZ0ByK38~OnS5xw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_20_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/321/image/image.jpg?Expires=1776732226&Signature=DgLmkPhFM~NJ-N41fQ4bnskpDTy92nV862a9nddlOmnMa31iBbXk3DkUMLFjsNghF--YgPiphJd9dCQYRMPTIRbOeOXwGV5bm1vZWh1AKTdHZhDJtUJDYiFwoJifiokYatabN4F2WN1FCgFkViqCAtIotiur31q1dYpZN2dq5FGxfMDgSR1ftUZewOVECwJTwX2dmpWvAOy4ujO0lxbSVoPP9qcL18FOI1JMMflx9gfU913P1SEsb5N~91O89KNiuOWvuYaEycG4b00rs2sobhmbdJfK6BqziBdMg8nnsKraTKn-t3ap4UdU3spkt5Gp2JYSdv~l-PZRJW5XcyntOg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000321.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 21,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/321/image/image.jpg?Expires=1776732226&Signature=DgLmkPhFM~NJ-N41fQ4bnskpDTy92nV862a9nddlOmnMa31iBbXk3DkUMLFjsNghF--YgPiphJd9dCQYRMPTIRbOeOXwGV5bm1vZWh1AKTdHZhDJtUJDYiFwoJifiokYatabN4F2WN1FCgFkViqCAtIotiur31q1dYpZN2dq5FGxfMDgSR1ftUZewOVECwJTwX2dmpWvAOy4ujO0lxbSVoPP9qcL18FOI1JMMflx9gfU913P1SEsb5N~91O89KNiuOWvuYaEycG4b00rs2sobhmbdJfK6BqziBdMg8nnsKraTKn-t3ap4UdU3spkt5Gp2JYSdv~l-PZRJW5XcyntOg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_21_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/322/image/image.jpg?Expires=1776732226&Signature=O0g~bztg1St2ubBqyUMWeGNno71-N1LHcd17IMxS1Vhv6QIvRya2hgKosL8RjfmsZgBD32tQf9kA~2BIoNB5tsTWOqI08cwaMEjMf6lBU3i-HiqwZ5~q-vtAxVM-1WG4wjAMDKKJ7t5YodLd-pA75EVgI8j27EpAGVPLjWr7rnMY1y9qlHDor5vAuO-TsRs5du6K-cHcE-OYhEuDQ8vX~d9hKatKilh-ddsp9KOrGk01wquSkR5rUh4tD5Va-wSBhWe21oGY4BiqnQaynP1cdkdUfhMY~0vBTuE4P9Xur6kisDxRLBAbfZ3PMJSuOzPJlmOc2idQ9gc81wIzKLBeFw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000322.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 22,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/322/image/image.jpg?Expires=1776732226&Signature=O0g~bztg1St2ubBqyUMWeGNno71-N1LHcd17IMxS1Vhv6QIvRya2hgKosL8RjfmsZgBD32tQf9kA~2BIoNB5tsTWOqI08cwaMEjMf6lBU3i-HiqwZ5~q-vtAxVM-1WG4wjAMDKKJ7t5YodLd-pA75EVgI8j27EpAGVPLjWr7rnMY1y9qlHDor5vAuO-TsRs5du6K-cHcE-OYhEuDQ8vX~d9hKatKilh-ddsp9KOrGk01wquSkR5rUh4tD5Va-wSBhWe21oGY4BiqnQaynP1cdkdUfhMY~0vBTuE4P9Xur6kisDxRLBAbfZ3PMJSuOzPJlmOc2idQ9gc81wIzKLBeFw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_22_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/323/image/image.jpg?Expires=1776732226&Signature=FEUSoNvlvnvjO9sChBdf56Brt-MXA7xWfUlqDng6vobtbCQrCJHm4OAKwUWgSa-OsClCUaQMWNceDu5JImhuX4cDnpKHjV2TzBzuMwPd2dHLEpp1gpzQD4icjJJ6K9H4pYvEMx6AA72ou9eKEFKA6IQ7gwWa0lwoH5gjTOZHwGBRJjAlwsrFLEMyTHif6tr7tPJGrp05SXMh00OcFsbHBClSIgdiCl86h4nDF7feLZ6mDqUFOj3Q1ISweJjNyGibEH3foqheUJ1dDeXQRh1CosV003FbuuGqG3-8Avxq75FNXcqe7Cktcdkji6R7u9Xn62fkW6aIcu7vU9OWeyTeBw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000323.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 23,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/323/image/image.jpg?Expires=1776732226&Signature=FEUSoNvlvnvjO9sChBdf56Brt-MXA7xWfUlqDng6vobtbCQrCJHm4OAKwUWgSa-OsClCUaQMWNceDu5JImhuX4cDnpKHjV2TzBzuMwPd2dHLEpp1gpzQD4icjJJ6K9H4pYvEMx6AA72ou9eKEFKA6IQ7gwWa0lwoH5gjTOZHwGBRJjAlwsrFLEMyTHif6tr7tPJGrp05SXMh00OcFsbHBClSIgdiCl86h4nDF7feLZ6mDqUFOj3Q1ISweJjNyGibEH3foqheUJ1dDeXQRh1CosV003FbuuGqG3-8Avxq75FNXcqe7Cktcdkji6R7u9Xn62fkW6aIcu7vU9OWeyTeBw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_23_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/324/image/image.jpg?Expires=1776732226&Signature=S3Y78Nc8eWsmGsVVuoPLvpXSRAxNosQf3ZnJo0Yv3R7d6WKRr9vgC0e8Ty3se5hZ7agDHavKfk15jPpkXqYpYgqpjmToi0ZkqOtbjpTrU4tj0hvwmSDS7rMpyBvCJ4v3OWhBnRFQgzS4D~BZyXBYOZO~NfFaktAWtfz0fohExQBPL3aDzxlKdZ-yhQBCCimmMpT6pJ4DKsXoembtcPBPmFMsRuhtIJePIwUi-JTbGvrDUdax-KKlplpA76PTT8CCGOvDtVujEjvQytKHvLNmOoBBLqzWUY4xewkPCJTKAcZJ5-0qpQTeQK2Uct8O4YjeSqKiBmnMrL7rBTcpImSMCA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000324.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 24,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/324/image/image.jpg?Expires=1776732226&Signature=S3Y78Nc8eWsmGsVVuoPLvpXSRAxNosQf3ZnJo0Yv3R7d6WKRr9vgC0e8Ty3se5hZ7agDHavKfk15jPpkXqYpYgqpjmToi0ZkqOtbjpTrU4tj0hvwmSDS7rMpyBvCJ4v3OWhBnRFQgzS4D~BZyXBYOZO~NfFaktAWtfz0fohExQBPL3aDzxlKdZ-yhQBCCimmMpT6pJ4DKsXoembtcPBPmFMsRuhtIJePIwUi-JTbGvrDUdax-KKlplpA76PTT8CCGOvDtVujEjvQytKHvLNmOoBBLqzWUY4xewkPCJTKAcZJ5-0qpQTeQK2Uct8O4YjeSqKiBmnMrL7rBTcpImSMCA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_24_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/325/image/image.jpg?Expires=1776732226&Signature=NF7FkfyQjhMJVKIwm0VAGVrwUUzS3Oi-pwD2-RymeQvi8hQC4u-se-i-xQZyaMF~JzCwPV2MdK87ukw-DNgFM22gD~j7Do~~SZTtKCZ8mgOHMj9SVAAdNfUbLUl9Yojlx-N7jqnfdRfH6qYTTy8Sg9y-3RqChg2wQqMDHpIqBxz8j8v~8wEC4pWodIgkOjztXDg7wowphYVZdOss2YS1nZh~EnINJoiBObR~1pAmADV8z~OGEmDcyRjblWUjHq-0pQFCkDRLaoG6cJ-Z7l0PTxKdk~f24kNea7C4UBM96GzKi3bB~il0RxuInKQFJmJTc-YDLh3kmLB5U3jO~dBRuA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000325.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 25,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/325/image/image.jpg?Expires=1776732226&Signature=NF7FkfyQjhMJVKIwm0VAGVrwUUzS3Oi-pwD2-RymeQvi8hQC4u-se-i-xQZyaMF~JzCwPV2MdK87ukw-DNgFM22gD~j7Do~~SZTtKCZ8mgOHMj9SVAAdNfUbLUl9Yojlx-N7jqnfdRfH6qYTTy8Sg9y-3RqChg2wQqMDHpIqBxz8j8v~8wEC4pWodIgkOjztXDg7wowphYVZdOss2YS1nZh~EnINJoiBObR~1pAmADV8z~OGEmDcyRjblWUjHq-0pQFCkDRLaoG6cJ-Z7l0PTxKdk~f24kNea7C4UBM96GzKi3bB~il0RxuInKQFJmJTc-YDLh3kmLB5U3jO~dBRuA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_25_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/326/image/image.jpg?Expires=1776732226&Signature=0tcUBU-R6aeYIZorbxCJwsPg0uSchaNs8hrev6wATp~IvWoO4RScB1gWaIFk3hglgrhsMtgbf5z-NFEgD7-60A9ohVqOk7PcnpPT3yL5XgUKbE8MVaUu6fAQtMLhRdfMcf~SasLyHp4HNSCS8bH-8as~COKNQ9o8UVoW1HiN9tcS8fwORyis50VxxQVpSDt-JCNISJDeZgU5cV7wCtmyWB~ONyVpryuADNJOPzQgne~N3BDhAkpqLAlMS~82W7LSWcFEeu0xQeKkZToaMI~z5nfZiqKc7350uyflpr07P4vgUyBR7zRp2kgL4uuU8TxqKPFRlzaBK1oicOTmGcUYow__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000326.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 26,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/326/image/image.jpg?Expires=1776732226&Signature=0tcUBU-R6aeYIZorbxCJwsPg0uSchaNs8hrev6wATp~IvWoO4RScB1gWaIFk3hglgrhsMtgbf5z-NFEgD7-60A9ohVqOk7PcnpPT3yL5XgUKbE8MVaUu6fAQtMLhRdfMcf~SasLyHp4HNSCS8bH-8as~COKNQ9o8UVoW1HiN9tcS8fwORyis50VxxQVpSDt-JCNISJDeZgU5cV7wCtmyWB~ONyVpryuADNJOPzQgne~N3BDhAkpqLAlMS~82W7LSWcFEeu0xQeKkZToaMI~z5nfZiqKc7350uyflpr07P4vgUyBR7zRp2kgL4uuU8TxqKPFRlzaBK1oicOTmGcUYow__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_26_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/327/image/image.jpg?Expires=1776732226&Signature=0ZTVWRoCOrFupy4engeVf3N2fQ3m6M0hWIsl5~unGVpywgsarX7ArFDWAz8fJ1dCU4MmhcHro~xI8gmSf88IDz1APmQOkTbPnsC8l82Vzx~CBVa2tsSjYjkKiWqPP5MpqsaokoubeNqIoOsm2PYcr9OsKBM59wPUfNlhQfGtyfSgfaC6jC4WQLLr7RRt3236p6wBdVQClYtgmkTXIrzEWVRqsGYupkQE0gTn1T0pgABZTEcC~AjtNoq8GkLMsEUWcBvtpXk9bNm7G4wrAqjEOoe4OcH7QvmKGLk0Y7MuAbMg3eYjl4WBxen2dI1J43r67bVpqgeyPKV1s4z-fzD5Wg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000327.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 27,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/327/image/image.jpg?Expires=1776732226&Signature=0ZTVWRoCOrFupy4engeVf3N2fQ3m6M0hWIsl5~unGVpywgsarX7ArFDWAz8fJ1dCU4MmhcHro~xI8gmSf88IDz1APmQOkTbPnsC8l82Vzx~CBVa2tsSjYjkKiWqPP5MpqsaokoubeNqIoOsm2PYcr9OsKBM59wPUfNlhQfGtyfSgfaC6jC4WQLLr7RRt3236p6wBdVQClYtgmkTXIrzEWVRqsGYupkQE0gTn1T0pgABZTEcC~AjtNoq8GkLMsEUWcBvtpXk9bNm7G4wrAqjEOoe4OcH7QvmKGLk0Y7MuAbMg3eYjl4WBxen2dI1J43r67bVpqgeyPKV1s4z-fzD5Wg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_27_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/328/image/image.jpg?Expires=1776732226&Signature=FeVqeec9hXFfqG89zfaWMKAIkzGKddIvB~cD1eO8BQ2PviD7sDxfOjZNXZ883QCOzGzUcFClqiixNKpEhDiW~-7c0tNq4J2neHJwiGlFecZt7pwPn2R0Nu2WVlD0Rv5NQ2u6PQ9~eJMo5pv-RSQy6dJhTDrxMfRzsRuEpz63wrX1DiMD0~TClFfS6oJCgatyEYNpHqqisI-CriVnskI4ksnIGfswMpXGpxIUKUx6gwwxxTw0w27qRFJF1PDvplamh5OfY2VNa1EZ5VSvwOZeYoDPu9dLXl7W0GmcJaNMnCEqLqdYDh~Ak39eYq8X1cen7WLr6rKCydA-6jrwcqwYvA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000328.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 28,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/328/image/image.jpg?Expires=1776732226&Signature=FeVqeec9hXFfqG89zfaWMKAIkzGKddIvB~cD1eO8BQ2PviD7sDxfOjZNXZ883QCOzGzUcFClqiixNKpEhDiW~-7c0tNq4J2neHJwiGlFecZt7pwPn2R0Nu2WVlD0Rv5NQ2u6PQ9~eJMo5pv-RSQy6dJhTDrxMfRzsRuEpz63wrX1DiMD0~TClFfS6oJCgatyEYNpHqqisI-CriVnskI4ksnIGfswMpXGpxIUKUx6gwwxxTw0w27qRFJF1PDvplamh5OfY2VNa1EZ5VSvwOZeYoDPu9dLXl7W0GmcJaNMnCEqLqdYDh~Ak39eYq8X1cen7WLr6rKCydA-6jrwcqwYvA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_28_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/329/image/image.jpg?Expires=1776732226&Signature=0moT-fdL8X5yFlb4P1kJQ~TAQ~XPTTnGFjxHg4ufAO0X8mnLYMoj3gZIDnsHL1t8hFiegrQJ56d6cXAJ7sPzOkzMaVRO1HRJG4RN27I8Vl5S5Qp2yBxaNhbswG8puOAcLMbWmyvQo~aXBa98gbNQ~RPJpDF2yPbhTgCz2tAplEbHWWwE3jXIhXlUACAzM5YNLU6ujpw54OR2BZR6xmpqHfn2oaaqiUuQHMSECxE5ZaAcqlBB2VBivpseg~FqDu7YMFKp7TfJpsroqFxfCfLemFKrCPSoxx9xorzSLgmM-r2l-AZKPFJODKK3AdZoaY-kYcxV-4ovcOrVGMdTfDwlfA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000329.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 29,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/329/image/image.jpg?Expires=1776732226&Signature=0moT-fdL8X5yFlb4P1kJQ~TAQ~XPTTnGFjxHg4ufAO0X8mnLYMoj3gZIDnsHL1t8hFiegrQJ56d6cXAJ7sPzOkzMaVRO1HRJG4RN27I8Vl5S5Qp2yBxaNhbswG8puOAcLMbWmyvQo~aXBa98gbNQ~RPJpDF2yPbhTgCz2tAplEbHWWwE3jXIhXlUACAzM5YNLU6ujpw54OR2BZR6xmpqHfn2oaaqiUuQHMSECxE5ZaAcqlBB2VBivpseg~FqDu7YMFKp7TfJpsroqFxfCfLemFKrCPSoxx9xorzSLgmM-r2l-AZKPFJODKK3AdZoaY-kYcxV-4ovcOrVGMdTfDwlfA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_29_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/330/image/image.jpg?Expires=1776732226&Signature=nPhiJmCMfOUCVw-3fSFReKkeNri3YZ0yG-t25urFx2PDEcdXqImurZSYUIBGABo~8k6UyIzuo~btJt1rhXukmOV7J-xYxcQ-wGuzGA1uV3eW-dvVROGwCrwPbBJMfePqv62tdI7ytUX75bbp1RyFxHEV44OffTIMalX1FJL~yyCLXs5Ws9VOQ374kVPR0IXAb3cGGwEzBHGgyUV6TKfX~1If2JhIgcSS9xSy8I3fuS~sz4g~lqfbCQvGS2B00eWgkdpZ-Q3vgkfvyMQ6zCEBf3quWAyVH9ZxGzDEHC8kKG0e~6JfpN4H2Rc~Pg-k0cjErVevQjiGpGHDTya0kp-K7Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000330.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 30,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/330/image/image.jpg?Expires=1776732226&Signature=nPhiJmCMfOUCVw-3fSFReKkeNri3YZ0yG-t25urFx2PDEcdXqImurZSYUIBGABo~8k6UyIzuo~btJt1rhXukmOV7J-xYxcQ-wGuzGA1uV3eW-dvVROGwCrwPbBJMfePqv62tdI7ytUX75bbp1RyFxHEV44OffTIMalX1FJL~yyCLXs5Ws9VOQ374kVPR0IXAb3cGGwEzBHGgyUV6TKfX~1If2JhIgcSS9xSy8I3fuS~sz4g~lqfbCQvGS2B00eWgkdpZ-Q3vgkfvyMQ6zCEBf3quWAyVH9ZxGzDEHC8kKG0e~6JfpN4H2Rc~Pg-k0cjErVevQjiGpGHDTya0kp-K7Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_30_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/331/image/image.jpg?Expires=1776732226&Signature=xMnOTo90xnkP1xpX0J~G7mSGXDnyt~W0hF7n9ZvQpcBjS98WtjTxL3XVeG717Ege13wY68~TOMk7FxTOzUg85XBqTBRUKg0Q2BHw0hs~KGGwYmueslDgq3ODlp85BctYa-zV0NgvqmBAe2B3KbRuIY4ROQcl1gUjRrgrgIpQXO39XUxoxbXuKikzM4KdLarGY5Nn25kzxJKQXi6dbYJJzCfehLo5WK1yICYBL0PQ4TsANyqiHpIFMQIRoB9WYlKBEtX7PzIC6g7-Tuqjg6jGBrKywNKaeBhOBalxTDzc3iWftdo40d10ZrYDSr2fLV4Xr7uS33hfW8Uls50kIMDFnw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000331.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 31,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/331/image/image.jpg?Expires=1776732226&Signature=xMnOTo90xnkP1xpX0J~G7mSGXDnyt~W0hF7n9ZvQpcBjS98WtjTxL3XVeG717Ege13wY68~TOMk7FxTOzUg85XBqTBRUKg0Q2BHw0hs~KGGwYmueslDgq3ODlp85BctYa-zV0NgvqmBAe2B3KbRuIY4ROQcl1gUjRrgrgIpQXO39XUxoxbXuKikzM4KdLarGY5Nn25kzxJKQXi6dbYJJzCfehLo5WK1yICYBL0PQ4TsANyqiHpIFMQIRoB9WYlKBEtX7PzIC6g7-Tuqjg6jGBrKywNKaeBhOBalxTDzc3iWftdo40d10ZrYDSr2fLV4Xr7uS33hfW8Uls50kIMDFnw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_31_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/332/image/image.jpg?Expires=1776732226&Signature=F9oY0kpOGI7Zz2jjmnwbBU3LWSVhJ-aGxhHFOULnyJZKJRn2e~fb7yOAFEJfQ4AbFBMzi297nkwqR~rKS53gDeEOSEYNJ-rjCHNdiIyAQ8lfuv3qrE2E-wB5Zy2ED1V3hEJ4~e7SaseiE3rmp3SpoGBLNA2TN5K-LBbOY-f8zQPHdPDd2y3rq3N226T7MXAbWRYXTSP7-bwyRLMpLotuKG90X10P68Yy8IJiZCLG9ZVXZXc50BnLnJMK4veNnkT~v8ia~7SojZm~GYLpdcmfzzvBNrwXKce9d67QDOgFWkO3W7Ji5~o-DZz~ewtuBG017Hj9Lal19Rm9v7DUu~yrjg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000332.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 32,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/332/image/image.jpg?Expires=1776732226&Signature=F9oY0kpOGI7Zz2jjmnwbBU3LWSVhJ-aGxhHFOULnyJZKJRn2e~fb7yOAFEJfQ4AbFBMzi297nkwqR~rKS53gDeEOSEYNJ-rjCHNdiIyAQ8lfuv3qrE2E-wB5Zy2ED1V3hEJ4~e7SaseiE3rmp3SpoGBLNA2TN5K-LBbOY-f8zQPHdPDd2y3rq3N226T7MXAbWRYXTSP7-bwyRLMpLotuKG90X10P68Yy8IJiZCLG9ZVXZXc50BnLnJMK4veNnkT~v8ia~7SojZm~GYLpdcmfzzvBNrwXKce9d67QDOgFWkO3W7Ji5~o-DZz~ewtuBG017Hj9Lal19Rm9v7DUu~yrjg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_32_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/333/image/image.jpg?Expires=1776732226&Signature=u~wpxPY5Vu1Lnddb~1ct6tloL6MMEtPCjJZsdSmgYJKRFFfyFHFzcW6AnUmE9eXA3zz4AlL3ahE4mQSo3AIT8mEWKpM1gX9Kr61mvsXdAKeU9-aUYq2v0sOU5E~rQQXfEZQ-1ASgIvKrhBDJioHMbC~RYYDPWKl5VWyJ5wrppOQx9nksIhhrX1kRvbvdVAipIQRK~2JNV8-nFDWnQcFcrYPapwL32nQkCM9~fjF4SnLztwL5tee33AcbhomqWzBPTlDL44oMiUzU1XSylHvTzisswM6cg4TUEWzgAbShDb4HnQ6MtG-rAO6fOSjzm3gTI2ZhjfqjeQM8LDaid85OMQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000333.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 33,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/333/image/image.jpg?Expires=1776732226&Signature=u~wpxPY5Vu1Lnddb~1ct6tloL6MMEtPCjJZsdSmgYJKRFFfyFHFzcW6AnUmE9eXA3zz4AlL3ahE4mQSo3AIT8mEWKpM1gX9Kr61mvsXdAKeU9-aUYq2v0sOU5E~rQQXfEZQ-1ASgIvKrhBDJioHMbC~RYYDPWKl5VWyJ5wrppOQx9nksIhhrX1kRvbvdVAipIQRK~2JNV8-nFDWnQcFcrYPapwL32nQkCM9~fjF4SnLztwL5tee33AcbhomqWzBPTlDL44oMiUzU1XSylHvTzisswM6cg4TUEWzgAbShDb4HnQ6MtG-rAO6fOSjzm3gTI2ZhjfqjeQM8LDaid85OMQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_33_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/334/image/image.jpg?Expires=1776732226&Signature=knZupZB9zOTHlJvDVNZz6BumuS0ro9c7iFJIHdWxCfFupRWGimdCw8l2axPc0lEsIahKRQdmrnWQ83nFy5xNIJKF30TmdEcGcq9fTPzDPRZqtwbD0p55rcR-vXY5PoJCclsfPxW-geB2jQu90QA3gFBdV7ifU4LA7UrZUXfJw~Ops1ZDF6y7vNEdVIWJsZIKM~kY3kW9SBZjzyhO8pIUnIHGEFvs-5mONfPUC9lc~RifwfToG7R75d-wtqQpVH7FYlSyiNolLIx05OnGnUvhO7WAF6H0STIyP3DfmdHd99L2qhHfhr7j084QRClYtmZRH7dzkm5zUTshobrbHILrPQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000334.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 34,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/334/image/image.jpg?Expires=1776732226&Signature=knZupZB9zOTHlJvDVNZz6BumuS0ro9c7iFJIHdWxCfFupRWGimdCw8l2axPc0lEsIahKRQdmrnWQ83nFy5xNIJKF30TmdEcGcq9fTPzDPRZqtwbD0p55rcR-vXY5PoJCclsfPxW-geB2jQu90QA3gFBdV7ifU4LA7UrZUXfJw~Ops1ZDF6y7vNEdVIWJsZIKM~kY3kW9SBZjzyhO8pIUnIHGEFvs-5mONfPUC9lc~RifwfToG7R75d-wtqQpVH7FYlSyiNolLIx05OnGnUvhO7WAF6H0STIyP3DfmdHd99L2qhHfhr7j084QRClYtmZRH7dzkm5zUTshobrbHILrPQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_34_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/335/image/image.jpg?Expires=1776732226&Signature=o3GxF0rD1tsIcBGXQAjzAsXoVImDDoJymifHwgoGVq0lxwFQMm0g5whwqgg11NTEtEWHpdxnggcwfaN-tr-ObnyjhTAgSqDrDa~DqNxBofuwkh8hXP~SLBPyXMxA-cAaIuGjA-lOX~ibulxlEhkcpv0OuIm~pn7XiI8WgTxZgsske5v9jwuq7smz~3ZdjGr7O7PnDvmSiEq8vriVhbV~qakG~dHVAD~yY9THbhxa9nfUW0tPbQOCbOc6QSMlA4F8x0PeImQIdSffWxvTkfxADc4OV6Rvjpfv31VCIcKpZ03AEcsOC4qWWsxgt6KUvdAJXZqtTQMRabdyYlVTk7ez5A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000335.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 35,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/335/image/image.jpg?Expires=1776732226&Signature=o3GxF0rD1tsIcBGXQAjzAsXoVImDDoJymifHwgoGVq0lxwFQMm0g5whwqgg11NTEtEWHpdxnggcwfaN-tr-ObnyjhTAgSqDrDa~DqNxBofuwkh8hXP~SLBPyXMxA-cAaIuGjA-lOX~ibulxlEhkcpv0OuIm~pn7XiI8WgTxZgsske5v9jwuq7smz~3ZdjGr7O7PnDvmSiEq8vriVhbV~qakG~dHVAD~yY9THbhxa9nfUW0tPbQOCbOc6QSMlA4F8x0PeImQIdSffWxvTkfxADc4OV6Rvjpfv31VCIcKpZ03AEcsOC4qWWsxgt6KUvdAJXZqtTQMRabdyYlVTk7ez5A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_35_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/336/image/image.jpg?Expires=1776732226&Signature=rCl-yZEMkeulj5XC2gdFdjI0qy0TMUGNbYHR2SCwYAz~V8xBfWQFrygMCE9NCnUucRPf4HFTlL~hGV~kp4U7kQJ48bJYsWb2hUA9Z1euGv~M66q6h4z5vIn0E3X2Z-ndS0r7iKqk33LtgRW8ootAo2oV5CH0ZkdsFABaNewMGt2WDZT7NHdyWjDGGZTsJ4tXOdPYOLyx7XG0300hH~BZmgFrO64qspVcFb8BSGRn0SCgXLz9LSK593467vMFHsPZNu9exiR99qDzuhbOuP71r3rHxYVVBGrbEqKU0AfbEPnjoVozOqC1SldvNpIhaHje2aASWlTi87CgJvPoLaqhBg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000336.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 36,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/336/image/image.jpg?Expires=1776732226&Signature=rCl-yZEMkeulj5XC2gdFdjI0qy0TMUGNbYHR2SCwYAz~V8xBfWQFrygMCE9NCnUucRPf4HFTlL~hGV~kp4U7kQJ48bJYsWb2hUA9Z1euGv~M66q6h4z5vIn0E3X2Z-ndS0r7iKqk33LtgRW8ootAo2oV5CH0ZkdsFABaNewMGt2WDZT7NHdyWjDGGZTsJ4tXOdPYOLyx7XG0300hH~BZmgFrO64qspVcFb8BSGRn0SCgXLz9LSK593467vMFHsPZNu9exiR99qDzuhbOuP71r3rHxYVVBGrbEqKU0AfbEPnjoVozOqC1SldvNpIhaHje2aASWlTi87CgJvPoLaqhBg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_36_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/337/image/image.jpg?Expires=1776732226&Signature=JhKwkDbtt7Vd2-smbAAQr9rDGsOu-w-NQ-qMEYUgiNl8WMqVyAm8SFt13JeIBnrJ2fcZTW6KSywj5lOGkXIm5CeB~CzdmZ0HaapzxmZUecBg0ZWlQTvWjQ5U0PHWKvuvvHxM60OhyQ6VgiCDnHA6buGTbBccKcQOhfhWdSqidDs1GADtRMnFfR9yl4gfF5~e6lwkSFEch~JyNFzkVshWJz7wq8~m9D-L-hrOdVod9M2jy~JB3rzul2VhXTMzD1ifqEF-WioF53fCKnzuALfpYV9etDt3DZBUCnxIqMAoGsuw77ESS-xcV2v4-a8OjxzyKm4YlqDerv2v~4k~B8JYog__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000337.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 37,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/337/image/image.jpg?Expires=1776732226&Signature=JhKwkDbtt7Vd2-smbAAQr9rDGsOu-w-NQ-qMEYUgiNl8WMqVyAm8SFt13JeIBnrJ2fcZTW6KSywj5lOGkXIm5CeB~CzdmZ0HaapzxmZUecBg0ZWlQTvWjQ5U0PHWKvuvvHxM60OhyQ6VgiCDnHA6buGTbBccKcQOhfhWdSqidDs1GADtRMnFfR9yl4gfF5~e6lwkSFEch~JyNFzkVshWJz7wq8~m9D-L-hrOdVod9M2jy~JB3rzul2VhXTMzD1ifqEF-WioF53fCKnzuALfpYV9etDt3DZBUCnxIqMAoGsuw77ESS-xcV2v4-a8OjxzyKm4YlqDerv2v~4k~B8JYog__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_37_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/338/image/image.jpg?Expires=1776732226&Signature=b9jJAvYxWgjCLRiYS1V9IWNfjvaopRdJLrBkitZgOmlidXzy5tp540L0BoJ01UqYbQQnja488uSsn5O3jMaSqQSKgV8gVwc69WGgrU028DDyop7o3BBr1L0GT1DHEpU8PcgrcLHSTPnUn9HMW9HP2ovTCSd9OKRs2-O~cLKK98LPsQRT0QuoHGfUw0~SCerS2cYujnyLVwKgTRXkub0573Sx8xeaWhbOCo4k1nV6MWardtj0myzcPqAL0UZp0~h6G8cyEEHJtwxw2-oqABDehQSqz8yojYHi8CDnBWD8PfLUck15ZV73VOvvx1m6UDGSESslBI9NWL6oTUOPP13oCg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000338.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 38,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/338/image/image.jpg?Expires=1776732226&Signature=b9jJAvYxWgjCLRiYS1V9IWNfjvaopRdJLrBkitZgOmlidXzy5tp540L0BoJ01UqYbQQnja488uSsn5O3jMaSqQSKgV8gVwc69WGgrU028DDyop7o3BBr1L0GT1DHEpU8PcgrcLHSTPnUn9HMW9HP2ovTCSd9OKRs2-O~cLKK98LPsQRT0QuoHGfUw0~SCerS2cYujnyLVwKgTRXkub0573Sx8xeaWhbOCo4k1nV6MWardtj0myzcPqAL0UZp0~h6G8cyEEHJtwxw2-oqABDehQSqz8yojYHi8CDnBWD8PfLUck15ZV73VOvvx1m6UDGSESslBI9NWL6oTUOPP13oCg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_38_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/339/image/image.jpg?Expires=1776732226&Signature=fsyggX7Th0DP~DauioKYY3vKuzIDobAmlbHRNhgeE2cWBfxi75YfRC35gG6leR1AXcBcagCgVECbQH7V~q9IdCyCUKwL1MjCXcHiQU0UupPcjhgDMFSM9gXu~h6NL6rW5bNsheuFAKm2xMt1RuwqXW1sqTBbRueYh0OL~ziI1KMpbvJRzVGA5jQq3Wpa1ZxcX-qUqhPNpCkNsqFNJ-nzycEQ5SW3kpT840Hvkf5JRDtsA85COLONgfmwCVsFqN6a2uMF0tkFDLBhtsqei0LmwtaFicMUNBSAT8FTstAtZeH5Ujm6HLwdZ21qjk7fAERtAtbPXVyWj662KLLC8rLI6g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000339.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 39,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/339/image/image.jpg?Expires=1776732226&Signature=fsyggX7Th0DP~DauioKYY3vKuzIDobAmlbHRNhgeE2cWBfxi75YfRC35gG6leR1AXcBcagCgVECbQH7V~q9IdCyCUKwL1MjCXcHiQU0UupPcjhgDMFSM9gXu~h6NL6rW5bNsheuFAKm2xMt1RuwqXW1sqTBbRueYh0OL~ziI1KMpbvJRzVGA5jQq3Wpa1ZxcX-qUqhPNpCkNsqFNJ-nzycEQ5SW3kpT840Hvkf5JRDtsA85COLONgfmwCVsFqN6a2uMF0tkFDLBhtsqei0LmwtaFicMUNBSAT8FTstAtZeH5Ujm6HLwdZ21qjk7fAERtAtbPXVyWj662KLLC8rLI6g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_39_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/340/image/image.jpg?Expires=1776732226&Signature=l6U-T2FFSRyxg5QFnjKkt~Tw4Y~S1uJz~ypYEsRWqAgm8c~DHPSmSWPQ5nZfXK2V6ZyQNVK4iN3PuK4CaQF~5UFBwMRNYaeG7qIbM7xB0xvk9fe7maugkt2ktsqbd0ZH9XrtCKS~aLiFnOCQL0iKIjgqKo4Tv3KkMdClwIVM496ynlvekhtnKgmCYVxqfej3U~9RYY3Alc1CmVl7KfNS8dJSXGD-6T0eQdCfFOB5ppca8PHyDqeJKfnEZWDDobKwQ7PaxZtWKsEgE~paY0TwyLHzZ5I-8N2Q4XseDZQcgdViCs-lQtcHW9Ivnof1tTWImFEVDqD1rQzcUbOHGI4CLA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000340.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 40,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/340/image/image.jpg?Expires=1776732226&Signature=l6U-T2FFSRyxg5QFnjKkt~Tw4Y~S1uJz~ypYEsRWqAgm8c~DHPSmSWPQ5nZfXK2V6ZyQNVK4iN3PuK4CaQF~5UFBwMRNYaeG7qIbM7xB0xvk9fe7maugkt2ktsqbd0ZH9XrtCKS~aLiFnOCQL0iKIjgqKo4Tv3KkMdClwIVM496ynlvekhtnKgmCYVxqfej3U~9RYY3Alc1CmVl7KfNS8dJSXGD-6T0eQdCfFOB5ppca8PHyDqeJKfnEZWDDobKwQ7PaxZtWKsEgE~paY0TwyLHzZ5I-8N2Q4XseDZQcgdViCs-lQtcHW9Ivnof1tTWImFEVDqD1rQzcUbOHGI4CLA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_40_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/341/image/image.jpg?Expires=1776732226&Signature=UNLRGWZQXI6~0p~fAp1HSWspIOVp536MHEQ0JSHv~lZ8z9ZrJkF7k5KccY0cg0tMk2UvU~hDyLvLASnv2ViDJoDJSDwg1sApBhEmt0Tu6LDouhD-R~NJD5C9-J4Zi9WYnwzNzqA0orl0BPavM9s6G9pJytJIHtxRE586AEKNwZHrQGVXZ6VsUwjlneaHKXgxj3vorgCboWwrPtU08dUijDqJWyTVtkT9uEg4TAF4UUSwDDefu-0m5L9lRSDvjxhikXmKv6ZgjZRDTwZT-UF93PthTO~VFTIgQAl6nqEdYlosaakKW7v~vhHmUs0aN0ur345y-JzyWDGRcCEuXDfqFg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000341.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 41,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/341/image/image.jpg?Expires=1776732226&Signature=UNLRGWZQXI6~0p~fAp1HSWspIOVp536MHEQ0JSHv~lZ8z9ZrJkF7k5KccY0cg0tMk2UvU~hDyLvLASnv2ViDJoDJSDwg1sApBhEmt0Tu6LDouhD-R~NJD5C9-J4Zi9WYnwzNzqA0orl0BPavM9s6G9pJytJIHtxRE586AEKNwZHrQGVXZ6VsUwjlneaHKXgxj3vorgCboWwrPtU08dUijDqJWyTVtkT9uEg4TAF4UUSwDDefu-0m5L9lRSDvjxhikXmKv6ZgjZRDTwZT-UF93PthTO~VFTIgQAl6nqEdYlosaakKW7v~vhHmUs0aN0ur345y-JzyWDGRcCEuXDfqFg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_41_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/342/image/image.jpg?Expires=1776732226&Signature=ns0GWL4veTEYX5NsQ3UJxQRe0gtvTvoqAscfjipBZ01k2lX96q5LYfpY~ovhopXJn7eqq100FjXe~iic9d0dkjP-bfZWLBntWqFK4tsK6EiAAh7-Sj6~8~Fvo4hxb~~bOqk4aymuvUMfXzfv3Nn1hiZXArwAGuo84O0N54OyCyAOKh0EAWsDj3Y7xXTGNggShH~zAZ0gY3xzprMPlJF5XyHlBmHOknzVuI9XXFqCx4ISQc3~UfjY2KmJdigLY~NpVGp9LgacA8xDHTjYIN9KFhEo4i6kcmED4KjwPPlnbtm~FMscbwzT6bTTC9rr4aUNlsjGNuMCWnXSMZgrHO7RwA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000342.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 42,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/342/image/image.jpg?Expires=1776732226&Signature=ns0GWL4veTEYX5NsQ3UJxQRe0gtvTvoqAscfjipBZ01k2lX96q5LYfpY~ovhopXJn7eqq100FjXe~iic9d0dkjP-bfZWLBntWqFK4tsK6EiAAh7-Sj6~8~Fvo4hxb~~bOqk4aymuvUMfXzfv3Nn1hiZXArwAGuo84O0N54OyCyAOKh0EAWsDj3Y7xXTGNggShH~zAZ0gY3xzprMPlJF5XyHlBmHOknzVuI9XXFqCx4ISQc3~UfjY2KmJdigLY~NpVGp9LgacA8xDHTjYIN9KFhEo4i6kcmED4KjwPPlnbtm~FMscbwzT6bTTC9rr4aUNlsjGNuMCWnXSMZgrHO7RwA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_42_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/343/image/image.jpg?Expires=1776732226&Signature=Q5aSon-dFmGzz5IBWMhvfgoUMZrSmLHjgx-qkAeBvz8hE6cGXPCgVhWBrpprz2FGa4XlF1dUR2KKYqgZ1xGgKgYQqP5KO0-fUNIRRrbSETtkksQQqOy0Jg90wWC80vYDzwmNKlWvZolN~yI5zuJiBzV-Mw4Gq1XxB2pviFYecKdmbTxibp9K6FMUycE~7hSk2HQ4zIWyy71~4KVloOgdRDzpBUY2cGMFg7~6Z4j-81hBDl0rAmWMZMgPXDm220LOO4w3kMyJKJvs4kLOvuIuQkv1WezCnBvaVop3UoFHnVEKfpAm1hTbRgFo0HU9PDWtUeEDGQzs3K3Uq9b7W3-W~A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000343.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 43,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/343/image/image.jpg?Expires=1776732226&Signature=Q5aSon-dFmGzz5IBWMhvfgoUMZrSmLHjgx-qkAeBvz8hE6cGXPCgVhWBrpprz2FGa4XlF1dUR2KKYqgZ1xGgKgYQqP5KO0-fUNIRRrbSETtkksQQqOy0Jg90wWC80vYDzwmNKlWvZolN~yI5zuJiBzV-Mw4Gq1XxB2pviFYecKdmbTxibp9K6FMUycE~7hSk2HQ4zIWyy71~4KVloOgdRDzpBUY2cGMFg7~6Z4j-81hBDl0rAmWMZMgPXDm220LOO4w3kMyJKJvs4kLOvuIuQkv1WezCnBvaVop3UoFHnVEKfpAm1hTbRgFo0HU9PDWtUeEDGQzs3K3Uq9b7W3-W~A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_43_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/344/image/image.jpg?Expires=1776732226&Signature=vJElczgx1Ip50nBc9dFuJQJaeyX4g291XQPHB~adKsgbPiuN6V9i3pWxUsVmOCuiscIX7Ac4zARJ2RtratEr9u2bfjkCSFWZp87IK6wQhcPHXKKSwvWeGXS2vgHEn6hLqRIalBI1NNNdeY0G1xb9U~gpX7SX2gFry9PoZg~U-odCispK67F1K4WBJwm-yZXNWmbmMfEDebYoHsuCgONtd9RlFHx6-a4GAmYZru-G3AT6DV9OQHnHoxwdMfiNmPO8JwXAxkOI~ILyw6qaFyjtloTyEHh8SK5aQSP-y4foVdwSw7XN7HiopVdyEvVlzir-ciFB9q-TFJhAGih4zR3a-Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000344.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 44,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/344/image/image.jpg?Expires=1776732226&Signature=vJElczgx1Ip50nBc9dFuJQJaeyX4g291XQPHB~adKsgbPiuN6V9i3pWxUsVmOCuiscIX7Ac4zARJ2RtratEr9u2bfjkCSFWZp87IK6wQhcPHXKKSwvWeGXS2vgHEn6hLqRIalBI1NNNdeY0G1xb9U~gpX7SX2gFry9PoZg~U-odCispK67F1K4WBJwm-yZXNWmbmMfEDebYoHsuCgONtd9RlFHx6-a4GAmYZru-G3AT6DV9OQHnHoxwdMfiNmPO8JwXAxkOI~ILyw6qaFyjtloTyEHh8SK5aQSP-y4foVdwSw7XN7HiopVdyEvVlzir-ciFB9q-TFJhAGih4zR3a-Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_44_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/345/image/image.jpg?Expires=1776732226&Signature=U0Ldp2YIxAbUKuTK4KrKqbbXEe6J4~89XZuhPR8NTPkNfSA5qc6eRAWlHr7VHlfIZ0A-6oeWyOYC0VTJno-lBCSEMQLoKELqEqCb8DeYewXpM7ne5y-~8dOq0sJcOg1YdpaSRD~kDLesL4P9R9aTmoh0ZJu5leoy4pS4ifQpJabEszcH-G3wKCOjFJhEIgxCQwzP9gfmNbZm3ox27KXEG7m6rKXRdSBaTWJlvAvrC1lVQK3jMrRYKmnResgzH8zBNuBeFxz32xqgG4XrlT186BFYNGtnDmD3b6-vBkrV6ZOE-qpYGBfQGZjTYqActTF6I-BTlZKdTzavAdc2A8myxA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000345.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 45,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/345/image/image.jpg?Expires=1776732226&Signature=U0Ldp2YIxAbUKuTK4KrKqbbXEe6J4~89XZuhPR8NTPkNfSA5qc6eRAWlHr7VHlfIZ0A-6oeWyOYC0VTJno-lBCSEMQLoKELqEqCb8DeYewXpM7ne5y-~8dOq0sJcOg1YdpaSRD~kDLesL4P9R9aTmoh0ZJu5leoy4pS4ifQpJabEszcH-G3wKCOjFJhEIgxCQwzP9gfmNbZm3ox27KXEG7m6rKXRdSBaTWJlvAvrC1lVQK3jMrRYKmnResgzH8zBNuBeFxz32xqgG4XrlT186BFYNGtnDmD3b6-vBkrV6ZOE-qpYGBfQGZjTYqActTF6I-BTlZKdTzavAdc2A8myxA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_45_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/346/image/image.jpg?Expires=1776732226&Signature=iIFtpErc5FG0CLsQGqP0znHCYz0gwSnY6bwsjQ42KWq1W6nCy-pw2gXjw0-CoxpoYWBO83gt0~O~sArRweXLvX5voctrIAiz7oqHIy9O9CwpSEWzaGq9pDfUi2lhUDnpM45ULNDSdlnBOxjDzL-LDjkK-qLdW67IKkfsxB1PyDPUgiDVvojIpO6E6Y8-2w1kPSScpNu6QTcFfHpS6SBz0056lENT5-j10rKLey6AP9s4akmx8NvT0K7jAW7wkQr0Ee0IfI9vrzgel5zkUicoG0DrE14YWQ5Ue5ujXak14c6uEwdDxolGrtXc8QLHLWkVzFZvBB0-M1034mU5Le0VyA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000346.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 46,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/346/image/image.jpg?Expires=1776732226&Signature=iIFtpErc5FG0CLsQGqP0znHCYz0gwSnY6bwsjQ42KWq1W6nCy-pw2gXjw0-CoxpoYWBO83gt0~O~sArRweXLvX5voctrIAiz7oqHIy9O9CwpSEWzaGq9pDfUi2lhUDnpM45ULNDSdlnBOxjDzL-LDjkK-qLdW67IKkfsxB1PyDPUgiDVvojIpO6E6Y8-2w1kPSScpNu6QTcFfHpS6SBz0056lENT5-j10rKLey6AP9s4akmx8NvT0K7jAW7wkQr0Ee0IfI9vrzgel5zkUicoG0DrE14YWQ5Ue5ujXak14c6uEwdDxolGrtXc8QLHLWkVzFZvBB0-M1034mU5Le0VyA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_46_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/347/image/image.jpg?Expires=1776732226&Signature=tvb4ZpgREUb85au~-uV-fNgGbWtg6qcAuAtdL2gm4H0HHxkmHDTfQgAiJkgwAAyT96fFdaJqmfsN8rAD~Eqos3ED7mXCuP~U8kJ5rHfPldTx4oislwfoBt9a3O4fd2jAjOzjPcJA1F1e-zbXjII6fjtKHc9VNWHRH2b05SGqogOy4--b5t49C4ogf3HgWYmIAia7GnTU6SGYQtC6Tgba4XoEY8iDrmnma9Xq4MwokepxLQ4MmBrzC~DDYCXuIP9vzH0AEEtWSejMATG8WPpmUBBhboRqZu8Y7YqkgmqL3PCVZH-OKqTtKbudpwE3d7b1ri8ly6VVhkek2OVVICn0cQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000347.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 47,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/347/image/image.jpg?Expires=1776732226&Signature=tvb4ZpgREUb85au~-uV-fNgGbWtg6qcAuAtdL2gm4H0HHxkmHDTfQgAiJkgwAAyT96fFdaJqmfsN8rAD~Eqos3ED7mXCuP~U8kJ5rHfPldTx4oislwfoBt9a3O4fd2jAjOzjPcJA1F1e-zbXjII6fjtKHc9VNWHRH2b05SGqogOy4--b5t49C4ogf3HgWYmIAia7GnTU6SGYQtC6Tgba4XoEY8iDrmnma9Xq4MwokepxLQ4MmBrzC~DDYCXuIP9vzH0AEEtWSejMATG8WPpmUBBhboRqZu8Y7YqkgmqL3PCVZH-OKqTtKbudpwE3d7b1ri8ly6VVhkek2OVVICn0cQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_47_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/348/image/image.jpg?Expires=1776732226&Signature=CLAD7umSlzzgvb6XebachSmEXeny-dH05hQ5N1uQrI-05E~co2hqr0QOPoKpbErhIfqabwZrYVe-XRC1l1FrGtOfMTp-ETrGsz-3PUfjzYCWwqK3UPw4Nhb4X1yGX5-88PXbpkk1HGaWr3b9FErq7hBjH7jx4mCg9gd52ra6mUdNJ-PpoB046RnlW6qO9ZkAwnCo-0fw4aMTZDLGe235dFvFURKQKl7kczbPryCvpGojvCRn9X~Hpe9Sd--bB6hKpqQzAynduYOrWS2iEs7vzvTqD3ZmQ0t4QajlekkQdvjLnlb8ZEFtqo1jfTi4FwbuFXwh~VCPOkmgB7sPji~5JQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000348.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 48,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/348/image/image.jpg?Expires=1776732226&Signature=CLAD7umSlzzgvb6XebachSmEXeny-dH05hQ5N1uQrI-05E~co2hqr0QOPoKpbErhIfqabwZrYVe-XRC1l1FrGtOfMTp-ETrGsz-3PUfjzYCWwqK3UPw4Nhb4X1yGX5-88PXbpkk1HGaWr3b9FErq7hBjH7jx4mCg9gd52ra6mUdNJ-PpoB046RnlW6qO9ZkAwnCo-0fw4aMTZDLGe235dFvFURKQKl7kczbPryCvpGojvCRn9X~Hpe9Sd--bB6hKpqQzAynduYOrWS2iEs7vzvTqD3ZmQ0t4QajlekkQdvjLnlb8ZEFtqo1jfTi4FwbuFXwh~VCPOkmgB7sPji~5JQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_48_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/349/image/image.jpg?Expires=1776732226&Signature=eer7bwPcfEmANwPFr~7miKNOUqHVFWUdcn-qXGRpNxJmf-CiTAidRKLoASJvAHL3V0LheqR5hCL0iXQF5TUkO9IN-67ZlCmWlHnPB5~E3uffoSI9FPDI0CX1FVT~C0veEsSHgtXMthTM8n8RsgIKbSLcTQIQ6L6TueE0NFY3hIAVTT1hNa0lHQovSiCHDlgRTHhgFEPK5H60E6LjBIy3pemIS-WoM48809ctueDi4Usj5bvXJZdAuGSS0TTtKgZaWrIIChVCwuLfVKk1AROb8Z9c4DQ~-wOQUHKHobxv8v3a5qqOKp7ELI4El14gN9mF2PFaZcfZxry-KPPHjcSQfA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000349.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 49,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/349/image/image.jpg?Expires=1776732226&Signature=eer7bwPcfEmANwPFr~7miKNOUqHVFWUdcn-qXGRpNxJmf-CiTAidRKLoASJvAHL3V0LheqR5hCL0iXQF5TUkO9IN-67ZlCmWlHnPB5~E3uffoSI9FPDI0CX1FVT~C0veEsSHgtXMthTM8n8RsgIKbSLcTQIQ6L6TueE0NFY3hIAVTT1hNa0lHQovSiCHDlgRTHhgFEPK5H60E6LjBIy3pemIS-WoM48809ctueDi4Usj5bvXJZdAuGSS0TTtKgZaWrIIChVCwuLfVKk1AROb8Z9c4DQ~-wOQUHKHobxv8v3a5qqOKp7ELI4El14gN9mF2PFaZcfZxry-KPPHjcSQfA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_49_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/350/image/image.jpg?Expires=1776732226&Signature=BqO4cNxdDHt70b~rOo5kIQaCqiwd70nKxB-2otmpUf~-Mk08c-WG7~UlTVO7SMaYeAQLKsBLXw4W7K2xWl7nLVHhtXDuLi9czHrzAp1u1HXQZjdZHp3z9Ms5yCldpALvI24LWW8JZBTo5jw4LolkySGx9n-SW6pvRfIVRuxeZUgDlN2jY~15JhiSvRQ8tEt0qrtngkor4ezEb4k2ZQm5WEI2NYKsF3px2IjlfU-elI9QrjBo9nIh7xkBIVNMpo1TrCDbbVx80XMNWGzu6PDbXjjW7rXMRJ0Y~cABWBkjGLPs3dwolSzYiWHNnPWmdqHNtqvQEDM1kFsDNW-XwcQ4CQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000350.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 50,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/350/image/image.jpg?Expires=1776732226&Signature=BqO4cNxdDHt70b~rOo5kIQaCqiwd70nKxB-2otmpUf~-Mk08c-WG7~UlTVO7SMaYeAQLKsBLXw4W7K2xWl7nLVHhtXDuLi9czHrzAp1u1HXQZjdZHp3z9Ms5yCldpALvI24LWW8JZBTo5jw4LolkySGx9n-SW6pvRfIVRuxeZUgDlN2jY~15JhiSvRQ8tEt0qrtngkor4ezEb4k2ZQm5WEI2NYKsF3px2IjlfU-elI9QrjBo9nIh7xkBIVNMpo1TrCDbbVx80XMNWGzu6PDbXjjW7rXMRJ0Y~cABWBkjGLPs3dwolSzYiWHNnPWmdqHNtqvQEDM1kFsDNW-XwcQ4CQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_50_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/351/image/image.jpg?Expires=1776732226&Signature=1x-2nWcR0TY9R22ohYCMWB9MhUSNaJth9ignVuF6n5KlmKpzQJOIHMfy25LF45~CAiOkNaAv~eGJhAnsSecLt-WCkajwV4NF5GqMp3MjGXuGanRP8so82ADsExV5dJ1mwqcO~Ia9l1GrD4Rba-kdm~l7PEQXKkIi24-XRO~eu7~bCh93pxfvPq9atUIBKvpUa~dpWUQ7BJ19fCZPNUWF~T6fNtDqqO1lg3sZp9q78xBigv-tkSslvd8qEMZ4cLN4NGWmZOdrTZiMWtdqwiMl6hQgnoe4qH~ortss-1fvZEhGL7vwCKPX2wpV79F-4WKgvrDSKAqciGQ-8GxhFe0eUA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000351.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 51,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/351/image/image.jpg?Expires=1776732226&Signature=1x-2nWcR0TY9R22ohYCMWB9MhUSNaJth9ignVuF6n5KlmKpzQJOIHMfy25LF45~CAiOkNaAv~eGJhAnsSecLt-WCkajwV4NF5GqMp3MjGXuGanRP8so82ADsExV5dJ1mwqcO~Ia9l1GrD4Rba-kdm~l7PEQXKkIi24-XRO~eu7~bCh93pxfvPq9atUIBKvpUa~dpWUQ7BJ19fCZPNUWF~T6fNtDqqO1lg3sZp9q78xBigv-tkSslvd8qEMZ4cLN4NGWmZOdrTZiMWtdqwiMl6hQgnoe4qH~ortss-1fvZEhGL7vwCKPX2wpV79F-4WKgvrDSKAqciGQ-8GxhFe0eUA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_51_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/352/image/image.jpg?Expires=1776732226&Signature=yECfCLty~JkvsanHsGJQy1PmGu738SFw99NH2y3T8FpRSqvllRRRKk3wAZ0AnlXvFJLZ37oHKW0w7ZzdGPoZCgPL33y5PgBB2rSSGu9lCiyrg07VEqg8JiE9L9uEUsdGOVD6o8tLg-mm0ZZp3bgfYLrOdG8DTLF-ObRZ3sp39NnQyb8ZUJKILCBGQz5cryNFSrYKPW3tcmvZkSWzTMdhjVTIgKuBIje8j-SPu7fkZsC-LdvV-AeRAV63hpLL3PLtdEuHcAEsXOg1jVZvn3xloU5GlVnybWHDQmjAI6tMO0vQADq6YfgPuxnij~UFL9KAkr3xT4AK7lN2bb71YSoSjQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000352.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 52,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/352/image/image.jpg?Expires=1776732226&Signature=yECfCLty~JkvsanHsGJQy1PmGu738SFw99NH2y3T8FpRSqvllRRRKk3wAZ0AnlXvFJLZ37oHKW0w7ZzdGPoZCgPL33y5PgBB2rSSGu9lCiyrg07VEqg8JiE9L9uEUsdGOVD6o8tLg-mm0ZZp3bgfYLrOdG8DTLF-ObRZ3sp39NnQyb8ZUJKILCBGQz5cryNFSrYKPW3tcmvZkSWzTMdhjVTIgKuBIje8j-SPu7fkZsC-LdvV-AeRAV63hpLL3PLtdEuHcAEsXOg1jVZvn3xloU5GlVnybWHDQmjAI6tMO0vQADq6YfgPuxnij~UFL9KAkr3xT4AK7lN2bb71YSoSjQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_52_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/353/image/image.jpg?Expires=1776732226&Signature=K0lp0dF~iiitdf0Bpqg8HHgIIPch0~PgBdxU0Ch4fbaamkzYEho26K4CjcdiXVIpZvMnITrBBCDWCMaYcgfVs-GvdMmCf5fisIPry5ZrlQOSCw4TPccuo-iU0tfZjMGZVMc8bpUnexbvpAb1Dlwx-tTbuRxy87XVFVy1QrysPsdyRNzgiudMOKMe~Ja3p-exFiPJkNrUoXUazd8CUARGLIScGs1DZC6dkW0hQR6oAIk8fGif0P9Z2F~DTVNPWQo2S~gkfUqL-Od190bc-k21mFlRzIsuOmbObRO-iDuQQ53C9RcFc2Dfd0PXCbz0rYeq4XtM02WpuEVvXRl-pc74sw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000353.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 53,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/353/image/image.jpg?Expires=1776732226&Signature=K0lp0dF~iiitdf0Bpqg8HHgIIPch0~PgBdxU0Ch4fbaamkzYEho26K4CjcdiXVIpZvMnITrBBCDWCMaYcgfVs-GvdMmCf5fisIPry5ZrlQOSCw4TPccuo-iU0tfZjMGZVMc8bpUnexbvpAb1Dlwx-tTbuRxy87XVFVy1QrysPsdyRNzgiudMOKMe~Ja3p-exFiPJkNrUoXUazd8CUARGLIScGs1DZC6dkW0hQR6oAIk8fGif0P9Z2F~DTVNPWQo2S~gkfUqL-Od190bc-k21mFlRzIsuOmbObRO-iDuQQ53C9RcFc2Dfd0PXCbz0rYeq4XtM02WpuEVvXRl-pc74sw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_53_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/354/image/image.jpg?Expires=1776732226&Signature=Yo1OpUFK12rEPz0p95bDPu4qFStReQ7ChPKvAccKJh6bDOglnd1iVwm2udUowRDMS1gxkMxzhSaCMW5RN7KyVW~rc6i5TTHznKMtQ-RFPXICMlyLATcXDp4EG8T3fa~28kRNTCo2BYR~JMQ-YRmZ2zGx9GRz5sVO1eS5YQK4BYFXmyFGulKNLbuL7dTeO6Mi3hsxaywltA0jvmYKSc1V8ya9MlspWCyoXQ1GTS1Nso8DXby38wRvh1DC54F0XXJp7~Ygnt5wjP9tXerNzB4Adu0fcBKAFGhHC-lbNo~e4URYpKy9LiXnZ7wMdg0qkqoKxwU~wWBYwU5J~JOvLVUfXQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000354.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 54,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/354/image/image.jpg?Expires=1776732226&Signature=Yo1OpUFK12rEPz0p95bDPu4qFStReQ7ChPKvAccKJh6bDOglnd1iVwm2udUowRDMS1gxkMxzhSaCMW5RN7KyVW~rc6i5TTHznKMtQ-RFPXICMlyLATcXDp4EG8T3fa~28kRNTCo2BYR~JMQ-YRmZ2zGx9GRz5sVO1eS5YQK4BYFXmyFGulKNLbuL7dTeO6Mi3hsxaywltA0jvmYKSc1V8ya9MlspWCyoXQ1GTS1Nso8DXby38wRvh1DC54F0XXJp7~Ygnt5wjP9tXerNzB4Adu0fcBKAFGhHC-lbNo~e4URYpKy9LiXnZ7wMdg0qkqoKxwU~wWBYwU5J~JOvLVUfXQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_54_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/355/image/image.jpg?Expires=1776732226&Signature=VZBdDGc7UqneDMOIdafc4XZVAjEhujTRsAljDTHC4XG0uXDPoBEjVn2mA0Usv-ber0ImT49U5pvEMExurWRRhWPBWbs6PCitcGlazARpmq8cgGan3ID~vFq8EDo-yQDLLYvVxH-gmlgox30sc3gPSeKDKQgs02b81UdpGULbLWLiYLrbBkZOjf6URm3zCJSBbMJYBIuhnE9EYPN7s11QujFdQIuDJVDSqqXVfTrkop~tEyPGKT8xj4yZylyhxR66H8h~bDRXfbAlN1F73vHNAtg~DY9xX5EkAPJcDWXRSCorLfOFvpjH7gikmqJkv10RN5c6715keQxkgJOVD9phaA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000355.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 55,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/355/image/image.jpg?Expires=1776732226&Signature=VZBdDGc7UqneDMOIdafc4XZVAjEhujTRsAljDTHC4XG0uXDPoBEjVn2mA0Usv-ber0ImT49U5pvEMExurWRRhWPBWbs6PCitcGlazARpmq8cgGan3ID~vFq8EDo-yQDLLYvVxH-gmlgox30sc3gPSeKDKQgs02b81UdpGULbLWLiYLrbBkZOjf6URm3zCJSBbMJYBIuhnE9EYPN7s11QujFdQIuDJVDSqqXVfTrkop~tEyPGKT8xj4yZylyhxR66H8h~bDRXfbAlN1F73vHNAtg~DY9xX5EkAPJcDWXRSCorLfOFvpjH7gikmqJkv10RN5c6715keQxkgJOVD9phaA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_55_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/356/image/image.jpg?Expires=1776732226&Signature=dd15q22n0dGFLNRW37NktKo9BoBOHVfoBgUG5pNREQ-T1iZVy7CSqIpUn2XG0MqkeOM0WxR-XSRC~g6m8Ebvt4IQA1u4XgQ7hr7FOWleWVvT~AaXBl8bAMQ0uzFEpNhXPI1OKZtanbZAOqk9ywcWb2PJxnCqGTqs2EQSLP6-Cok~bZ4sKXCX~6y2XDzyI4D7wK-imq9ask6cp-EAdlYwpKZcptIXYb-~Kw2w4zssBqJY8wi8fNoGHM6FTx-QsNU8UoI6W-iDBSbWgAXPCEp8K1hA6EVBJs8NnYlEqPz1-f4y8uP64EgLZpMqWSsVjIU~iwA63w5~mCV1DHQCKj2wqA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000356.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 56,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/356/image/image.jpg?Expires=1776732226&Signature=dd15q22n0dGFLNRW37NktKo9BoBOHVfoBgUG5pNREQ-T1iZVy7CSqIpUn2XG0MqkeOM0WxR-XSRC~g6m8Ebvt4IQA1u4XgQ7hr7FOWleWVvT~AaXBl8bAMQ0uzFEpNhXPI1OKZtanbZAOqk9ywcWb2PJxnCqGTqs2EQSLP6-Cok~bZ4sKXCX~6y2XDzyI4D7wK-imq9ask6cp-EAdlYwpKZcptIXYb-~Kw2w4zssBqJY8wi8fNoGHM6FTx-QsNU8UoI6W-iDBSbWgAXPCEp8K1hA6EVBJs8NnYlEqPz1-f4y8uP64EgLZpMqWSsVjIU~iwA63w5~mCV1DHQCKj2wqA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_56_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/357/image/image.jpg?Expires=1776732226&Signature=u3CM8SCgeXxEFm4KTLQuvXNaB4bFiRZGgJ9A-xiLd1d9OP5dSGIMlJHlrp~n92CqAxaJQgPkM4uKNMQeIS44WtthUzlUF3inFlcfvmq7qhrn3Nu-gVJWcbnd7liq3Ja7aWki3f3sKwA4-A5E9FisbMFbvhBlXqsQImDi3JDgfrNaroboRL5brpzaLc4Ds7Bo2CTaf7t5Q0mHDM6npXM5OTeiqYXx~aThgcnXTf5q4v~tqY-DWfb1W5UPdklXPkDT2nqk2RPh7yAcAlfpf8RktmX6eD8-qJEvVBD76ZJD7fG1iGg31Oj0JZsiz73K4oChy8HRDgVsb8tKgoRxwvtSPA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000357.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 57,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/357/image/image.jpg?Expires=1776732226&Signature=u3CM8SCgeXxEFm4KTLQuvXNaB4bFiRZGgJ9A-xiLd1d9OP5dSGIMlJHlrp~n92CqAxaJQgPkM4uKNMQeIS44WtthUzlUF3inFlcfvmq7qhrn3Nu-gVJWcbnd7liq3Ja7aWki3f3sKwA4-A5E9FisbMFbvhBlXqsQImDi3JDgfrNaroboRL5brpzaLc4Ds7Bo2CTaf7t5Q0mHDM6npXM5OTeiqYXx~aThgcnXTf5q4v~tqY-DWfb1W5UPdklXPkDT2nqk2RPh7yAcAlfpf8RktmX6eD8-qJEvVBD76ZJD7fG1iGg31Oj0JZsiz73K4oChy8HRDgVsb8tKgoRxwvtSPA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_57_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/358/image/image.jpg?Expires=1776732226&Signature=rRKvvAbDkfXH6fGd~IY~6BkG6DP~~WJmFIqQ8mdHgQn963HpiQMGKPM8vBYV1iyZogN4YnwBt-Hkw8LF4H3gXiiaN4i~EuoLnibCI7lEeI4TH-i6f55SepDzhbo~RACW43zzNEoFOsdBvaPq4AS8LQ0KswH9zOfT7qztF2n1iTORQkVqqFn3sfHl52wcTHtVdMCSwL0r-n~Dflw250S3G6WnP1dPBDW-8NPJE2Rs2uBCUjpxZY5bxzYFhM15hmwty-6kL2SUpSwf7Qxn1PgVEYlS80MAnl7yjWdccLricMIdihfhkSLU5HAWz3QiQImOhqiAsoPJ6IGmU7-s1ClJ3w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000358.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 58,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/358/image/image.jpg?Expires=1776732226&Signature=rRKvvAbDkfXH6fGd~IY~6BkG6DP~~WJmFIqQ8mdHgQn963HpiQMGKPM8vBYV1iyZogN4YnwBt-Hkw8LF4H3gXiiaN4i~EuoLnibCI7lEeI4TH-i6f55SepDzhbo~RACW43zzNEoFOsdBvaPq4AS8LQ0KswH9zOfT7qztF2n1iTORQkVqqFn3sfHl52wcTHtVdMCSwL0r-n~Dflw250S3G6WnP1dPBDW-8NPJE2Rs2uBCUjpxZY5bxzYFhM15hmwty-6kL2SUpSwf7Qxn1PgVEYlS80MAnl7yjWdccLricMIdihfhkSLU5HAWz3QiQImOhqiAsoPJ6IGmU7-s1ClJ3w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_58_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/359/image/image.jpg?Expires=1776732226&Signature=gXamreKL3ayXHHa-8N5Ke2-ELT1UrYBXj3tpow-dvcSXiE3T-kgV1xeabmUIDP2MRdsaMo8DctZPMolIyJKaynQKIJ9kzbn9S~5Qj~H05nUdsxJeEL0PwaPbwEAq1-q0Zh1ZY7MZLwiVKE94pKVF4CcLIIIPSF28nlHFky-rjspOV1JBwqocoo~1j1AnZoo7vhi8aFBGsZ~~mBblaHXfEazEtjV3rNOTpbJn6FrjcbaFRZvETYwfVIPdd76HQZuxy65Cc7Hkbv~hfo1YiOMCiQrGPPqrIobG6OFBatnQhdQSmrcmcSw-KBIeX1~3rdlMgB5jlRrifVhDbBWGgi6uTQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000359.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 59,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/359/image/image.jpg?Expires=1776732226&Signature=gXamreKL3ayXHHa-8N5Ke2-ELT1UrYBXj3tpow-dvcSXiE3T-kgV1xeabmUIDP2MRdsaMo8DctZPMolIyJKaynQKIJ9kzbn9S~5Qj~H05nUdsxJeEL0PwaPbwEAq1-q0Zh1ZY7MZLwiVKE94pKVF4CcLIIIPSF28nlHFky-rjspOV1JBwqocoo~1j1AnZoo7vhi8aFBGsZ~~mBblaHXfEazEtjV3rNOTpbJn6FrjcbaFRZvETYwfVIPdd76HQZuxy65Cc7Hkbv~hfo1YiOMCiQrGPPqrIobG6OFBatnQhdQSmrcmcSw-KBIeX1~3rdlMgB5jlRrifVhDbBWGgi6uTQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_59_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/360/image/image.jpg?Expires=1776732226&Signature=Zej5VVIpmcl6XFE5Ifr6SwnpGJ700fK2EBz7jYyA2DGFZGtCzpwJKtlofX93KaSGpUYC-uXlEt1fkouwGSIRvGJgIhFi9TnwIQX0jlVMcP7hcfhAMkpUERmY2aOz27l7a16j4kZOu41QsjaHN5aNaVSQl6tXlh96-gOtHnUhs7YQi-SBCbJyAx~3daG4R6NNd2nBSln~xWRu~EsFeSikJmWSLg~6eiG9T4lOWj8IOoHuyDYTZG445pGqHu0eZGVY0Ks2HvMylYBJJQK3XAKFJCqQ25sCKQjHZgwRopmEytSrCi8V66p7kFpBvARfcRuCaEe8-RJMZwRALoYUI06y9w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000360.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 60,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/360/image/image.jpg?Expires=1776732226&Signature=Zej5VVIpmcl6XFE5Ifr6SwnpGJ700fK2EBz7jYyA2DGFZGtCzpwJKtlofX93KaSGpUYC-uXlEt1fkouwGSIRvGJgIhFi9TnwIQX0jlVMcP7hcfhAMkpUERmY2aOz27l7a16j4kZOu41QsjaHN5aNaVSQl6tXlh96-gOtHnUhs7YQi-SBCbJyAx~3daG4R6NNd2nBSln~xWRu~EsFeSikJmWSLg~6eiG9T4lOWj8IOoHuyDYTZG445pGqHu0eZGVY0Ks2HvMylYBJJQK3XAKFJCqQ25sCKQjHZgwRopmEytSrCi8V66p7kFpBvARfcRuCaEe8-RJMZwRALoYUI06y9w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_60_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/361/image/image.jpg?Expires=1776732226&Signature=Tl38XtS1NaODotLR90HU5THZ~aCKlCrN2qynsty3hP6kSs1eITRqHqL-1E9QITGoi9ZhfhEw-9TnwJA3ikAoZnwZpwKUMRfN2TX5lP7Vo4dgpa3XBine3jlaUNq6zYQS0J3klyczRsL93JJOzHDLRA6e-rD8XgzPMDqOC5z4uDK~PYH9ITbMF76oDZCgBO-V6Siv6QpSPb~y7DaaEeb-WTn6LtSsvB-fCDBf6RRDQlVrMucjznHGGAY4We~iNE7f8UKPDsD63wCwtsoOGzlLNh8iwU68e3WVW30irsePD~nBDT98ShxdXxSozS2QfpR6bhZgpdoX-Ocn0MW9hYVRZw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000361.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 61,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/361/image/image.jpg?Expires=1776732226&Signature=Tl38XtS1NaODotLR90HU5THZ~aCKlCrN2qynsty3hP6kSs1eITRqHqL-1E9QITGoi9ZhfhEw-9TnwJA3ikAoZnwZpwKUMRfN2TX5lP7Vo4dgpa3XBine3jlaUNq6zYQS0J3klyczRsL93JJOzHDLRA6e-rD8XgzPMDqOC5z4uDK~PYH9ITbMF76oDZCgBO-V6Siv6QpSPb~y7DaaEeb-WTn6LtSsvB-fCDBf6RRDQlVrMucjznHGGAY4We~iNE7f8UKPDsD63wCwtsoOGzlLNh8iwU68e3WVW30irsePD~nBDT98ShxdXxSozS2QfpR6bhZgpdoX-Ocn0MW9hYVRZw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_61_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/362/image/image.jpg?Expires=1776732226&Signature=MHxheGHVfGF~dVFBNKLFqZ-RUkgtfJzGi7WL7L4-3cLrjhoJeNczoyO9-0GBGTal0Nxmn8udMJMnpH~Ubo8lBcUAuTz-I6EyPQkfW02YvomXoAk5cmUp4MWV6ajx9N1j-xzLeRtfsgxU2P4adi-AsPWbra7-RnLh2JoTVlseK3v2c8RpgjhjbZ0WHgXnfuhmvJPfLDfkP5kvDIGmSgI-BcKqfhnH31RWBlJrjUCPjozJosE~bx03lrx~cpL5MFo3oT8yi5fKcOHA8DRPrxNHzyaGrwqudwUtxu-Gu-AoSRBOlj6ss6JOp97-LWbrj47kud5hCaEXf2wQ2pTNjLkLLw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000362.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 62,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/362/image/image.jpg?Expires=1776732226&Signature=MHxheGHVfGF~dVFBNKLFqZ-RUkgtfJzGi7WL7L4-3cLrjhoJeNczoyO9-0GBGTal0Nxmn8udMJMnpH~Ubo8lBcUAuTz-I6EyPQkfW02YvomXoAk5cmUp4MWV6ajx9N1j-xzLeRtfsgxU2P4adi-AsPWbra7-RnLh2JoTVlseK3v2c8RpgjhjbZ0WHgXnfuhmvJPfLDfkP5kvDIGmSgI-BcKqfhnH31RWBlJrjUCPjozJosE~bx03lrx~cpL5MFo3oT8yi5fKcOHA8DRPrxNHzyaGrwqudwUtxu-Gu-AoSRBOlj6ss6JOp97-LWbrj47kud5hCaEXf2wQ2pTNjLkLLw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_62_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/363/image/image.jpg?Expires=1776732226&Signature=rzoGQPD1OHVN7fHD7r1Oqi2zyVSsxUj7wZ9~YpwNNtrT9XaUDIvQhGdsjN5or5TAs0QIhGtJ2dm0AKnnOPls~Iq4MyxLNIn0sQ2CTY2FIuYtTRnFAkgblUzmXeTbAk8gF7xIv609U1OJNQ~-OJPz9Ey0JV0b8HyQwZPcypQPv-WEvceli3XKWnaAR8-8BrzdWmKbOMRE0Dl8s0vPVQ5DW8WDtL1xN3u4NKChxG3Hf0Rr5WaI0YSZwESAuCUTvEYEPlJda37NdMfjXIqRCmOZ~p2iDbpX31wmMqFzHnHQpE3Y~QJ7z1EF0CSfMS2T7wsaYS6Et5JCB18SI0rSwodqIA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000363.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 63,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/363/image/image.jpg?Expires=1776732226&Signature=rzoGQPD1OHVN7fHD7r1Oqi2zyVSsxUj7wZ9~YpwNNtrT9XaUDIvQhGdsjN5or5TAs0QIhGtJ2dm0AKnnOPls~Iq4MyxLNIn0sQ2CTY2FIuYtTRnFAkgblUzmXeTbAk8gF7xIv609U1OJNQ~-OJPz9Ey0JV0b8HyQwZPcypQPv-WEvceli3XKWnaAR8-8BrzdWmKbOMRE0Dl8s0vPVQ5DW8WDtL1xN3u4NKChxG3Hf0Rr5WaI0YSZwESAuCUTvEYEPlJda37NdMfjXIqRCmOZ~p2iDbpX31wmMqFzHnHQpE3Y~QJ7z1EF0CSfMS2T7wsaYS6Et5JCB18SI0rSwodqIA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_63_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/364/image/image.jpg?Expires=1776732226&Signature=OVQiZGnRuyEDD0UvBQOVcPix6FFozm5wL4epsPc4HIi19Iib~TVUP559vXsEh6PZpF9wH7q~qgBUOIwAMoWinqkTJLy-axYZZEWuBr6~lIKMBgYBorXbUEqO2DfGRgWyBEplMkGfc3cHhaCsMR7QcaWy0nqzgqNlJgZdENYOW7UvxYPc2gBPo8YsNBhSoaM6TufymMODBG37XJ42okODI-UFsYVR9WhkLk9b5y4IitCqjTCt-shWbaJFH~3e8Y4nsjNHD7Rl3DZB06TNOtV3Orv5xpOOfjSMm~YmaBGTd-~cH~KJqHqWr3gjF1Lc-WwbvQfPb6x~Fgxg-vjr95LoRw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000364.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 64,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/364/image/image.jpg?Expires=1776732226&Signature=OVQiZGnRuyEDD0UvBQOVcPix6FFozm5wL4epsPc4HIi19Iib~TVUP559vXsEh6PZpF9wH7q~qgBUOIwAMoWinqkTJLy-axYZZEWuBr6~lIKMBgYBorXbUEqO2DfGRgWyBEplMkGfc3cHhaCsMR7QcaWy0nqzgqNlJgZdENYOW7UvxYPc2gBPo8YsNBhSoaM6TufymMODBG37XJ42okODI-UFsYVR9WhkLk9b5y4IitCqjTCt-shWbaJFH~3e8Y4nsjNHD7Rl3DZB06TNOtV3Orv5xpOOfjSMm~YmaBGTd-~cH~KJqHqWr3gjF1Lc-WwbvQfPb6x~Fgxg-vjr95LoRw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_64_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/365/image/image.jpg?Expires=1776732226&Signature=oUIJ735aH4l9d0FgkseBZyxvcXY6LVg26vMrzAoy4~FIJ95Tv4mTYtiuUl5cRKoZRNslAkd-RLrGpYNKfiW-cGpU6qJY9aFsZJDKS6HqiRuN0RDzJWF2A2SmyXIGqLxED~Q8Vi1Rc8P6dbDCscjrlTnQKgp4iB2KYVTBzvQ0ZpEGzCNmutVFSNbW-ssugvINu9pDSowfTz-1TO4fuYaOBi3c2fhO~H7ES-E86r4lMMdIA0hQ3WeVsHGt4dopEkZCnqV8yRmEBr5bNZiFcvPBiS~q7ji6TWx7uXOkJzXoBFOKUw9C8hvieZj32XtAliG5OXXhAYdW41dJ4Ia70oMXGg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000365.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 65,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/365/image/image.jpg?Expires=1776732226&Signature=oUIJ735aH4l9d0FgkseBZyxvcXY6LVg26vMrzAoy4~FIJ95Tv4mTYtiuUl5cRKoZRNslAkd-RLrGpYNKfiW-cGpU6qJY9aFsZJDKS6HqiRuN0RDzJWF2A2SmyXIGqLxED~Q8Vi1Rc8P6dbDCscjrlTnQKgp4iB2KYVTBzvQ0ZpEGzCNmutVFSNbW-ssugvINu9pDSowfTz-1TO4fuYaOBi3c2fhO~H7ES-E86r4lMMdIA0hQ3WeVsHGt4dopEkZCnqV8yRmEBr5bNZiFcvPBiS~q7ji6TWx7uXOkJzXoBFOKUw9C8hvieZj32XtAliG5OXXhAYdW41dJ4Ia70oMXGg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_65_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/366/image/image.jpg?Expires=1776732226&Signature=UXd1ir7wGyp9l-gctCPqZVy7CrglQLvp15ES12ikIFL95mS2ahhXNNpWErsJN1pyANSljqKEiAD4DpmG6rfLWUCY68824SobdA2sAc6J8PNy~z4iQ-Tl57JClISSIq1bN3ZgtmJT0GTplFtqNPhjetajVhtXgJW6VVA4CoewENg8B0vZXhcdfmnoz4MdEbQ74nWgXy~KqS2coFxuWwyWpWBR6Zdus6r0t0lFGghWhzdan-w4JMyHX5KBjoSTy8fQPonc-nIIUod1W-NS8548VwX4J-IQgfz3iCZz1EzrLfcC5fKA2xnmJfXgw9Li3ISpuvuh-lDOaikcLWoBTNhMUg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000366.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 66,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/366/image/image.jpg?Expires=1776732226&Signature=UXd1ir7wGyp9l-gctCPqZVy7CrglQLvp15ES12ikIFL95mS2ahhXNNpWErsJN1pyANSljqKEiAD4DpmG6rfLWUCY68824SobdA2sAc6J8PNy~z4iQ-Tl57JClISSIq1bN3ZgtmJT0GTplFtqNPhjetajVhtXgJW6VVA4CoewENg8B0vZXhcdfmnoz4MdEbQ74nWgXy~KqS2coFxuWwyWpWBR6Zdus6r0t0lFGghWhzdan-w4JMyHX5KBjoSTy8fQPonc-nIIUod1W-NS8548VwX4J-IQgfz3iCZz1EzrLfcC5fKA2xnmJfXgw9Li3ISpuvuh-lDOaikcLWoBTNhMUg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_66_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/367/image/image.jpg?Expires=1776732226&Signature=ZOkZHB8PSE-5Nw5xiUGDyFmvvUCcLg7RQJykeImzX5R4qYy49q~Vg5B7XjZiOQKmhrnVRoaYVdBqRk8Htde9AQhB5Z2vpKU6pNX0eJ0nyTeVrU6CQznaThjT7sJAf~1wIB52xFBOND439PecW~oPp1PVoiXV5lHvp27D~cwFPDlECF02GekYgKQy-E0KXzK7dNasitz~OoF1GpFH41NYXStydVCYmqnEey0L-ERQ3DEnbfAxZMpcHyWSl2gK8HXgqdO8bXfh88EHK5iuK5i5MId4c313xAuAx1kFy~lA5c2jz0pHTj3lDQnz-JkCs3pygd-nh-0RbFLdtkI-IZ-1Ow__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000367.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 67,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/367/image/image.jpg?Expires=1776732226&Signature=ZOkZHB8PSE-5Nw5xiUGDyFmvvUCcLg7RQJykeImzX5R4qYy49q~Vg5B7XjZiOQKmhrnVRoaYVdBqRk8Htde9AQhB5Z2vpKU6pNX0eJ0nyTeVrU6CQznaThjT7sJAf~1wIB52xFBOND439PecW~oPp1PVoiXV5lHvp27D~cwFPDlECF02GekYgKQy-E0KXzK7dNasitz~OoF1GpFH41NYXStydVCYmqnEey0L-ERQ3DEnbfAxZMpcHyWSl2gK8HXgqdO8bXfh88EHK5iuK5i5MId4c313xAuAx1kFy~lA5c2jz0pHTj3lDQnz-JkCs3pygd-nh-0RbFLdtkI-IZ-1Ow__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_67_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/368/image/image.jpg?Expires=1776732226&Signature=ODg6Cyg3t-JwHjgsPUugsN-cmNIuYAYjxjVXwC18l2Ae8uTTOHArv64TjgpgBAPGzlVoSvi5gLpXr-pz2fIdy0et7piSWSwYmUqhQrXOAVW~ZxgObD7X6~N-sfUldvGtuOH0YePOMdwU0uwJqgdcD~7DBz6u0GXfMVSbU5IpsyT2p~M6tkh1R3M7WY-n1ogL67p0u1pjSYS8DtUT3S~gPZM5t8ny4R912B9lqamGgUbn2WbOLa99pJlE~lE51IJUgSud6Y0Ny9RavZzF-V71QTv43Abd42MgDVujqU-g6f~FaXsqhSYlu-bfxBrofbiSdmQ9k8cmgcYOJoFao7fZJg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000368.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 68,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/368/image/image.jpg?Expires=1776732226&Signature=ODg6Cyg3t-JwHjgsPUugsN-cmNIuYAYjxjVXwC18l2Ae8uTTOHArv64TjgpgBAPGzlVoSvi5gLpXr-pz2fIdy0et7piSWSwYmUqhQrXOAVW~ZxgObD7X6~N-sfUldvGtuOH0YePOMdwU0uwJqgdcD~7DBz6u0GXfMVSbU5IpsyT2p~M6tkh1R3M7WY-n1ogL67p0u1pjSYS8DtUT3S~gPZM5t8ny4R912B9lqamGgUbn2WbOLa99pJlE~lE51IJUgSud6Y0Ny9RavZzF-V71QTv43Abd42MgDVujqU-g6f~FaXsqhSYlu-bfxBrofbiSdmQ9k8cmgcYOJoFao7fZJg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_68_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/369/image/image.jpg?Expires=1776732226&Signature=R14yiiZBS2QPc6e4bYbLN6ZH7vZpoAbqeB7hjQqsNgJSDzl5pNm6Rw2ywpBP60Qeg571gkStliWzwhhCQrl9crPTbwPC~kxWAFa0ZaVn0Sq85QMA70B51DyNH96IYK0b7UKveCIcJciGyBdC2Kp7UE4~bLQxpROTNTnqxLQ45NlwOuprvBlcEqb4FKW0xJ0W8m6z9BqlYS6uaincryfytVyPSIGoekOGl2isIzeczcoKjaptx2lzZG~X35wEYjBPYSao~j8awdNilwdiHuPJiKPpyL59bsskljh4aQ0B2fux~cRrx-uvh1QRgZPHG5GXX8HIlqMV9cYPTWlUmhYHiQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000369.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 69,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/369/image/image.jpg?Expires=1776732226&Signature=R14yiiZBS2QPc6e4bYbLN6ZH7vZpoAbqeB7hjQqsNgJSDzl5pNm6Rw2ywpBP60Qeg571gkStliWzwhhCQrl9crPTbwPC~kxWAFa0ZaVn0Sq85QMA70B51DyNH96IYK0b7UKveCIcJciGyBdC2Kp7UE4~bLQxpROTNTnqxLQ45NlwOuprvBlcEqb4FKW0xJ0W8m6z9BqlYS6uaincryfytVyPSIGoekOGl2isIzeczcoKjaptx2lzZG~X35wEYjBPYSao~j8awdNilwdiHuPJiKPpyL59bsskljh4aQ0B2fux~cRrx-uvh1QRgZPHG5GXX8HIlqMV9cYPTWlUmhYHiQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_69_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/370/image/image.jpg?Expires=1776732226&Signature=cnkkJU2bDlQ0wwFAClL2v9kTxmFVaMkVIHYlvY7Xz6BGf62D20IX4JZSG8Zde5RF-zcePaoIr8ankmpuLSWDsA9yYdfCVeNZBkCms0UxYNu89840V2R4qxTY9PAQbHOP1AiYzDirWElZo4AobBHxc8iTxHv5DCQ111JMkfcLSSWq9~XtAeiaLW5lkZNQxzG3LtFbvh0YslpxYwD11GQHO611Tz-68XF5ELay5tlVg3LllvcO3KnpGohndYMTmAKLC4N7ve782EPPKQpwhIS-nuGc4vojk3I5GKYPPxvwXhzUKIfU12LDHFfRJNhfgTqucangT9qOZ8c0S4UR2zSO7A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000370.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 70,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/370/image/image.jpg?Expires=1776732226&Signature=cnkkJU2bDlQ0wwFAClL2v9kTxmFVaMkVIHYlvY7Xz6BGf62D20IX4JZSG8Zde5RF-zcePaoIr8ankmpuLSWDsA9yYdfCVeNZBkCms0UxYNu89840V2R4qxTY9PAQbHOP1AiYzDirWElZo4AobBHxc8iTxHv5DCQ111JMkfcLSSWq9~XtAeiaLW5lkZNQxzG3LtFbvh0YslpxYwD11GQHO611Tz-68XF5ELay5tlVg3LllvcO3KnpGohndYMTmAKLC4N7ve782EPPKQpwhIS-nuGc4vojk3I5GKYPPxvwXhzUKIfU12LDHFfRJNhfgTqucangT9qOZ8c0S4UR2zSO7A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_70_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/371/image/image.jpg?Expires=1776732226&Signature=GW8osYGDLMLYU~KWIOy1y8wwSkT4mAtegLoNs0eD92yX9BdvpJLUIK7Bh-hggfHJsjcMQc4oQHetPyp1ix~Xz~H795c-QHk1HKdEE0u4IPZgczNRdAQnL0WkA3beZeds6U6fv1WhzGZBMfTDzImCCOQ18dbCbbGJ6doZIAwZUrM2eMJcfzPaWc7pz9AEITItZgog05wvRXMjeRsaEoClJvo2HQtIUX8JbsSCOq8JY-8C16JD-lhwWpmJPD3FmEhSpZ8Feb8Wu8n5~kSSkPcSxlCyETe6EupQotMyWRDt42ioJBx2IUtbPbPqrpk5zzjSJbwLfbRL~JHgm4nwfcYgOQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000371.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 71,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/371/image/image.jpg?Expires=1776732226&Signature=GW8osYGDLMLYU~KWIOy1y8wwSkT4mAtegLoNs0eD92yX9BdvpJLUIK7Bh-hggfHJsjcMQc4oQHetPyp1ix~Xz~H795c-QHk1HKdEE0u4IPZgczNRdAQnL0WkA3beZeds6U6fv1WhzGZBMfTDzImCCOQ18dbCbbGJ6doZIAwZUrM2eMJcfzPaWc7pz9AEITItZgog05wvRXMjeRsaEoClJvo2HQtIUX8JbsSCOq8JY-8C16JD-lhwWpmJPD3FmEhSpZ8Feb8Wu8n5~kSSkPcSxlCyETe6EupQotMyWRDt42ioJBx2IUtbPbPqrpk5zzjSJbwLfbRL~JHgm4nwfcYgOQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_71_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/372/image/image.jpg?Expires=1776732226&Signature=Xb3J6ov6GRfCxjOJmhr1BASD8CJXEH7oxR2I4ULI5vZ9mroUP3u9rLzbDKcwv7QNuc1vrv7mWJQ7WjK7Q-xuGR4QR2tZ9Tt9kkRVy2ffTNQAQ7rPCAyly-EAYWdn-PtYcEuoVYSHzop319UtGJ53kpTCLPSs5ABq1tRhQhNdF3DG9rrOMAMnBPpmX-91P30ug3KxYewsuZsl5vNqq0m32Qj4r8HeZdC7qIp7tmXzsVpKuwsvpE27hh566PcwwN8peoywru0GhIJb0OYLjUHKAFXRzsHvJJ1wSx0qpEu4kgfJ0mW6fZxcCun8jIliBtckB3aOCpiiHDuLv2hT7Sg-bw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000372.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 72,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/372/image/image.jpg?Expires=1776732226&Signature=Xb3J6ov6GRfCxjOJmhr1BASD8CJXEH7oxR2I4ULI5vZ9mroUP3u9rLzbDKcwv7QNuc1vrv7mWJQ7WjK7Q-xuGR4QR2tZ9Tt9kkRVy2ffTNQAQ7rPCAyly-EAYWdn-PtYcEuoVYSHzop319UtGJ53kpTCLPSs5ABq1tRhQhNdF3DG9rrOMAMnBPpmX-91P30ug3KxYewsuZsl5vNqq0m32Qj4r8HeZdC7qIp7tmXzsVpKuwsvpE27hh566PcwwN8peoywru0GhIJb0OYLjUHKAFXRzsHvJJ1wSx0qpEu4kgfJ0mW6fZxcCun8jIliBtckB3aOCpiiHDuLv2hT7Sg-bw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_72_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/373/image/image.jpg?Expires=1776732226&Signature=aU7rK1esF1dghek-8LsGlDs2ytin8b9Ltv6L86hcXdVQoZw3C77Bq70srHp4z2n5RUn9lZbGRjv6EnarnTQiLW7Jf7Yxb9ZMDW62OoB2CICS7LeFOeT1u1xujPvzSXjZihmvVH~JdmPj5ro32stc-ENbIhm6o72Bye94NK3W3NoMTVsQKCy7pQu8mcM-hd79DTdVbgcMOPQzI5Tw9MtOjD~TVQFJx0P6RaLgUNvUvVoj7lJRo2sjFId4lx~KN5GmJDhvSB0RjeMRTNTWKCf2VlfOlW3Nb92NEc0ejyX2onI8FQo5sfNt5tl8HHpVGmK7i25kuLVnV0woGZvIISBNbg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000373.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 73,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/373/image/image.jpg?Expires=1776732226&Signature=aU7rK1esF1dghek-8LsGlDs2ytin8b9Ltv6L86hcXdVQoZw3C77Bq70srHp4z2n5RUn9lZbGRjv6EnarnTQiLW7Jf7Yxb9ZMDW62OoB2CICS7LeFOeT1u1xujPvzSXjZihmvVH~JdmPj5ro32stc-ENbIhm6o72Bye94NK3W3NoMTVsQKCy7pQu8mcM-hd79DTdVbgcMOPQzI5Tw9MtOjD~TVQFJx0P6RaLgUNvUvVoj7lJRo2sjFId4lx~KN5GmJDhvSB0RjeMRTNTWKCf2VlfOlW3Nb92NEc0ejyX2onI8FQo5sfNt5tl8HHpVGmK7i25kuLVnV0woGZvIISBNbg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_73_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/374/image/image.jpg?Expires=1776732226&Signature=tUt1tuBWjNSd-Hs~EYVniyMl74YyPOS7eYNrwNT5j~DA-jSnRPDgWR4aG0ImCq3zfEddPZS3kLsFFgtTlFawrpIVPbeGNWyDWuZYrefDWS8dxozzmqARexpzxVoULntyUhF6VweIdqk6zAuya1arlp52FW1nutNo~mBn~RZSwb6ZW5WxFY8nhtQegQncmIa54vBGsZxxm~8z-0NsHBm5a9KCTogCF0PpLUbkmDutKTYguSq~8FNclxoFPFIsX0qG6BA1ZyLAPQf0kfcoT2N464vd~2XjSwbxy8eqE9OxX~mHXQvLMIVdJRpaVoz~nIrBgl-tS8wZkJYRLrqw4ulLbA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000374.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 74,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/374/image/image.jpg?Expires=1776732226&Signature=tUt1tuBWjNSd-Hs~EYVniyMl74YyPOS7eYNrwNT5j~DA-jSnRPDgWR4aG0ImCq3zfEddPZS3kLsFFgtTlFawrpIVPbeGNWyDWuZYrefDWS8dxozzmqARexpzxVoULntyUhF6VweIdqk6zAuya1arlp52FW1nutNo~mBn~RZSwb6ZW5WxFY8nhtQegQncmIa54vBGsZxxm~8z-0NsHBm5a9KCTogCF0PpLUbkmDutKTYguSq~8FNclxoFPFIsX0qG6BA1ZyLAPQf0kfcoT2N464vd~2XjSwbxy8eqE9OxX~mHXQvLMIVdJRpaVoz~nIrBgl-tS8wZkJYRLrqw4ulLbA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_74_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/375/image/image.jpg?Expires=1776732226&Signature=Ve1e5qrfT4SJ8a2lv5Ep6Vx9c4kjyGhcjiPaSxcwpntrGuntAv1xvH~RtHqhR~PQ3JXozSI4KjiUip0ABj0dd76STVHB4aXTXj-ryl2cWdttj7jZSuWKPhJe0OvvlETEN4ANAeQbu01dc6i5s~Dz9n46iSr2684eVQVgh~AE6SzzNCk9YwIliWwa~ax~cGBSP0ZSZVEXbFzPJnTd7mS178B3wJu7ieaq6z9H65lAH3N~DwtNKVE3Fd0bAzluF2TuPKXv2Tn6I7zG3jfBSQz8LQZEQe8-IotYdOWKktj66KR9mXLLE5zh7aZ5wq-R5EmNgy2Cp~E44bfEvNbsEt6KmQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000375.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 75,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/375/image/image.jpg?Expires=1776732226&Signature=Ve1e5qrfT4SJ8a2lv5Ep6Vx9c4kjyGhcjiPaSxcwpntrGuntAv1xvH~RtHqhR~PQ3JXozSI4KjiUip0ABj0dd76STVHB4aXTXj-ryl2cWdttj7jZSuWKPhJe0OvvlETEN4ANAeQbu01dc6i5s~Dz9n46iSr2684eVQVgh~AE6SzzNCk9YwIliWwa~ax~cGBSP0ZSZVEXbFzPJnTd7mS178B3wJu7ieaq6z9H65lAH3N~DwtNKVE3Fd0bAzluF2TuPKXv2Tn6I7zG3jfBSQz8LQZEQe8-IotYdOWKktj66KR9mXLLE5zh7aZ5wq-R5EmNgy2Cp~E44bfEvNbsEt6KmQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_75_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/376/image/image.jpg?Expires=1776732226&Signature=mdZ8-xBiFsqaGXTLwXzdsETmXTb53b3zYgTFm-3Y~6ncQ5HJttYpvROmoGpXEgYMn1WWK2-6GwR7AHkagy4VSWdSoXEsDV3xJa3~jZ~28STHlgb9-eJuT5Q804v3UymJL8GvQ-RY5fXkY5XXVhWZIP2JAbSSQg1cm-hpOUifTmP58ArY761~urQ4IELqEQpG7wldGH9f1YlpJflrgxvWAeQPHZblJ~3W9Cw-zBmUQAp8qG1F7LXOsQLNb32iRZb~e8W3MzGPeRaCMzobKbyvh~S~VZflqnNc~z-ejg9UgtuA627x-plBrZKy~CTBGAe6EBRwf-yCCj9laxZo8PHgaQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000376.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 76,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/376/image/image.jpg?Expires=1776732226&Signature=mdZ8-xBiFsqaGXTLwXzdsETmXTb53b3zYgTFm-3Y~6ncQ5HJttYpvROmoGpXEgYMn1WWK2-6GwR7AHkagy4VSWdSoXEsDV3xJa3~jZ~28STHlgb9-eJuT5Q804v3UymJL8GvQ-RY5fXkY5XXVhWZIP2JAbSSQg1cm-hpOUifTmP58ArY761~urQ4IELqEQpG7wldGH9f1YlpJflrgxvWAeQPHZblJ~3W9Cw-zBmUQAp8qG1F7LXOsQLNb32iRZb~e8W3MzGPeRaCMzobKbyvh~S~VZflqnNc~z-ejg9UgtuA627x-plBrZKy~CTBGAe6EBRwf-yCCj9laxZo8PHgaQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_76_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/377/image/image.jpg?Expires=1776732226&Signature=anPwvaZiONIcGcY5X7FZLmmLhEUiezWgZGi0vbuajJ3YnssaBz4sTGm3LDW4ZOwJDs6RoykRoJGC2nywwt5ZVkla301cn9Ka33Zt50JABnX8ijjs5ylIeXn3m7I4BUWRFjUasKSHMD5HoRQzp4pA5O0llNE9L0tLgerdQjntQfLIg38cmIEaZtjEEaGfTNbOYN9HjQ8GvlaegrHi4lP6YbdMMauo8aN1KqN90Pef0eaEZBIKSUxRbdYGE-2DLMzs4H7LBtkB3dbwxjkrhDX-vwsOTGQBMgqB1vj5aa9CcPbgH43BQQpTquO9yjjEYFUVaVrp-xGi54Pjabwco~giGg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000377.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 77,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/377/image/image.jpg?Expires=1776732226&Signature=anPwvaZiONIcGcY5X7FZLmmLhEUiezWgZGi0vbuajJ3YnssaBz4sTGm3LDW4ZOwJDs6RoykRoJGC2nywwt5ZVkla301cn9Ka33Zt50JABnX8ijjs5ylIeXn3m7I4BUWRFjUasKSHMD5HoRQzp4pA5O0llNE9L0tLgerdQjntQfLIg38cmIEaZtjEEaGfTNbOYN9HjQ8GvlaegrHi4lP6YbdMMauo8aN1KqN90Pef0eaEZBIKSUxRbdYGE-2DLMzs4H7LBtkB3dbwxjkrhDX-vwsOTGQBMgqB1vj5aa9CcPbgH43BQQpTquO9yjjEYFUVaVrp-xGi54Pjabwco~giGg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_77_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/378/image/image.jpg?Expires=1776732226&Signature=zbyIjjH~B7NqZ91ziADH3LfXUuC6pVIBCHHIrMJgu6sBlrTHm6SaAOSMtwHeGOjQWq-303v9nu0ajW-nYRoqxKK~eeEpzxzx7CY8To5jCzFh9m7~KX07RaUCkkBiACjZI1zLMMogFggKhFcYP9mXnLieJptzADDSkdA-bAiq~vU4klHDHFcsJ6pAPg45yRUY-r9m-SdxRtdXENJ~kuUON4pTmp09SK3b0FZlHH4aY23L76-hRoI-vhEozIzELPlcQM8HfloHyz985qVoseZKbmjk-MuBs62jH2KpPFnm~PhDYX-fXlmPr9LkUPfZGZIOAVjo5HLnHwGm7ZXPhC-teg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000378.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 78,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/378/image/image.jpg?Expires=1776732226&Signature=zbyIjjH~B7NqZ91ziADH3LfXUuC6pVIBCHHIrMJgu6sBlrTHm6SaAOSMtwHeGOjQWq-303v9nu0ajW-nYRoqxKK~eeEpzxzx7CY8To5jCzFh9m7~KX07RaUCkkBiACjZI1zLMMogFggKhFcYP9mXnLieJptzADDSkdA-bAiq~vU4klHDHFcsJ6pAPg45yRUY-r9m-SdxRtdXENJ~kuUON4pTmp09SK3b0FZlHH4aY23L76-hRoI-vhEozIzELPlcQM8HfloHyz985qVoseZKbmjk-MuBs62jH2KpPFnm~PhDYX-fXlmPr9LkUPfZGZIOAVjo5HLnHwGm7ZXPhC-teg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_78_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/379/image/image.jpg?Expires=1776732226&Signature=uOykWVKbJdYSiRhkYZkyKReLYnmKt3bJMQRCKNofN1hemE2BqNDmyjNV3H1iGroeFtp~qBKdTE~i1tGExVpdaGudlcdGGcggeH3IvQ62Xos8ot8mp~5ZP7vgrynsPvxZvh-qQ66pfRB5kh7M~qZzH4HRwdwi6qwH6-9JWecvoMn9YnX4lDsR24ZPuLmys2ncZoWP1Yw8rG9~k6m9nnXxH9g8WW4e2KeMWZ~-CbfVCSfvaLh56f8Y1lBbuh-MkHCw1xsqUxofH5KwCRm-9JDf9cPy1eUlBpAvtWNBDYD7bqW0pyAhMYDtcs7sgsj5Re5GyKjVXU-T8Y-eePafvz4ITw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000379.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 79,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/379/image/image.jpg?Expires=1776732226&Signature=uOykWVKbJdYSiRhkYZkyKReLYnmKt3bJMQRCKNofN1hemE2BqNDmyjNV3H1iGroeFtp~qBKdTE~i1tGExVpdaGudlcdGGcggeH3IvQ62Xos8ot8mp~5ZP7vgrynsPvxZvh-qQ66pfRB5kh7M~qZzH4HRwdwi6qwH6-9JWecvoMn9YnX4lDsR24ZPuLmys2ncZoWP1Yw8rG9~k6m9nnXxH9g8WW4e2KeMWZ~-CbfVCSfvaLh56f8Y1lBbuh-MkHCw1xsqUxofH5KwCRm-9JDf9cPy1eUlBpAvtWNBDYD7bqW0pyAhMYDtcs7sgsj5Re5GyKjVXU-T8Y-eePafvz4ITw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_79_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/380/image/image.jpg?Expires=1776732226&Signature=0jbKCKhA7dk9pOue1xwX29yTnhRljuSNXo4pDkjctU0uIhPypChHv5Ynm91ty596uBgYk9GqW2XA6mTY3IaBjRcqoqdGm3ndDy51zHNyI7wc5biMLrhjhxrEJfML131Uz9ifG20kyN3F0ZynHccfvulgVmrOhxedtz6smCXc4UyTleKRqwSxjJk8-Bod~5W-iNQA5lpeZ2TXwNfK~JERJKKcm0ScuFlRlj-UTTdT7MUhC0wxoNjxRgzFB31YGmpOir1GfzU0qQ7tV1wvbg01Q011l3IKYt0VCw5ctmEYg3eqIs3KqQzOP7~rFhcX1yrzmCM~1Ji~z9x6dPJuZS~HpQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000380.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 80,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/380/image/image.jpg?Expires=1776732226&Signature=0jbKCKhA7dk9pOue1xwX29yTnhRljuSNXo4pDkjctU0uIhPypChHv5Ynm91ty596uBgYk9GqW2XA6mTY3IaBjRcqoqdGm3ndDy51zHNyI7wc5biMLrhjhxrEJfML131Uz9ifG20kyN3F0ZynHccfvulgVmrOhxedtz6smCXc4UyTleKRqwSxjJk8-Bod~5W-iNQA5lpeZ2TXwNfK~JERJKKcm0ScuFlRlj-UTTdT7MUhC0wxoNjxRgzFB31YGmpOir1GfzU0qQ7tV1wvbg01Q011l3IKYt0VCw5ctmEYg3eqIs3KqQzOP7~rFhcX1yrzmCM~1Ji~z9x6dPJuZS~HpQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_80_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/381/image/image.jpg?Expires=1776732226&Signature=BXRMCqpbLJSbY6w6l6~UtPEwWwmC~vIcsQWKvdCo2XlHYRBUMmjZIFh~3zwpZOm34ctJxPTPa1xktvgncLzaFjmWKDQaWwmd5xFygiqHipEkEDKwe~RqategVmwnXbS7hB~xv7pxr7N5NgqTsRywfIh4t-cfYIdc1J3Uqj-txK148P~7wbcSZ-KpbHPT74PKad2xBxmoKuhGLb~QJ1c2tb2c-KOYQwlhiLbHN9BwOyjvDDTdsNjo1x2WvmXzHjkmRlL20cyrt4xik0DnZiiTlVDnox~ZVZKUYPUa4jLwRxmxiFQrdKffnP0IEuBPkq55-XPZTJIsavgVe-pXdS17oA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000381.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 81,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/381/image/image.jpg?Expires=1776732226&Signature=BXRMCqpbLJSbY6w6l6~UtPEwWwmC~vIcsQWKvdCo2XlHYRBUMmjZIFh~3zwpZOm34ctJxPTPa1xktvgncLzaFjmWKDQaWwmd5xFygiqHipEkEDKwe~RqategVmwnXbS7hB~xv7pxr7N5NgqTsRywfIh4t-cfYIdc1J3Uqj-txK148P~7wbcSZ-KpbHPT74PKad2xBxmoKuhGLb~QJ1c2tb2c-KOYQwlhiLbHN9BwOyjvDDTdsNjo1x2WvmXzHjkmRlL20cyrt4xik0DnZiiTlVDnox~ZVZKUYPUa4jLwRxmxiFQrdKffnP0IEuBPkq55-XPZTJIsavgVe-pXdS17oA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_81_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/382/image/image.jpg?Expires=1776732226&Signature=yV9pklOXmGK33uW3x5BsRy4Xo7xfp1ukmMovenF96ESoFaXPTaAqMIEopOK3zLI0Ji3m4hFcf3QHEWqZSBgoaUhGUMlUzQGjIikHqqrBvVdY3hjCyVaus7lCzlYm62bJhk-rYyQC3aUlndDTfWvoo81B0XkNQfWkKYt9uaWv5EEBzDQaGANkR2cisyjvqF2jcNx6026w5m1gvoZ5FwqLYCRWq8-hhXgrqKeEiHI-AjRduHAbxQx78p3iRLIFfmpdpC~N1K3fKvB3BT1hCy0G89IstJ5PZa2jVzd5pKLKu5haOdRFKcU2AYeuYTwHe6FyZNw84SGgND8rkR~Wo1gkpQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000382.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 82,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/382/image/image.jpg?Expires=1776732226&Signature=yV9pklOXmGK33uW3x5BsRy4Xo7xfp1ukmMovenF96ESoFaXPTaAqMIEopOK3zLI0Ji3m4hFcf3QHEWqZSBgoaUhGUMlUzQGjIikHqqrBvVdY3hjCyVaus7lCzlYm62bJhk-rYyQC3aUlndDTfWvoo81B0XkNQfWkKYt9uaWv5EEBzDQaGANkR2cisyjvqF2jcNx6026w5m1gvoZ5FwqLYCRWq8-hhXgrqKeEiHI-AjRduHAbxQx78p3iRLIFfmpdpC~N1K3fKvB3BT1hCy0G89IstJ5PZa2jVzd5pKLKu5haOdRFKcU2AYeuYTwHe6FyZNw84SGgND8rkR~Wo1gkpQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_82_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/383/image/image.jpg?Expires=1776732226&Signature=Ag7Q-mSosHMBSflMzvPo2LMS-jnzvPudiCI8sXcPIV3Q~uNiHJMYevwIisNl1XgBRgYJrdbSsC0c5hfzO8huh4jDylFogiBTUhz7ekN-zLTF3TjhjOvUN1f~45XlkPcREhP8rK5dXF6Fs05EWyZ6cJkPeV3WBcWodzlTKOqO1i02Lyz4u1TX~ob0d8VEwZEvUaN-w0Y~3Uy55p3exSQ2P-W1hID7EULY~Ca~I2Ku7tmDW7dOxcXj1rwYfJFBdaWl2-ijAHOBf0Dir3y882UyTBtDeXkj1fBB6i37~J0xE4rpGolSkhNs3fSmSEQPOq9QvsuJAFq0dk3Rug3bo7hKqw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000383.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 83,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/383/image/image.jpg?Expires=1776732226&Signature=Ag7Q-mSosHMBSflMzvPo2LMS-jnzvPudiCI8sXcPIV3Q~uNiHJMYevwIisNl1XgBRgYJrdbSsC0c5hfzO8huh4jDylFogiBTUhz7ekN-zLTF3TjhjOvUN1f~45XlkPcREhP8rK5dXF6Fs05EWyZ6cJkPeV3WBcWodzlTKOqO1i02Lyz4u1TX~ob0d8VEwZEvUaN-w0Y~3Uy55p3exSQ2P-W1hID7EULY~Ca~I2Ku7tmDW7dOxcXj1rwYfJFBdaWl2-ijAHOBf0Dir3y882UyTBtDeXkj1fBB6i37~J0xE4rpGolSkhNs3fSmSEQPOq9QvsuJAFq0dk3Rug3bo7hKqw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_83_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/384/image/image.jpg?Expires=1776732226&Signature=jjvgDxDeJD~EFzcSmy84tWfg3jn2s6RBnqph-BqCTv~IdyOyzGY8beqtJAvLYDKUM8aaHrsVLgEBxiVD5MnuMnjk7VpVjd5LFAFKFgDqsCTiGt3XRxNQIWmm1ArWiBmtS0-M47Tvxj55MZcynL73D7z8JwpIY~~QlEjW3-PcG06mLpgrSfSBPKavOD9QCDThLx30nhHTGhpCqlfLb-9ho3MFzS~4KaNNjrwIxeWCj1lb0iUmADbOel3baQFWV0UO-0eaaujqC-LUdhZEA71MB6ipHpx1PuByfM~PzuJBj6xfYHe5lhVChvzbvh-QkR~583bEEJaMMopCvBukQQ9o2Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000384.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 84,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/384/image/image.jpg?Expires=1776732226&Signature=jjvgDxDeJD~EFzcSmy84tWfg3jn2s6RBnqph-BqCTv~IdyOyzGY8beqtJAvLYDKUM8aaHrsVLgEBxiVD5MnuMnjk7VpVjd5LFAFKFgDqsCTiGt3XRxNQIWmm1ArWiBmtS0-M47Tvxj55MZcynL73D7z8JwpIY~~QlEjW3-PcG06mLpgrSfSBPKavOD9QCDThLx30nhHTGhpCqlfLb-9ho3MFzS~4KaNNjrwIxeWCj1lb0iUmADbOel3baQFWV0UO-0eaaujqC-LUdhZEA71MB6ipHpx1PuByfM~PzuJBj6xfYHe5lhVChvzbvh-QkR~583bEEJaMMopCvBukQQ9o2Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_84_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/385/image/image.jpg?Expires=1776732226&Signature=hV3bzSPzIcln4dfxEB6l5frMirJGv6VhZ0TSeKP4BSd1uCkhAsC84GhaWeA4jtAr~tmmyZAlhkSzl~eWU5DU-2HAqWCxhn3tTPpPJOEEC367MdLkVPqXM7drwfmQ1xmXP9nrDQcEt8ywXbV4QlImbb4Bd8BeiVbmKSc~7kuHm15d~3DSYuuAjcVHgZWDLvsZWmS4r0UeaSO9fWla1Iukb4IZS0UjoJD2tzPYUM7inF9xUqaBdTGjlu26QkIZgBbdA-oU9m-t-bJ3BXIRg5AOvPrSWZUEwLYsbaso0DRM74~L51YAe5-uj1cpGNJzbla1sf0tANv9WhvMD3T7c7Wbyw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000385.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 85,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/385/image/image.jpg?Expires=1776732226&Signature=hV3bzSPzIcln4dfxEB6l5frMirJGv6VhZ0TSeKP4BSd1uCkhAsC84GhaWeA4jtAr~tmmyZAlhkSzl~eWU5DU-2HAqWCxhn3tTPpPJOEEC367MdLkVPqXM7drwfmQ1xmXP9nrDQcEt8ywXbV4QlImbb4Bd8BeiVbmKSc~7kuHm15d~3DSYuuAjcVHgZWDLvsZWmS4r0UeaSO9fWla1Iukb4IZS0UjoJD2tzPYUM7inF9xUqaBdTGjlu26QkIZgBbdA-oU9m-t-bJ3BXIRg5AOvPrSWZUEwLYsbaso0DRM74~L51YAe5-uj1cpGNJzbla1sf0tANv9WhvMD3T7c7Wbyw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_85_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/386/image/image.jpg?Expires=1776732226&Signature=GO6UsCe1AjZjLlMhw9oSD72oFO6IK2x9eInT~e2A02Hivykl1lArnf95~BZ9rzGINEFN5UgHzpx0axmfhell1QgCTI1AL0oniB2JgIYA1CyUAub2doC~LMnrSoDWoROKDaTKEZkXIXxrVI3TUUzO~vsq9CMcrpQZY4ZF3XjtIuR5fYn~BO0JRfa9pnygipOLkBWAkd~uyi51OYLuCBc7WTxugmG55le9Jv66CDcFWP5wDk7uG7COj5Gwf-pIo9uQsHdSGWBOUs7wz0gg1bcwWrjjXHI3josiQCazbg09F4ctBTrG8hA8u9L9XDiXDPl7y~zy8jUnBUjI-Og2kWruuA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000386.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 86,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/386/image/image.jpg?Expires=1776732226&Signature=GO6UsCe1AjZjLlMhw9oSD72oFO6IK2x9eInT~e2A02Hivykl1lArnf95~BZ9rzGINEFN5UgHzpx0axmfhell1QgCTI1AL0oniB2JgIYA1CyUAub2doC~LMnrSoDWoROKDaTKEZkXIXxrVI3TUUzO~vsq9CMcrpQZY4ZF3XjtIuR5fYn~BO0JRfa9pnygipOLkBWAkd~uyi51OYLuCBc7WTxugmG55le9Jv66CDcFWP5wDk7uG7COj5Gwf-pIo9uQsHdSGWBOUs7wz0gg1bcwWrjjXHI3josiQCazbg09F4ctBTrG8hA8u9L9XDiXDPl7y~zy8jUnBUjI-Og2kWruuA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_86_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/387/image/image.jpg?Expires=1776732226&Signature=F7ymEqEWdrVTHUQ9CK3D3zv8pb9uYh92LRzNx4Yk0QyCdxXowkRrl6n1ACHxc4CSYjAC8nqgcZKlXrLseiXY4ebwEwrJ~1lGfaBljbUIrBymkF-fe0o9Nia63XPhVxvyFYJH6QF~cdgp-CQfySZLkp59Za9SUP3yYNmA3~ENlUXjpWagyp5tEcUSxnxk1oxB1B9cp8yjLXNF4DBn~TBzdNT05Ty~7AK5GGTDJODd63DU6nzSGOcUchG5saD6UtkDWGuPs69SDL1iLyJL7vM6~K8z4FWgqRrx~kQivZCNTegLq3ADuDmcS7DnjFU~hF5C252yR5N9N4amNvG6KVBbKw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000387.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 87,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/387/image/image.jpg?Expires=1776732226&Signature=F7ymEqEWdrVTHUQ9CK3D3zv8pb9uYh92LRzNx4Yk0QyCdxXowkRrl6n1ACHxc4CSYjAC8nqgcZKlXrLseiXY4ebwEwrJ~1lGfaBljbUIrBymkF-fe0o9Nia63XPhVxvyFYJH6QF~cdgp-CQfySZLkp59Za9SUP3yYNmA3~ENlUXjpWagyp5tEcUSxnxk1oxB1B9cp8yjLXNF4DBn~TBzdNT05Ty~7AK5GGTDJODd63DU6nzSGOcUchG5saD6UtkDWGuPs69SDL1iLyJL7vM6~K8z4FWgqRrx~kQivZCNTegLq3ADuDmcS7DnjFU~hF5C252yR5N9N4amNvG6KVBbKw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_87_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/388/image/image.jpg?Expires=1776732226&Signature=yowyMLDYbZDfJB7idDVEY9~hJGEU~UdGO-NT1DSVn0baOUAhUmPOgacT7W2IFiJpA-F18hBbEyE-DgYWrbYm3Mj8-oHSi4Ei-O9QvnpW7AYAci0RkBTohQz5rLpQb4LO6fCsd0Ido3jMsBNPuL~gXlcaKT2MMLCk1wzM-CmfVxafPpEfRTywAY6DlCaLu-qHFkTC0tx0dr3QLTsZj5PODQFDOIyCzKK0nbIQz6FELFH51cZ5b~1A9sWsB28vLFjtCdPrSSrS6vnjO3VFmCLxG9JArL389gKvuApu3K~zg8DaTdYhVPckBSzDWZo-EngjUmMLhl6syLR7e9tBlcaKXg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000388.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 88,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/388/image/image.jpg?Expires=1776732226&Signature=yowyMLDYbZDfJB7idDVEY9~hJGEU~UdGO-NT1DSVn0baOUAhUmPOgacT7W2IFiJpA-F18hBbEyE-DgYWrbYm3Mj8-oHSi4Ei-O9QvnpW7AYAci0RkBTohQz5rLpQb4LO6fCsd0Ido3jMsBNPuL~gXlcaKT2MMLCk1wzM-CmfVxafPpEfRTywAY6DlCaLu-qHFkTC0tx0dr3QLTsZj5PODQFDOIyCzKK0nbIQz6FELFH51cZ5b~1A9sWsB28vLFjtCdPrSSrS6vnjO3VFmCLxG9JArL389gKvuApu3K~zg8DaTdYhVPckBSzDWZo-EngjUmMLhl6syLR7e9tBlcaKXg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_88_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/389/image/image.jpg?Expires=1776732226&Signature=0SlQYqr7nn7ZSdkIUmSGm47gc3Jy2ZHDciJ006CcyVyYMqZfzEySRzigVA36q9fqocqCbW3OJxepJRNBrcAKhB4~W7nNPN55Enjn0BSINVLfgoWJkh8NZzWokYYCARQnRqv31qcX0uFzTEcRTSNyXbDh6OItM5xbDzzWpEb023fAvg9O1gI8wwS59FNoqRZwBNXb6nBIVCHLGDYU6rhaLBelmFu0x0TLgEw~HWlBZnpl79Ufj3UtLmq-AEKCHpIuTzNK5cQUqljz0nSxQSxAJTfp8x4~UgqKEXjTidPdHuJSCvSyOD~SYzfs61WZRPFrqn8BtHBZKz1w0DTTFQZy0A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000389.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 89,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/389/image/image.jpg?Expires=1776732226&Signature=0SlQYqr7nn7ZSdkIUmSGm47gc3Jy2ZHDciJ006CcyVyYMqZfzEySRzigVA36q9fqocqCbW3OJxepJRNBrcAKhB4~W7nNPN55Enjn0BSINVLfgoWJkh8NZzWokYYCARQnRqv31qcX0uFzTEcRTSNyXbDh6OItM5xbDzzWpEb023fAvg9O1gI8wwS59FNoqRZwBNXb6nBIVCHLGDYU6rhaLBelmFu0x0TLgEw~HWlBZnpl79Ufj3UtLmq-AEKCHpIuTzNK5cQUqljz0nSxQSxAJTfp8x4~UgqKEXjTidPdHuJSCvSyOD~SYzfs61WZRPFrqn8BtHBZKz1w0DTTFQZy0A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_89_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/390/image/image.jpg?Expires=1776732226&Signature=vILg8~aihV1MxOsXYKNO9deIgMk3Z8brN~bNzawPw-2C62ButU6H5mTnhz1ipTifNN3nEiI~J6yffogcQrkjbVf24rqiTn4coqdrX6aPCibFHoa~SS~nkcfio3tLeC7-qhyzZ2jLeE0SVd6y-5sogDmF0wS40fSURAWZrVe-kPze~EhBSDcYJWSJXwta4K7DJA3EvWVFvqWyUFff~MFH0QvkL1uLT-lPlSqug85V8MdrF2HsrvULdLnCjQxanz~sXKAyLsyfMFptlEk-f-n1gmceWgMHWr~-gJqKiwSgRrF4kyMf16BmFZykOzKjCqEclJZSyAg8mPDIloiD6a-B6g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000390.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 90,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/390/image/image.jpg?Expires=1776732226&Signature=vILg8~aihV1MxOsXYKNO9deIgMk3Z8brN~bNzawPw-2C62ButU6H5mTnhz1ipTifNN3nEiI~J6yffogcQrkjbVf24rqiTn4coqdrX6aPCibFHoa~SS~nkcfio3tLeC7-qhyzZ2jLeE0SVd6y-5sogDmF0wS40fSURAWZrVe-kPze~EhBSDcYJWSJXwta4K7DJA3EvWVFvqWyUFff~MFH0QvkL1uLT-lPlSqug85V8MdrF2HsrvULdLnCjQxanz~sXKAyLsyfMFptlEk-f-n1gmceWgMHWr~-gJqKiwSgRrF4kyMf16BmFZykOzKjCqEclJZSyAg8mPDIloiD6a-B6g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_90_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/391/image/image.jpg?Expires=1776732226&Signature=lyP543DkEixCD6x-c8x5Fu5lso6jyXIeRMojIz-FCimkbSezaRXD8~PSOSQHk6LGkiUC~vqOWSGnpcc~-3GwTgRVmx36t-pyLWKj13YEZbcbk4IFGCEbDm1hm4tTrRk~h7dJ16zwqXnTAWfjQT7oA5NC7SLrYAuNvUuEToOHu9i5fnotjpc-uS5wpTncUXjUKZVXOB8UWs3s~dosf4EQ1Jiyj4KbJTEqZ0skNQoGZ2-9yEYiZczNraLz7GaJipBqpFsBM9sj1bWz8qvhacWoA9wB82Gf2Jc9f8rWlXs66dbNYuSes-60OTwFoBcWz0m0wJZ1a~Wn9d-ekIHuqQyJkg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000391.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 91,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/391/image/image.jpg?Expires=1776732226&Signature=lyP543DkEixCD6x-c8x5Fu5lso6jyXIeRMojIz-FCimkbSezaRXD8~PSOSQHk6LGkiUC~vqOWSGnpcc~-3GwTgRVmx36t-pyLWKj13YEZbcbk4IFGCEbDm1hm4tTrRk~h7dJ16zwqXnTAWfjQT7oA5NC7SLrYAuNvUuEToOHu9i5fnotjpc-uS5wpTncUXjUKZVXOB8UWs3s~dosf4EQ1Jiyj4KbJTEqZ0skNQoGZ2-9yEYiZczNraLz7GaJipBqpFsBM9sj1bWz8qvhacWoA9wB82Gf2Jc9f8rWlXs66dbNYuSes-60OTwFoBcWz0m0wJZ1a~Wn9d-ekIHuqQyJkg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_91_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/392/image/image.jpg?Expires=1776732226&Signature=iVea0rVwlY2CyT03-5zTizPydMupZEVyqNCCpWYuqatd~u2qgbg~qO8nJ7AIo3gBNVPmqstbmN8eyvfxkAjWq0nG0OhaQUs95fcQawpEsejw3dlOyq2hB8S-IXvrZBM2LRREcu9lairsG-ObMuH-q9CuVCRjz9nh39B6qXwZdurl0TuHGkU0jFj~qe9OH4TOmFT-MQa7z87Q9AOMSLNjIGGO3p2j7Zhn5SB1mr9BF1x~o8Xq54uv4r9LvcJ~nOlsVfTuRPAiGaPI57CD5-arABwuPjRthAgju8a8KbNaL3oJ-J5f9r3R9KtKArDywJfoqwT~zIpL8TtxetRfBYQE1A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000392.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 92,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/392/image/image.jpg?Expires=1776732226&Signature=iVea0rVwlY2CyT03-5zTizPydMupZEVyqNCCpWYuqatd~u2qgbg~qO8nJ7AIo3gBNVPmqstbmN8eyvfxkAjWq0nG0OhaQUs95fcQawpEsejw3dlOyq2hB8S-IXvrZBM2LRREcu9lairsG-ObMuH-q9CuVCRjz9nh39B6qXwZdurl0TuHGkU0jFj~qe9OH4TOmFT-MQa7z87Q9AOMSLNjIGGO3p2j7Zhn5SB1mr9BF1x~o8Xq54uv4r9LvcJ~nOlsVfTuRPAiGaPI57CD5-arABwuPjRthAgju8a8KbNaL3oJ-J5f9r3R9KtKArDywJfoqwT~zIpL8TtxetRfBYQE1A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_92_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/393/image/image.jpg?Expires=1776732226&Signature=A5P4Dtf72wpG5vbKSgflIyRKHqg8el6tW7CSXjXZjuEsdDLkc-nCWV5L5zWqWaLOcFS5owdT6cV20nn~xezoFa5hEQeW6WhQbA6q56Y5vKrBo53MGaSZDlThrSWeuE9ZkFPGVe7pzYZlKNctqhko78Km-A9jyBVdAf5l40K8dzaNX50~357ZODgpBAgksPm7JEHMevMhRs3j~g6Xv8~RzG0HUqtgCjCoWP45dY5edf4jD8Qj9DZB-BVdrVHjvpXFbR15UisC0G6UoA9qMeD3MUWS8LzDL~QoCUQKpLN-D9WKN3b4qs3nw19XhKWvSEGvOfjl78-7DQDoYFciZcV7-w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000393.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 93,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/393/image/image.jpg?Expires=1776732226&Signature=A5P4Dtf72wpG5vbKSgflIyRKHqg8el6tW7CSXjXZjuEsdDLkc-nCWV5L5zWqWaLOcFS5owdT6cV20nn~xezoFa5hEQeW6WhQbA6q56Y5vKrBo53MGaSZDlThrSWeuE9ZkFPGVe7pzYZlKNctqhko78Km-A9jyBVdAf5l40K8dzaNX50~357ZODgpBAgksPm7JEHMevMhRs3j~g6Xv8~RzG0HUqtgCjCoWP45dY5edf4jD8Qj9DZB-BVdrVHjvpXFbR15UisC0G6UoA9qMeD3MUWS8LzDL~QoCUQKpLN-D9WKN3b4qs3nw19XhKWvSEGvOfjl78-7DQDoYFciZcV7-w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_93_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/394/image/image.jpg?Expires=1776732226&Signature=ZO5rWSxnfV4mYYFOnRWQpERgRKZN78exzaziV-dOTy3vAGxN8vIHZss~ESfnij65ZCSjcoOV0YA1p-dFBWXDcNVxbh5wHU00T9H4fLaNPm2wRMwJJcW47uYkxQmT~XjJ4wDnIiIuPEf28Q8OuktknyxbvzUnFKfbsSGi1xnLBcY6CDV4CCAPdOd3Sneaq~yXPUdB1cbNcAOY~f3xjnHfzEvG7dIlsnuqWeKuG0xJZEeVVr4MNOb-2Evn4EJheYAw6T0f~Ncn1rruI55jmDx5qnCgSTQuLLizt9d2RuW2xV5csRvpYX-E0tuNhkDT616DjudR5t6in-zwzXV9Dix9mQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000394.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 94,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/394/image/image.jpg?Expires=1776732226&Signature=ZO5rWSxnfV4mYYFOnRWQpERgRKZN78exzaziV-dOTy3vAGxN8vIHZss~ESfnij65ZCSjcoOV0YA1p-dFBWXDcNVxbh5wHU00T9H4fLaNPm2wRMwJJcW47uYkxQmT~XjJ4wDnIiIuPEf28Q8OuktknyxbvzUnFKfbsSGi1xnLBcY6CDV4CCAPdOd3Sneaq~yXPUdB1cbNcAOY~f3xjnHfzEvG7dIlsnuqWeKuG0xJZEeVVr4MNOb-2Evn4EJheYAw6T0f~Ncn1rruI55jmDx5qnCgSTQuLLizt9d2RuW2xV5csRvpYX-E0tuNhkDT616DjudR5t6in-zwzXV9Dix9mQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_94_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/395/image/image.jpg?Expires=1776732226&Signature=hkAQDzjDo4LE2wcWhTjEfJbm5UvZIVW85xi2edI-uXk-L2NCT0oFwxnN6eEQrU0w3EzLjsJyznvSW5TiPBUYedEHNqiLg5jQW96OaCOWCbJMVQnnVVIzdUs6R-TaFCWZ6rIZ2UrxEpMm8LPRZQg~xT0dwsFb2SNGmYZymc-4isdGr0OnEVC7PNSsO0totCezrm1pJzK1t0ZedImBJ6MG45~GZ3BOla3~57V5BtX7ufV~DpzGBFGkwFNTJ1To3fImYRgGBqoBWYJt0YEHm3X-1uYEngj6MEOHbdhKw~tp8wAGbqY9kvn-Hveq8XplhA~Jw6D3bmlIum-TzsWJIf1xMA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000395.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 95,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/395/image/image.jpg?Expires=1776732226&Signature=hkAQDzjDo4LE2wcWhTjEfJbm5UvZIVW85xi2edI-uXk-L2NCT0oFwxnN6eEQrU0w3EzLjsJyznvSW5TiPBUYedEHNqiLg5jQW96OaCOWCbJMVQnnVVIzdUs6R-TaFCWZ6rIZ2UrxEpMm8LPRZQg~xT0dwsFb2SNGmYZymc-4isdGr0OnEVC7PNSsO0totCezrm1pJzK1t0ZedImBJ6MG45~GZ3BOla3~57V5BtX7ufV~DpzGBFGkwFNTJ1To3fImYRgGBqoBWYJt0YEHm3X-1uYEngj6MEOHbdhKw~tp8wAGbqY9kvn-Hveq8XplhA~Jw6D3bmlIum-TzsWJIf1xMA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_95_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/396/image/image.jpg?Expires=1776732226&Signature=Vl0CJbXBVH-8qrWVO-yGCaqbv-MW9dn4N2pil6rYTUuVmEgVz4Ynyruo0iFVaOdJAPmIIJk7FLvJm32HUvaBLV1N1Le60raBt~EU23K-WVEJnxT0r~vknmvq3Ji5vV8U6cp5mybKTTEq2DT3KxwVTa6gnMo-E1JJkAAwtwdSYS0e5-~CDPC9orIZ1dF5M2mOroa7r8QN20fUkXRJg3v8Cq8KTpBxUJdM2-6-vKiCCRSfoj20e8PziNMw3aHPTU59~9hO5hFEaMBsyWTGgt9s94IC5dy1~U-fQW9bXNnPDVSM8J0Ew1asekUvUz5AdMgmvjfmStXsxxYrQcU7fJe1Nw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000396.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 96,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/396/image/image.jpg?Expires=1776732226&Signature=Vl0CJbXBVH-8qrWVO-yGCaqbv-MW9dn4N2pil6rYTUuVmEgVz4Ynyruo0iFVaOdJAPmIIJk7FLvJm32HUvaBLV1N1Le60raBt~EU23K-WVEJnxT0r~vknmvq3Ji5vV8U6cp5mybKTTEq2DT3KxwVTa6gnMo-E1JJkAAwtwdSYS0e5-~CDPC9orIZ1dF5M2mOroa7r8QN20fUkXRJg3v8Cq8KTpBxUJdM2-6-vKiCCRSfoj20e8PziNMw3aHPTU59~9hO5hFEaMBsyWTGgt9s94IC5dy1~U-fQW9bXNnPDVSM8J0Ew1asekUvUz5AdMgmvjfmStXsxxYrQcU7fJe1Nw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_96_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/397/image/image.jpg?Expires=1776732226&Signature=N62nwgLMqc0cQv9aRFzo-CYRrxwiY1rYszF8FwIsDtZQAbqWwpyFTC1i1UD8nR030x-CL2SQr6Rl~1m-loX-q92XOJV9LhVERGLcMgMlpREXWtJrU0PsGQH4wq8GRCxzv6syB0McAczCfpRNozScFn2BqwsUwlccQ8ZAPVhSkZrrGm8WsnZ3tfBE1WmIhAyDEpW14QnsFklGqy1didG4aQp6k2a1ZtVg-O~ysdOOB6qI~AD2zIBTKAv9P6wQ44j2UCrmEY3c1SPuch7n~26ua4kooLbYXAVRF5cPPRg~LuusMp~BoVPQzy3Y1aP2Rjnvsaig1kT8YQC0wjVsXvkVTg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000397.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 97,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/397/image/image.jpg?Expires=1776732226&Signature=N62nwgLMqc0cQv9aRFzo-CYRrxwiY1rYszF8FwIsDtZQAbqWwpyFTC1i1UD8nR030x-CL2SQr6Rl~1m-loX-q92XOJV9LhVERGLcMgMlpREXWtJrU0PsGQH4wq8GRCxzv6syB0McAczCfpRNozScFn2BqwsUwlccQ8ZAPVhSkZrrGm8WsnZ3tfBE1WmIhAyDEpW14QnsFklGqy1didG4aQp6k2a1ZtVg-O~ysdOOB6qI~AD2zIBTKAv9P6wQ44j2UCrmEY3c1SPuch7n~26ua4kooLbYXAVRF5cPPRg~LuusMp~BoVPQzy3Y1aP2Rjnvsaig1kT8YQC0wjVsXvkVTg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_97_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/398/image/image.jpg?Expires=1776732226&Signature=fXWitaNRoFFPDoSVE8NkuOQnIx1G4VsALGMEFSRBcQm2xpanjH9QrimIY3ACnLUAWFGcqSOJ9MOQwADrAA4GVYgr-GbRYPaGFRbmE3tmwJW2FKqGWxOmSVO9A0Zis10~rrwI7HyowYDoGuO3fNlqDTcEvssblNQBxZle3Re-1ryAqTBpPfIdNJxtWFO80nXLAGKO~LHl8O89klRFj1exgOdz6oK~ufeiL5XueALXG~ga67woizUd6atNZSwbtZVW1toFopKfKM2f30mqqexRV4Rj1GFhZf~a3oKXDInHDLQrB6JD4zPUCwHuaX3U5x~v8FF4gdqT2RsE8FRmtKy0xg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000398.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 98,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/398/image/image.jpg?Expires=1776732226&Signature=fXWitaNRoFFPDoSVE8NkuOQnIx1G4VsALGMEFSRBcQm2xpanjH9QrimIY3ACnLUAWFGcqSOJ9MOQwADrAA4GVYgr-GbRYPaGFRbmE3tmwJW2FKqGWxOmSVO9A0Zis10~rrwI7HyowYDoGuO3fNlqDTcEvssblNQBxZle3Re-1ryAqTBpPfIdNJxtWFO80nXLAGKO~LHl8O89klRFj1exgOdz6oK~ufeiL5XueALXG~ga67woizUd6atNZSwbtZVW1toFopKfKM2f30mqqexRV4Rj1GFhZf~a3oKXDInHDLQrB6JD4zPUCwHuaX3U5x~v8FF4gdqT2RsE8FRmtKy0xg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_98_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/399/image/image.jpg?Expires=1776732226&Signature=bo~vBxJek5M13hiVyA-5ZXup4D9ktN08FYOlqZUSGHxFwexJJWfUFuTdkroRH2vxYcUl4CTyBkOnho86KNQP9Yg3pUtlfFP7~h4qInFzFvduNOkxT~Gi6p-yUFvvWZNgfss~DVBdkO6G2ncir1Nvc-PynsK2jrdYsoar2nuW4V18hASkIZvFZdBDmqbo-nZGdcyZgkhJl0dvSX372zKt2l0MKEUF7ROCBwGLtpuPBUPr346RzdDYXXjIzG0ZnwYEmfdwXeChzq7dvKtQD9AAuildCQ9EGPS27IYiBOd3iO1sQ~Z~4O6B9WQNzBKQBE~oqS5nFSLek8XSWw507k4D4g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000399.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 99,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/399/image/image.jpg?Expires=1776732226&Signature=bo~vBxJek5M13hiVyA-5ZXup4D9ktN08FYOlqZUSGHxFwexJJWfUFuTdkroRH2vxYcUl4CTyBkOnho86KNQP9Yg3pUtlfFP7~h4qInFzFvduNOkxT~Gi6p-yUFvvWZNgfss~DVBdkO6G2ncir1Nvc-PynsK2jrdYsoar2nuW4V18hASkIZvFZdBDmqbo-nZGdcyZgkhJl0dvSX372zKt2l0MKEUF7ROCBwGLtpuPBUPr346RzdDYXXjIzG0ZnwYEmfdwXeChzq7dvKtQD9AAuildCQ9EGPS27IYiBOd3iO1sQ~Z~4O6B9WQNzBKQBE~oqS5nFSLek8XSWw507k4D4g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_99_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/400/image/image.jpg?Expires=1776732227&Signature=KebkoUz12RGiCVNT4TLsMVczcPTlTJR2HwB1k6gE0iSTPWALDYO-fA-3cg5oR8bE-HaifKgJs7KvS5uLdQW~DvqWJtTspZozVqrZyJWIMWvSgB6CVFjAjw-9Be6l7JLqH4H-UKT~AfOgLt92UyxnR5K2rAOXGO1xr3kOkwiKvOEfRxyW9K7yfCXhaITnbm8QoCnQDnojIKZkTBMolN~GY1Y5JmaD9~2rSk~88Yr9m5yrNH7SeHqquSYtkO1ayZzUyGSeolwNtL94YFLp29cI-WBJ78Mmb7QptgdC5eN7vBLote9SGSvUiXQDcFlhe-S~pLirIaUfbwkoFJFAX0T8RA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000400.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 0,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/400/image/image.jpg?Expires=1776732227&Signature=KebkoUz12RGiCVNT4TLsMVczcPTlTJR2HwB1k6gE0iSTPWALDYO-fA-3cg5oR8bE-HaifKgJs7KvS5uLdQW~DvqWJtTspZozVqrZyJWIMWvSgB6CVFjAjw-9Be6l7JLqH4H-UKT~AfOgLt92UyxnR5K2rAOXGO1xr3kOkwiKvOEfRxyW9K7yfCXhaITnbm8QoCnQDnojIKZkTBMolN~GY1Y5JmaD9~2rSk~88Yr9m5yrNH7SeHqquSYtkO1ayZzUyGSeolwNtL94YFLp29cI-WBJ78Mmb7QptgdC5eN7vBLote9SGSvUiXQDcFlhe-S~pLirIaUfbwkoFJFAX0T8RA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_0_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/401/image/image.jpg?Expires=1776732227&Signature=HYcxHEsiwWz0XHa15dp3HRHrpX9qMLied6wC6LdxCSkdyY-Jt9yrw5M9S8YvMK2oYV7-co3EhQawdjNNJQsUuVVHNBhhQ7KGJvzVwsx5iqcwgzWC0T8E5cSAdjwqLB0Dmyyz1rWFHY0uq~RWAob-eRti3mCNQeOLwhvBeKXlKSh1vcF55mPOvq1c2njG-EX1gsIhGuCxUafsZY9ZAcNdi72JbNBXTljDfG0Ihpqp3zF~euvTDS2-A0-RjrLwaEaDw4dVipOlx4xILTQtMeF0uVxCoF2Y3D9eDIMO34dKFH3zzmIIgO5EgdusyF-YreICP7pi8qtIxsv6Sdq4TTvN6w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000401.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 1,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/401/image/image.jpg?Expires=1776732227&Signature=HYcxHEsiwWz0XHa15dp3HRHrpX9qMLied6wC6LdxCSkdyY-Jt9yrw5M9S8YvMK2oYV7-co3EhQawdjNNJQsUuVVHNBhhQ7KGJvzVwsx5iqcwgzWC0T8E5cSAdjwqLB0Dmyyz1rWFHY0uq~RWAob-eRti3mCNQeOLwhvBeKXlKSh1vcF55mPOvq1c2njG-EX1gsIhGuCxUafsZY9ZAcNdi72JbNBXTljDfG0Ihpqp3zF~euvTDS2-A0-RjrLwaEaDw4dVipOlx4xILTQtMeF0uVxCoF2Y3D9eDIMO34dKFH3zzmIIgO5EgdusyF-YreICP7pi8qtIxsv6Sdq4TTvN6w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_1_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/402/image/image.jpg?Expires=1776732227&Signature=cfbG5UAXStjrpuyd-VjFB7X8xWfq-jDw9IOMkZtLBzDtbLISxEeEJLx2q7i-L60UVDTNfa53AGpFq~k9u9AiP9McTpAesEovjA9qu4m0K3an2UBiTdaRbwMUE4I7cWGa-nylakgauNCwNlJfgOKZiaqwayGOfWk5Rn721BE8meT9eXNwRaU5aXNaly7LqRNdHxn2kRqumpcqfgYt-0ylJQBo~WwKmfgutxGOPFkt56qHycIH9Q2BV4W6CP3whTAj3ckVh6aLqJnxpg0eqAEeTCtDhwC53aA15HGtG~OdC1kjXDbQ9Y30zxsZiFA~HCYCRXYl4s17PmkU3qPh6o5Vvg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000402.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 2,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/402/image/image.jpg?Expires=1776732227&Signature=cfbG5UAXStjrpuyd-VjFB7X8xWfq-jDw9IOMkZtLBzDtbLISxEeEJLx2q7i-L60UVDTNfa53AGpFq~k9u9AiP9McTpAesEovjA9qu4m0K3an2UBiTdaRbwMUE4I7cWGa-nylakgauNCwNlJfgOKZiaqwayGOfWk5Rn721BE8meT9eXNwRaU5aXNaly7LqRNdHxn2kRqumpcqfgYt-0ylJQBo~WwKmfgutxGOPFkt56qHycIH9Q2BV4W6CP3whTAj3ckVh6aLqJnxpg0eqAEeTCtDhwC53aA15HGtG~OdC1kjXDbQ9Y30zxsZiFA~HCYCRXYl4s17PmkU3qPh6o5Vvg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_2_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/403/image/image.jpg?Expires=1776732227&Signature=rfFiSIYmcik8ZgdUklh2p4GuSsG4x4-Kc2dzoAuRvmKokLzsqtePbh8ndRGkiOZWXiDSt73dBO9g25uuMGCfIyAtzBQowYSmzzHgSYBx9W8E2K5UyBvzjgxUd5OSfNZrD27-QjIB1C-Zq6xd1YrJDjHacq2QhDNNY4ZIQL6sog8-~KhDNqCDOqeE5KA0vY2Sl07vHgxaKQd3ftxrWu2y19FTWPCu4kgu6S1qzJzfWuo4Kv5XSLxecyQrDYlM6f6QNclvQlXuAeq-i8z3p4KXZXBB8jHbXgKTMRDbL2J6LErzMKpPLPmYhRrZ1wHv3c1tJg3O538qJpw~z8kgFNUmww__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000403.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 3,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/403/image/image.jpg?Expires=1776732227&Signature=rfFiSIYmcik8ZgdUklh2p4GuSsG4x4-Kc2dzoAuRvmKokLzsqtePbh8ndRGkiOZWXiDSt73dBO9g25uuMGCfIyAtzBQowYSmzzHgSYBx9W8E2K5UyBvzjgxUd5OSfNZrD27-QjIB1C-Zq6xd1YrJDjHacq2QhDNNY4ZIQL6sog8-~KhDNqCDOqeE5KA0vY2Sl07vHgxaKQd3ftxrWu2y19FTWPCu4kgu6S1qzJzfWuo4Kv5XSLxecyQrDYlM6f6QNclvQlXuAeq-i8z3p4KXZXBB8jHbXgKTMRDbL2J6LErzMKpPLPmYhRrZ1wHv3c1tJg3O538qJpw~z8kgFNUmww__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_3_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/404/image/image.jpg?Expires=1776732227&Signature=yzdpBGNgOZDaG9gNSny~webLVaQe0wJG8X8IEZiaVGCCwM4wyiLpwdO4xJbZFNCVD3V0VOIUnklzguo~n-NxouIza2e~VIeLwd1lunWh6ARYdlxLcwYXeufhgyC-6x3ekvumNvf2zOdzkDuF4fKD2VfNBesJ2o0Dgn9CHO4~NjMM4Nyz0q5FMgB-JSPgxXTRvtQgO-zvZxiDHLbDvzykNDPI2lYBGiwHsi711C-yH0mvT7LBtSJ5UXCMwqH7MVD4UUCjGjfPQVy9IX7oXlYQvJCg7co1721IkzaRdY~tQg83wpUSisYaYLXJLfkX8A1ol2fSZQRxLfk-dj~9KmFjCA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000404.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 4,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/404/image/image.jpg?Expires=1776732227&Signature=yzdpBGNgOZDaG9gNSny~webLVaQe0wJG8X8IEZiaVGCCwM4wyiLpwdO4xJbZFNCVD3V0VOIUnklzguo~n-NxouIza2e~VIeLwd1lunWh6ARYdlxLcwYXeufhgyC-6x3ekvumNvf2zOdzkDuF4fKD2VfNBesJ2o0Dgn9CHO4~NjMM4Nyz0q5FMgB-JSPgxXTRvtQgO-zvZxiDHLbDvzykNDPI2lYBGiwHsi711C-yH0mvT7LBtSJ5UXCMwqH7MVD4UUCjGjfPQVy9IX7oXlYQvJCg7co1721IkzaRdY~tQg83wpUSisYaYLXJLfkX8A1ol2fSZQRxLfk-dj~9KmFjCA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_4_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/405/image/image.jpg?Expires=1776732227&Signature=dUrd6fi-u~JtomlVREgwup~c8orYh1t5xXdp7ZyOh3Ji02Z11ZO~RXxMS1egduYl7mW~gnETAsgckMuY0zXt-5Fx0pdSEk0ycg-WAmcawz9QrFpCNH~G-B0tp3YEwgXtlyBH6ta0-MTZygiL6C4N-cBg9AEHC~aujhywmq2ZlpGhOcpNaRZp47KF01-V4FgkG5AuRzUFDPty1wsYurlnqIpqXnwTZjKFo70RS0hr~ciIpqfKCSmdp-JuybRHFBoPv-gNSQEBVzY2PTSs1NjWwmheHQKFN9cxOvZuLJ34KnxCA5pHBZ7wnzAmklxmy~15ERnlNJ9aKDnAuwSXDEaXnw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000405.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 5,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/405/image/image.jpg?Expires=1776732227&Signature=dUrd6fi-u~JtomlVREgwup~c8orYh1t5xXdp7ZyOh3Ji02Z11ZO~RXxMS1egduYl7mW~gnETAsgckMuY0zXt-5Fx0pdSEk0ycg-WAmcawz9QrFpCNH~G-B0tp3YEwgXtlyBH6ta0-MTZygiL6C4N-cBg9AEHC~aujhywmq2ZlpGhOcpNaRZp47KF01-V4FgkG5AuRzUFDPty1wsYurlnqIpqXnwTZjKFo70RS0hr~ciIpqfKCSmdp-JuybRHFBoPv-gNSQEBVzY2PTSs1NjWwmheHQKFN9cxOvZuLJ34KnxCA5pHBZ7wnzAmklxmy~15ERnlNJ9aKDnAuwSXDEaXnw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_5_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/406/image/image.jpg?Expires=1776732227&Signature=IVFsLGpERBoZZ1DLf8~VT4HR5liSbTkaqhKtH8aAvW1PmgOh8K~fI5xls949p5Kq1IdyDHEwljZa1TlIBoaRwAhYX20aKifGObhTTqOkLlCK3oZp5MpBWIKXIQuv-a7XkWaV2TcpI59RYWiT2Oy-9C0dFDJ7JuvCLijONtWpa3W2vAq5s2FzLoiFZsEHqs8r-bIFyT8O1k5UOhAY5Serq78WPnXzbr9RRGBL2TJWPzEeLzFjKG2YLisXixpFXNaAnfI1bJjEpCcv1-eXIfTlsQMLUi7lbPFjzA7HKut0fhTm8fq~dfGZGv3UUhf0fjzkJE6RNJnC16X10sbPfCOmQg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000406.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 6,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/406/image/image.jpg?Expires=1776732227&Signature=IVFsLGpERBoZZ1DLf8~VT4HR5liSbTkaqhKtH8aAvW1PmgOh8K~fI5xls949p5Kq1IdyDHEwljZa1TlIBoaRwAhYX20aKifGObhTTqOkLlCK3oZp5MpBWIKXIQuv-a7XkWaV2TcpI59RYWiT2Oy-9C0dFDJ7JuvCLijONtWpa3W2vAq5s2FzLoiFZsEHqs8r-bIFyT8O1k5UOhAY5Serq78WPnXzbr9RRGBL2TJWPzEeLzFjKG2YLisXixpFXNaAnfI1bJjEpCcv1-eXIfTlsQMLUi7lbPFjzA7HKut0fhTm8fq~dfGZGv3UUhf0fjzkJE6RNJnC16X10sbPfCOmQg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_6_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/407/image/image.jpg?Expires=1776732227&Signature=G8h9kCZ7Yx2wUpSawhhccURcIucIVX2LpQvfwFkGtNDtqsOfkXH1vhHn5~mhdkpmk21CrvVhGRz~-R4Ns9MC3KoxQ9N1ECfu3IT0PnEIcZ0ik0vcfsLZCBlalbWVuqfZzCzK7tgI1wymRuIeJqDhqD1i3OiMFlFYs~KytcBkMU305w16LnY2OsIpOOEZAsFwIQ5~ZKvL4zlPaHIIvd-i4nwruoDpu61ECz1bMo0IY-k3vCq8eRXuO7ITtQLdUrbdK6oIT3Dc9BHA1~hqoHVQU900MdXslHO7GBug7vwwZbQYw97uK5E~M9yK80kSamN~NbL9PUdasD8a9Wk2~RV4qg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000407.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 7,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/407/image/image.jpg?Expires=1776732227&Signature=G8h9kCZ7Yx2wUpSawhhccURcIucIVX2LpQvfwFkGtNDtqsOfkXH1vhHn5~mhdkpmk21CrvVhGRz~-R4Ns9MC3KoxQ9N1ECfu3IT0PnEIcZ0ik0vcfsLZCBlalbWVuqfZzCzK7tgI1wymRuIeJqDhqD1i3OiMFlFYs~KytcBkMU305w16LnY2OsIpOOEZAsFwIQ5~ZKvL4zlPaHIIvd-i4nwruoDpu61ECz1bMo0IY-k3vCq8eRXuO7ITtQLdUrbdK6oIT3Dc9BHA1~hqoHVQU900MdXslHO7GBug7vwwZbQYw97uK5E~M9yK80kSamN~NbL9PUdasD8a9Wk2~RV4qg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_7_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/408/image/image.jpg?Expires=1776732227&Signature=ZJxVd21rw9Y3NEg1WiZui5EYQzYd0jBjBCFQEZ0d3IZrUiYQ~sDyOB-14pTR8ls2ker1lMyAET3F24eNZ1nDQGVH37hS8comu2oiVm-ewHdJJtN4H-imUbhkge1CqJN41m38RFXja~YV0emG4w227nu9Jb943aPmW~8gssbhI3OuN9FrBRou1obSzKgmyyQ~vJ1lMtAHQrLTTUCamVr63cdrL6GlD5jiO2s9986guWQkvQglJ1baJkY9QycZV7k1Euu4qmLPixft96u38mxkLCRo2jXd3Il32XBtnYGKMU2bxnrFBWdGBN2T1KsL6ZhdkFiqZhsDvEURuPjHzT-j3A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000408.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 8,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/408/image/image.jpg?Expires=1776732227&Signature=ZJxVd21rw9Y3NEg1WiZui5EYQzYd0jBjBCFQEZ0d3IZrUiYQ~sDyOB-14pTR8ls2ker1lMyAET3F24eNZ1nDQGVH37hS8comu2oiVm-ewHdJJtN4H-imUbhkge1CqJN41m38RFXja~YV0emG4w227nu9Jb943aPmW~8gssbhI3OuN9FrBRou1obSzKgmyyQ~vJ1lMtAHQrLTTUCamVr63cdrL6GlD5jiO2s9986guWQkvQglJ1baJkY9QycZV7k1Euu4qmLPixft96u38mxkLCRo2jXd3Il32XBtnYGKMU2bxnrFBWdGBN2T1KsL6ZhdkFiqZhsDvEURuPjHzT-j3A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_8_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/409/image/image.jpg?Expires=1776732227&Signature=Pehf9~9rI8-9rjp8op6bTCOXv9gLeKRejXlOKrVISapW7E0VIJfUCBYTtWBcAqqHU-RFBXQaqA9uJ747w1K5HUie4bdGCv9zaAsSiPrLwhqzkdMf6PZF6970vrCAGgydKnDo57-HcIuGa7qM98ZRuKsSR1yKdrv1hVBVgPkW92gbcJJUxvzWIBhvw4xG-ZrTp7pxkfp0ZnSTF1NDt9AiwUHvoNH3U1fN~zutZV2XMHrpiILkWc3X-klg6aIl4fdSlgvRLMi21jkHFIRcrDDRzurC4QhtxACF7kyaLwGdkvVWdlLqVSmotF3itLFTxLPXcHH8K-XlyLS09zpirRoLCg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000409.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 9,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/409/image/image.jpg?Expires=1776732227&Signature=Pehf9~9rI8-9rjp8op6bTCOXv9gLeKRejXlOKrVISapW7E0VIJfUCBYTtWBcAqqHU-RFBXQaqA9uJ747w1K5HUie4bdGCv9zaAsSiPrLwhqzkdMf6PZF6970vrCAGgydKnDo57-HcIuGa7qM98ZRuKsSR1yKdrv1hVBVgPkW92gbcJJUxvzWIBhvw4xG-ZrTp7pxkfp0ZnSTF1NDt9AiwUHvoNH3U1fN~zutZV2XMHrpiILkWc3X-klg6aIl4fdSlgvRLMi21jkHFIRcrDDRzurC4QhtxACF7kyaLwGdkvVWdlLqVSmotF3itLFTxLPXcHH8K-XlyLS09zpirRoLCg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_9_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/410/image/image.jpg?Expires=1776732227&Signature=fRxun74f8uynQ7f-tg84ITmhlzh0bwBDPxYa9U9HdGQ0vA~Lyktq5vCKM8QaqSo~Xry4jNDpusPI--y4SgKTwS8k8rHLZYq2mJNUqF6OceLveCLChFGSmi342b89dbU9VUcpzErMZ6DUsnw2c1QJ96r3RaYZJcfkSnRauojqqadGzYkIVHUrisQP0f3CGgJ7kO6XTbU21G12LF5mi7wmTqDJi2e4lZY7Y2yJhHojhA80p-PXo73jPQVVc5tvyltPRmPvosKdp3KaIcHxr7lRC6J9gjjguWDvLD90rrjl~ZMH6h6c9KAKJFeMe03msqp3PfHjw0kGdly4nX0vctojOg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000410.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 10,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/410/image/image.jpg?Expires=1776732227&Signature=fRxun74f8uynQ7f-tg84ITmhlzh0bwBDPxYa9U9HdGQ0vA~Lyktq5vCKM8QaqSo~Xry4jNDpusPI--y4SgKTwS8k8rHLZYq2mJNUqF6OceLveCLChFGSmi342b89dbU9VUcpzErMZ6DUsnw2c1QJ96r3RaYZJcfkSnRauojqqadGzYkIVHUrisQP0f3CGgJ7kO6XTbU21G12LF5mi7wmTqDJi2e4lZY7Y2yJhHojhA80p-PXo73jPQVVc5tvyltPRmPvosKdp3KaIcHxr7lRC6J9gjjguWDvLD90rrjl~ZMH6h6c9KAKJFeMe03msqp3PfHjw0kGdly4nX0vctojOg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_10_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/411/image/image.jpg?Expires=1776732227&Signature=fIiRmbxkgdXMBDwled963MgaUC8nNgodIxpGduZ1d-tpW6FIwHtvHdILQW1Be3ZqiuSg88yh3fQEA-aBaIAl40GS4x4wP0cnyb32gxxnSf2b-1xdwGgfphykzv7a9jMDwIYV9hydisd1NOcfJanKh7aNI1bS6Lc~xtMH29nSZxDvPGePjbAImHY06tUElO4WChZVAjtXvWIEFtHjMU9Lobvok-kCSzQuUyjhYjd3FAHU8lkZMb6kwWgs4JUBvv2s7kBmC7RFSGFsLIWqy~b33M1Sp95Zno5B3PEFWcMOcf2GqcvMARLuEKbrKzWHCKox7an8cPuSuz2kRPwHidnOPw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000411.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 11,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/411/image/image.jpg?Expires=1776732227&Signature=fIiRmbxkgdXMBDwled963MgaUC8nNgodIxpGduZ1d-tpW6FIwHtvHdILQW1Be3ZqiuSg88yh3fQEA-aBaIAl40GS4x4wP0cnyb32gxxnSf2b-1xdwGgfphykzv7a9jMDwIYV9hydisd1NOcfJanKh7aNI1bS6Lc~xtMH29nSZxDvPGePjbAImHY06tUElO4WChZVAjtXvWIEFtHjMU9Lobvok-kCSzQuUyjhYjd3FAHU8lkZMb6kwWgs4JUBvv2s7kBmC7RFSGFsLIWqy~b33M1Sp95Zno5B3PEFWcMOcf2GqcvMARLuEKbrKzWHCKox7an8cPuSuz2kRPwHidnOPw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_11_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/412/image/image.jpg?Expires=1776732227&Signature=LPMnp2XgAn0IarE39KCJ1SUQ2YYQ3a72SrkD8FKZyxDG8jQ84rq6T4wuRS145miHtW5Mihqk1IJ3MmVQzIvUg3h81qgEV3VUPbO-K1l2jBlFDLbDZo6TlJ2-9fNAMmdfXX~UyeuseeR90KMI9jL2AKfyH4WQ5PD8qV2i7XEbpg4cQkRvSfyo5rwm95Nwp0uKM5Ck0pkWke1B1pBC0QhUrCY8tHtECKGDZqxVeK7wJOcYTeOmzTT49I7OfqJJ7zaBlXAvHZRc40CTNWgwaRM-EN~QJXKk~uHaCFu7ZIwK8~TVx44X9U0GED02eCuhh20iUayTIdu9o5AORta9AnISdw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000412.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 12,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/412/image/image.jpg?Expires=1776732227&Signature=LPMnp2XgAn0IarE39KCJ1SUQ2YYQ3a72SrkD8FKZyxDG8jQ84rq6T4wuRS145miHtW5Mihqk1IJ3MmVQzIvUg3h81qgEV3VUPbO-K1l2jBlFDLbDZo6TlJ2-9fNAMmdfXX~UyeuseeR90KMI9jL2AKfyH4WQ5PD8qV2i7XEbpg4cQkRvSfyo5rwm95Nwp0uKM5Ck0pkWke1B1pBC0QhUrCY8tHtECKGDZqxVeK7wJOcYTeOmzTT49I7OfqJJ7zaBlXAvHZRc40CTNWgwaRM-EN~QJXKk~uHaCFu7ZIwK8~TVx44X9U0GED02eCuhh20iUayTIdu9o5AORta9AnISdw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_12_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/413/image/image.jpg?Expires=1776732227&Signature=sJN5JqHyODJN0iHB0SVIHucb-ALcMPAU0EH1DpeqmBAVF4~upfHxIhKlIBzp-e9xb75Pw4j7RFzxZ9fX9Ii0Ua8d3xtAwoF~obQfHdel29voGOnFNRuEcgaGOwXeYkofy98QoxZ38xfT2K1aBEzS1YSOy5GjjbbwWfp0niXhVVcyFPoWH7ZfGFsmSSu1hpRoqeUgPGNBHTbKp-FcD5AP~SVp5u6WPgMiqIjjpBf0v3CMQaUsoSI~PY1vmkA0XYAnC4Z7kTAbUlKdTp5RkDLGSmSL-ejXrs-1jEb16QHWzgCHHZECW4IoByUVveF2byKfiYnkTRrZXdKBYKHlHTPCOw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000413.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 13,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/413/image/image.jpg?Expires=1776732227&Signature=sJN5JqHyODJN0iHB0SVIHucb-ALcMPAU0EH1DpeqmBAVF4~upfHxIhKlIBzp-e9xb75Pw4j7RFzxZ9fX9Ii0Ua8d3xtAwoF~obQfHdel29voGOnFNRuEcgaGOwXeYkofy98QoxZ38xfT2K1aBEzS1YSOy5GjjbbwWfp0niXhVVcyFPoWH7ZfGFsmSSu1hpRoqeUgPGNBHTbKp-FcD5AP~SVp5u6WPgMiqIjjpBf0v3CMQaUsoSI~PY1vmkA0XYAnC4Z7kTAbUlKdTp5RkDLGSmSL-ejXrs-1jEb16QHWzgCHHZECW4IoByUVveF2byKfiYnkTRrZXdKBYKHlHTPCOw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_13_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/414/image/image.jpg?Expires=1776732227&Signature=wj~GsVoUYQ0UO6TAzbOXmSaw4lN1aiTDDszcFCiOXIZvuw9V8PBImu7R5OVseHcnV2AevITmoiaGujB3zP0I7o~19QnI9sh~hjNKTF7ggRHPUb-mGCS3A0zhwMR45Kjdt3CdLTPjS~FgsiXZNWsfwf~ky-IfQNST1r7~kpys44FS7Z~RW8SoMFlk0tCSA3Zh5XXRZG~d0ZqmSYiti7pUvQ~7T86fcTgTcaADMuk7lcAGVCfqAI5Mu7yqMLGYziytQ~B1QLPKoHORpLzc0WTqjjQ6cExvKF5xgw-PLVAVTohebW5pc9lBzT1BBnccNdeuho2~PtXW4v210w1V-U4xOQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000414.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 14,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/414/image/image.jpg?Expires=1776732227&Signature=wj~GsVoUYQ0UO6TAzbOXmSaw4lN1aiTDDszcFCiOXIZvuw9V8PBImu7R5OVseHcnV2AevITmoiaGujB3zP0I7o~19QnI9sh~hjNKTF7ggRHPUb-mGCS3A0zhwMR45Kjdt3CdLTPjS~FgsiXZNWsfwf~ky-IfQNST1r7~kpys44FS7Z~RW8SoMFlk0tCSA3Zh5XXRZG~d0ZqmSYiti7pUvQ~7T86fcTgTcaADMuk7lcAGVCfqAI5Mu7yqMLGYziytQ~B1QLPKoHORpLzc0WTqjjQ6cExvKF5xgw-PLVAVTohebW5pc9lBzT1BBnccNdeuho2~PtXW4v210w1V-U4xOQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_14_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/415/image/image.jpg?Expires=1776732227&Signature=LzqcR2RZAU58hTWkoE2J6C9SIQFRxY3WZcnZoz-vAx0~Hs7SXIJt-rPv3QLAbI5B-zhFqJ0B4DOVZ1eyAke73vgdLiyPLtcNkVmioCpNiNC54N~A3wwlD7A5KgZLfhgY6QORnS~U9IbnBcteFQgKBPgGCBAVAua0prATcHO0gcQX0v3OlvxTTRZRrPYNpi~0cxwx9a9ckbgMeNQie07nYA~4zKh-xw64rG4x~NPywgPBfWAkoHde9WBPcB6bivykTeDaKpqhvP2PopUNeatnzJ~M2x7Isc6Td4yZ0wgHGheDRkEfTRez-T8SipCv5r86LIJjdBUb0OhX6pt0-DX6EQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000415.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 15,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/415/image/image.jpg?Expires=1776732227&Signature=LzqcR2RZAU58hTWkoE2J6C9SIQFRxY3WZcnZoz-vAx0~Hs7SXIJt-rPv3QLAbI5B-zhFqJ0B4DOVZ1eyAke73vgdLiyPLtcNkVmioCpNiNC54N~A3wwlD7A5KgZLfhgY6QORnS~U9IbnBcteFQgKBPgGCBAVAua0prATcHO0gcQX0v3OlvxTTRZRrPYNpi~0cxwx9a9ckbgMeNQie07nYA~4zKh-xw64rG4x~NPywgPBfWAkoHde9WBPcB6bivykTeDaKpqhvP2PopUNeatnzJ~M2x7Isc6Td4yZ0wgHGheDRkEfTRez-T8SipCv5r86LIJjdBUb0OhX6pt0-DX6EQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_15_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/416/image/image.jpg?Expires=1776732227&Signature=19af~VgL0BD6q9-wotrA1zL5HN23fpAPKj36IlS2SYQXXqjejAXonwAjGpldfY8aJwIh36uiOStJF067RCgcYxXsR4GlCXImBdf1QOkLTY63iKOinmZ~Omw6x4H2jzM4ZqFiL9387QBUi0RzM455vVEC--z4tfADH7nAqq0WmITY2dScRDN-Jm9c2eHx83UjFgY35eCidp5IEXUg6RZ7QeFRAdw~KFmzIXTv857F3Sbjd18LkDEPmZMfHjMJ9piPBWKgWu-yADb8iecZN2--OjBuCaefS26VmiQ3EJQjf3ux~B8X6t1AvS7NAN4~Q1hiVIgErcbqm-TbewSiWwoGEg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000416.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 16,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/416/image/image.jpg?Expires=1776732227&Signature=19af~VgL0BD6q9-wotrA1zL5HN23fpAPKj36IlS2SYQXXqjejAXonwAjGpldfY8aJwIh36uiOStJF067RCgcYxXsR4GlCXImBdf1QOkLTY63iKOinmZ~Omw6x4H2jzM4ZqFiL9387QBUi0RzM455vVEC--z4tfADH7nAqq0WmITY2dScRDN-Jm9c2eHx83UjFgY35eCidp5IEXUg6RZ7QeFRAdw~KFmzIXTv857F3Sbjd18LkDEPmZMfHjMJ9piPBWKgWu-yADb8iecZN2--OjBuCaefS26VmiQ3EJQjf3ux~B8X6t1AvS7NAN4~Q1hiVIgErcbqm-TbewSiWwoGEg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_16_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/417/image/image.jpg?Expires=1776732227&Signature=ZsXaZdWyPdpp9d67Ug3hfc9MwuHKNI43fr~~33Xb8l4xDA4WVhmS9fULRtAc8ygNQesIf2FlnGjYLtmsMpu72LlEsk-Mdrah15dD1fwRy7tGYb5qHfSBuY71Hb3qQdsAlUrVkMojPeO-ERkZaX-PAt-8EX0iA4zY-d10JtPNfwcRImQVFTKlJC88MxoHifC4J6sU6XT1qyYRJtp8-rC7e8mwpbYWi2xw98ItfjgNe9Cnnh2odACd6l0cXk4Me4qFbZlgGrNjMaBMxhaSsO13YKSiQYmn5ExE32h53~GCLUPOq-2PCWXfjnJfuZ6fE98N75UUNStpikqE~vObB8f9iw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000417.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 17,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/417/image/image.jpg?Expires=1776732227&Signature=ZsXaZdWyPdpp9d67Ug3hfc9MwuHKNI43fr~~33Xb8l4xDA4WVhmS9fULRtAc8ygNQesIf2FlnGjYLtmsMpu72LlEsk-Mdrah15dD1fwRy7tGYb5qHfSBuY71Hb3qQdsAlUrVkMojPeO-ERkZaX-PAt-8EX0iA4zY-d10JtPNfwcRImQVFTKlJC88MxoHifC4J6sU6XT1qyYRJtp8-rC7e8mwpbYWi2xw98ItfjgNe9Cnnh2odACd6l0cXk4Me4qFbZlgGrNjMaBMxhaSsO13YKSiQYmn5ExE32h53~GCLUPOq-2PCWXfjnJfuZ6fE98N75UUNStpikqE~vObB8f9iw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_17_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/418/image/image.jpg?Expires=1776732227&Signature=OrORHBbxObf6JVg2913T0l~WBEe17wn~g3YZojDFG~wKm5yeiqRf9PQNbukaoT0NH~CqxHqPowo4F~uY3CCnKQ1WkhOs~9byvlGD9x7IjAYgHsy88ypbgiIMLQdRS~BxchDdHvFouBy3X5Cy7FUMoz6RcdfsR4ymDfXlyxucCnGXYte295OBdS9lOmtuPT~VNt90~P7V2VtKhTZcwBrMqjrQPu6ccmF8vxCHoyePr64Wk6AGDkmdou79ArnGssVXsYjGQvCr~FvX-0m0Wgu6U5TITaVlmv1ydNeP-Bj6fR7J0CDLM6GqcOwSsjZN2SkN53wXEFceXpSBOYELFGIwpQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000418.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 18,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/418/image/image.jpg?Expires=1776732227&Signature=OrORHBbxObf6JVg2913T0l~WBEe17wn~g3YZojDFG~wKm5yeiqRf9PQNbukaoT0NH~CqxHqPowo4F~uY3CCnKQ1WkhOs~9byvlGD9x7IjAYgHsy88ypbgiIMLQdRS~BxchDdHvFouBy3X5Cy7FUMoz6RcdfsR4ymDfXlyxucCnGXYte295OBdS9lOmtuPT~VNt90~P7V2VtKhTZcwBrMqjrQPu6ccmF8vxCHoyePr64Wk6AGDkmdou79ArnGssVXsYjGQvCr~FvX-0m0Wgu6U5TITaVlmv1ydNeP-Bj6fR7J0CDLM6GqcOwSsjZN2SkN53wXEFceXpSBOYELFGIwpQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_18_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/419/image/image.jpg?Expires=1776732227&Signature=KvYwIpoYs54X2nBj63thhPS~2dGL~Imh-aldhaKroULk1HOkW7jKhTCr6UN4U3x2RqrDkc4HEbJ5fR9AotZZ9hp2TWzBqpiY~LUOOvP4kA2qpXwUEYA7LjHngHwastHFjtfMotfJKDKB5JnpZqHelkePFsGrE9cFi4Wmh5Vl7umhRphO2YPzVplsgYrvyP6itGh7DFrGCTk47XIgh8SN024cktK5Rihn9ByxTPHt0-IDvYQyp-SsDziRTAUaduP8leBX-OXwx4suwtwd6zngnBFXoBVL99KXCw7JMIr4BNo8Qh4c2Z6Lp0730MBrRpdhoWFaY8a98phCXEX1qssMRQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000419.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 19,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/419/image/image.jpg?Expires=1776732227&Signature=KvYwIpoYs54X2nBj63thhPS~2dGL~Imh-aldhaKroULk1HOkW7jKhTCr6UN4U3x2RqrDkc4HEbJ5fR9AotZZ9hp2TWzBqpiY~LUOOvP4kA2qpXwUEYA7LjHngHwastHFjtfMotfJKDKB5JnpZqHelkePFsGrE9cFi4Wmh5Vl7umhRphO2YPzVplsgYrvyP6itGh7DFrGCTk47XIgh8SN024cktK5Rihn9ByxTPHt0-IDvYQyp-SsDziRTAUaduP8leBX-OXwx4suwtwd6zngnBFXoBVL99KXCw7JMIr4BNo8Qh4c2Z6Lp0730MBrRpdhoWFaY8a98phCXEX1qssMRQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_19_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/420/image/image.jpg?Expires=1776732227&Signature=h~pS2bt9U75DYmk7rTLyapiw6YCSZDNb5qNyi2fce1QNzfUiHTMwDPDruV3whZVaBqzIMGOhRMfx-T~fnlzSaaKf0m0HxhpbuGK9zQU3gLOX25Uqaw2GWycZgiIJ5zR7HBsq0~Am5LbuE3toAI9-wyO8XiJfG4UGqyiVhM93sIr~s4paX2VRPi9yt3nTJw-IvbdW4EN6263OlMKU0K-ebYHNhR1Sa0T-vUiBlEgy7iXmGwb7xXBH~VHiEymu-rCSBTfY52WlcUzgl5N1g5ZdXQUKTPpo5cwsaKumGwT5HQnWMNrzTwIB1Y8c0e1QJCXZS7EW63caGtPKQFTt6bagqQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000420.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 20,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/420/image/image.jpg?Expires=1776732227&Signature=h~pS2bt9U75DYmk7rTLyapiw6YCSZDNb5qNyi2fce1QNzfUiHTMwDPDruV3whZVaBqzIMGOhRMfx-T~fnlzSaaKf0m0HxhpbuGK9zQU3gLOX25Uqaw2GWycZgiIJ5zR7HBsq0~Am5LbuE3toAI9-wyO8XiJfG4UGqyiVhM93sIr~s4paX2VRPi9yt3nTJw-IvbdW4EN6263OlMKU0K-ebYHNhR1Sa0T-vUiBlEgy7iXmGwb7xXBH~VHiEymu-rCSBTfY52WlcUzgl5N1g5ZdXQUKTPpo5cwsaKumGwT5HQnWMNrzTwIB1Y8c0e1QJCXZS7EW63caGtPKQFTt6bagqQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_20_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/421/image/image.jpg?Expires=1776732227&Signature=fJ~teQ2UhJ68IXUSsonqsfzqsYGjQMGxTbAnPoivo9yPiwErhVL-vTmvas0CyIK3f5e3eIdnIAg0lgWPUokkfpt46TPZ5uuqzdUXt5hx0cmodjABkKAUfgsffDG~xKsMkIDmG0DImy-gZFLtj4K0lht4Zi1AiQU1XM-EST6dCfXMhUIwDCeD9hha0bgU831ttACeJ~R2NXScKKVFTeRPsQduInGVublU40i50HdjMLcdVnebYAWQk1NgTN4hF2KyNQf9MtecJrGATyJbjaZDx-9Vqvjm5sCgqMJtpOaynAOq3-d3aqZKQf06NG6c5yVJMP87Y7K18YGguzV2noYZwg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000421.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 21,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/421/image/image.jpg?Expires=1776732227&Signature=fJ~teQ2UhJ68IXUSsonqsfzqsYGjQMGxTbAnPoivo9yPiwErhVL-vTmvas0CyIK3f5e3eIdnIAg0lgWPUokkfpt46TPZ5uuqzdUXt5hx0cmodjABkKAUfgsffDG~xKsMkIDmG0DImy-gZFLtj4K0lht4Zi1AiQU1XM-EST6dCfXMhUIwDCeD9hha0bgU831ttACeJ~R2NXScKKVFTeRPsQduInGVublU40i50HdjMLcdVnebYAWQk1NgTN4hF2KyNQf9MtecJrGATyJbjaZDx-9Vqvjm5sCgqMJtpOaynAOq3-d3aqZKQf06NG6c5yVJMP87Y7K18YGguzV2noYZwg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_21_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/422/image/image.jpg?Expires=1776732227&Signature=ywg0wrJp7fueDPFUXJB8T4VE-ILuUHpyHqblERd-xPRODHvN8~BW-oslYA4Ia85BD-3iis6vdrN4a44HBvx0V~FxeK5O4PnOM04rq3pIa3LcPmNzn1rDNtZ1o2~k7TYEpNKV6e5hGgmRXhhmIGNYcTSLTX~S50UYoGbkHlLJv4uaOKpMsDxbuAxxhINLRBtzsESdU9OoNMVhUyRnykuHCUoQ8zeAADDVysKhjSHcEJkaeBHybin2afUqIkNl6KTdOxap7yYVbSXkMNAY98RSEAc5P1yMEshvx76VBXvqoo74RdAfQt17-t8UNA72Fe~KyvZ-K6TbOVXQxomglWZXLw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000422.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 22,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/422/image/image.jpg?Expires=1776732227&Signature=ywg0wrJp7fueDPFUXJB8T4VE-ILuUHpyHqblERd-xPRODHvN8~BW-oslYA4Ia85BD-3iis6vdrN4a44HBvx0V~FxeK5O4PnOM04rq3pIa3LcPmNzn1rDNtZ1o2~k7TYEpNKV6e5hGgmRXhhmIGNYcTSLTX~S50UYoGbkHlLJv4uaOKpMsDxbuAxxhINLRBtzsESdU9OoNMVhUyRnykuHCUoQ8zeAADDVysKhjSHcEJkaeBHybin2afUqIkNl6KTdOxap7yYVbSXkMNAY98RSEAc5P1yMEshvx76VBXvqoo74RdAfQt17-t8UNA72Fe~KyvZ-K6TbOVXQxomglWZXLw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_22_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/423/image/image.jpg?Expires=1776732227&Signature=t4DrAxUWOOdgdfiWKs9L~8hyP5jABOuZ5NMGnHxqpDpoSdZR~6G8fkC0PClYr~i86Y-UxCDhB0HK4jccttW6v6Tb5xWNMC7cVOc8g3poYy0QlqbJRfBp9C4BlCfAR9CDj9j7swhPRn06eRVo67InGjhu6TRrbSfG23VgWXOZMOROAoBSGCXkiSLbUdK0eKGBJ0zqnT~OjtW6qGGeqGuohbYMV-GZxqASWOqqPq8uOGrgFBHPfHNnwjvbwEQ2a8056MJnvqGn-M1F6FFFC3Cy9nmzPpwE-NGKeX0lpMpi0duVXkxEo1jCXLYTXAG-zm6BuIVUCyJh22gHMEoxxZr2TQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000423.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 23,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/423/image/image.jpg?Expires=1776732227&Signature=t4DrAxUWOOdgdfiWKs9L~8hyP5jABOuZ5NMGnHxqpDpoSdZR~6G8fkC0PClYr~i86Y-UxCDhB0HK4jccttW6v6Tb5xWNMC7cVOc8g3poYy0QlqbJRfBp9C4BlCfAR9CDj9j7swhPRn06eRVo67InGjhu6TRrbSfG23VgWXOZMOROAoBSGCXkiSLbUdK0eKGBJ0zqnT~OjtW6qGGeqGuohbYMV-GZxqASWOqqPq8uOGrgFBHPfHNnwjvbwEQ2a8056MJnvqGn-M1F6FFFC3Cy9nmzPpwE-NGKeX0lpMpi0duVXkxEo1jCXLYTXAG-zm6BuIVUCyJh22gHMEoxxZr2TQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_23_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/424/image/image.jpg?Expires=1776732227&Signature=cMEA5WTQ1G7krklqFct4aMh7k8mA92V2hNhmXANM23NHGBE~HZdaUam8zr-ztjigrwami3Hmc2lo-7JZmGYnMsLDTPHcWaD9BEGmZxm63YrigwYeU8xbLMEGhgvlgEg39HE6Ud486DDwSfm1KCQ4uId9FMxczypJ2wcqYJufzUa9zIvgBZWKRabhlSSrIV9~cqBaQqs9ae6XDiLszCdGXgBKR5ezy~rGs9yrSE3rk-WsGDeI6qXIa75-mIeGvJ1K-1FzPOOJOCciMgabsVsmzfG3ZIuH1IziW~nl5zNRimaEdK9epelVuTUSK1R9W2arxnVPyqNfYqvz61MyL1RtWg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000424.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 24,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/424/image/image.jpg?Expires=1776732227&Signature=cMEA5WTQ1G7krklqFct4aMh7k8mA92V2hNhmXANM23NHGBE~HZdaUam8zr-ztjigrwami3Hmc2lo-7JZmGYnMsLDTPHcWaD9BEGmZxm63YrigwYeU8xbLMEGhgvlgEg39HE6Ud486DDwSfm1KCQ4uId9FMxczypJ2wcqYJufzUa9zIvgBZWKRabhlSSrIV9~cqBaQqs9ae6XDiLszCdGXgBKR5ezy~rGs9yrSE3rk-WsGDeI6qXIa75-mIeGvJ1K-1FzPOOJOCciMgabsVsmzfG3ZIuH1IziW~nl5zNRimaEdK9epelVuTUSK1R9W2arxnVPyqNfYqvz61MyL1RtWg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_24_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/425/image/image.jpg?Expires=1776732227&Signature=gMZIN7kF1uZTAF1Dljg-7rhdZ7lAZS0uCF~iRKwOu3AR19My1LeP2WulaZqcUeXj1o075lgr0648jqHArR7TwpnJgyoaGJboVDZVRIrOEG206X8H0uwhenFg-QWQT6YKqgOuAjOPgA90fmEAniMEZWuBJMHhQnuri~nX~DigheTVifLZ5X4jGuzKMLAr6Bw~RSfoRYQY~VjJWqbUmqev2HntFc4VEjE9Y5GjczNRqKSk~I-9pK9b4d1VWf99oByW-r-GxwQckfxbSeVEjDI3MtHueU0p8Qt~7yvPw1IpbgnK8J9t7xHqMLiLMJyDd9ZDyJBJ0QIFqQriW4m6L6Ypfw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000425.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 25,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/425/image/image.jpg?Expires=1776732227&Signature=gMZIN7kF1uZTAF1Dljg-7rhdZ7lAZS0uCF~iRKwOu3AR19My1LeP2WulaZqcUeXj1o075lgr0648jqHArR7TwpnJgyoaGJboVDZVRIrOEG206X8H0uwhenFg-QWQT6YKqgOuAjOPgA90fmEAniMEZWuBJMHhQnuri~nX~DigheTVifLZ5X4jGuzKMLAr6Bw~RSfoRYQY~VjJWqbUmqev2HntFc4VEjE9Y5GjczNRqKSk~I-9pK9b4d1VWf99oByW-r-GxwQckfxbSeVEjDI3MtHueU0p8Qt~7yvPw1IpbgnK8J9t7xHqMLiLMJyDd9ZDyJBJ0QIFqQriW4m6L6Ypfw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_25_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/426/image/image.jpg?Expires=1776732227&Signature=CnJFH0bPyuDGlRzWuhBKEhKlG78GgZTobGAFUd8gxtXZmdNdLh2lGNHkSNK1giPn-kI1xJuVRz~3p3L4Awe2Lq5HNBDevbLBbSsniNvfk6Fh7bxbkSnyBDzwaKY0XnuF1q7U604Dp-wuzClm5cd9BZ1aP2u0c7kHFqH-vG1HFMEFLf6YStsXMfmDKhzAdFncYqyaK468YRGohOEYNQze769rGroHl4tnh5lec~6pS~3Ezw5wbg6Svb4o0dKqlbAf--fHMHEOvA8Synurw2msV6o~~eVF0xxyDI7L4S4djTIC7tuZPhFOBe6pAaJ-npoWfm5kd-Ivb2So7Fi5NoIWNA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000426.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 26,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/426/image/image.jpg?Expires=1776732227&Signature=CnJFH0bPyuDGlRzWuhBKEhKlG78GgZTobGAFUd8gxtXZmdNdLh2lGNHkSNK1giPn-kI1xJuVRz~3p3L4Awe2Lq5HNBDevbLBbSsniNvfk6Fh7bxbkSnyBDzwaKY0XnuF1q7U604Dp-wuzClm5cd9BZ1aP2u0c7kHFqH-vG1HFMEFLf6YStsXMfmDKhzAdFncYqyaK468YRGohOEYNQze769rGroHl4tnh5lec~6pS~3Ezw5wbg6Svb4o0dKqlbAf--fHMHEOvA8Synurw2msV6o~~eVF0xxyDI7L4S4djTIC7tuZPhFOBe6pAaJ-npoWfm5kd-Ivb2So7Fi5NoIWNA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_26_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/427/image/image.jpg?Expires=1776732227&Signature=GxEdQKjxywA-aZ8EciUo3pRbId1H6rq4lsjKdJRn5QTcl~4dqBXhnxjXACCbTpg59BGPdrr-7bbgpcnAfTdQ-ZgaRAnqhq8P9ffXxw9xk7fy3YMQtA3zGjdejGpcL6Jru7kjZhDAkrZ~OTQ1gmGw00CZtY6rwZSEXB~9PEnMuXfOPvkHYCJc4yiIek0G63app1P6lqlkjnK2Rp4~d7rc3Dp0HA046vqOA4v0qhK2e1qk~d7e7POs7KsWSq7WJxRUyCshfaidx~mnzjUa42NosQxTNi-BMUjKXfhAc8N9x5wfevsBqj5FscGO6KyA0jnH7wclMN0t3~Crn6PtSQp4wQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000427.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 27,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/427/image/image.jpg?Expires=1776732227&Signature=GxEdQKjxywA-aZ8EciUo3pRbId1H6rq4lsjKdJRn5QTcl~4dqBXhnxjXACCbTpg59BGPdrr-7bbgpcnAfTdQ-ZgaRAnqhq8P9ffXxw9xk7fy3YMQtA3zGjdejGpcL6Jru7kjZhDAkrZ~OTQ1gmGw00CZtY6rwZSEXB~9PEnMuXfOPvkHYCJc4yiIek0G63app1P6lqlkjnK2Rp4~d7rc3Dp0HA046vqOA4v0qhK2e1qk~d7e7POs7KsWSq7WJxRUyCshfaidx~mnzjUa42NosQxTNi-BMUjKXfhAc8N9x5wfevsBqj5FscGO6KyA0jnH7wclMN0t3~Crn6PtSQp4wQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_27_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/428/image/image.jpg?Expires=1776732227&Signature=mKt4gAR28DGVfN6lWu2k8DH2O4JwvtMbn8yHZpDZHGGS8Nuee7~3ftsQIfZKxbVmTo6W~6wPgWoyOo~NCRebpYe-~9~EaGGtisCrq2SAedPENQ5yBLoUzpmg9s33WEthjwey-ITXwKMRmN1SaHeWwd5998mDkRQ0gllIrrv~IS6YClSFlthxSGj11qAHktCEyFppGxoYrAA3QaRFx6~0OUQM41r8K069pSOmDy3u57SKcIMMh79j6MMHGOtNzhIgI~0j3ougDP4vZ59etSZoNHyT69rXHveiJG0X42Aab4aMabcqG3GWhciL0vQ8QGyzyLQuZ1cEAfUnfImUKLk9mw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000428.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 28,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/428/image/image.jpg?Expires=1776732227&Signature=mKt4gAR28DGVfN6lWu2k8DH2O4JwvtMbn8yHZpDZHGGS8Nuee7~3ftsQIfZKxbVmTo6W~6wPgWoyOo~NCRebpYe-~9~EaGGtisCrq2SAedPENQ5yBLoUzpmg9s33WEthjwey-ITXwKMRmN1SaHeWwd5998mDkRQ0gllIrrv~IS6YClSFlthxSGj11qAHktCEyFppGxoYrAA3QaRFx6~0OUQM41r8K069pSOmDy3u57SKcIMMh79j6MMHGOtNzhIgI~0j3ougDP4vZ59etSZoNHyT69rXHveiJG0X42Aab4aMabcqG3GWhciL0vQ8QGyzyLQuZ1cEAfUnfImUKLk9mw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_28_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/429/image/image.jpg?Expires=1776732227&Signature=Upe7peV99-eLg6WUB68nCQJYk~KFIcVm3Piy5chuH~v2IxFGfuMuS1GNwv8YTQDZuNBup1KF4wW2MaV2LOgZCqfoQPimG7MkBRyWHg1MZbbxzttI~QPXwGbd17rYM0lLZdqszZdzxjm8tZpOyTFavIRxT6l1qzVTXMhoGMb76acZ2jsTEyeMh39j4NL3AAZg2q98Hgc3KYwsbt8JzDi7ggBNB9GR3wdFH1EdEocdqN-xEKNTbYFkqNfIg~569cdydA6IW9hESylfao-9dRWY0KRhbblsdpcdFJnqMEe0zzdmU6SOBTvPCo-ePH7U-i7soRxO-UacxoSmlhd3ldC5kg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000429.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 29,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/429/image/image.jpg?Expires=1776732227&Signature=Upe7peV99-eLg6WUB68nCQJYk~KFIcVm3Piy5chuH~v2IxFGfuMuS1GNwv8YTQDZuNBup1KF4wW2MaV2LOgZCqfoQPimG7MkBRyWHg1MZbbxzttI~QPXwGbd17rYM0lLZdqszZdzxjm8tZpOyTFavIRxT6l1qzVTXMhoGMb76acZ2jsTEyeMh39j4NL3AAZg2q98Hgc3KYwsbt8JzDi7ggBNB9GR3wdFH1EdEocdqN-xEKNTbYFkqNfIg~569cdydA6IW9hESylfao-9dRWY0KRhbblsdpcdFJnqMEe0zzdmU6SOBTvPCo-ePH7U-i7soRxO-UacxoSmlhd3ldC5kg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_29_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/430/image/image.jpg?Expires=1776732227&Signature=txbpusqbvPzO4gfMdW6lZpLPDlZUuOWpINmRVSa4S4sb4L5jbmrs7lWrk7mrJrrO1H-ve6Ot4ACm2kTokDcvaIeX6vS~6FGHZ3oo~pY0posG5n4k7xmUbDkWfKoEMEtaTB91HFfyi7TudOB085A50EUrm4PPTw009FdBU3fTJ-zZ4iciGuftGePtYfnR8vupRf44tiNu-zODDVusASSH6vtR4V2lq9wHvAX5vhk2ocv1FLG8vl3QcWdnLuVundi9Gp3szd-~6EL8XP7dL8CMXextGfyZMysTL8qyonleo8D~GSCnELM28pjjLszkFL5IU9Ge8rF5tt1hktdlvqiN5A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000430.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 30,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/430/image/image.jpg?Expires=1776732227&Signature=txbpusqbvPzO4gfMdW6lZpLPDlZUuOWpINmRVSa4S4sb4L5jbmrs7lWrk7mrJrrO1H-ve6Ot4ACm2kTokDcvaIeX6vS~6FGHZ3oo~pY0posG5n4k7xmUbDkWfKoEMEtaTB91HFfyi7TudOB085A50EUrm4PPTw009FdBU3fTJ-zZ4iciGuftGePtYfnR8vupRf44tiNu-zODDVusASSH6vtR4V2lq9wHvAX5vhk2ocv1FLG8vl3QcWdnLuVundi9Gp3szd-~6EL8XP7dL8CMXextGfyZMysTL8qyonleo8D~GSCnELM28pjjLszkFL5IU9Ge8rF5tt1hktdlvqiN5A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_30_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/431/image/image.jpg?Expires=1776732227&Signature=eyObSzwKxubvlpcVsqyRYx2EWel0rzF2jMNDU~n5oealYZ-4FwqnK-VBiNVRx2X1e1fEjfL8d-ynxtmWrGLW8E5v2GA6EXaGbBddzZgYyagmiHs8-uIFlTd8g4ck7fYJL2xMf3xWyBRIWXxKFR5lqMjcPpf1GAoz42-EkMGowv~kcKyT67bb8BacL3cbOhtG19PRp2GVxAXaFSoPpdKJxtdLlfwH1CwKOPSk1sNkuEGIyvXBoZu3WYzd3tIjJ~O3YSU9NyfuiVyil5cbG9fkUUcTZP6dOTj6prv86EjdKHaEeLa3DKI1Ou4HfbIwctCmDEPypq8LscYMma~jyPg9Ow__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000431.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 31,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/431/image/image.jpg?Expires=1776732227&Signature=eyObSzwKxubvlpcVsqyRYx2EWel0rzF2jMNDU~n5oealYZ-4FwqnK-VBiNVRx2X1e1fEjfL8d-ynxtmWrGLW8E5v2GA6EXaGbBddzZgYyagmiHs8-uIFlTd8g4ck7fYJL2xMf3xWyBRIWXxKFR5lqMjcPpf1GAoz42-EkMGowv~kcKyT67bb8BacL3cbOhtG19PRp2GVxAXaFSoPpdKJxtdLlfwH1CwKOPSk1sNkuEGIyvXBoZu3WYzd3tIjJ~O3YSU9NyfuiVyil5cbG9fkUUcTZP6dOTj6prv86EjdKHaEeLa3DKI1Ou4HfbIwctCmDEPypq8LscYMma~jyPg9Ow__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_31_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/432/image/image.jpg?Expires=1776732227&Signature=aDHKUAkcDnYUFtnPU9qv4xd-NBl3NhTE9aSRXG0zg9jdzPuIljLF6lA-G048HOnjKeS00WDespnb-E7zwYHVBhN9n1CxKOdApwXzbdWl~6Dm7LTbiNprdCyOv3YKJQSRlZHWpAAdsoL1JP1lJsS1FkVwCwpTxuVNX2WLdxQ64N--IQBJ8Zb5~IkDipkq8-ovzwt8scZTuppKyl8BX3R5WfMZ58uWKr9f10NX826DzWtf8RxcTcYBKZo8PrfmcG-YKpR6je7j76yxdsKVW-SWsAIFMQhWLVMs~krlLx6Y6foUj0v7EZQaRXki84rz44P9zd0t74j9EwcfIwGMpmLd8w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000432.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 32,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/432/image/image.jpg?Expires=1776732227&Signature=aDHKUAkcDnYUFtnPU9qv4xd-NBl3NhTE9aSRXG0zg9jdzPuIljLF6lA-G048HOnjKeS00WDespnb-E7zwYHVBhN9n1CxKOdApwXzbdWl~6Dm7LTbiNprdCyOv3YKJQSRlZHWpAAdsoL1JP1lJsS1FkVwCwpTxuVNX2WLdxQ64N--IQBJ8Zb5~IkDipkq8-ovzwt8scZTuppKyl8BX3R5WfMZ58uWKr9f10NX826DzWtf8RxcTcYBKZo8PrfmcG-YKpR6je7j76yxdsKVW-SWsAIFMQhWLVMs~krlLx6Y6foUj0v7EZQaRXki84rz44P9zd0t74j9EwcfIwGMpmLd8w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_32_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/433/image/image.jpg?Expires=1776732227&Signature=HuU7xrUD7TKfIRQkETnuX5Wk~OO9wAgvtTxFpLncFW0ajIi~G5Chxby0h-mDIaC1MrkqZwMbZUPjTJdAxdyzUeKGGE3DGVKyiOVT9BQLzP9caZ0Rvp9kBlbwm1oEA6D-~iS-byjnEoI6pA3Wru-NhIfN7EQEbT7eNgAgODNmEgaQHEl8J04xt0OKZg-qggedGJUY7MPkYNZxarkLe~CTIUAvuLJRrgilA~3bKyfD-6LSmtWTx57BTaO39AO9tt5lR0Maxn5i6SsD-V-qoJfOg8iyMoozCNjUN759Db0MJGA5Q93y8bFuqHmzTvCzpOkj6qCAVCPAicL0NzRuakLk7w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000433.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 33,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/433/image/image.jpg?Expires=1776732227&Signature=HuU7xrUD7TKfIRQkETnuX5Wk~OO9wAgvtTxFpLncFW0ajIi~G5Chxby0h-mDIaC1MrkqZwMbZUPjTJdAxdyzUeKGGE3DGVKyiOVT9BQLzP9caZ0Rvp9kBlbwm1oEA6D-~iS-byjnEoI6pA3Wru-NhIfN7EQEbT7eNgAgODNmEgaQHEl8J04xt0OKZg-qggedGJUY7MPkYNZxarkLe~CTIUAvuLJRrgilA~3bKyfD-6LSmtWTx57BTaO39AO9tt5lR0Maxn5i6SsD-V-qoJfOg8iyMoozCNjUN759Db0MJGA5Q93y8bFuqHmzTvCzpOkj6qCAVCPAicL0NzRuakLk7w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_33_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/434/image/image.jpg?Expires=1776732227&Signature=cqCwrl3zHguBigkkquGFRCVcyHNxS9EB9bIuoDEaed7qdWkLJfMUfoZ8~sfsgmyTbnqav5-pThPko8elc5LccTGmzbuBsmYs-wYuOJn3kEXfU~-t959BQziZzRJYkNyNoOLvKlb71x4r2Zcv793sRpKXFuy0pvf6-a0n3qo~9Os5luIsfVn7Q-ztmuBAwjHz80-x9zw4EQuBxsnqhKs-U9gIciommGbvLDLyXqchnIpq05H5UEE~lq5pitDlPLCjIAtHtq8Ke~jOAF2zNfPjGPWqxo3m~AvnWiX~l4do0WBCy0f30mzcnYYQSYwGzozAqyTC~o9pViipsT0jgz5XXw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000434.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 34,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/434/image/image.jpg?Expires=1776732227&Signature=cqCwrl3zHguBigkkquGFRCVcyHNxS9EB9bIuoDEaed7qdWkLJfMUfoZ8~sfsgmyTbnqav5-pThPko8elc5LccTGmzbuBsmYs-wYuOJn3kEXfU~-t959BQziZzRJYkNyNoOLvKlb71x4r2Zcv793sRpKXFuy0pvf6-a0n3qo~9Os5luIsfVn7Q-ztmuBAwjHz80-x9zw4EQuBxsnqhKs-U9gIciommGbvLDLyXqchnIpq05H5UEE~lq5pitDlPLCjIAtHtq8Ke~jOAF2zNfPjGPWqxo3m~AvnWiX~l4do0WBCy0f30mzcnYYQSYwGzozAqyTC~o9pViipsT0jgz5XXw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_34_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/435/image/image.jpg?Expires=1776732227&Signature=AdgKx9tHeNU39HrpYbQXJq2eOrp2xDLTCJpOd8tE7YM5XCpAdk~uB8gzpks7o3DBux~Ko0uQTjiwBt9Ecsx3T-BFofPiylR-5k2bUCh5~wCDU3GdsaRm7kGgk0N~oLWQKjBgqsdVDrz766ssqTdy~Dwtl5tNBGz0FfCd7wRs16XyaPRBgpfdqxCEtaCCdHMI2a5YC9imLanWP1eX1kmH5Jujhw6XbutNUG4Pw0k-f~JrC7aTp9KWkDE-EkaEV8VZHWloS6jxqJNNHPmMSDU8vr19tDx0qRrQUuADPCfCeH3Y9YrPcjnKWgzmAh~fcpoh24t7jh9x5yOAihI-nZCadQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000435.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 35,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/435/image/image.jpg?Expires=1776732227&Signature=AdgKx9tHeNU39HrpYbQXJq2eOrp2xDLTCJpOd8tE7YM5XCpAdk~uB8gzpks7o3DBux~Ko0uQTjiwBt9Ecsx3T-BFofPiylR-5k2bUCh5~wCDU3GdsaRm7kGgk0N~oLWQKjBgqsdVDrz766ssqTdy~Dwtl5tNBGz0FfCd7wRs16XyaPRBgpfdqxCEtaCCdHMI2a5YC9imLanWP1eX1kmH5Jujhw6XbutNUG4Pw0k-f~JrC7aTp9KWkDE-EkaEV8VZHWloS6jxqJNNHPmMSDU8vr19tDx0qRrQUuADPCfCeH3Y9YrPcjnKWgzmAh~fcpoh24t7jh9x5yOAihI-nZCadQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_35_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/436/image/image.jpg?Expires=1776732227&Signature=cWZeujBYGX6OBxe6ZSaPuou21VNiTR-KOPbtN4PVHvGky7k63I7YYuX1YJfdnbmKu39jvQKp5kplHzx~EfnDjUEQ7uT7HsXaVQftE4rouIcXP5WgB-WpCEeD5HgYcR3DejZqKPk2Tx5UAItnAhdmK8HsIFcxJHUFws-Q--Nn8FNI8UXxgugaJ3XrYbHwp26OWAlmD31YqGVkEbAXcKlSNBsj1LmieJv2Jnk9aTjJXkpaP-871u56vfPU7lhrcDseWV-Ai3kxbsV5knqLTQy61BVPcavOzRpK7BpbBFYDLb2nlkVOqbXdvCebtUJlfvAADZeRAO60Nh5GIK8CcMdw6g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000436.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 36,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/436/image/image.jpg?Expires=1776732227&Signature=cWZeujBYGX6OBxe6ZSaPuou21VNiTR-KOPbtN4PVHvGky7k63I7YYuX1YJfdnbmKu39jvQKp5kplHzx~EfnDjUEQ7uT7HsXaVQftE4rouIcXP5WgB-WpCEeD5HgYcR3DejZqKPk2Tx5UAItnAhdmK8HsIFcxJHUFws-Q--Nn8FNI8UXxgugaJ3XrYbHwp26OWAlmD31YqGVkEbAXcKlSNBsj1LmieJv2Jnk9aTjJXkpaP-871u56vfPU7lhrcDseWV-Ai3kxbsV5knqLTQy61BVPcavOzRpK7BpbBFYDLb2nlkVOqbXdvCebtUJlfvAADZeRAO60Nh5GIK8CcMdw6g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_36_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/437/image/image.jpg?Expires=1776732227&Signature=gZpP8Rc9aFbsH-292lqd5fRE0EZ59CSc3McfL~BeQJ~UaZ4GFhYWRWLTQy7-KdCpHLrQnaetuehM8KUKpwt0itIzlLrBbRwRMeqQm52WSRhNawAWZJq2BVzh8NDUHK8rcTz6B2JrW5q1p3OXJuGkbnW0fmRhDWSdkuQMhUI-pee0I1EbziLMRTsaGtpCR6IUO7t6hz1dm8krG7AXH7t5fmHfA47h9ohuMfNZg9rXaA4IHjnEMT-AJ40oReNKKQHv0-s~Mz28l0FFCs-OaA-WAdYCcQS8dZNp~8MgLlJieXi6e-XwR8VmWZg5Bhs~MH1YU7AL4MtutyZRPftSgNXbLw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000437.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 37,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/437/image/image.jpg?Expires=1776732227&Signature=gZpP8Rc9aFbsH-292lqd5fRE0EZ59CSc3McfL~BeQJ~UaZ4GFhYWRWLTQy7-KdCpHLrQnaetuehM8KUKpwt0itIzlLrBbRwRMeqQm52WSRhNawAWZJq2BVzh8NDUHK8rcTz6B2JrW5q1p3OXJuGkbnW0fmRhDWSdkuQMhUI-pee0I1EbziLMRTsaGtpCR6IUO7t6hz1dm8krG7AXH7t5fmHfA47h9ohuMfNZg9rXaA4IHjnEMT-AJ40oReNKKQHv0-s~Mz28l0FFCs-OaA-WAdYCcQS8dZNp~8MgLlJieXi6e-XwR8VmWZg5Bhs~MH1YU7AL4MtutyZRPftSgNXbLw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_37_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/438/image/image.jpg?Expires=1776732227&Signature=YXox~kyfDkm6l2Wdxp06lZVeEKbdrk1HH2Qapt~5mBhzEk4WpPIyVvnSVMRHwXzumjNeIJt6DIinpIZQF6TKEs3sqymhqusTw34glZ3-UIvP63~izhavAhPThsBil8rE0dWkQsGwzNPNHGKZYY7HplGfT-iD9PgOAYxzQpAXQKhODIP-3~~xqjh7AONz~L0KvhxbGLKmwBiSWLh2vlLD1bRybaAOuVOsHlZGv5yg29M6Q1vR0pEcNOxiR4G1UmEYSTMkLfGoicBUinFPJSDWLm9TPV7HwcyrtTH1drmZmgpZsE~gr2uxblYIOBxaiz05XhybsO82Ir4JARsHdT~GJQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000438.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 38,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/438/image/image.jpg?Expires=1776732227&Signature=YXox~kyfDkm6l2Wdxp06lZVeEKbdrk1HH2Qapt~5mBhzEk4WpPIyVvnSVMRHwXzumjNeIJt6DIinpIZQF6TKEs3sqymhqusTw34glZ3-UIvP63~izhavAhPThsBil8rE0dWkQsGwzNPNHGKZYY7HplGfT-iD9PgOAYxzQpAXQKhODIP-3~~xqjh7AONz~L0KvhxbGLKmwBiSWLh2vlLD1bRybaAOuVOsHlZGv5yg29M6Q1vR0pEcNOxiR4G1UmEYSTMkLfGoicBUinFPJSDWLm9TPV7HwcyrtTH1drmZmgpZsE~gr2uxblYIOBxaiz05XhybsO82Ir4JARsHdT~GJQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_38_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/439/image/image.jpg?Expires=1776732227&Signature=PLys2FYGwoWKPhGRBQUcgGuXwOwxIwjzh2z8S9PNoqFZTr0eeixwtRkjz0SbHUXlBkawvG9rXpI~g7iHECBQQE6VDHDh16xvkXXA4gKk-3L5AgZQ6BFYnHCTxJiIZ3d6b9IEGsagqdaQjw179Ym98rH2kxR1TUTuBbL-FCk3~uC00ta5KQ6XA9kck5iqIm8Sa~2LVMKvYR53DgdNgeIJeIf2HkVpebULYBEBGNSqogt6FimdPXdYqg4~j6OdLR0PbG3VwycOitS5JwRHZ4iamYDVS6PbGBswMlKsVETBA4waHCYLZi--QoHZMmgLGXLU1pUxkNXJzJNCfdreoF38Dg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000439.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 39,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/439/image/image.jpg?Expires=1776732227&Signature=PLys2FYGwoWKPhGRBQUcgGuXwOwxIwjzh2z8S9PNoqFZTr0eeixwtRkjz0SbHUXlBkawvG9rXpI~g7iHECBQQE6VDHDh16xvkXXA4gKk-3L5AgZQ6BFYnHCTxJiIZ3d6b9IEGsagqdaQjw179Ym98rH2kxR1TUTuBbL-FCk3~uC00ta5KQ6XA9kck5iqIm8Sa~2LVMKvYR53DgdNgeIJeIf2HkVpebULYBEBGNSqogt6FimdPXdYqg4~j6OdLR0PbG3VwycOitS5JwRHZ4iamYDVS6PbGBswMlKsVETBA4waHCYLZi--QoHZMmgLGXLU1pUxkNXJzJNCfdreoF38Dg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_39_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/440/image/image.jpg?Expires=1776732227&Signature=b3p8zNNZwKUI251NQcfZPvVTOMz5Qb7Paw5vJuJGKDyLxri36Xj-SdPijTTYcWJpW4E012P35LvCEbEPrEhzy2G16j4yernOy3XZy0hIgbg3ImyxTPLFI~VS-gITmVEgrEyzIv7CinZkcg~z-G3DWjTHOqw8semAzLtEuFWpQohS7DuF-ajq1VFmQ2ZsycgVmJBpkLrlvw0dk7BsMzUX-7gohCOWGvpPr741C0jmNqMdobW0IDTD4HGwTLkdj-71u1Kljodl0gG3yTgunG9BUjwaADyets-xLTfYJvYWXMN4TIEiDbJH8Ik0Man3dkdmsDhajS4dxXyhARoyvti8DA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000440.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 40,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/440/image/image.jpg?Expires=1776732227&Signature=b3p8zNNZwKUI251NQcfZPvVTOMz5Qb7Paw5vJuJGKDyLxri36Xj-SdPijTTYcWJpW4E012P35LvCEbEPrEhzy2G16j4yernOy3XZy0hIgbg3ImyxTPLFI~VS-gITmVEgrEyzIv7CinZkcg~z-G3DWjTHOqw8semAzLtEuFWpQohS7DuF-ajq1VFmQ2ZsycgVmJBpkLrlvw0dk7BsMzUX-7gohCOWGvpPr741C0jmNqMdobW0IDTD4HGwTLkdj-71u1Kljodl0gG3yTgunG9BUjwaADyets-xLTfYJvYWXMN4TIEiDbJH8Ik0Man3dkdmsDhajS4dxXyhARoyvti8DA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_40_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/441/image/image.jpg?Expires=1776732227&Signature=u6gzC6UJ1AM55lQnYqsGOSiv4o1gNPs03ttHpTy~BVUdtts6VNbwrIxGvSjRPH-MeU4MjejgxyNCo9QHuakzpkjMLFbCokE9gKBPWaX3ULdKwD~31oeE-DbaV8hrk5D7XvccTz0CZcgzvgHLYs67ZwrEuzVLpOyXsCjnmzSET6kI9ixiWMsFA0OACd2RwRXMqJvH87rGI46t3wV-T6nNh83yjrhwFhvxDTYy-FKTlpQsERr6Fz56JIGEL-STIcjAV1lHBGqVg3oJNgCRdrwHMBEKTmrLmBJv7Fc2NK-B5nsRsv9KSpLNx6hogxe9Mb1pnzZFfPwZIjx6R7lJI6i65A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000441.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 41,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/441/image/image.jpg?Expires=1776732227&Signature=u6gzC6UJ1AM55lQnYqsGOSiv4o1gNPs03ttHpTy~BVUdtts6VNbwrIxGvSjRPH-MeU4MjejgxyNCo9QHuakzpkjMLFbCokE9gKBPWaX3ULdKwD~31oeE-DbaV8hrk5D7XvccTz0CZcgzvgHLYs67ZwrEuzVLpOyXsCjnmzSET6kI9ixiWMsFA0OACd2RwRXMqJvH87rGI46t3wV-T6nNh83yjrhwFhvxDTYy-FKTlpQsERr6Fz56JIGEL-STIcjAV1lHBGqVg3oJNgCRdrwHMBEKTmrLmBJv7Fc2NK-B5nsRsv9KSpLNx6hogxe9Mb1pnzZFfPwZIjx6R7lJI6i65A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_41_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/442/image/image.jpg?Expires=1776732227&Signature=Qm1Vs-APDQmpsbV19Vwr-rV7M7hTkdpW3HxVfbQbGyfcZO~pFnkag5G3l0Qaq5n6JfXPfDDNwTzUpkPxrvf9wmA~zyMx27FO5fq6mU--h~EbLDssOb167fRZUIcdc9zSP~YicErQKrMOPalp21khdl9usnJ59Ff7z-XP2rXeNOoV-bfP6bcM8HtZrGmlvOVDnftA2LukvIFYtp-lhJ~OZgcqpnffy20SQHgMH5rvA9Xv5QWDcuV9xUw59n-P1nq7BqI0ykAB2LwnO7WrhzOZOl9BLDzxHa2skvnyb4O3RU4meYG4zrbq7eZtDpBJSUfhTe47zpK~1c7pYN9bUAo~3g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000442.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 42,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/442/image/image.jpg?Expires=1776732227&Signature=Qm1Vs-APDQmpsbV19Vwr-rV7M7hTkdpW3HxVfbQbGyfcZO~pFnkag5G3l0Qaq5n6JfXPfDDNwTzUpkPxrvf9wmA~zyMx27FO5fq6mU--h~EbLDssOb167fRZUIcdc9zSP~YicErQKrMOPalp21khdl9usnJ59Ff7z-XP2rXeNOoV-bfP6bcM8HtZrGmlvOVDnftA2LukvIFYtp-lhJ~OZgcqpnffy20SQHgMH5rvA9Xv5QWDcuV9xUw59n-P1nq7BqI0ykAB2LwnO7WrhzOZOl9BLDzxHa2skvnyb4O3RU4meYG4zrbq7eZtDpBJSUfhTe47zpK~1c7pYN9bUAo~3g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_42_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/443/image/image.jpg?Expires=1776732227&Signature=0x~A7I0sXMqPk0KRVWiNY7axM5FLllucK-03D3SfN8KEe8sWs0f50xhg49nNbOYdSMfA5576SN5da8INclRa80tOKmPWreYYbD6rNS0LLmpSTC53Q1JZNfwQL6ZDi0lXRyINlIJLm-MXtEqIzJQx21Ad7j1WxDJW8autFo7mZGBTKvJEzu4F~SjxKLnPVP0tvu~0idlQ59FBSUejfVfNQzMrpizJ5-U~M9YFFv8WvPvOunzO3-pLMQUkzL6gpE8d1hc-Ma0-85osbMaHKbeRc0s7xtSTpxqb7rZSEWYY67qLhEDLz-7ke-RxR7zAw7BENfPyMJa2qA15XMy8SRZgpA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000443.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 43,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/443/image/image.jpg?Expires=1776732227&Signature=0x~A7I0sXMqPk0KRVWiNY7axM5FLllucK-03D3SfN8KEe8sWs0f50xhg49nNbOYdSMfA5576SN5da8INclRa80tOKmPWreYYbD6rNS0LLmpSTC53Q1JZNfwQL6ZDi0lXRyINlIJLm-MXtEqIzJQx21Ad7j1WxDJW8autFo7mZGBTKvJEzu4F~SjxKLnPVP0tvu~0idlQ59FBSUejfVfNQzMrpizJ5-U~M9YFFv8WvPvOunzO3-pLMQUkzL6gpE8d1hc-Ma0-85osbMaHKbeRc0s7xtSTpxqb7rZSEWYY67qLhEDLz-7ke-RxR7zAw7BENfPyMJa2qA15XMy8SRZgpA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_43_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/444/image/image.jpg?Expires=1776732227&Signature=AO~Ebk9xPD3o6yCEMe2oTEkQQibzYrPpJfPafG1e6FdIskFGh4P1nHUzAnfyytIFV3eFOhaMUwPGhlsoui21kY47QX1x0JihuUdPkOW73dw6ZpH6WTXOuIh61NhVPhbbZPbE7LDsg5fjsEM5vpofpIIv1dOhM~wavtvZnQ-jgBWnkNMkcVezkSfl6cRqL5lvaub-9jogHKkiOiG7xbWwRKwRvUNIn-hgPi7O3Pb-wan8cZPH4IBCFo1Bl1AWUDrRegZOZzYSr8VazdbT8ejZDJi-i9M8Ar-bHLkJ9SqKonwgGqXJ4qwH4xyyO~VvLJEcMa0riRkrZuxz0SzqTvU0kQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000444.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 44,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/444/image/image.jpg?Expires=1776732227&Signature=AO~Ebk9xPD3o6yCEMe2oTEkQQibzYrPpJfPafG1e6FdIskFGh4P1nHUzAnfyytIFV3eFOhaMUwPGhlsoui21kY47QX1x0JihuUdPkOW73dw6ZpH6WTXOuIh61NhVPhbbZPbE7LDsg5fjsEM5vpofpIIv1dOhM~wavtvZnQ-jgBWnkNMkcVezkSfl6cRqL5lvaub-9jogHKkiOiG7xbWwRKwRvUNIn-hgPi7O3Pb-wan8cZPH4IBCFo1Bl1AWUDrRegZOZzYSr8VazdbT8ejZDJi-i9M8Ar-bHLkJ9SqKonwgGqXJ4qwH4xyyO~VvLJEcMa0riRkrZuxz0SzqTvU0kQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_44_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/445/image/image.jpg?Expires=1776732227&Signature=XhSjqjbaZwPOhhrSHxTrmXkTqPDgDwp8dU3h9DoLFCycgkM9q1SbcxTUNwmr-NeJcDOA-v9cv30ezg4OASL1RxgZLk5tNK5EpmZDRxVUOMAsIL9rYMun5FnVbeXUZmMV0RhsCHKNQWHDUXmf~R9qHtGHGylwE6OkbrQYnNpPhDWwCBxsz3R4aARxZO09VJWHKYQ2KrfNNf9uukBgD2K0wrU~GAQ0dGe8lV7f2~MbCjmWbodTI65S5OdUa0vDORZHoJCRutltCLwKbtjilo6mcSxS~8W6kUgZugivAP6cCJU7r0Wx99dIDLlQih~4~B4s3XjnGnRY5-zS13Jwc9oAUQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000445.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 45,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/445/image/image.jpg?Expires=1776732227&Signature=XhSjqjbaZwPOhhrSHxTrmXkTqPDgDwp8dU3h9DoLFCycgkM9q1SbcxTUNwmr-NeJcDOA-v9cv30ezg4OASL1RxgZLk5tNK5EpmZDRxVUOMAsIL9rYMun5FnVbeXUZmMV0RhsCHKNQWHDUXmf~R9qHtGHGylwE6OkbrQYnNpPhDWwCBxsz3R4aARxZO09VJWHKYQ2KrfNNf9uukBgD2K0wrU~GAQ0dGe8lV7f2~MbCjmWbodTI65S5OdUa0vDORZHoJCRutltCLwKbtjilo6mcSxS~8W6kUgZugivAP6cCJU7r0Wx99dIDLlQih~4~B4s3XjnGnRY5-zS13Jwc9oAUQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_45_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/446/image/image.jpg?Expires=1776732227&Signature=O9rOTDwNAXHUMeWfedI51dPo-GJBSENSLcXxdskJ3N1aaH1eEiLcYLejF-sAIOC5ZIuYib2UOSqRJEMZL~~~IA8g5TYNGzXkzluIo0~pBjNduP~E3S~y~gbxuvcYoCHJHnbWEhXgbTQq3JpIZ-oNOpw7SyFMobfvph1c0hf1SsnAbaQKz2A1~We7zTzjdj3Ug-EqV35Vw1dksls6e2AVPaCFLxOaYVwf~lWz7uSPnVcmhCOC7BwEySd1Ir1oIsPm2YjMkTgZ5JPaq5NEi~H6CucqjHL~6ViMVW4N~oV1knNv3BaAR-~6sMxQgTntUzeLpzvCvsd-yk5NcCB8lRXhzQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000446.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 46,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/446/image/image.jpg?Expires=1776732227&Signature=O9rOTDwNAXHUMeWfedI51dPo-GJBSENSLcXxdskJ3N1aaH1eEiLcYLejF-sAIOC5ZIuYib2UOSqRJEMZL~~~IA8g5TYNGzXkzluIo0~pBjNduP~E3S~y~gbxuvcYoCHJHnbWEhXgbTQq3JpIZ-oNOpw7SyFMobfvph1c0hf1SsnAbaQKz2A1~We7zTzjdj3Ug-EqV35Vw1dksls6e2AVPaCFLxOaYVwf~lWz7uSPnVcmhCOC7BwEySd1Ir1oIsPm2YjMkTgZ5JPaq5NEi~H6CucqjHL~6ViMVW4N~oV1knNv3BaAR-~6sMxQgTntUzeLpzvCvsd-yk5NcCB8lRXhzQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_46_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/447/image/image.jpg?Expires=1776732227&Signature=rDaW5lz9ZISpySicm0hh2EXF4nwoGFqj2AgpqF4eMtwzq0refYkmOLNm3yeCEaCWkyidl-4uny~q~tFg1xDqanlkKTRC7Z7YEDIr0c0YEK-WoJmlzfcQpUqD~kwMyoyMxlOCy2O-PHSqv1XlNJP4UotxptSaFWUSlJcMX2E2WsVafZ1UugEf3O5EfM3TZ-jJB2jw2WM0rhPQqJUjhwODAkjcjP9BOyaeXn4IvUkb3cLL2yqRCzyfp2TphQemh1s6aLQ-6~ZqNZNY0~ZKAc4lbjzWCC~JuWWzlDD3zHfadbPRa8JxzruTpUiJRUlzRK1pFQyOHuz6mIHktfCVO4tlrQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000447.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 47,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/447/image/image.jpg?Expires=1776732227&Signature=rDaW5lz9ZISpySicm0hh2EXF4nwoGFqj2AgpqF4eMtwzq0refYkmOLNm3yeCEaCWkyidl-4uny~q~tFg1xDqanlkKTRC7Z7YEDIr0c0YEK-WoJmlzfcQpUqD~kwMyoyMxlOCy2O-PHSqv1XlNJP4UotxptSaFWUSlJcMX2E2WsVafZ1UugEf3O5EfM3TZ-jJB2jw2WM0rhPQqJUjhwODAkjcjP9BOyaeXn4IvUkb3cLL2yqRCzyfp2TphQemh1s6aLQ-6~ZqNZNY0~ZKAc4lbjzWCC~JuWWzlDD3zHfadbPRa8JxzruTpUiJRUlzRK1pFQyOHuz6mIHktfCVO4tlrQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_47_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/448/image/image.jpg?Expires=1776732227&Signature=YWUFRV973KyGXfII6WXynNZfTdW1AmU7JOYJmKZwDgFxULJ86xJAeNOZcJh3uuQcCEZuSIo88BfHZVibhQ9oGbmdn26c6NAoDZF0xsLcjQ51TloGtHmJgwKGuw7Ib-qIHmoE2rwGRHCg5KHJuHzC~zhXYMykbZZ46EONylQu2H1JkrxLSATfLmx3nFkf23JQQ0NDgsrxGV3rFt0YjexNFGqU0BolKuMtUDihhKeX0lpN7Jcodo6uV5DvEp66J1BFd2~LBXGYCPp28HNIiFqHjybj5g5P0SM1cdug29xuxesC1II4AI7ecV~PB~AWbXPgidtI3U7Cmgwod6xy9wU2XQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000448.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 48,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/448/image/image.jpg?Expires=1776732227&Signature=YWUFRV973KyGXfII6WXynNZfTdW1AmU7JOYJmKZwDgFxULJ86xJAeNOZcJh3uuQcCEZuSIo88BfHZVibhQ9oGbmdn26c6NAoDZF0xsLcjQ51TloGtHmJgwKGuw7Ib-qIHmoE2rwGRHCg5KHJuHzC~zhXYMykbZZ46EONylQu2H1JkrxLSATfLmx3nFkf23JQQ0NDgsrxGV3rFt0YjexNFGqU0BolKuMtUDihhKeX0lpN7Jcodo6uV5DvEp66J1BFd2~LBXGYCPp28HNIiFqHjybj5g5P0SM1cdug29xuxesC1II4AI7ecV~PB~AWbXPgidtI3U7Cmgwod6xy9wU2XQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_48_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/449/image/image.jpg?Expires=1776732227&Signature=G3Z4xBu0wFCFh4vQaKUl5E0McO~A7jU8pIWrG2HgslP9swbvIRwV8sOE2RPq49dnK9xQ2LtR-2hGrxJMH9VEwPKMijCdJMobxEex6dSJVtzHNcM6WkprLX~aaKO6zi7aIC8Z0laK2IDedddFrRUTgDnoWw7sOwcshQy2FpnBeO8A99yrGhmXAzLHXhPpoHLPGHXNLJGuuwLWPlOQwsUpaPceJ2t5f6WdE3Rv7~ZMvBTvV0CShAxXqr9YTa3yXPrqjIkZY4obX3Ehjs1ejIPZi3Quh6ViC6~VkImIn3vCyg7J3EcKa2vyOt6Dq1lNn6sycVRm1y22WJl5RhgDLnaeMA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000449.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 49,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/449/image/image.jpg?Expires=1776732227&Signature=G3Z4xBu0wFCFh4vQaKUl5E0McO~A7jU8pIWrG2HgslP9swbvIRwV8sOE2RPq49dnK9xQ2LtR-2hGrxJMH9VEwPKMijCdJMobxEex6dSJVtzHNcM6WkprLX~aaKO6zi7aIC8Z0laK2IDedddFrRUTgDnoWw7sOwcshQy2FpnBeO8A99yrGhmXAzLHXhPpoHLPGHXNLJGuuwLWPlOQwsUpaPceJ2t5f6WdE3Rv7~ZMvBTvV0CShAxXqr9YTa3yXPrqjIkZY4obX3Ehjs1ejIPZi3Quh6ViC6~VkImIn3vCyg7J3EcKa2vyOt6Dq1lNn6sycVRm1y22WJl5RhgDLnaeMA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_49_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/450/image/image.jpg?Expires=1776732227&Signature=iEoWyHQHHtpzqzAdiW~WaBF4gndgBgdPFYAJpYD~igNlzbzmR7wirQ8eJeRqFqqInWfDvAv6JqXT-3V0r2kzGobBZh1leNw72erPRxa0uBFTndDch8erscUt5sJJ85E2zJRgCsa~fGA5cPkiki1VkW5kdU81Nf45~mnmGVSfSIKRSgU-1t~y8Kh7Vq3dY~vkolb1Ebwugy9WScv1S8i8o2NbP706LyqH2PslnFlAW-OpYG7FztH3P3AsP1ElIcKFoJWXo0z~rERRP15jUc1KcdPWRpDVRsopQ9CxNkX9MJwkKW7T9OTTGNcRWLlLWeNzgvHRaGe6SWjdvbYqSpzplw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000450.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 50,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/450/image/image.jpg?Expires=1776732227&Signature=iEoWyHQHHtpzqzAdiW~WaBF4gndgBgdPFYAJpYD~igNlzbzmR7wirQ8eJeRqFqqInWfDvAv6JqXT-3V0r2kzGobBZh1leNw72erPRxa0uBFTndDch8erscUt5sJJ85E2zJRgCsa~fGA5cPkiki1VkW5kdU81Nf45~mnmGVSfSIKRSgU-1t~y8Kh7Vq3dY~vkolb1Ebwugy9WScv1S8i8o2NbP706LyqH2PslnFlAW-OpYG7FztH3P3AsP1ElIcKFoJWXo0z~rERRP15jUc1KcdPWRpDVRsopQ9CxNkX9MJwkKW7T9OTTGNcRWLlLWeNzgvHRaGe6SWjdvbYqSpzplw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_50_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/451/image/image.jpg?Expires=1776732227&Signature=yQGYaauNqPX-fSNU9Sw0y-P~pzeS-NerWsnLvNJRUFtvG4Kn~xiQc5gZp2UQj9HaU5oqmTWKLreTDaKMPVJvDHm8W3eK4Fv659D7kCtr4jzHdMWLk7u6MwG0CjmXEtZaoF0r45QE7TE00vg2ih44WRYaYcJs9Pq7WHj7Bub~f7b8MHYLazYKf9tos8pxGqzJaQo6Bbfs9Hi9XeIkSKGh3wgoHEHm-VSR17AyaR1ZTMYkSuGGDd~ivplhbGBWXLAh0O2C90ngdNsLLlss8X~kSQd2Cgybj8xlM2UZe1tCciphPVsmGdyEZxLlh6Rz-THkx1ehYnykDbXLk3V77o6c3Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000451.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 51,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/451/image/image.jpg?Expires=1776732227&Signature=yQGYaauNqPX-fSNU9Sw0y-P~pzeS-NerWsnLvNJRUFtvG4Kn~xiQc5gZp2UQj9HaU5oqmTWKLreTDaKMPVJvDHm8W3eK4Fv659D7kCtr4jzHdMWLk7u6MwG0CjmXEtZaoF0r45QE7TE00vg2ih44WRYaYcJs9Pq7WHj7Bub~f7b8MHYLazYKf9tos8pxGqzJaQo6Bbfs9Hi9XeIkSKGh3wgoHEHm-VSR17AyaR1ZTMYkSuGGDd~ivplhbGBWXLAh0O2C90ngdNsLLlss8X~kSQd2Cgybj8xlM2UZe1tCciphPVsmGdyEZxLlh6Rz-THkx1ehYnykDbXLk3V77o6c3Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_51_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/452/image/image.jpg?Expires=1776732227&Signature=srzU5ZOBNwj6Q1H-n~0FPpiC7u4YgDglB9-l5-ozU2EKWyN4XhQM5mc~arC~6SH49LhmejLNP7m~TMQa8gq~uxnQuarJVEk7VmCewV7ZsRx6WBy7RbafLddLK7SrFSk7xBUYyLtkYayDIRxF6onLAMFUb9J-jIozKjCmAVcU8C3POkQD-oVPR9mk2OJwOpnH6bRKM~nRKBWsztbTL5Z7eymnLWAlENoOGD4zZB1CCLJ-OW5l5GXRoiz7~pNgYwBfAbmUeJj6yGQee0AOyDhzYpUwE2aOhy7T9hQ62OO4IuttTdUPvyriqKvU2Gf~yD2WTf7i9XhnRLPhBWL77hI5~Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000452.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 52,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/452/image/image.jpg?Expires=1776732227&Signature=srzU5ZOBNwj6Q1H-n~0FPpiC7u4YgDglB9-l5-ozU2EKWyN4XhQM5mc~arC~6SH49LhmejLNP7m~TMQa8gq~uxnQuarJVEk7VmCewV7ZsRx6WBy7RbafLddLK7SrFSk7xBUYyLtkYayDIRxF6onLAMFUb9J-jIozKjCmAVcU8C3POkQD-oVPR9mk2OJwOpnH6bRKM~nRKBWsztbTL5Z7eymnLWAlENoOGD4zZB1CCLJ-OW5l5GXRoiz7~pNgYwBfAbmUeJj6yGQee0AOyDhzYpUwE2aOhy7T9hQ62OO4IuttTdUPvyriqKvU2Gf~yD2WTf7i9XhnRLPhBWL77hI5~Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_52_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/453/image/image.jpg?Expires=1776732227&Signature=cDOt6~xxBiZ50G0LNy5Xqp9k9CVpJ9xuPvhAvPqv4AdUq6JnmP~ihFojIWiyWKcR8~Uz737uAelb07HYd6~FkkH2DdXLAPaMIL6jvLMGdHGjl6avRrGWx7MAEnpLe0iDG3paIzqbOxYg4I5uuJfi-ovMyZek0PwCW2Fs4T8vcLO7AYqmO2AgASVydjgzLalBA74IFuQGARx-QiNyxnY4sZtZwYA9osCX3f2PGBAdzcuhdNEQS2qd545u4PJQYBVJ32G4KdwPATYfDihExGCcHRGtldpY0CfnUy3y6-ErLTJ1QCjaCRjZsdOtnQwmw~jflcfLP32JEOubPFKrw9LEOA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000453.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 53,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/453/image/image.jpg?Expires=1776732227&Signature=cDOt6~xxBiZ50G0LNy5Xqp9k9CVpJ9xuPvhAvPqv4AdUq6JnmP~ihFojIWiyWKcR8~Uz737uAelb07HYd6~FkkH2DdXLAPaMIL6jvLMGdHGjl6avRrGWx7MAEnpLe0iDG3paIzqbOxYg4I5uuJfi-ovMyZek0PwCW2Fs4T8vcLO7AYqmO2AgASVydjgzLalBA74IFuQGARx-QiNyxnY4sZtZwYA9osCX3f2PGBAdzcuhdNEQS2qd545u4PJQYBVJ32G4KdwPATYfDihExGCcHRGtldpY0CfnUy3y6-ErLTJ1QCjaCRjZsdOtnQwmw~jflcfLP32JEOubPFKrw9LEOA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_53_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/454/image/image.jpg?Expires=1776732227&Signature=ah14opn~XWQvXhXGijNHeNaNPvBsuLRz-zzTj4kJfpPrH0lfn~M8LQdf~4bd5C56GxKnjkfRkgROc9A6jEIqMXK6UkrXkqeVPS7cr58av~goV-9pk57~1EYuhDQwJOf7l~eKx2REaE~pcVJs8eCtdOZljt~5onwD4P8lMI9OkgCs4Rku9KJey8nL4f7aJSwt9czmNCSADIsM1AtaZ2O8BEtxDr3y77itVHS96eSRHPvhDtMrUbM-dPrArWWDqR4~WdV5H1m~106DT6Pw6AXV8chJ1ljd1J2FHw8gagTbQ6T8LUOaAvoPbsVrIoHfJefiw9I2YydwY5ejCjfC4K42fA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000454.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 54,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/454/image/image.jpg?Expires=1776732227&Signature=ah14opn~XWQvXhXGijNHeNaNPvBsuLRz-zzTj4kJfpPrH0lfn~M8LQdf~4bd5C56GxKnjkfRkgROc9A6jEIqMXK6UkrXkqeVPS7cr58av~goV-9pk57~1EYuhDQwJOf7l~eKx2REaE~pcVJs8eCtdOZljt~5onwD4P8lMI9OkgCs4Rku9KJey8nL4f7aJSwt9czmNCSADIsM1AtaZ2O8BEtxDr3y77itVHS96eSRHPvhDtMrUbM-dPrArWWDqR4~WdV5H1m~106DT6Pw6AXV8chJ1ljd1J2FHw8gagTbQ6T8LUOaAvoPbsVrIoHfJefiw9I2YydwY5ejCjfC4K42fA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_54_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/455/image/image.jpg?Expires=1776732227&Signature=Q-I4hRoxOOWH0YbT-d4Y-DEDDnwg9LLa~rJZE-ztZ9OnD5AhyFrzPTqUy5FjPSXuSM06rpWwTQ2Aa1ADJ56IRvK65tmXcXkj3QXV0wi1pVsXW-HRdXytbInef4nV4jYc0YJOmfLvpb1cXK-44oG3LW1z2ZswVlD~FkRb~MIznBv3oQe3KwbXxrhuoupW27rOcBPEoN-5HVYpZZLLqZz3q2pn5sp3uBefiAsCb64lUp9xIUoX7u7Xbrucz5NeWNkT34XzvsBjOJE9wQEj5eviBvnF~6X8AsOc2LnxRwbyxQVfZcu7uKwjzZk0GJ-8dLZltwmiWqTa20kyNc3b2tbUVw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000455.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 55,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/455/image/image.jpg?Expires=1776732227&Signature=Q-I4hRoxOOWH0YbT-d4Y-DEDDnwg9LLa~rJZE-ztZ9OnD5AhyFrzPTqUy5FjPSXuSM06rpWwTQ2Aa1ADJ56IRvK65tmXcXkj3QXV0wi1pVsXW-HRdXytbInef4nV4jYc0YJOmfLvpb1cXK-44oG3LW1z2ZswVlD~FkRb~MIznBv3oQe3KwbXxrhuoupW27rOcBPEoN-5HVYpZZLLqZz3q2pn5sp3uBefiAsCb64lUp9xIUoX7u7Xbrucz5NeWNkT34XzvsBjOJE9wQEj5eviBvnF~6X8AsOc2LnxRwbyxQVfZcu7uKwjzZk0GJ-8dLZltwmiWqTa20kyNc3b2tbUVw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_55_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/456/image/image.jpg?Expires=1776732227&Signature=eAKksU5ki9xgEVyOyOrQPN09qnLZhqu3NpmAPccSbEP3FoDysdaR9uvXvLBc5S~EsOC9cH91PBWe7bH0kwf10hBV6gh1sd6BfOGgX2GJIlSXUZa8ent1APiDMvECJhIvg8yZoadLgzbDoE2nL5WXGo~KTQYExls2doqSp3VRweKSh7OFgdNxZ9XxrMUmy12O6HW9CWcnvYYb-zJUECaLqdrFpUDVPMpL-LXfT0svKGtK5lkJ-RLRu0MPkFMNDl4~d6m3fUt7WMWqTbnRb4U~1ge1gTyhC9Ou-z31muPpADHFuTaJFKUf2YEwN2RuV4g8X04KFFQO1nfCXyFeUST~zg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000456.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 56,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/456/image/image.jpg?Expires=1776732227&Signature=eAKksU5ki9xgEVyOyOrQPN09qnLZhqu3NpmAPccSbEP3FoDysdaR9uvXvLBc5S~EsOC9cH91PBWe7bH0kwf10hBV6gh1sd6BfOGgX2GJIlSXUZa8ent1APiDMvECJhIvg8yZoadLgzbDoE2nL5WXGo~KTQYExls2doqSp3VRweKSh7OFgdNxZ9XxrMUmy12O6HW9CWcnvYYb-zJUECaLqdrFpUDVPMpL-LXfT0svKGtK5lkJ-RLRu0MPkFMNDl4~d6m3fUt7WMWqTbnRb4U~1ge1gTyhC9Ou-z31muPpADHFuTaJFKUf2YEwN2RuV4g8X04KFFQO1nfCXyFeUST~zg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_56_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/457/image/image.jpg?Expires=1776732227&Signature=Cgv9uWr-v0rFrg3XWpSi6-jbyHxQ8dU~OwzI5b9FnNk7DTpxfSM1SS3MI~D7g4dxliaHVLt05Mvy0~447S5FmF3b-vzkrU00NEfY7yG-hgXVR7TmLeMunX20aXtpIcIbiaVPS7SqrU-mGfYNiKUAvg9FpqTLvNwymTT046dqq5k7XJJQHxY6x38KJpeOJcWmI2DcwkRfl8u1d7ohfWuaI~3Wlr3Kw4VkOMruIQxOq8TXC0DCOFLx21uQMir58R3MlK3nSqFuo8hzVv2Os1MUThoGGamoeb0XvUpbLDQW5c8nyOnDNuGNi1~mnyWlNGWcAaSkuJy8NPvw2eKFRvFERg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000457.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 57,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/457/image/image.jpg?Expires=1776732227&Signature=Cgv9uWr-v0rFrg3XWpSi6-jbyHxQ8dU~OwzI5b9FnNk7DTpxfSM1SS3MI~D7g4dxliaHVLt05Mvy0~447S5FmF3b-vzkrU00NEfY7yG-hgXVR7TmLeMunX20aXtpIcIbiaVPS7SqrU-mGfYNiKUAvg9FpqTLvNwymTT046dqq5k7XJJQHxY6x38KJpeOJcWmI2DcwkRfl8u1d7ohfWuaI~3Wlr3Kw4VkOMruIQxOq8TXC0DCOFLx21uQMir58R3MlK3nSqFuo8hzVv2Os1MUThoGGamoeb0XvUpbLDQW5c8nyOnDNuGNi1~mnyWlNGWcAaSkuJy8NPvw2eKFRvFERg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_57_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/458/image/image.jpg?Expires=1776732227&Signature=2GrQy8aaVC0Inf2cTZ4VQHPDpsAAEzE~57RD98JXXW875KRID1Ht3MnjQW4-GcvJvDX7guzIq-bzszbJ~hK72GJu4yOOTKUCikHJKqIbzdREfW3Ak-9ll9tZcGuSACcfLFk0ZUUuWxM86wyZJl6IuDUnNU2RcvlOoWu3b5i2QcDUUs5ByMvafljHkZOqJe6NDTXQkBI7vfjja0jCsFxQkgzMohMM7EdtCDduAxxJyfRcn5EXeT6TlgAMoLs7GBosoGzjfSKe23rSfv5GlRGraJr2FzTqG1mRJU37U6GRYkpkckLD2bq5wX8XxeTSncUHaEnW8vrU6J3uaAOQBOMRVg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000458.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 58,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/458/image/image.jpg?Expires=1776732227&Signature=2GrQy8aaVC0Inf2cTZ4VQHPDpsAAEzE~57RD98JXXW875KRID1Ht3MnjQW4-GcvJvDX7guzIq-bzszbJ~hK72GJu4yOOTKUCikHJKqIbzdREfW3Ak-9ll9tZcGuSACcfLFk0ZUUuWxM86wyZJl6IuDUnNU2RcvlOoWu3b5i2QcDUUs5ByMvafljHkZOqJe6NDTXQkBI7vfjja0jCsFxQkgzMohMM7EdtCDduAxxJyfRcn5EXeT6TlgAMoLs7GBosoGzjfSKe23rSfv5GlRGraJr2FzTqG1mRJU37U6GRYkpkckLD2bq5wX8XxeTSncUHaEnW8vrU6J3uaAOQBOMRVg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_58_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/459/image/image.jpg?Expires=1776732227&Signature=Qa2BRMwVY2txGD4Vv8txei1rJ2bUqzxAZFNTGhXH8ba45yF2Te8wauxyI3LfB0NYZkdDMEsLT3Wv3BU5t-jD~kSKCpMzgvp~UaVJ2vlasx3mCOTxGlet0jCbdfSa4YHeFI7t4~-3HkW0oINl4C~IBsarhiw~DjTdcwzmFL001ABT6id8PV5t7QBOfqjKByV1Y2iUoKizMAQJWN5hyAbrB6-l~EgEAJa8SGPceDY-HyLbWYtwJ~L6C9sTNqCTdhHa7KPRwiwjcU-alSKp1vsLPWJw6iHve1nc4wT8iVWsyjHkEgHvtBroHzhs0txmlkQjDGP6jWE2CjY1fbnu9f82hg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000459.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 59,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/459/image/image.jpg?Expires=1776732227&Signature=Qa2BRMwVY2txGD4Vv8txei1rJ2bUqzxAZFNTGhXH8ba45yF2Te8wauxyI3LfB0NYZkdDMEsLT3Wv3BU5t-jD~kSKCpMzgvp~UaVJ2vlasx3mCOTxGlet0jCbdfSa4YHeFI7t4~-3HkW0oINl4C~IBsarhiw~DjTdcwzmFL001ABT6id8PV5t7QBOfqjKByV1Y2iUoKizMAQJWN5hyAbrB6-l~EgEAJa8SGPceDY-HyLbWYtwJ~L6C9sTNqCTdhHa7KPRwiwjcU-alSKp1vsLPWJw6iHve1nc4wT8iVWsyjHkEgHvtBroHzhs0txmlkQjDGP6jWE2CjY1fbnu9f82hg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_59_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/460/image/image.jpg?Expires=1776732227&Signature=XDZX77Ee0iKqxGasVWH11Xx~tmGp7REYOQq8otucgfXMeG-Fc9iAXECTEW2w9vI8DG7WmyWt4r4dlQUJcw7tVvNkdrl~vKlswBzAPvpzcynZb1qBRSnZe5Ayf-N6sCU4dBekNTQZOxbSc19CNA9wxSCaazB6ow~K5JPx-vbTShNv9HpR1eO6Ve2NWCJdMHSztRj1e8rFYi5M9yqRpgcSNd6IxNEvZqVCYdh578m-CoXJBJbETJi8D~~UzCq9ttxQX2-5Ta7csmiJ6ZdpeZTpWfaCCpXX7tdEGF0qAx9GVesF5IX4wr5vFLXtwOrAfMX6kpersluNPeEqbqSE~AJ0Ag__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000460.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 60,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/460/image/image.jpg?Expires=1776732227&Signature=XDZX77Ee0iKqxGasVWH11Xx~tmGp7REYOQq8otucgfXMeG-Fc9iAXECTEW2w9vI8DG7WmyWt4r4dlQUJcw7tVvNkdrl~vKlswBzAPvpzcynZb1qBRSnZe5Ayf-N6sCU4dBekNTQZOxbSc19CNA9wxSCaazB6ow~K5JPx-vbTShNv9HpR1eO6Ve2NWCJdMHSztRj1e8rFYi5M9yqRpgcSNd6IxNEvZqVCYdh578m-CoXJBJbETJi8D~~UzCq9ttxQX2-5Ta7csmiJ6ZdpeZTpWfaCCpXX7tdEGF0qAx9GVesF5IX4wr5vFLXtwOrAfMX6kpersluNPeEqbqSE~AJ0Ag__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_60_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/461/image/image.jpg?Expires=1776732227&Signature=bdmHGHGdiw~DDheUa2vhBbBjKT6zmpT8ROsJ2jKzHo-h8OONuLga~6d5sFoI23Fcg6da7EB8lSQhwE44KKLMi1v3B27JCQqAlOMgljoJbRGVvSXho1p~MHVDCCygnlnXbiBAK9DnLgJ6lUa12LgUFuq-sTTVWe-dy5SkpxpA7pmWHz4XPBB8fof8v9x9gH~r0a7KqmOg9mAx4vAt3-BUJCjSk8k6oH~Q0C~pKu6bOYJipHp8Pti6Zr0TrwWGvjS2gqiSZx4KBCexL856uQx8W9vHEt5fmfMdxKFbcDAma~pxDQgXSr0HV7uJEYw24UgKwGNesW8hdkZfdp3mNrZ6oQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000461.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 61,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/461/image/image.jpg?Expires=1776732227&Signature=bdmHGHGdiw~DDheUa2vhBbBjKT6zmpT8ROsJ2jKzHo-h8OONuLga~6d5sFoI23Fcg6da7EB8lSQhwE44KKLMi1v3B27JCQqAlOMgljoJbRGVvSXho1p~MHVDCCygnlnXbiBAK9DnLgJ6lUa12LgUFuq-sTTVWe-dy5SkpxpA7pmWHz4XPBB8fof8v9x9gH~r0a7KqmOg9mAx4vAt3-BUJCjSk8k6oH~Q0C~pKu6bOYJipHp8Pti6Zr0TrwWGvjS2gqiSZx4KBCexL856uQx8W9vHEt5fmfMdxKFbcDAma~pxDQgXSr0HV7uJEYw24UgKwGNesW8hdkZfdp3mNrZ6oQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_61_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/462/image/image.jpg?Expires=1776732227&Signature=HW6W9vcrPfREdwC4p1KODM7CD8Ym6R5fOhcxVb2l1M7ZaZz7y3fpxNP3Tskg5v7qSr2RvGaANO6QDyyoRJ3zgPp7cpf7ukQw9ALFVFT2nsYZom-k3CMQhHgLyLwl8J1jh~UCLXbpF3nRcnVHqssn7qxgibte-OoSt4OkQ2k75Z4V0ZPguoZJq~5w~2OM~6P693QUa4QzSotx3V6JsDcloBWBwvWfJp5PZjYvRussFZfTi~huj1cTHC6r84~kxwatB1aU-8MUFTaXrjedTI5V-QPNXjWcELiGAxDDriCNmnd38asi9bfUOkgv9Ac5bbIBYzms-UTIy04T5fFV-vp1PQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000462.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 62,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/462/image/image.jpg?Expires=1776732227&Signature=HW6W9vcrPfREdwC4p1KODM7CD8Ym6R5fOhcxVb2l1M7ZaZz7y3fpxNP3Tskg5v7qSr2RvGaANO6QDyyoRJ3zgPp7cpf7ukQw9ALFVFT2nsYZom-k3CMQhHgLyLwl8J1jh~UCLXbpF3nRcnVHqssn7qxgibte-OoSt4OkQ2k75Z4V0ZPguoZJq~5w~2OM~6P693QUa4QzSotx3V6JsDcloBWBwvWfJp5PZjYvRussFZfTi~huj1cTHC6r84~kxwatB1aU-8MUFTaXrjedTI5V-QPNXjWcELiGAxDDriCNmnd38asi9bfUOkgv9Ac5bbIBYzms-UTIy04T5fFV-vp1PQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_62_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/463/image/image.jpg?Expires=1776732227&Signature=FSUDDpjVUjioDDAMOCGKU2C7YsDSVE2Acr9ZbB2woaipNBTp1gahfBhkj3r6YBPOvbmVcpQkwTmR4CkAmR-u62gClQl3aOzmcIw~xQJDErPNBIzGduEX1mqZv6NZOReXIKXuMRK6ceO40l0yhtdR9XBgA9czDvH23IS9kHJ2pIm~p3tB7T9hyLrlcF16YXYVDIui5j~Ff4Kok~X400cwKCvdNBvI64G50KMb6BzbqhBQ6AroNFE3mv4VwEJ6f-nMfVgaqoQQJzRt3ag~uZzrGFZPyA8pBAMo3lCPxetekgJFzUrfLHYh4LOOVil5FWdEJsmVHNcDvXenjO~BKvumaQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000463.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 63,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/463/image/image.jpg?Expires=1776732227&Signature=FSUDDpjVUjioDDAMOCGKU2C7YsDSVE2Acr9ZbB2woaipNBTp1gahfBhkj3r6YBPOvbmVcpQkwTmR4CkAmR-u62gClQl3aOzmcIw~xQJDErPNBIzGduEX1mqZv6NZOReXIKXuMRK6ceO40l0yhtdR9XBgA9czDvH23IS9kHJ2pIm~p3tB7T9hyLrlcF16YXYVDIui5j~Ff4Kok~X400cwKCvdNBvI64G50KMb6BzbqhBQ6AroNFE3mv4VwEJ6f-nMfVgaqoQQJzRt3ag~uZzrGFZPyA8pBAMo3lCPxetekgJFzUrfLHYh4LOOVil5FWdEJsmVHNcDvXenjO~BKvumaQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_63_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/464/image/image.jpg?Expires=1776732227&Signature=UP44mx6vT9y2jLpX0NNnqPivTZ6x63ecGQ0r6R9HWjP6bAoKXFXiYzXD25gXnHWborfh4yP7SoCbbCOT6xpGVfLj0jJKS~SRxv6igg0zaWtZszrrUMemzkybeTgQQiCRJkc8xXcpM8UgLCDWvqLuBAQNHz4CgGwR1PA8JAe6Y6ws~YPSjX8lDdP7XFlnC2SJXN1x5W4uxg5VT0IC-3OdceAy18bG3HzbjZOGdHkNVhDyiayvPGzpw4KhMXzhUZWePIpDBWPshM8sVTYh0mg8ff-zr2m4W2tTEET~Tg5P47YAtjce8PzeZ-VRqc1yw30bQB3400t4-b0cuM-cXyDn~w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000464.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 64,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/464/image/image.jpg?Expires=1776732227&Signature=UP44mx6vT9y2jLpX0NNnqPivTZ6x63ecGQ0r6R9HWjP6bAoKXFXiYzXD25gXnHWborfh4yP7SoCbbCOT6xpGVfLj0jJKS~SRxv6igg0zaWtZszrrUMemzkybeTgQQiCRJkc8xXcpM8UgLCDWvqLuBAQNHz4CgGwR1PA8JAe6Y6ws~YPSjX8lDdP7XFlnC2SJXN1x5W4uxg5VT0IC-3OdceAy18bG3HzbjZOGdHkNVhDyiayvPGzpw4KhMXzhUZWePIpDBWPshM8sVTYh0mg8ff-zr2m4W2tTEET~Tg5P47YAtjce8PzeZ-VRqc1yw30bQB3400t4-b0cuM-cXyDn~w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_64_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/465/image/image.jpg?Expires=1776732227&Signature=JS66h6XDQjsrfwTn6r4VwSK8kGDNhJx5ysOW7CM8z1r4qufDsobm9IE5froiGFOzVlmXc6XPPikgi~hOnM~X9r6dsMt85RueAFK6olM4o8KqC8yStJWYLCtwfii6zgvvr4A1Ncgiqw4C49nHFjhX8j6LO9AHuLkkaaBpya2yhwnptM0ZdgGwpp2sjSqylaoKHO0TJ2RgjvRLyVSUz3d3MC9jwFl0u0yntZU~JfrLyvEfgmEft~NifqjY~U0oUALb90D8NEixuH08WeQACkM4aE~PAbXAbXXhPJ7ZHqGLstUQaVXcFRgJsvI5vu5DV1DM5iTgxWRnA5f03YbNGrpZPA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000465.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 65,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/465/image/image.jpg?Expires=1776732227&Signature=JS66h6XDQjsrfwTn6r4VwSK8kGDNhJx5ysOW7CM8z1r4qufDsobm9IE5froiGFOzVlmXc6XPPikgi~hOnM~X9r6dsMt85RueAFK6olM4o8KqC8yStJWYLCtwfii6zgvvr4A1Ncgiqw4C49nHFjhX8j6LO9AHuLkkaaBpya2yhwnptM0ZdgGwpp2sjSqylaoKHO0TJ2RgjvRLyVSUz3d3MC9jwFl0u0yntZU~JfrLyvEfgmEft~NifqjY~U0oUALb90D8NEixuH08WeQACkM4aE~PAbXAbXXhPJ7ZHqGLstUQaVXcFRgJsvI5vu5DV1DM5iTgxWRnA5f03YbNGrpZPA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_65_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/466/image/image.jpg?Expires=1776732227&Signature=Zc2uexV6rYUMhpMwc0-bWW998LbytTBPmOTQ3yysMgXum~Von37yFR385EU3yTP9hEdu88OeXtpk2EHvJPAGELdwUAAKYr-uqwBV1r5wlE0avlxUhXF0YN7iLB7224MyxeB16ON8REAomcTAZjUvTLLokCwqL6p~vF5OsOtTxbTauXI2Cg7Ob2kn9PEUj~qE3QKYKXJnNf8BjOEwiEbG0ZuxKdK2GZ6cdhIsK1IqzF66MApluzS9ihoU7QsYcXpB2AR9sYaLqxjpr1kk2gxSKWlUhCUgG09FD4bbVZHZ3Yd5k81vvm1yVulujWyauWMBOMwx8AI4gyxb6iEgT-xoZg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000466.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 66,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/466/image/image.jpg?Expires=1776732227&Signature=Zc2uexV6rYUMhpMwc0-bWW998LbytTBPmOTQ3yysMgXum~Von37yFR385EU3yTP9hEdu88OeXtpk2EHvJPAGELdwUAAKYr-uqwBV1r5wlE0avlxUhXF0YN7iLB7224MyxeB16ON8REAomcTAZjUvTLLokCwqL6p~vF5OsOtTxbTauXI2Cg7Ob2kn9PEUj~qE3QKYKXJnNf8BjOEwiEbG0ZuxKdK2GZ6cdhIsK1IqzF66MApluzS9ihoU7QsYcXpB2AR9sYaLqxjpr1kk2gxSKWlUhCUgG09FD4bbVZHZ3Yd5k81vvm1yVulujWyauWMBOMwx8AI4gyxb6iEgT-xoZg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_66_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/467/image/image.jpg?Expires=1776732227&Signature=jXEUHfF7vLPtd3ZdGfGtCkAPB8A-4MTI-XfmS3EBKazkR1F-D3fDHg31677YnrJRewC2HhzfxPSXPZBpsJTehvFQI6pQROyoY1fvqyytxEMPXIgzWp~4~xmfz4PONEsf4sWoOMOxb~lLacGF8CUNyL5M76Uu2Yr0I3CgnQUctyHYFD~Sw2pZGHt-M4Hb~TrDrvlMKoI94u9ci5bICNBRjV98Y-tYn8SI6jwVDl1WCR9s0qqj-awVQN7gtyX9e61rb74SKuhqhsz6yCvEPeesiiafj899NwieX6ybYrg0WryEiO2H7lv4KfzBP9z-JFg51n3XtmpSNBDT5qYA~P6U9w__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000467.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 67,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/467/image/image.jpg?Expires=1776732227&Signature=jXEUHfF7vLPtd3ZdGfGtCkAPB8A-4MTI-XfmS3EBKazkR1F-D3fDHg31677YnrJRewC2HhzfxPSXPZBpsJTehvFQI6pQROyoY1fvqyytxEMPXIgzWp~4~xmfz4PONEsf4sWoOMOxb~lLacGF8CUNyL5M76Uu2Yr0I3CgnQUctyHYFD~Sw2pZGHt-M4Hb~TrDrvlMKoI94u9ci5bICNBRjV98Y-tYn8SI6jwVDl1WCR9s0qqj-awVQN7gtyX9e61rb74SKuhqhsz6yCvEPeesiiafj899NwieX6ybYrg0WryEiO2H7lv4KfzBP9z-JFg51n3XtmpSNBDT5qYA~P6U9w__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_67_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/468/image/image.jpg?Expires=1776732227&Signature=N6DnQ8XjracpLTvchy3uMBwzsf9OvaIKIoxK2S~tZOJj3bq8HqUwEwiUXmT9lrUgRn8tE26gYUHrGYn6~G8gBMT8ETzULP~MaagSY95Onp-AUz7XwNByWQ7cQcfzigY6wfOUZyhLw40UNHiXEwfnmOSvxznhk1SqtovHY7XfrcuBw59ZnvC27TH8fVfI1oTD679c4XMwiTGLH-Ybj2GDCUSQ5vA1AYsISfW0vfv94Obtw5xhvu8Ynb~TgpjOhhwCgcYFeahatkgG1JxkYxLOVjH3qV7ZGu4KkTL2KV-QsBTvW2rhNeNaeF~yUvtaZj7Lbe60ZFLpji8VXf10wkN4xg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000468.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 68,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/468/image/image.jpg?Expires=1776732227&Signature=N6DnQ8XjracpLTvchy3uMBwzsf9OvaIKIoxK2S~tZOJj3bq8HqUwEwiUXmT9lrUgRn8tE26gYUHrGYn6~G8gBMT8ETzULP~MaagSY95Onp-AUz7XwNByWQ7cQcfzigY6wfOUZyhLw40UNHiXEwfnmOSvxznhk1SqtovHY7XfrcuBw59ZnvC27TH8fVfI1oTD679c4XMwiTGLH-Ybj2GDCUSQ5vA1AYsISfW0vfv94Obtw5xhvu8Ynb~TgpjOhhwCgcYFeahatkgG1JxkYxLOVjH3qV7ZGu4KkTL2KV-QsBTvW2rhNeNaeF~yUvtaZj7Lbe60ZFLpji8VXf10wkN4xg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_68_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/469/image/image.jpg?Expires=1776732227&Signature=QH3NP2uyXf7u7m4pOZvFxWtnUwh3o6DGvKdTEzbWS0xUBycJynCIRJ2~hnHiBUaKiC1~NfVa2yWf87JlUwsTPjN5AQnUcntHqiijQ7tgSocagtK0umlbRF0-LUZH4HKgEWeAgRD4Mxu3lDCoDi7QNzcfd61TtSbQCXL37x9xjToGgd5l~8gYCZ9s9BYajKbC-14tYa8WZSJRssyqqmK3M0jr4~wBg9Y4DrWcdUCCSnvAM5uAJ6CeyQYAByneJIig7hiOxWhFPOaUmEyG6Lhr0YIZOKKaquTVn3USVuvCFMt9NTCkkA6J-ZUe3X6t3fldVmdXpHkoAkeg929tq7Xoeg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000469.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 69,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/469/image/image.jpg?Expires=1776732227&Signature=QH3NP2uyXf7u7m4pOZvFxWtnUwh3o6DGvKdTEzbWS0xUBycJynCIRJ2~hnHiBUaKiC1~NfVa2yWf87JlUwsTPjN5AQnUcntHqiijQ7tgSocagtK0umlbRF0-LUZH4HKgEWeAgRD4Mxu3lDCoDi7QNzcfd61TtSbQCXL37x9xjToGgd5l~8gYCZ9s9BYajKbC-14tYa8WZSJRssyqqmK3M0jr4~wBg9Y4DrWcdUCCSnvAM5uAJ6CeyQYAByneJIig7hiOxWhFPOaUmEyG6Lhr0YIZOKKaquTVn3USVuvCFMt9NTCkkA6J-ZUe3X6t3fldVmdXpHkoAkeg929tq7Xoeg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_69_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/470/image/image.jpg?Expires=1776732227&Signature=IDYZh0uPFBxdlrHRA7iXC2zurXnDtKxtOGGKRQy839DffhWYzKLzaTepUvh7IiehKVHFMIEoYgiRrQfnLgekLwkK-y353vK3kh7I-RwXSRYK5GBGLOkyirRQ-JtqkQj5b3k94LvXGr-OHEm3ShGTJOwm5Sbj~tPisY~92dw~VmuojyNnG4IGCi-~ykDAXQCnRhUjAKWixarxtIFFE5zcdl7onXcTIWVCqL93K3q~14pbIzPsaGDfIj34nG4OZDuiskKK5-oS9N5aNdTWYt1lAYXo96Sbd9JLuTC1TXtoD7LuGGVLcFOXOLYldznWX1nrslwy3KVTchLw6RIK79y6Ig__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000470.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 70,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/470/image/image.jpg?Expires=1776732227&Signature=IDYZh0uPFBxdlrHRA7iXC2zurXnDtKxtOGGKRQy839DffhWYzKLzaTepUvh7IiehKVHFMIEoYgiRrQfnLgekLwkK-y353vK3kh7I-RwXSRYK5GBGLOkyirRQ-JtqkQj5b3k94LvXGr-OHEm3ShGTJOwm5Sbj~tPisY~92dw~VmuojyNnG4IGCi-~ykDAXQCnRhUjAKWixarxtIFFE5zcdl7onXcTIWVCqL93K3q~14pbIzPsaGDfIj34nG4OZDuiskKK5-oS9N5aNdTWYt1lAYXo96Sbd9JLuTC1TXtoD7LuGGVLcFOXOLYldznWX1nrslwy3KVTchLw6RIK79y6Ig__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_70_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/471/image/image.jpg?Expires=1776732227&Signature=mRioIkdREAFMVVNWEwSoIwUBuvb8YleHAuq57mra00wrR5BKmuFwlix5T6K9EYPZAgIa2k7rQnJZWHPhcsrVx-pNEFvSWuHLyikZN12NB~QSATaFRkIoIOLM1uhRFEw5qj6NuCR2WdYYEZW~selIcJ7Fgk8RSEqkqxKePbkEJjpVjXvAwMD5uYGsHzccJ1DPojQyvaBMmUfz1JbjzEs778dwSjtZ-jhSQP2-mmQIF16KKPO2axtz3alY4uEWYYBIDYnoCTcatBr1rDwaQ3JCSVLdhFjI9N0HJSxKU-r1k7~3DAyamcOVoo4svnYFMX4PtXO0-y4RRnw1XxmLn7dykQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000471.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 71,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/471/image/image.jpg?Expires=1776732227&Signature=mRioIkdREAFMVVNWEwSoIwUBuvb8YleHAuq57mra00wrR5BKmuFwlix5T6K9EYPZAgIa2k7rQnJZWHPhcsrVx-pNEFvSWuHLyikZN12NB~QSATaFRkIoIOLM1uhRFEw5qj6NuCR2WdYYEZW~selIcJ7Fgk8RSEqkqxKePbkEJjpVjXvAwMD5uYGsHzccJ1DPojQyvaBMmUfz1JbjzEs778dwSjtZ-jhSQP2-mmQIF16KKPO2axtz3alY4uEWYYBIDYnoCTcatBr1rDwaQ3JCSVLdhFjI9N0HJSxKU-r1k7~3DAyamcOVoo4svnYFMX4PtXO0-y4RRnw1XxmLn7dykQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_71_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/472/image/image.jpg?Expires=1776732227&Signature=TTeKThMnDbXsOygYzPxrhM67ASfhF4DIHy4VJYF0RmIjo4wvIxZGAj87yli3U4FVBPxjAQmMyzyfeNwCACJmA8ZQmK8xUZqXcDN~o4V7SvqzQvDOPmCseB1ttC0qvlYNrjBMBth8E9U8z2G-DEtZKrF~m44LApbKlT~JZKkGtfSoI7goUFtTqgO-pg5BIXX0uHYgxubvw~ABmqKDDQsu5oDVWN8dvVGKIwtrAPDpKRJN6-7H2RXI8w9G2dkUlpZ6ErWTdNJLPmurlj6LLWEYSVJyGhuXkh6TBQjjQORnHsLEkF~52bMZvP0H45pQQeNhJa36VnQOdPX1~D7OZuGpAQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000472.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 72,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/472/image/image.jpg?Expires=1776732227&Signature=TTeKThMnDbXsOygYzPxrhM67ASfhF4DIHy4VJYF0RmIjo4wvIxZGAj87yli3U4FVBPxjAQmMyzyfeNwCACJmA8ZQmK8xUZqXcDN~o4V7SvqzQvDOPmCseB1ttC0qvlYNrjBMBth8E9U8z2G-DEtZKrF~m44LApbKlT~JZKkGtfSoI7goUFtTqgO-pg5BIXX0uHYgxubvw~ABmqKDDQsu5oDVWN8dvVGKIwtrAPDpKRJN6-7H2RXI8w9G2dkUlpZ6ErWTdNJLPmurlj6LLWEYSVJyGhuXkh6TBQjjQORnHsLEkF~52bMZvP0H45pQQeNhJa36VnQOdPX1~D7OZuGpAQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_72_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/473/image/image.jpg?Expires=1776732227&Signature=Mv~PzsTcpgxdoMtEQg1CilCTUlQLKt4q3qiaLVS5lJ1b3brlTdfgfdTPitoBui~H5jiVjZ9oxJtXeifhFOGNTPHQilTEP694l2fcv8KZ7SUPopEU6UThMpyFt8hssoc3DUF~WxTo0vcCwlJbLRHCb5QcYGVDPTdx2p~x3FWRWwki12i5FoaBCka-K8W8LzGajveaw8-9Dwd5ZsvOwdnhY7VqZWht7N~Z0bTdYzzYEb-3tTAsZcYPElUtBkjcEGHCLuCZ9k5cuRr-gCqmMbH9Ka2hw1dKd9oQyuKJAXlTfLOYQ~qrE~kAxfucEnKJesrdOxpsvbRT9DWCLIh21V9QHQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000473.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 73,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/473/image/image.jpg?Expires=1776732227&Signature=Mv~PzsTcpgxdoMtEQg1CilCTUlQLKt4q3qiaLVS5lJ1b3brlTdfgfdTPitoBui~H5jiVjZ9oxJtXeifhFOGNTPHQilTEP694l2fcv8KZ7SUPopEU6UThMpyFt8hssoc3DUF~WxTo0vcCwlJbLRHCb5QcYGVDPTdx2p~x3FWRWwki12i5FoaBCka-K8W8LzGajveaw8-9Dwd5ZsvOwdnhY7VqZWht7N~Z0bTdYzzYEb-3tTAsZcYPElUtBkjcEGHCLuCZ9k5cuRr-gCqmMbH9Ka2hw1dKd9oQyuKJAXlTfLOYQ~qrE~kAxfucEnKJesrdOxpsvbRT9DWCLIh21V9QHQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_73_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/474/image/image.jpg?Expires=1776732227&Signature=EYlJTBmb~1VXBxlJtgdm6c-lYiWnfNy7RuKkW7TFuz2YujNJZiz0ZAbZ-eAVlFqOQCIPZ~hXM5JB53PApIPW8MzvBIbFKg-qqqhoihGsKArI4bJjb-vFrOOO2W97vR7PXSI4ma~blcY62Afm~qJ1Ldlbu9QsqrzVCitpdhW4yDa9Wo30AdqhMLT1DDEyrYsx1oOAJdNEVL5jEfLJ8lY60UlH6AVbStmFSufpESU2csF76Rqnkzb6FkOt1GPr4adx0y2owQiksGowbw98CSa34oIOaJfYNWakp5VYNmFNgzrzgiFjVylvEv~x9dL6gD3tQzS-p1bGOElfwZ~yfE7D6Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000474.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 74,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/474/image/image.jpg?Expires=1776732227&Signature=EYlJTBmb~1VXBxlJtgdm6c-lYiWnfNy7RuKkW7TFuz2YujNJZiz0ZAbZ-eAVlFqOQCIPZ~hXM5JB53PApIPW8MzvBIbFKg-qqqhoihGsKArI4bJjb-vFrOOO2W97vR7PXSI4ma~blcY62Afm~qJ1Ldlbu9QsqrzVCitpdhW4yDa9Wo30AdqhMLT1DDEyrYsx1oOAJdNEVL5jEfLJ8lY60UlH6AVbStmFSufpESU2csF76Rqnkzb6FkOt1GPr4adx0y2owQiksGowbw98CSa34oIOaJfYNWakp5VYNmFNgzrzgiFjVylvEv~x9dL6gD3tQzS-p1bGOElfwZ~yfE7D6Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_74_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/475/image/image.jpg?Expires=1776732227&Signature=JyN522lHQsxQms74HsFZli8QYvCxDIr6mWa8o~yUleSWcJ-fd4XB2SRBY10qxS6oOv9~prG~G45QBjnWM8Fi9lSfoR1O8LWrPVs6VKhGil0zrlxP3LrQgAAj7mSQ1NVuAbE2NYP3~0frzguaHkwm9lQ26Ygb6FAYj0wRhrY516sSuL~L2VPD6qJw7KyyVZxq7P4RGUvbqtU4DB7GIg5J7iyVHYsLGbrPrsEuQm6w8rJW8y9c79TxnNl2q9-93WGSK9a~EcgocD2IKQ2VkU938MjoQ0dZ8xfWxLsFwW~kfK3CS3H5hBes7PpWZAKZI974814gTR7B2QHj9iZf0I~WPg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000475.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 75,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/475/image/image.jpg?Expires=1776732227&Signature=JyN522lHQsxQms74HsFZli8QYvCxDIr6mWa8o~yUleSWcJ-fd4XB2SRBY10qxS6oOv9~prG~G45QBjnWM8Fi9lSfoR1O8LWrPVs6VKhGil0zrlxP3LrQgAAj7mSQ1NVuAbE2NYP3~0frzguaHkwm9lQ26Ygb6FAYj0wRhrY516sSuL~L2VPD6qJw7KyyVZxq7P4RGUvbqtU4DB7GIg5J7iyVHYsLGbrPrsEuQm6w8rJW8y9c79TxnNl2q9-93WGSK9a~EcgocD2IKQ2VkU938MjoQ0dZ8xfWxLsFwW~kfK3CS3H5hBes7PpWZAKZI974814gTR7B2QHj9iZf0I~WPg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_75_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/476/image/image.jpg?Expires=1776732227&Signature=BYB2wUujD36nbQrQVMgJEL8Ya4LgrpTWSvvcaXJDO9kGAtudBg0-btZaQr21jMJSRlmeelh8hGgE00jPvZ-u6xy7p6d5jyvIlZBrOdHxVbic0fcxO792XCurjZvyx6G70ly1XXlT36yTB4ly79GM03hnT~N0D86TnYVDjNEG1ccXqhyNF6WgHyG48KLColKDlkx5ZBbrTYxsNfWZLGagF5Ba8P~JpzNtioNyAaDJNI9BXgloRbJdDp9ToR3dJmsSWRcitG6Ljejug3yullq70u7yM-g4LP4usfOAi4rZmf4gJMo8duoKvN8pQUAuiiVgm2sbbYhPIeh~M4FIx6PAGQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000476.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 76,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/476/image/image.jpg?Expires=1776732227&Signature=BYB2wUujD36nbQrQVMgJEL8Ya4LgrpTWSvvcaXJDO9kGAtudBg0-btZaQr21jMJSRlmeelh8hGgE00jPvZ-u6xy7p6d5jyvIlZBrOdHxVbic0fcxO792XCurjZvyx6G70ly1XXlT36yTB4ly79GM03hnT~N0D86TnYVDjNEG1ccXqhyNF6WgHyG48KLColKDlkx5ZBbrTYxsNfWZLGagF5Ba8P~JpzNtioNyAaDJNI9BXgloRbJdDp9ToR3dJmsSWRcitG6Ljejug3yullq70u7yM-g4LP4usfOAi4rZmf4gJMo8duoKvN8pQUAuiiVgm2sbbYhPIeh~M4FIx6PAGQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_76_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/477/image/image.jpg?Expires=1776732227&Signature=BI5laPchFfbwZfRQneSh-sMYTL7ZQjzdC9JlCUJoOejE4UC93ZTphDCG8vCsVH67VjIrtj6RU6Ay2hZLrIY~ca7B3aMitvUWcU10eELFHLHRLJsIfZO9SBxOFYAiqQodIdlvx5nifWpu7iqAg03UqviIQgsybUHwkrc8245odwIi2cHayrr4mOKBBTv5Mgx9lWVucianiKJKbF8RScFXD5EAf7pJa6WLFmqdKCH2p4G1eArsLNoN9sTK~cPmDHe1ltRwCtfXJWbNT0fcYcrTRAneo-2G--hTqYZV3m-Qw-jY~0QUX4-AHhsDD27fxvxqI1yK0AOp4e3-OHfkYDSzeg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000477.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 77,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/477/image/image.jpg?Expires=1776732227&Signature=BI5laPchFfbwZfRQneSh-sMYTL7ZQjzdC9JlCUJoOejE4UC93ZTphDCG8vCsVH67VjIrtj6RU6Ay2hZLrIY~ca7B3aMitvUWcU10eELFHLHRLJsIfZO9SBxOFYAiqQodIdlvx5nifWpu7iqAg03UqviIQgsybUHwkrc8245odwIi2cHayrr4mOKBBTv5Mgx9lWVucianiKJKbF8RScFXD5EAf7pJa6WLFmqdKCH2p4G1eArsLNoN9sTK~cPmDHe1ltRwCtfXJWbNT0fcYcrTRAneo-2G--hTqYZV3m-Qw-jY~0QUX4-AHhsDD27fxvxqI1yK0AOp4e3-OHfkYDSzeg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_77_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/478/image/image.jpg?Expires=1776732227&Signature=xKbQX6GCdV7vWSLUB10~eQdPdF5AUa~t3OpIqEsQdiSr9sxY7kztsGWAbFnxbwJzG4uRWRpy~RVGciWUxRhc74K0DEEbl7-BZ5DW0RhMM-qOgN5Hq3Pui6tHbZbLtKxQsqcUZnRFMAew19The3vLzSFYcv6knw~JI2ukOSc675AfkaVCBl4Cazir1UTgX3gudb~qRqRDu5c3yIBxt99C60w6A7hWi16TgOB6fKKIBe0DMlHrBaHqo2C3I-70Dh0wz5jskA0z2jvNuzZ68pRewJWHf4GB-ykZmaK0QG5XZZiX8EIeZ79NEn5cVlZpiNSdRk6lXteUbkk45P4ADmY~jA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000478.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 78,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/478/image/image.jpg?Expires=1776732227&Signature=xKbQX6GCdV7vWSLUB10~eQdPdF5AUa~t3OpIqEsQdiSr9sxY7kztsGWAbFnxbwJzG4uRWRpy~RVGciWUxRhc74K0DEEbl7-BZ5DW0RhMM-qOgN5Hq3Pui6tHbZbLtKxQsqcUZnRFMAew19The3vLzSFYcv6knw~JI2ukOSc675AfkaVCBl4Cazir1UTgX3gudb~qRqRDu5c3yIBxt99C60w6A7hWi16TgOB6fKKIBe0DMlHrBaHqo2C3I-70Dh0wz5jskA0z2jvNuzZ68pRewJWHf4GB-ykZmaK0QG5XZZiX8EIeZ79NEn5cVlZpiNSdRk6lXteUbkk45P4ADmY~jA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_78_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/479/image/image.jpg?Expires=1776732227&Signature=TWfBGdHSv538z7kNTyYuYyUxtrPnH9JuFi0H7Umqeenvx7Zujm1T2~9T75JK4-GLmYeZP2XWJ6gCCTEO0TFyUJWz9z6HG79gJJpUoQ7O1B57LHM~9JXBaEbzOIo50g2cL1sqo97xd-eUag8roqg0YNXMOXeEVF1bn9bg9vyDe3lHI9~VC6oo2kYsbh~k6YfA-agGvbXdZqwmL6hiSGnr0ZFiCw37j0Y6u-SvoksbI3zaq3BzA8kD-2~5xqh7-F~AP6~W6U9PJqFcvGbZXqvlBF56F93BgUMr-FSYCJrBRuN3nh00FKR-ASgjPbkMaiqraHmb0fIxVrlIt-nH1nllkA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000479.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 79,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/479/image/image.jpg?Expires=1776732227&Signature=TWfBGdHSv538z7kNTyYuYyUxtrPnH9JuFi0H7Umqeenvx7Zujm1T2~9T75JK4-GLmYeZP2XWJ6gCCTEO0TFyUJWz9z6HG79gJJpUoQ7O1B57LHM~9JXBaEbzOIo50g2cL1sqo97xd-eUag8roqg0YNXMOXeEVF1bn9bg9vyDe3lHI9~VC6oo2kYsbh~k6YfA-agGvbXdZqwmL6hiSGnr0ZFiCw37j0Y6u-SvoksbI3zaq3BzA8kD-2~5xqh7-F~AP6~W6U9PJqFcvGbZXqvlBF56F93BgUMr-FSYCJrBRuN3nh00FKR-ASgjPbkMaiqraHmb0fIxVrlIt-nH1nllkA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_79_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/480/image/image.jpg?Expires=1776732227&Signature=q4dHYoJy-7jJdx2DK9LauHnVZF5UrHZ36SgJHMyitNk5g6DgwqXAnAR~tHztBnfOMCaUoxlJ9UN1eogLqi723jMLU-yElkJOdqM~MX9UImz0gsWVfuFls6uXZvUjBXjypwgxPZ13NAPa69QXToJCE73diyl~U9P8miqSYKGb9HcLHd8pD8ttLraiXLhBkRX6bIvuFBCC33d9wJBvWraN7ODaFUtNivtsncUfLvBaf~Z8TmXJf-qRkAg1cwnyqlSzg-gkSDORWKboZELXCNO8Z69VVl9GwwTZWvr1lPxPiJ8ytEQxmk~DziIBslsAg0GXQqtfT6fvU9UgqrUCFKsWrw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000480.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 80,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/480/image/image.jpg?Expires=1776732227&Signature=q4dHYoJy-7jJdx2DK9LauHnVZF5UrHZ36SgJHMyitNk5g6DgwqXAnAR~tHztBnfOMCaUoxlJ9UN1eogLqi723jMLU-yElkJOdqM~MX9UImz0gsWVfuFls6uXZvUjBXjypwgxPZ13NAPa69QXToJCE73diyl~U9P8miqSYKGb9HcLHd8pD8ttLraiXLhBkRX6bIvuFBCC33d9wJBvWraN7ODaFUtNivtsncUfLvBaf~Z8TmXJf-qRkAg1cwnyqlSzg-gkSDORWKboZELXCNO8Z69VVl9GwwTZWvr1lPxPiJ8ytEQxmk~DziIBslsAg0GXQqtfT6fvU9UgqrUCFKsWrw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_80_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/481/image/image.jpg?Expires=1776732227&Signature=EyXO9vwEye0QBgh9MnXyD3fG1npo4ERgmRDO0sDNdHqxQzkAuZIQzu5FZCn6yGwP6nZAq8W9oG--zI8nEZcoUuMTzUIwPPHK9MW5luJhHcxKXOg~dSuETpNYzuSmKII~sJMWVJHmKu8yByXmE2QtMWsGchJVt32VdRbIaXyHjRR0T2SUa8A0vpIoXpy14O3ORRb2w3~hOpFhudDHVjxBj1Wz0wX6DjcBEj~Sytk31YsHblDBpPkj2er9j2-HATpW9qGmsSbJcAhucn~AyFmTdkqHR2W4xvP1Fzqj1ye5vRgrJhV6S2f~zFhDSfbFDHlW6yzTFy98j~5-4k6tshVlNw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000481.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 81,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/481/image/image.jpg?Expires=1776732227&Signature=EyXO9vwEye0QBgh9MnXyD3fG1npo4ERgmRDO0sDNdHqxQzkAuZIQzu5FZCn6yGwP6nZAq8W9oG--zI8nEZcoUuMTzUIwPPHK9MW5luJhHcxKXOg~dSuETpNYzuSmKII~sJMWVJHmKu8yByXmE2QtMWsGchJVt32VdRbIaXyHjRR0T2SUa8A0vpIoXpy14O3ORRb2w3~hOpFhudDHVjxBj1Wz0wX6DjcBEj~Sytk31YsHblDBpPkj2er9j2-HATpW9qGmsSbJcAhucn~AyFmTdkqHR2W4xvP1Fzqj1ye5vRgrJhV6S2f~zFhDSfbFDHlW6yzTFy98j~5-4k6tshVlNw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_81_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/482/image/image.jpg?Expires=1776732227&Signature=sR~QIPECfds-nVCu2q-9de20Hy7hF6MzAiGQvHgEULy-zPj72f805wYB0FFm38GOig-ntT948c0-wPIwpIOsaU3CM3Bs4B3zmapmMrqLDPIGTy6lc66wWgLUqar7ZW5B0d~VDLn6szawIPYeXPjBqMO6pTpEC4o9HhPynmlADmo64-4NCQx1k1kv9YiyIcpD5WeUxj41Z3IH6J~CmQLOuANc~Z93UJmdxJznJzO0qVXJn~JYhu1j2Th~v8uTuVBc2U4I1lS2B08JmL8efWEfktE5pg0K~KAY5jbVt0jKErOtgqg4tp10IsWx6sQbNS0qF7qv69jdTP~OW0y5bXBrTA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000482.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 82,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/482/image/image.jpg?Expires=1776732227&Signature=sR~QIPECfds-nVCu2q-9de20Hy7hF6MzAiGQvHgEULy-zPj72f805wYB0FFm38GOig-ntT948c0-wPIwpIOsaU3CM3Bs4B3zmapmMrqLDPIGTy6lc66wWgLUqar7ZW5B0d~VDLn6szawIPYeXPjBqMO6pTpEC4o9HhPynmlADmo64-4NCQx1k1kv9YiyIcpD5WeUxj41Z3IH6J~CmQLOuANc~Z93UJmdxJznJzO0qVXJn~JYhu1j2Th~v8uTuVBc2U4I1lS2B08JmL8efWEfktE5pg0K~KAY5jbVt0jKErOtgqg4tp10IsWx6sQbNS0qF7qv69jdTP~OW0y5bXBrTA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_82_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/483/image/image.jpg?Expires=1776732227&Signature=f0s95sk-vo8tZBdoXYmm75tV0zTp3kRYPmVMqYprzwhl4hVqebqgp6-ZVTqPrZw3ohZlJ073zmp0oxLgds1WItAc2KQx4etynbvPGu~D15SqU2a2ZrdzfTmjfICu6O8xpMLb~BOcC92r-eYgIRC3txB6SIX9gf-3U0~U7KRE9LBSYqtcVsr-uaPMFt~55l1sEjKZqwudX0HDpjnQkaHccCo1xQ9fQW5UxwZPDrSHC1v1oQZpFD0yHb~u~ow2Xetdd4gHbPDXTEeMW2VmgeKAKgXArJOJTSaLi2pFbWLhL3K65oOoA5rkXp3ajaSd0s~xapIgaGcZheRAQ6E0V2giWg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000483.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 83,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/483/image/image.jpg?Expires=1776732227&Signature=f0s95sk-vo8tZBdoXYmm75tV0zTp3kRYPmVMqYprzwhl4hVqebqgp6-ZVTqPrZw3ohZlJ073zmp0oxLgds1WItAc2KQx4etynbvPGu~D15SqU2a2ZrdzfTmjfICu6O8xpMLb~BOcC92r-eYgIRC3txB6SIX9gf-3U0~U7KRE9LBSYqtcVsr-uaPMFt~55l1sEjKZqwudX0HDpjnQkaHccCo1xQ9fQW5UxwZPDrSHC1v1oQZpFD0yHb~u~ow2Xetdd4gHbPDXTEeMW2VmgeKAKgXArJOJTSaLi2pFbWLhL3K65oOoA5rkXp3ajaSd0s~xapIgaGcZheRAQ6E0V2giWg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_83_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/484/image/image.jpg?Expires=1776732227&Signature=S1cl92vvIBzoh~68Ga6xVuKBqZuvvFIM7CTJNqx4-DzgNNc9cA2Wy7spQkL2eKZgLTr5UXKGElSXqKZXhEGM35KcLzWjwYWaT8684YhA~Wuqm~SQmeCdddnySA3bz42vJkxxfRxIcmetjKG~BnFLo9l87yaDmzeFnaEh5nsfKIR7jiK53VXJff1h0fAyUh~40uJaTj0mZrUT~xudaBBl1NuWqEJpgw53Z14Gk~4JBq9bqSCQNb9HqTulVlLuRJflW3X3sYktRdvxk266k-YrhFKhw4nQhUTVhkUvrNxYrTP9z7yS8mis3noGlyYVvag47UOzdTbIOVzHab9LXQjCJw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000484.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 84,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/484/image/image.jpg?Expires=1776732227&Signature=S1cl92vvIBzoh~68Ga6xVuKBqZuvvFIM7CTJNqx4-DzgNNc9cA2Wy7spQkL2eKZgLTr5UXKGElSXqKZXhEGM35KcLzWjwYWaT8684YhA~Wuqm~SQmeCdddnySA3bz42vJkxxfRxIcmetjKG~BnFLo9l87yaDmzeFnaEh5nsfKIR7jiK53VXJff1h0fAyUh~40uJaTj0mZrUT~xudaBBl1NuWqEJpgw53Z14Gk~4JBq9bqSCQNb9HqTulVlLuRJflW3X3sYktRdvxk266k-YrhFKhw4nQhUTVhkUvrNxYrTP9z7yS8mis3noGlyYVvag47UOzdTbIOVzHab9LXQjCJw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_84_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/485/image/image.jpg?Expires=1776732227&Signature=RMpv1eADp5bJ~su3oLS343CiAYBYUFVmIyLJ2QpYLvAyKEYdKTh1lGuLIm3kibMBt9fpexVEM8LYws02Ola0mo0xqxajQvwMJPfD9k~Q1Oh3HMAP0um0M9j2JFc46NcAQnsaIK2CpLVzDQ0G51v~5q4UBVL~hg2UVmmeQuMPeynBL1A8GKnVX8TCcRF2o7XdkDLyRyEQEG2DneAwOQOj67qPaN12eR42soe77IypFxbqqc0BiFIbLvTWggHfyDGW~z49R78~KJ2AqbAH5FQNWMIWOs2okrWd8AbdD9HD5O8XNj0dr6apsluL8rgUPw~DG27yYApQuRu4M1SFx3QmTQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000485.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 85,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/485/image/image.jpg?Expires=1776732227&Signature=RMpv1eADp5bJ~su3oLS343CiAYBYUFVmIyLJ2QpYLvAyKEYdKTh1lGuLIm3kibMBt9fpexVEM8LYws02Ola0mo0xqxajQvwMJPfD9k~Q1Oh3HMAP0um0M9j2JFc46NcAQnsaIK2CpLVzDQ0G51v~5q4UBVL~hg2UVmmeQuMPeynBL1A8GKnVX8TCcRF2o7XdkDLyRyEQEG2DneAwOQOj67qPaN12eR42soe77IypFxbqqc0BiFIbLvTWggHfyDGW~z49R78~KJ2AqbAH5FQNWMIWOs2okrWd8AbdD9HD5O8XNj0dr6apsluL8rgUPw~DG27yYApQuRu4M1SFx3QmTQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_85_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/486/image/image.jpg?Expires=1776732227&Signature=HX0OkyUWNreF7Ui~CzGq7FcCZ0dsv0Y3j87XuXDrwBqhCgWIjk~WyibyLRzrTnch3xbjtX7lXzYcGqz-i7Bz0rq78hcub03AzevR9pirdjl4rnyARQJYOf1HN51J9M8LVC9RP~eZ2bU3GWJA3la-nwlhZcE07snFkl7EwY5yCHDAMuWLjylvOomzIq34wywL2a5tR3xpKDjfgBjv4SoNZ9nESCSRQ6rCBK~H4VkEfXMFfZh0Z7LVfAfKGVzmbVJBivEmG~NdXkZxAe4QJF7FzLFOxQ7WPjVC~h47Egt1I2cTgocHexZF-UKI7~p4Fy4C-6qEVHdTrZ5HWuF2esajkw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000486.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 86,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/486/image/image.jpg?Expires=1776732227&Signature=HX0OkyUWNreF7Ui~CzGq7FcCZ0dsv0Y3j87XuXDrwBqhCgWIjk~WyibyLRzrTnch3xbjtX7lXzYcGqz-i7Bz0rq78hcub03AzevR9pirdjl4rnyARQJYOf1HN51J9M8LVC9RP~eZ2bU3GWJA3la-nwlhZcE07snFkl7EwY5yCHDAMuWLjylvOomzIq34wywL2a5tR3xpKDjfgBjv4SoNZ9nESCSRQ6rCBK~H4VkEfXMFfZh0Z7LVfAfKGVzmbVJBivEmG~NdXkZxAe4QJF7FzLFOxQ7WPjVC~h47Egt1I2cTgocHexZF-UKI7~p4Fy4C-6qEVHdTrZ5HWuF2esajkw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_86_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/487/image/image.jpg?Expires=1776732227&Signature=m3KVkmCjPNBQ~BIuB6t4hZufR2j~LJ95G~NdL36DcRY1fL7eQ-BZYZ-uRXJhaXZH2FL9Dh9ep8-bZ7xZFwhMX2NZYxQq481~A~eI0WCnP3k7IRBPZ~B17dMs8uMBXoKeWYkQpk0~B2H8P1QH-E0VPN9T8Uur5oCdgXBr1qLR9NXQcmniRuOm~hTYUEabrGG7BW8~SYrsTtRlN2O7qFEyO9~YYwJJxC05v6zOp~ge7S1NNVKzBdKqHWeLbJstnHlXcd0Ljf9-vZ7vDI-QNBfWt7s-SwmpXmwMiDi3DbMOkaQD~hB3dFfd8QWKFZ9Im6G~EqiDYDEKMuyuFdzne4ABaA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000487.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 87,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/487/image/image.jpg?Expires=1776732227&Signature=m3KVkmCjPNBQ~BIuB6t4hZufR2j~LJ95G~NdL36DcRY1fL7eQ-BZYZ-uRXJhaXZH2FL9Dh9ep8-bZ7xZFwhMX2NZYxQq481~A~eI0WCnP3k7IRBPZ~B17dMs8uMBXoKeWYkQpk0~B2H8P1QH-E0VPN9T8Uur5oCdgXBr1qLR9NXQcmniRuOm~hTYUEabrGG7BW8~SYrsTtRlN2O7qFEyO9~YYwJJxC05v6zOp~ge7S1NNVKzBdKqHWeLbJstnHlXcd0Ljf9-vZ7vDI-QNBfWt7s-SwmpXmwMiDi3DbMOkaQD~hB3dFfd8QWKFZ9Im6G~EqiDYDEKMuyuFdzne4ABaA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_87_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/488/image/image.jpg?Expires=1776732227&Signature=o8dpjmlhj9--UwLCOEK2GyoR3rvGWIEOaUhFZYT14BdpPg1ZNcwiFuLqElTgaJaFMF~stUSgKw6uGatV9xp1Dex8zxumK15NF0QB4P9lEnSp0iiJix4KZbv6cPJA0GBud~~hZmTWVKR1HiclIz~6svolwVaom9MXrTSk6QwRgk~VF2dMk-aiMOw5JuMo40m6ENiBs5Cuepi7VqM4Uu0rgFPFjZQ7NRO4h8p8naFDYhQpzvESp9IYhiu3r5bEvKB0-3fbzOds2JsbcqxzQQRETMByuXd6QvYPn3AI~dsCcBMuw23SYRZq~uzJBO6vw96iC74Xi5IroX91rDvFPUmmbw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000488.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 88,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/488/image/image.jpg?Expires=1776732227&Signature=o8dpjmlhj9--UwLCOEK2GyoR3rvGWIEOaUhFZYT14BdpPg1ZNcwiFuLqElTgaJaFMF~stUSgKw6uGatV9xp1Dex8zxumK15NF0QB4P9lEnSp0iiJix4KZbv6cPJA0GBud~~hZmTWVKR1HiclIz~6svolwVaom9MXrTSk6QwRgk~VF2dMk-aiMOw5JuMo40m6ENiBs5Cuepi7VqM4Uu0rgFPFjZQ7NRO4h8p8naFDYhQpzvESp9IYhiu3r5bEvKB0-3fbzOds2JsbcqxzQQRETMByuXd6QvYPn3AI~dsCcBMuw23SYRZq~uzJBO6vw96iC74Xi5IroX91rDvFPUmmbw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_88_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/489/image/image.jpg?Expires=1776732227&Signature=gzJtNblOlmQWk4~rU0wuS1HKgZSszNd4TW2eU3i3cut3RaRL91io4gowmqAdwn0n5v2GMKiXDF8hZC8n4BmU4MWM55NerC90c-vI0ixq1LYl5FwXdOdIJPrqgYl69ZrkCfAnP2HJfE4ZxyesrmkkQs8Us4UsSlF7-dQHMNY1YgFBO2rotb7kdO1DPrNNsrKtNmw3N3oPanGUbHSo3BdAKMF-p1-Ym9duZ6aMKR~AmO8q~dRAt2kgPyKK6bglNMfymuULjpC1qbPzK-VAb0LGmCic8TjzNyRXnv-cJTWn7MRZ6w0Ulp~NausPsRFK5FcLc7gKWmGik~lKkcXVf5jQrw__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000489.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 89,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/489/image/image.jpg?Expires=1776732227&Signature=gzJtNblOlmQWk4~rU0wuS1HKgZSszNd4TW2eU3i3cut3RaRL91io4gowmqAdwn0n5v2GMKiXDF8hZC8n4BmU4MWM55NerC90c-vI0ixq1LYl5FwXdOdIJPrqgYl69ZrkCfAnP2HJfE4ZxyesrmkkQs8Us4UsSlF7-dQHMNY1YgFBO2rotb7kdO1DPrNNsrKtNmw3N3oPanGUbHSo3BdAKMF-p1-Ym9duZ6aMKR~AmO8q~dRAt2kgPyKK6bglNMfymuULjpC1qbPzK-VAb0LGmCic8TjzNyRXnv-cJTWn7MRZ6w0Ulp~NausPsRFK5FcLc7gKWmGik~lKkcXVf5jQrw__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_89_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/490/image/image.jpg?Expires=1776732227&Signature=GiaE5bKU0CgRqEBbuPniYq0GGyy-dYmOBfr~2cVwNE3fD~tMnV-g~-0UwCuXQAGPwDmDT6amKLbaM3Hi6pj7PFrtBZw5~Le33UySym3LZAaWXyJBWHppROfxNtb4T5vxd2Qdigj1XDcmKleVudckMAeK37p0oPKowOeOFYyTqb0XyKlrXVpaYZqD0JuOunVzbooscYwxZjrgRqKI4788CgEwpK9vuIwYnLCVVhDnnmiG7qooaiGBxcsclSSyIBtJyVYI1Rq~rF2EIXuCZDjKRpAV7IN4rbqwIrydR6wEh4EJ85dqs19nryhZ0gGVFUUpGVztrv0iMF78-Vyfck-ICQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000490.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 90,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/490/image/image.jpg?Expires=1776732227&Signature=GiaE5bKU0CgRqEBbuPniYq0GGyy-dYmOBfr~2cVwNE3fD~tMnV-g~-0UwCuXQAGPwDmDT6amKLbaM3Hi6pj7PFrtBZw5~Le33UySym3LZAaWXyJBWHppROfxNtb4T5vxd2Qdigj1XDcmKleVudckMAeK37p0oPKowOeOFYyTqb0XyKlrXVpaYZqD0JuOunVzbooscYwxZjrgRqKI4788CgEwpK9vuIwYnLCVVhDnnmiG7qooaiGBxcsclSSyIBtJyVYI1Rq~rF2EIXuCZDjKRpAV7IN4rbqwIrydR6wEh4EJ85dqs19nryhZ0gGVFUUpGVztrv0iMF78-Vyfck-ICQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_90_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/491/image/image.jpg?Expires=1776732227&Signature=yO6cKUW6ju-ghFk0HNm4PWtWoYMUmW8OrAzSlQ3EnUgg9IeT6aA5qckX4mmpckUIONCQkTr9JClx8DGkfSMpEpHNBKC2TQ-50Q53-aKdst2rdjZCCsHfsQGraZIJGeg7VSkzG9g~5GI3jZX90J9OX3omiv5TJw5Cz2o0D-GImeFhpN-qEexWfScr~VXxSnm1x1fefgfW-Qczz9sabW8CPi93RSxLosDWfO4xIDqmCNG~gDGP3AGQsJRJMFjtN04pnYhbempyqJWG3FHRDENnZT6ggCqtTlE7IyrMDyH5HkciGXvivON1UBrgqH3xPzvyGaAxhfyaYrEpvt4g9wKW9A__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000491.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 91,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/491/image/image.jpg?Expires=1776732227&Signature=yO6cKUW6ju-ghFk0HNm4PWtWoYMUmW8OrAzSlQ3EnUgg9IeT6aA5qckX4mmpckUIONCQkTr9JClx8DGkfSMpEpHNBKC2TQ-50Q53-aKdst2rdjZCCsHfsQGraZIJGeg7VSkzG9g~5GI3jZX90J9OX3omiv5TJw5Cz2o0D-GImeFhpN-qEexWfScr~VXxSnm1x1fefgfW-Qczz9sabW8CPi93RSxLosDWfO4xIDqmCNG~gDGP3AGQsJRJMFjtN04pnYhbempyqJWG3FHRDENnZT6ggCqtTlE7IyrMDyH5HkciGXvivON1UBrgqH3xPzvyGaAxhfyaYrEpvt4g9wKW9A__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_91_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/492/image/image.jpg?Expires=1776732227&Signature=HgWrLIMK91qMWCP46kr0mbBqn787f4TZsk-mWS93y4dRvofuAAZdYKoCrj6quaX-CZkkXb8B04PDE9ImYu5HrDGtPYsJACAV6fA2vB6At3-nJk9jKN-FF0ZnVoywVhyBhBzAGpGPtq7ZeG4Udr26FnPdKzlSkSJQAkGrMQnVLHFPR9m~ljvyKxt80lxl2wGT5RktkTLLHoFhdRgiO-raFkFnXGkT9vtsGRy2Tg2JZSkA5uoQJ4sNcKihHjisX6Yh0ySCPy7m~pHWmkJ7iXS3scXYDO7nFjZB0iLnlhZd8I-lfhWakYx10n85Lavlv2pB4bpwaA~qmYMqdK3UOzPSFQ__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000492.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 92,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/492/image/image.jpg?Expires=1776732227&Signature=HgWrLIMK91qMWCP46kr0mbBqn787f4TZsk-mWS93y4dRvofuAAZdYKoCrj6quaX-CZkkXb8B04PDE9ImYu5HrDGtPYsJACAV6fA2vB6At3-nJk9jKN-FF0ZnVoywVhyBhBzAGpGPtq7ZeG4Udr26FnPdKzlSkSJQAkGrMQnVLHFPR9m~ljvyKxt80lxl2wGT5RktkTLLHoFhdRgiO-raFkFnXGkT9vtsGRy2Tg2JZSkA5uoQJ4sNcKihHjisX6Yh0ySCPy7m~pHWmkJ7iXS3scXYDO7nFjZB0iLnlhZd8I-lfhWakYx10n85Lavlv2pB4bpwaA~qmYMqdK3UOzPSFQ__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_92_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/493/image/image.jpg?Expires=1776732227&Signature=oKxCOBLTLNZV1EEzQngtvTNvpyMX27xKGYNgcL1i7eBK8-40xgEfy99ybkiQti4kT2E6WcOcDK--XpJuW4iFkbl7CjAbZpo9DwA3HLy0H1toMGPIkPV41ZgCGz2db-RUjCxscgjmq5UIkYPIa2Mzxp6G7LXPRPTOhtiz2AdAnMHr~UJGETpJDZtidXedTic3xRV063yRGQfuwrUiz~1fMMUGM95TPRdJe0pRFSj08omd0NFPs~v1QNJQx8U-Z~jtOWKm~qs5DyGLjUgzUzvF2YeY9568M-vsp0Iq9-u9IEsSW2q8MvOtqvzlAASFw~YgZh-FG5AMSp0EH2zWmpnk6g__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000493.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 93,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/493/image/image.jpg?Expires=1776732227&Signature=oKxCOBLTLNZV1EEzQngtvTNvpyMX27xKGYNgcL1i7eBK8-40xgEfy99ybkiQti4kT2E6WcOcDK--XpJuW4iFkbl7CjAbZpo9DwA3HLy0H1toMGPIkPV41ZgCGz2db-RUjCxscgjmq5UIkYPIa2Mzxp6G7LXPRPTOhtiz2AdAnMHr~UJGETpJDZtidXedTic3xRV063yRGQfuwrUiz~1fMMUGM95TPRdJe0pRFSj08omd0NFPs~v1QNJQx8U-Z~jtOWKm~qs5DyGLjUgzUzvF2YeY9568M-vsp0Iq9-u9IEsSW2q8MvOtqvzlAASFw~YgZh-FG5AMSp0EH2zWmpnk6g__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_93_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/494/image/image.jpg?Expires=1776732227&Signature=e-6VSZgQb~rR6vboKkUeOhZji8lqW5vT6x~69RknyNWgjM8EvsZvbH-gC9GgVSUSo-GhudX17kwXgQ8krNJjooXpcSsH3oiw~7A0NctiF2S4Jeil0wFn6~Usq7p~Sdlt5XH5Eq9hP~yQOitwFvscPsOAlST-RaZGo2XYxReD9sqXVbcPJS9TDSwRFyPn6L1Btg25cnLxg0ZTQYcpQYTJu1VooZ9UJCMQx1sdg9Uel~ilvW6jhAo4E3S8mQNpsw7mb43IJD5hhM788JtGXgmQpCGtr9nd5WAIOv1xiRefkMklgckTIDgC9JN1u15etOZeFb09kvOYk7XK8cbdiMB9TA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000494.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 94,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/494/image/image.jpg?Expires=1776732227&Signature=e-6VSZgQb~rR6vboKkUeOhZji8lqW5vT6x~69RknyNWgjM8EvsZvbH-gC9GgVSUSo-GhudX17kwXgQ8krNJjooXpcSsH3oiw~7A0NctiF2S4Jeil0wFn6~Usq7p~Sdlt5XH5Eq9hP~yQOitwFvscPsOAlST-RaZGo2XYxReD9sqXVbcPJS9TDSwRFyPn6L1Btg25cnLxg0ZTQYcpQYTJu1VooZ9UJCMQx1sdg9Uel~ilvW6jhAo4E3S8mQNpsw7mb43IJD5hhM788JtGXgmQpCGtr9nd5WAIOv1xiRefkMklgckTIDgC9JN1u15etOZeFb09kvOYk7XK8cbdiMB9TA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_94_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/495/image/image.jpg?Expires=1776732227&Signature=ydAlcqPT20Tcrc~RsS-41KtXluA~gOHVuZDCPF~oL-VnV2tAhjbZ-TRFx868EuIyVPpoFg5hZxgCqpMrvbH9q~-U0PJc55pUC2rqqYWhQyp6pRtlH40E1OPoPWrN8MKatLorpJwgtnryHd8BbfT7w36GhD4IYfLre0cnbsLhGeKTEF~FoNgX8sZKW5jiWssU7v5tT7Q2hi-j22ck7o-xN2jWgtyIIcwrBq5UK0xx5LGHCVdbsWKBeMC1x~VLvVWsjVWohxcevw6ej9ITHJWELjOCZ0hxuGMgGe1BYj9tgJtr8f6U3X7oHjatd7lRvnx3yPs4KzoJAflXFD6PC-JG4Q__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000495.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 95,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/495/image/image.jpg?Expires=1776732227&Signature=ydAlcqPT20Tcrc~RsS-41KtXluA~gOHVuZDCPF~oL-VnV2tAhjbZ-TRFx868EuIyVPpoFg5hZxgCqpMrvbH9q~-U0PJc55pUC2rqqYWhQyp6pRtlH40E1OPoPWrN8MKatLorpJwgtnryHd8BbfT7w36GhD4IYfLre0cnbsLhGeKTEF~FoNgX8sZKW5jiWssU7v5tT7Q2hi-j22ck7o-xN2jWgtyIIcwrBq5UK0xx5LGHCVdbsWKBeMC1x~VLvVWsjVWohxcevw6ej9ITHJWELjOCZ0hxuGMgGe1BYj9tgJtr8f6U3X7oHjatd7lRvnx3yPs4KzoJAflXFD6PC-JG4Q__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_95_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/496/image/image.jpg?Expires=1776732227&Signature=K~pRqqIrLZl1oIUDkxs-uZur0dwzV~t~CnwcwttzAhHBqMFqmZX5nBGSqGqg7BxPlW~70fBu5X6jiEMeioZjaPylgRpLychjJIyCwE7MQ-Rbk~b2po4CA1WM6IDawBg3AB2heFWtlD81IlYMBvPcVMzPt0JB7ORgu6eH3eie6D~4fl3NzSGOed7N3xIlAsa-nsjbcU~dDs~EdtyO4ZEXxp~KSj-4JcZfiF7K1GmMli0G5Y9cSvhtwvMV~BUJLfG8HZ1TrslW~3ltXzq5K15O9rb1BSO1aWI4peLHoMWtlXQZufvsFZ-ojFf353nVIWm-e1gMeSxUGZ4YBh8Bnq-cgA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000496.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 96,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/496/image/image.jpg?Expires=1776732227&Signature=K~pRqqIrLZl1oIUDkxs-uZur0dwzV~t~CnwcwttzAhHBqMFqmZX5nBGSqGqg7BxPlW~70fBu5X6jiEMeioZjaPylgRpLychjJIyCwE7MQ-Rbk~b2po4CA1WM6IDawBg3AB2heFWtlD81IlYMBvPcVMzPt0JB7ORgu6eH3eie6D~4fl3NzSGOed7N3xIlAsa-nsjbcU~dDs~EdtyO4ZEXxp~KSj-4JcZfiF7K1GmMli0G5Y9cSvhtwvMV~BUJLfG8HZ1TrslW~3ltXzq5K15O9rb1BSO1aWI4peLHoMWtlXQZufvsFZ-ojFf353nVIWm-e1gMeSxUGZ4YBh8Bnq-cgA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_96_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/497/image/image.jpg?Expires=1776732227&Signature=UjLCUbvFZCm1Icd-NiqsXvjsrfuPzrcDFoya-ikHehwP-~hEbvjKo-LWvxkGh~kos3vWjma47QFd~x8tJ5EZ-uSLqbHgZSNx3iHPEj97Zpm6DCmxZ6sAiHBINo4Dt-gRR3IfE20QHshisdEmcA48YBctIg1GSxYiFgt-OcdKwE2WF11t4GJKHJH5ALD-3tWZ4-ZExc0G72m11gK3abW-GruNA26ZQc2uEsWJZ4eCJpyElr7-Fq8--LLzqbSXnhDF0tiwHvjewSevIFjGwn7V3QuwHWkUG9ZUlxFPbp4kYUFHcwW4EhNYfpb6NYsp0KI3pxU0QKocvBK3kIVziMPQYA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000497.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 97,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/497/image/image.jpg?Expires=1776732227&Signature=UjLCUbvFZCm1Icd-NiqsXvjsrfuPzrcDFoya-ikHehwP-~hEbvjKo-LWvxkGh~kos3vWjma47QFd~x8tJ5EZ-uSLqbHgZSNx3iHPEj97Zpm6DCmxZ6sAiHBINo4Dt-gRR3IfE20QHshisdEmcA48YBctIg1GSxYiFgt-OcdKwE2WF11t4GJKHJH5ALD-3tWZ4-ZExc0G72m11gK3abW-GruNA26ZQc2uEsWJZ4eCJpyElr7-Fq8--LLzqbSXnhDF0tiwHvjewSevIFjGwn7V3QuwHWkUG9ZUlxFPbp4kYUFHcwW4EhNYfpb6NYsp0KI3pxU0QKocvBK3kIVziMPQYA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_97_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/498/image/image.jpg?Expires=1776732227&Signature=QOe-vzPxD9xPxR0JBFg639p6YSSLRJjn5KiObLsAMP5IKiWzVmUEaDaR8P4bGeHpltBAZB7lJlAwljhFqMEcqaqA0rdiXwjunY69ymc74iuLQnmukmkgB5TYjsoRenxJtXowED-2R3YKqY83g15BUioxSlQcHNsYyrez80cpozUXESV1rDFXqxOULrBSMZm3t3i7xmEix4Z8GuNvhzAxtX9rkY-sYvcNVgfm2Bv0jVufXTrYboyeCp32a19msFLhEx0fgbZ40ds7TM0rKe13jCWAOnhTFW9whEmcUYGB2zDBXpxetDCPEvCuLKBuFJX27iNDDZmfJEqHdk-ELTFWBA__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000498.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 98,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/498/image/image.jpg?Expires=1776732227&Signature=QOe-vzPxD9xPxR0JBFg639p6YSSLRJjn5KiObLsAMP5IKiWzVmUEaDaR8P4bGeHpltBAZB7lJlAwljhFqMEcqaqA0rdiXwjunY69ymc74iuLQnmukmkgB5TYjsoRenxJtXowED-2R3YKqY83g15BUioxSlQcHNsYyrez80cpozUXESV1rDFXqxOULrBSMZm3t3i7xmEix4Z8GuNvhzAxtX9rkY-sYvcNVgfm2Bv0jVufXTrYboyeCp32a19msFLhEx0fgbZ40ds7TM0rKe13jCWAOnhTFW9whEmcUYGB2zDBXpxetDCPEvCuLKBuFJX27iNDDZmfJEqHdk-ELTFWBA__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_98_image"
    },
    {
      "url": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/499/image/image.jpg?Expires=1776732227&Signature=SypBEB~eEQjzqyttOh7ZvrHyzipKEoiSMmHOoiPWv4B~kqXyxmPgKHsxgEOUM3MOrBGwop31~Kzq-BMUVyzLl5HBpzWpvVjBpuHt5bEV007V~h7~la77yK5w5CoRCwvHuLNkxYbHtwL7peeuGHK3Cqp2R-koBtoIJ-GOo07SjUBCp6n~0Z-pDa-Kp-IPoD8YKTy0QEBfBxPTUfDRqvg99aVZqbUfXDgPSkAhGcqhLIwaFIWo6P~VaVVVQa1SO3~-i7CEHArf8RPWMcZIAzRtDkfwuu5tekLkvOGhuxzJhbnTYnRmRzZjbIQ682mTajjsv8aozHlnMvaGGWr454eXzg__&Key-Pair-Id=K204OQ5RWQVDLD",
      "name": "image_000499.jpg",
      "metadata": {
        "dataset": "sijiey/Thermal-Affordance-Dataset",
        "column": "image",
        "rowIndex": 99,
        "isPermanent": false,
        "image": {
          "src": "https://datasets-server.huggingface.co/cached-assets/sijiey/Thermal-Affordance-Dataset/--/9fafbb1e58b73cf78a1e33635f1f095170941ccf/--/default/train/499/image/image.jpg?Expires=1776732227&Signature=SypBEB~eEQjzqyttOh7ZvrHyzipKEoiSMmHOoiPWv4B~kqXyxmPgKHsxgEOUM3MOrBGwop31~Kzq-BMUVyzLl5HBpzWpvVjBpuHt5bEV007V~h7~la77yK5w5CoRCwvHuLNkxYbHtwL7peeuGHK3Cqp2R-koBtoIJ-GOo07SjUBCp6n~0Z-pDa-Kp-IPoD8YKTy0QEBfBxPTUfDRqvg99aVZqbUfXDgPSkAhGcqhLIwaFIWo6P~VaVVVQa1SO3~-i7CEHArf8RPWMcZIAzRtDkfwuu5tekLkvOGhuxzJhbnTYnRmRzZjbIQ682mTajjsv8aozHlnMvaGGWr454eXzg__&Key-Pair-Id=K204OQ5RWQVDLD",
          "height": 512,
          "width": 1024
        }
      },
      "originalName": "sijiey_Thermal-Affordance-Dataset_99_image"
    }
  ],
  "preloadedAt": "2026-04-20T08:07:57.487Z",
  "preloadedSource": "supabase",
  "supabaseBucket": "survey-images",
  "serverSetupComplete": true,
  "serverSetupCompletedAt": "2026-04-20T10:34:15.822Z",
  "title": "Urban Greenery Perception Survey",
  "pages": [
    {
      "name": "research_objective",
      "title": "Research Objective",
      "description": "The purpose of this survey is to investigate how urban greenery affects perceptions of streetscapes, including aesthetic appeal, environmental benefits, and personal preferences. We aim to understand the impact of greenery on urban street environments.",
      "elements": []
    },
    {
      "name": "greenery_psychological_impact",
      "title": "Psychological Impact of Urban Greenery",
      "description": "Evaluate how urban greenery impacts your psychological well-being.",
      "elements": [
        {
          "type": "imagematrix",
          "name": "question_1776672556373",
          "title": "New Question",
          "isRequired": false,
          "imageCount": 1,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover",
          "choices": [],
          "columns": [
            {
              "value": "5",
              "text": "5"
            },
            {
              "value": "4",
              "text": "4"
            },
            {
              "value": "3",
              "text": "3"
            },
            {
              "value": "2",
              "text": "2"
            },
            {
              "value": "1",
              "text": "1"
            }
          ],
          "rows": [
            {
              "value": "liveability?",
              "text": "liveability?"
            },
            {
              "value": "imageability?",
              "text": "imageability?"
            }
          ]
        },
        {
          "type": "image",
          "name": "question_1776672556374",
          "title": "New Question_1",
          "isRequired": false,
          "imageCount": 1,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "image",
          "name": "question_1776672556375",
          "title": "New Question_2",
          "isRequired": false,
          "imageCount": 1,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "image",
          "name": "question_1776672556376",
          "title": "New Question_3",
          "isRequired": false,
          "imageCount": 1,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "text",
          "name": "question_1776673951625",
          "title": "New Question",
          "isRequired": false
        },
        {
          "type": "imagepicker",
          "name": "question_1776674000861",
          "title": "New Question",
          "isRequired": false,
          "imageCount": 4,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "excludePreviouslyUsedImages": true,
          "imageFit": "cover"
        }
      ]
    },
    {
      "name": "greenery_psychological_impact_1",
      "title": "Psychological Impact of Urban Greenery_1",
      "description": "Evaluate how urban greenery impacts your psychological well-being.",
      "elements": [
        {
          "type": "imagematrix",
          "name": "question_1776672556374",
          "title": "New Question",
          "isRequired": false,
          "imageCount": 1,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover",
          "choices": [],
          "columns": [
            {
              "value": "5",
              "text": "5"
            },
            {
              "value": "4",
              "text": "4"
            },
            {
              "value": "3",
              "text": "3"
            },
            {
              "value": "2",
              "text": "2"
            },
            {
              "value": "1",
              "text": "1"
            }
          ],
          "rows": [
            {
              "value": "liveability?",
              "text": "liveability?"
            },
            {
              "value": "imageability?",
              "text": "imageability?"
            }
          ]
        },
        {
          "type": "image",
          "name": "question_1776672556375",
          "title": "New Question_1",
          "isRequired": false,
          "imageCount": 1,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "image",
          "name": "question_1776672556376",
          "title": "New Question_2",
          "isRequired": false,
          "imageCount": 1,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "image",
          "name": "question_1776672556377",
          "title": "New Question_3",
          "isRequired": false,
          "imageCount": 1,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "imageFit": "cover"
        },
        {
          "type": "text",
          "name": "question_1776673951626",
          "title": "New Question",
          "isRequired": false
        },
        {
          "type": "imagepicker",
          "name": "question_1776674000862",
          "title": "New Question",
          "isRequired": false,
          "imageCount": 4,
          "imageSelectionMode": "huggingface_random",
          "randomImageSelection": true,
          "excludePreviouslyUsedImages": true,
          "imageFit": "cover"
        }
      ]
    },
    {
      "name": "page_1776674438427",
      "title": "New Page",
      "description": "Page description",
      "elements": [
        {
          "type": "text",
          "name": "question",
          "title": "New Question",
          "isRequired": false
        }
      ]
    }
  ],
  "theme": {
    "primaryColor": "#1976d2",
    "primaryLight": "#42a5f5",
    "primaryDark": "#1565c0",
    "secondaryColor": "#dc004e",
    "accentColor": "#ff9800",
    "successColor": "#4caf50",
    "backgroundColor": "#ffffff",
    "cardBackground": "#f8f9fa",
    "headerBackground": "#ffffff",
    "textColor": "#212121",
    "secondaryText": "#757575",
    "disabledText": "#bdbdbd",
    "borderColor": "#e0e0e0",
    "focusBorder": "#1976d2"
  },
  "imagePreloadTimestamp": "2026-04-20T23:43:40.663Z"
};

export const getPreloadedImages = () => {
  return deploymentConfig.preloadedImages || [];
};

export const isImagePreloaded = () => {
  return deploymentConfig.preloadedImages && deploymentConfig.preloadedImages.length > 0;
};
