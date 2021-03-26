var tipuesearch = {"pages": [{'title': 'About', 'text': '\n \n \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'W2~W4', 'text': '小組網頁: stage1-bg12 \n 小組倉儲: stage1-bg12 倉儲 \n 組員: 40823202 黃詩云、40823203 潘奕瑄 \n 我們討論的主題是:鋁罐壓扁機 \n 研發動機:減少垃圾量 \n 運用原理:運用圓盤和桿件的連接，讓圓盤做迴轉運動，桿件做直線運動，達到壓縮鐵鋁罐的目的。 \n 直線運動機構分為精確直線運動機構和近似直線運動機構兩類。其中精確直線運動機構的設計思想主要有兩種：一種是利用幾何中的反演變換，把連杆末端的圓弧路徑反演為直線，用機械反演器可以完成這一功能；另一種則是通過兩個不平行的連杆結構，把路徑限制在兩個平面的交線。近似直線運動機構則是通過多個杆件實現自由度為1的連接，調整杆件的長度使得一點的運動軌跡中包含一段近似直的線段。 (原文網址：https://kknews.cc/health/mq6yn22.html) \n 參考資料: \n \n', 'tags': '', 'url': 'W2~W4.html'}, {'title': '第一版', 'text': '設計機構: \n 零件檔 \n 1.固定器 \n \n 2.銷 \n \n 3.座動器 \n \n 4.桿件 \n \n 5.圓盤 \n \n 6.底座 \n \n 7.組合圖 \n \n \n \n', 'tags': '', 'url': '第一版.html'}, {'title': '第二版', 'text': '零件檔和組合檔 \n 模擬.ttt \n \n \n \n', 'tags': '', 'url': '第二版.html'}, {'title': 'ppt和影片', 'text': 'w1~w4的PPT \n \n', 'tags': '', 'url': 'ppt和影片.html'}, {'title': 'W5', 'text': '\n \n', 'tags': '', 'url': 'W5.html'}, {'title': '問題', 'text': '', 'tags': '', 'url': '問題.html'}, {'title': '救回commit', 'text': '不小心把commit的紀錄刪掉 \n \n 搜尋問題 \n git reset -- hard {commit id} 之後再推送 \n \n \n 再git pull \n \n', 'tags': '', 'url': '救回commit.html'}, {'title': '沒辦法開python', 'text': '\n 解決辦法: \n \n 將這兩個檔案放到cmsimde，再開啟一次即可成功 \n', 'tags': '', 'url': '沒辦法開python.html'}, {'title': '筆記', 'text': '', 'tags': '', 'url': '筆記.html'}, {'title': '協同推送', 'text': '', 'tags': '', 'url': '協同推送.html'}]};