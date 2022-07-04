const config = {
    "apps": [
      {
        "id": "netflix",
        "command": "firefox",
        "parameters": [
          "-new-window",
          "https://www.netflix.com/"
        ]
      },{
        "id": "youtube",
        "command": "firefox",
        "parameters": [
          "-new-window",
          "https://www.youtube.com/tv#/",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },{
        "id": "spotify",
        "command": "spotify",
        "parameters": []
      },{
        "id": "muge-anli",
        "command": "firefox",
        "parameters": [
          "-new-window",
          "https://www.youtube.com/tv#/browse?c=UC0XZpoAPTm_1UJvFQiVg_hg",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },{
        "id": "cukur",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UCTAkwLbVzHxsbgsp6cRsPDg",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },{
        "id": "guldur-guldur",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UCdlEXiVLTEvA280oyMvr8Kw",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },{
        "id": "deep-humor",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UCEmGkt83MLqCqqQbfIggvIA",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },{
        "id": "anatolian-rock",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UCCpTaib_e5C6Q95qwazq8OA",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },{
        "id": "primitive-technology",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UCAL3JXZSzSm8AlZyD3nQdBA",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },{
        "id": "masumlar-apartmani",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UC1wRZwOGxBpJNQsC_1w7AbA",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },{
        "id": "survival-skills",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UCWh8MoOvUv_HEwCN6vBOE1Q",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },
      {
        "id": "survival-skills",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UC1wRZwOGxBpJNQsC_1w7AbA",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },
      {
        "id": "konusanlar",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UCZaLuJes84DyH-vLrTWhSLA",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },
      {
        "id": "ibrahim-selim-ile-bu-gece",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UC8882ICs-Exdx6leIfOUclg",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },
      {
        "id": "retroarch",
        "command": "retroarch",
        "parameters": []
      },
      {
        "id": "steam",
        "command": "steam",
        "parameters": []
      },
      {
        "id": "film-indir",
        "command": "firefox",
        "parameters": [
            "--kiosk",
            "http://192.168.1.200:3001"
          ]
      },
      {
        "id": "dizi-indir",
        "command": "firefox",
        "parameters": [
            "--kiosk",
            "http://192.168.1.200:3002"
          ]
      },
      {
        "id": "indirici",
        "command": "firefox",
        "parameters": [
            "--kiosk",
            "http://192.168.1.200:3000"
          ]
      },
      {
        "id": "blutv",
        "command": "firefox",
        "parameters": [
            "--kiosk",
            "https://www.blutv.com/"
          ]
      },
      {
        "id": "puhutv",
        "command": "firefox",
        "parameters": [
            "--kiosk",
            "https://puhutv.com/"
          ]
      },
      {
        "id": "kirmizi-oda",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UCS32Bmm4aPGAYQcXyks3meA",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },
      {
        "id": "ruhsar",
        "command": "firefox",
        "parameters": [
          "--kiosk",
          "https://www.youtube.com/tv/#/browse?c=UCOEltLbXMvRjHK0eeUoSkFQ",
          "--user-agent='Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1'"
        ]
      },
    ]
  };
