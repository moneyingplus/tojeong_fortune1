function showFortune() {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;

    if (!year || !month || !day) {
        alert("모든 값을 입력하세요!");
        return;
    }

    // 사용자의 음력 생년월일을 기반으로 144괘 중 하나 선택
    let key = (parseInt(year) + parseInt(month) + parseInt(day)) % 144;

    // 144괘 운세 데이터 (예시: 일부 내용 추가됨)
    let fortunes = [
        "천지개벽의 기운이 흐르니 큰 변화를 기대하라.",
        "고난 끝에 서광이 비추니 기다림의 미학을 실천하라.",
        "귀인이 도와주니 뜻하는 바를 이룰 것이다.",
        "재물이 흘러들지만 지출을 조심해야 한다.",
        "집안이 화목하니 평온한 한 해가 될 것이다.",
        "뜻하지 않은 여행수가 있으니 준비를 철저히 하라.",
        "건강이 우선이니 지나친 욕심을 버려야 한다.",
        "기회는 준비된 자에게 오니 대비하라.",
        "친구의 도움으로 기회가 찾아오니 인연을 소중히 하라.",
        "재물이 늘어나는 운이지만, 낭비를 경계해야 한다.",
        "작은 이익에 만족하면 큰 기회를 놓칠 수도 있다.",
        "인내하면 반드시 좋은 결과가 찾아온다.",
        "가정이 화목해야 모든 일이 잘 풀릴 것이다.",
        "어려움이 찾아오지만 이를 극복하면 큰 성취를 이룬다.",
        "뜻밖의 소식이 들려올 것이니 준비하라.",
        "겸손한 태도가 사람들에게 신뢰를 줄 것이다.",
        "적절한 시기를 기다리면 원하는 것을 얻을 수 있다.",
        "무리한 확장은 실패를 부르니 신중하라.",
        "적을 조심하라. 가까운 사람에게 배신당할 수도 있다.",
        "운이 트일 기회가 있으니 이를 잘 살려라.",
        "건강이 다소 나빠질 수 있으니 무리하지 말라.",
        "새로운 사업을 시작하기 좋은 시기이다.",
        "연애운이 좋으니 좋은 인연을 만날 가능성이 크다.",
        "신중한 투자가 필요한 해이다.",
        "좋은 기회가 찾아오지만, 조급하면 놓칠 수 있다.",
        "가족과의 관계를 돈독히 해야 한다.",
        "여행을 가면 좋은 인연을 만날 수 있다.",
        "명예를 얻을 기회가 있으니 신중하게 행동하라.",
        "조급한 마음을 버리고 천천히 가는 것이 중요하다.",
        "뜻하지 않은 돈이 들어올 가능성이 있다.",
        "가까운 친구와의 갈등을 피하라.",
        "계획한 일이 원활하게 진행될 것이다.",
        "올해는 건강이 가장 중요한 요소가 된다.",
        "새로운 일을 시작하면 좋은 결과를 얻을 것이다.",
        "재물운이 상승하는 시기이다.",
        "가족 간의 갈등을 조심해야 한다.",
        "좋은 사람을 만나게 될 것이다.",
        "투자에 신중을 기해야 한다.",
        "뜻하지 않은 재난을 피하기 위해 조심해야 한다.",
        "기회가 찾아오지만 이를 놓칠 수도 있다.",
        "자신감을 가지면 원하는 바를 이룰 수 있다.",
        "노력한 만큼 결과가 따라올 것이다.",
        "너무 큰 꿈보다는 현실적인 목표를 세우는 것이 좋다.",
        "올해는 큰 변화를 피하는 것이 좋다.",
        "주변 사람들과의 관계를 원만하게 유지하라.",
        "뜻하지 않은 기회가 찾아올 가능성이 크다.",
        "새로운 사업을 시작하기 좋은 시기이다.",
        "건강을 우선으로 생각해야 한다.",
        "새로운 인연을 만날 가능성이 크다.",
        "조금 더 신중한 태도를 가지는 것이 중요하다.",
        "뜻하지 않은 행운이 찾아올 것이다.",
        "올해는 조용히 지내는 것이 좋다.",
        "작은 성공을 발판으로 삼아야 한다.",
        "너무 큰 욕심을 부리면 실패할 수 있다.",
        "귀인을 만나게 될 운이다.",
        "대인관계를 돈독히 해야 한다.",
        "새로운 환경에서 성공할 가능성이 크다.",
        "기회를 놓치지 않도록 신중하게 행동하라.",
        "가족과 함께하는 시간이 필요하다.",
        "연애운이 좋은 시기이다.",
        "올해는 인내심이 중요한 해이다.",
        "돈과 명예를 모두 얻을 기회가 온다.",
        "무리한 행동은 실패를 부를 수 있다.",
        "자신을 믿고 전진하라.",
        "좋은 인연이 찾아올 가능성이 크다.",
        "겸손한 태도가 중요하다.",
        "고난 끝에 좋은 일이 생길 것이다.",
        "새로운 도전이 필요한 시기이다.",
        "재물운이 상승할 것이다.",
        "건강을 지키는 것이 중요하다.",
        "뜻하지 않은 여행의 기회가 온다.",
        "새로운 일에 도전하는 것이 좋다.",
        "무리한 행동은 피해야 한다.",
        "기회를 놓치지 않도록 신중하게 행동하라.",
        "귀인을 만나게 될 가능성이 크다.",
        "대인관계를 원만하게 유지해야 한다.",
        "큰 성취를 이룰 가능성이 있다.",
        "올해는 인내심이 중요한 시기이다.",
        "좋은 기회가 찾아올 것이다.",
        "뜻밖의 기회를 잡을 준비를 하라."
    ];

    // 결과 출력
    document.getElementById("result").innerHTML = "📜 당신의 2025년 운세: " + fortunes[key % fortunes.length];
}
