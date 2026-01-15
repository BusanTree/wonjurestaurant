const restaurants = [
    // Lunch / Dinner (Walking Distance < 15min)
    {
        name: "보릿고개 본점",
        category: "한식",
        bestMenu: "보리밥정식",
        tags: ["lunch"],
        description: "심평원 바로 앞 푸짐한 보리밥",
        icon: "🍚"
    },
    {
        name: "카츠예미",
        category: "일식",
        bestMenu: "안심카츠, 등심카츠",
        tags: ["lunch", "dinner"],
        description: "숙성육을 사용한 프리미엄 돈카츠",
        icon: "🍱"
    },
    {
        name: "방콕66",
        category: "아시안",
        bestMenu: "쌀국수, 나시고랭",
        tags: ["lunch"],
        description: "진한 국물의 베트남 쌀국수",
        icon: "🍜"
    },
    {
        name: "갈비애정찬",
        category: "한식",
        bestMenu: "돼지갈비 정찬",
        tags: ["lunch", "dinner"],
        description: "깔끔하게 나오는 갈비 정식",
        icon: "🥩"
    },
    {
        name: "누나네낙지",
        category: "한식",
        bestMenu: "낙지볶음",
        tags: ["lunch", "dinner"],
        description: "매콤한 불맛 낙지볶음",
        icon: "🐙"
    },
    {
        name: "덕수파스타",
        category: "양식",
        bestMenu: "땡초 크림 파스타",
        tags: ["lunch", "dinner"],
        description: "한국적인 퓨전 파스타",
        icon: "🍝"
    },
    {
        name: "일식당",
        category: "일식",
        bestMenu: "숙성회덮밥, 양갈비",
        tags: ["lunch", "dinner"],
        description: "숙성회와 양갈비 전문점",
        icon: "🍣"
    },
    {
        name: "제줏간",
        category: "고기",
        bestMenu: "제주 흑돼지 쫄깃살",
        tags: ["dinner"],
        description: "제주도 감성의 고기집",
        icon: "🥓"
    },
    {
        name: "눈꽃",
        category: "일식/이자카야",
        bestMenu: "눈꽃소바, 연어장",
        tags: ["lunch", "dinner"],
        description: "30년 경력 쉐프의 일식 맛집",
        icon: "🐟"
    },
    {
        name: "쿠우쿠우",
        category: "뷔페",
        bestMenu: "스시 뷔페",
        tags: ["dinner", "lunch"],
        description: "메가박스 건물 스시 무한리필",
        icon: "🍣"
    },
    {
        name: "한동가",
        category: "고기",
        bestMenu: "통가브리살, 오겹살",
        tags: ["dinner"],
        description: "육즙 가득한 돼지 특수부위",
        icon: "🥩"
    },
    {
        name: "신시골집",
        category: "한식",
        bestMenu: "육사시미, 제비추리",
        tags: ["dinner"],
        description: "신선한 육사시미와 구이",
        icon: "🥩"
    },
    {
        name: "해안가",
        category: "해산물",
        bestMenu: "뭉티기, 오징어통찜",
        tags: ["dinner"],
        description: "싱싱한 해산물 한 상",
        icon: "🦑"
    },
    {
        name: "청연",
        category: "중식",
        bestMenu: "알짬뽕, 유린기",
        tags: ["dinner", "lunch"],
        description: "푸짐한 재료의 중화요리",
        icon: "🥢"
    },
    {
        name: "안432",
        category: "일식",
        bestMenu: "치즈카츠, 안심카츠",
        tags: ["lunch", "dinner"],
        description: "줄 서서 먹는 돈카츠 맛집",
        icon: "🍱"
    },
    {
        name: "고미담",
        category: "고기",
        bestMenu: "숙성 뼈삼겹",
        tags: ["dinner"],
        description: "풍미 깊은 숙성육 전문점",
        icon: "🥩"
    },
    {
        name: "해바라기식당",
        category: "일식",
        bestMenu: "사케동, 장어덮밥",
        tags: ["lunch", "dinner"],
        description: "정갈한 일본 가정식 덮밥",
        icon: "🍛"
    },
    {
        name: "봄내닭갈비",
        category: "한식",
        bestMenu: "닭갈비, 우동사리",
        tags: ["lunch", "dinner"],
        description: "춘천 정통 스타일 닭갈비",
        icon: "🍗"
    },
    {
        name: "샤브몰",
        category: "뷔페",
        bestMenu: "소고기 샤브샤브",
        tags: ["lunch", "dinner"],
        description: "가성비 좋은 샤브샤브 무한리필",
        icon: "🍲"
    },
    {
        name: "호이시",
        category: "일식",
        bestMenu: "카이센 가정식, 덴뿌라",
        tags: ["lunch", "dinner"],
        description: "정갈한 일본 가정식 백반",
        icon: "🍱"
    },
    {
        name: "엘린스 브런치",
        category: "양식/브런치",
        bestMenu: "에그 베네딕트, 파니니",
        tags: ["lunch", "cafe"],
        description: "아늑한 분위기의 브런치 카페",
        icon: "🥪"
    },
    {
        name: "하시라",
        category: "이자카야",
        bestMenu: "꼬치구이, 나베",
        tags: ["dinner"],
        description: "퇴근 후 한잔하기 좋은 이자카야",
        icon: "🍢"
    },
    {
        name: "마요네즈",
        category: "이자카야",
        bestMenu: "마요 꼬치세트, 명란구이",
        tags: ["dinner"],
        description: "캐주얼하고 힙한 꼬치구이집",
        icon: "🍺"
    },
    {
        name: "덕수수산",
        category: "이자카야/횟집",
        bestMenu: "모듬회, 매운탕",
        tags: ["dinner"],
        description: "신선한 회와 술 한잔",
        icon: "🐟"
    },
    {
        name: "소노마 커프로스터스",
        category: "카페",
        bestMenu: "카페라떼, 드립커피",
        tags: ["cafe"],
        description: "진한 라떼가 맛있는 로스터리",
        icon: "☕"
    },
    {
        name: "한스베이커리",
        category: "베이커리",
        bestMenu: "프리미엄 케이크, 소금빵",
        tags: ["cafe"],
        description: "선물하기 좋은 고급 베이커리",
        icon: "🎂"
    },
    {
        name: "에피베이글",
        category: "베이커리",
        bestMenu: "쪽파 크림치즈 베이글",
        tags: ["cafe", "lunch"],
        description: "다양한 크림치즈와 쫀득한 베이글",
        icon: "🥯"
    },
    {
        name: "왓더버거",
        category: "햄버거",
        bestMenu: "직화 통새우 버거",
        tags: ["lunch", "dinner"],
        description: "줄서서 먹는 수제버거 맛집",
        icon: "🍔"
    },
    {
        name: "노모어피자",
        category: "피자",
        bestMenu: "옥수수 새우 피자",
        tags: ["lunch", "dinner"],
        description: "토핑 가득 쫄깃한 소금우유 도우",
        icon: "🍕"
    },
    {
        name: "프랭크버거",
        category: "햄버거",
        bestMenu: "치즈버거세트",
        tags: ["lunch", "dinner"],
        description: "육즙 가득 정통 미국식 수제버거",
        icon: "🍔"
    },
    {
        name: "신떡",
        category: "분식",
        bestMenu: "카레 떡볶이, 튀김",
        tags: ["lunch", "dinner"],
        description: "중독성 강한 매운 카레 떡볶이",
        icon: "🌶️"
    },
    {
        name: "33떡볶이",
        category: "분식",
        bestMenu: "로제 떡볶이, 꼬마김밥",
        tags: ["lunch", "dinner"],
        description: "강원도 대표 떡볶이 브랜드",
        icon: "🥘"
    },
    {
        name: "동대문엽기떡볶이",
        category: "분식",
        bestMenu: "엽기떡볶이, 주먹김밥",
        tags: ["lunch", "dinner"],
        description: "스트레스 풀리는 매운맛의 정석",
        icon: "🔥"
    },
    {
        name: "한끼샐러드",
        category: "샐러드",
        bestMenu: "목살 스테이크 샐러드",
        tags: ["lunch", "cafe"],
        description: "신선하고 푸짐한 다이어트 한끼",
        icon: "🥗"
    },
    {
        name: "샐러디",
        category: "샐러드",
        bestMenu: "칠리베이컨 웜볼",
        tags: ["lunch"],
        description: "가볍고 든든한 웜볼 맛집",
        icon: "🥣"
    },
    {
        name: "바른국밥",
        category: "한식/국밥",
        bestMenu: "수육국밥, 얼큰국밥",
        tags: ["lunch", "dinner"],
        description: "잡내 없이 깔끔하고 진한 사골육수",
        icon: "🍲"
    },
    {
        name: "정담콩나물국밥",
        category: "한식/국밥",
        bestMenu: "콩나물국밥, 돈까스",
        tags: ["lunch"],
        description: "해장에 최고 시원한 콩나물국밥",
        icon: "🍲"
    },
    {
        name: "흥업손칼국수",
        category: "한식/국수",
        bestMenu: "해물칼국수",
        tags: ["lunch"],
        description: "쫄깃한 손반죽 면발의 칼국수",
        icon: "🍜"
    },
    {
        name: "대성칼국수",
        category: "한식/국수",
        bestMenu: "장칼국수, 만두",
        tags: ["lunch"],
        description: "얼큰하고 구수한 강원도 장칼국수",
        icon: "🍜"
    },
    {
        name: "이씨손만두전골",
        category: "한식/전골",
        bestMenu: "만두전골, 찐만두",
        tags: ["lunch", "dinner"],
        description: "직접 빚은 만두가 들어간 전골",
        icon: "🥟"
    },
    {
        name: "기영이숯불두마리",
        category: "치킨",
        bestMenu: "투움바 숯불치킨",
        tags: ["dinner"],
        description: "숯불 향 가득한 구운 치킨",
        icon: "🍗"
    },
    {
        name: "1988옛날통닭",
        category: "치킨",
        bestMenu: "옛날통닭, 닭똥집",
        tags: ["dinner"],
        description: "바삭하고 추억 돋는 옛날 통닭",
        icon: "🍗"
    },
    {
        name: "BHC치킨",
        category: "치킨",
        bestMenu: "뿌링클, 맛초킹",
        tags: ["dinner"],
        description: "언제 먹어도 맛있는 치킨 & 맥주",
        icon: "🍺"
    },
    {
        name: "푸라닭",
        category: "치킨",
        bestMenu: "블랙알리오, 고추마요",
        tags: ["dinner"],
        description: "오븐 후라이드 프리미엄 치킨",
        icon: "🍗"
    },
    {
        name: "라홍방마라탕",
        category: "중식/마라탕",
        bestMenu: "마라탕, 꿔바로우",
        tags: ["lunch", "dinner"],
        description: "원하는 재료로 즐기는 얼큰한 마라탕",
        icon: "🍜"
    },
    {
        name: "복만가마라탕",
        category: "중식/마라탕",
        bestMenu: "소고기 마라탕",
        tags: ["lunch", "dinner"],
        description: "진한 사골 육수의 마라탕 맛집",
        icon: "🥘"
    },
    {
        name: "전여사곱창",
        category: "곱창/막창",
        bestMenu: "한우곱창모듬",
        tags: ["dinner"],
        description: "당일 도축한 신선한 횡성 한우 곱창",
        icon: "🔥"
    },
    {
        name: "더함집",
        category: "한식/전골",
        bestMenu: "낙곱새 (낙지+곱창+새우)",
        tags: ["dinner", "lunch"],
        description: "매콤한 양념의 밥도둑 낙곱새",
        icon: "🥘"
    },
    {
        name: "곱창이야기",
        category: "곱창/막창",
        bestMenu: "소곱창, 볶음밥",
        tags: ["dinner"],
        description: "마약 가루가 솔솔 뿌려진 소곱창",
        icon: "🔥"
    },
    {
        name: "귀한족발",
        category: "족발/보쌈",
        bestMenu: "반반족발 (불족+일반)",
        tags: ["dinner"],
        description: "깔끔하고 정갈하게 나오는 족발 한 상",
        icon: "🐷"
    },
    {
        name: "가장맛있는족발",
        category: "족발/보쌈",
        bestMenu: "족발, 쟁반국수",
        tags: ["dinner"],
        description: "즉석에서 바로 삶은 따뜻한 족발",
        icon: "🍖"
    },
    // New Additions
    {
        name: "앤트빌라",
        category: "양식/카페",
        bestMenu: "빠네 파스타, 콥샐러드",
        tags: ["lunch", "cafe"],
        description: "분위기 좋은 브런치 카페 & 레스토랑",
        icon: "🍝"
    },
    {
        name: "아시안라운지",
        category: "아시안",
        bestMenu: "팟타이, 뿌팟퐁커리",
        tags: ["lunch", "dinner"],
        description: "현지 느낌 물씬 나는 태국 요리 전문점",
        icon: "🍛"
    },
    {
        name: "닝샤샤",
        category: "아시안",
        bestMenu: "탄탄면, 마라곱창면",
        tags: ["lunch", "dinner"],
        description: "퓨전 아시안 누들 맛집",
        icon: "🍜"
    },
    {
        name: "서가앤쿡",
        category: "양식",
        bestMenu: "목살 한상",
        tags: ["lunch", "dinner"],
        description: "푸짐하게 즐기는 패밀리 레스토랑",
        icon: "🥩"
    },
    {
        name: "아웃백스테이크하우스",
        category: "양식",
        bestMenu: "투움바 파스타, 스테이크",
        tags: ["lunch", "dinner"],
        description: "기념일에 가기 좋은 스테이크 하우스",
        icon: "🥩"
    },
    {
        name: "역전할머니맥주",
        category: "술집",
        bestMenu: "살얼음맥주, 치즈라볶이",
        tags: ["dinner"],
        description: "시원한 살얼음 맥주가 일품",
        icon: "🍺"
    },
    {
        name: "크라운호프",
        category: "술집",
        bestMenu: "숙성 생맥주, 피자",
        tags: ["dinner"],
        description: "레트로 감성의 시원한 맥주집",
        icon: "🍻"
    },
    {
        name: "공차",
        category: "카페",
        bestMenu: "블랙밀크티+펄",
        tags: ["cafe"],
        description: "쫀득한 펄이 들어간 버블티",
        icon: "🧋"
    },
    {
        name: "스타벅스",
        category: "카페",
        bestMenu: "아이스 아메리카노",
        tags: ["cafe"],
        description: "믿고 가는 스벅",
        icon: "☕"
    },
    {
        name: "투썸플레이스",
        category: "카페",
        bestMenu: "스트로베리 초콜릿 생크림",
        tags: ["cafe"],
        description: "디저트가 맛있는 카페",
        icon: "🍰"
    },
    {
        name: "명륜진사갈비",
        category: "고기",
        bestMenu: "돼지갈비 무한리필",
        tags: ["dinner"],
        description: "달콤한 돼지갈비를 마음껏",
        icon: "🍖"
    },
    {
        name: "이차돌",
        category: "고기",
        bestMenu: "차돌박이, 돌초밥",
        tags: ["dinner"],
        description: "가성비 좋은 차돌박이 전문점",
        icon: "🥓"
    },
    {
        name: "미가일식",
        category: "일식",
        bestMenu: "점심특선 정식",
        tags: ["lunch"],
        description: "손님 대접하기 좋은 고급 일식집",
        icon: "🍱"
    },
    {
        name: "스시남",
        category: "일식",
        bestMenu: "특선초밥",
        tags: ["lunch", "dinner"],
        description: "가성비 좋은 회전초밥",
        icon: "🍣"
    },
    {
        name: "버거킹",
        category: "햄버거",
        bestMenu: "와퍼 세트",
        tags: ["lunch", "dinner"],
        description: "불맛 가득한 햄버거의 정석",
        icon: "🍔"
    },
    {
        name: "롯데리아",
        category: "햄버거",
        bestMenu: "한우불고기버거",
        tags: ["lunch", "dinner"],
        description: "친숙한 맛의 햄버거",
        icon: "🍔"
    },
    {
        name: "써브웨이",
        category: "샌드위치",
        bestMenu: "이탈리안 비엠티",
        tags: ["lunch"],
        description: "내 맘대로 골라 먹는 샌드위치",
        icon: "🥪"
    },
    {
        name: "본죽&비빔밥",
        category: "한식",
        bestMenu: "전복죽, 낙지비빔밥",
        tags: ["lunch"],
        description: "속 편한 죽과 든든한 비빔밥",
        icon: "🥣"
    },
    {
        name: "홍익돈까스",
        category: "양식/돈까스",
        bestMenu: "왕돈까스, 해물볶음우동",
        tags: ["lunch", "dinner"],
        description: "엄청난 크기의 왕돈까스",
        icon: "🍛"
    },
    {
        name: "고향소고기국밥",
        category: "한식/국밥",
        bestMenu: "소고기국밥",
        tags: ["lunch"],
        description: "얼큰하고 시원한 국물",
        icon: "🍲"
    }
];
