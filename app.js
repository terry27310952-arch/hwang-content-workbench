(() => {
  const STORE_KEY = "hwang-content-workbench-v1";

  const CATEGORY_KEYWORDS = {
    "사업·창업·자영업": [
      "동업",
      "공동창업",
      "공동대표",
      "창업자 갈등",
      "자영업 폐업",
      "프랜차이즈 분쟁",
      "카페 창업",
      "식당 창업",
      "미용실 동업",
      "헬스장 동업",
      "권리금",
      "사업자 명의",
      "정산금",
    ],
    "관계형 금전 문제": [
      "지인 투자",
      "가족 간 금전거래",
      "연인 금전거래",
      "차용증",
      "투자금 반환",
      "빌려준 돈",
      "대여금",
      "공동구매 정산",
      "수익 배분",
      "원금 보장",
      "투자였잖아",
      "빌린 돈 아니야",
    ],
    "계정·디지털 자산 분쟁": [
      "공동계정",
      "인스타 계정",
      "유튜브 채널",
      "스마트스토어",
      "쇼핑몰 계정",
      "계정 비밀번호",
      "관리자 권한",
      "수익 계좌",
      "공동 운영",
      "크리에이터 분쟁",
      "채널 소유권",
    ],
    "브랜드·상표·아이디어 분쟁": [
      "상표권",
      "브랜드 분쟁",
      "상표등록",
      "공동 브랜드",
      "아이디어 도용",
      "로고 저작권",
      "외주 제작물",
      "기획안 도용",
      "캐릭터 권리",
      "콘텐츠 포맷 표절",
    ],
    "퇴사·거래처·경업 분쟁": [
      "거래처 빼가기",
      "직원 빼가기",
      "퇴사 후 창업",
      "경업금지",
      "영업비밀",
      "고객명단",
      "내부자료 반출",
      "공동대표 퇴사",
      "회사 자료 유출",
    ],
    "판례·법률 이슈": [
      "동업계약 판례",
      "정산금 청구 판례",
      "조합 해산",
      "동업관계 입증",
      "손해배상",
      "횡령",
      "배임",
      "부정경쟁방지법",
      "영업비밀보호",
      "상표권 침해",
    ],
  };

  const SERIES = [
    "이거 소송감인가요?",
    "변호사가 보면 위험한 말",
    "사장님들의 이별",
    "변호사가 대신 읽어드립니다",
    "사업판 인간극장",
  ];

  const QUESTIONS = [
    "이번 달 상담에서 가장 많이 나온 상황은 무엇인가요?",
    "상담 중 가장 황당했던 말은 무엇인가요?",
    "의뢰인이 가장 억울해했던 장면은 무엇인가요?",
    "동업자나 상대방이 자주 하는 변명은 무엇인가요?",
    "카톡에서 자주 나오는 위험 문장은 무엇인가요?",
    "“이건 이미 늦었다” 싶은 신호는 무엇인가요?",
    "실제 상담에서 많이 나오는 인물 유형은 무엇인가요?",
    "돈은 누가 냈고, 명의는 누구였는지 헷갈리는 사례가 있었나요?",
    "법적으로는 불리한데 감정적으로는 이해되는 사례가 있었나요?",
    "시청자들이 댓글로 싸울 만한 쟁점은 무엇인가요?",
    "제목으로 만들면 사람들이 누를 만한 사건 문장은 무엇인가요?",
    "상담 전 반드시 준비하라고 말하는 자료는 무엇인가요?",
  ];

  const MONTHLY_FLOW = [
    {
      week: "Week 1",
      title: "수집·인터뷰",
      items: "RSS 30~50개 저장, 월간 원석 인터뷰, 후보 15개 선별",
    },
    {
      week: "Week 2",
      title: "워싱·1차 검수",
      items: "황성준 문법 워싱, 미드폼 5개·쇼츠 10개 후보, 변호사 1차 검수",
    },
    {
      week: "Week 3",
      title: "대본·구성",
      items: "미드폼 3편 대본, 쇼츠 9개 구성, 썸네일 A/B, 촬영 구성표",
    },
    {
      week: "Week 4",
      title: "발행·회고",
      items: "발행, 댓글 수집, 문의 전환 신호, 다음 달 소재 반영",
    },
  ];

  const BLOCKED_PHRASES = [
    "무조건 이깁니다",
    "반드시 돌려받을 수 있습니다",
    "승소 가능합니다",
    "최고의 변호사",
    "100% 해결",
    "이 사람은 사기꾼입니다",
    "범죄입니다",
    "고소하면 됩니다",
    "상대방이 불법입니다",
  ];

  const ALLOWED_PHRASES = [
    "사안에 따라 판단이 달라질 수 있습니다",
    "자료 검토가 필요합니다",
    "법적으로 다툴 여지가 있습니다",
    "구체적 사실관계 확인이 필요합니다",
    "이 영상은 일반적인 법률정보입니다",
    "계약서, 입금내역, 카톡 등 자료 확인이 중요합니다",
  ];

  const PRIVACY_ITEMS = [
    "이름 제거",
    "지역 제거",
    "업종 특정성 완화",
    "금액 범위화",
    "날짜 변경",
    "관계 구조 각색",
    "원문 카톡 그대로 사용 금지",
    "특정 사건 오인 표현 금지",
  ];

  const DOCUMENT_HINTS = {
    정산: ["동업계약서", "입금내역", "카톡", "매출자료", "정산표"],
    통장: ["계좌내역", "정산표", "사업자등록증", "카톡"],
    명의: ["사업자등록증", "출자내역", "운영자료", "카톡"],
    상표: ["상표출원 내역", "브랜드 사용 자료", "로고 제작 자료", "정산자료"],
    계정: ["계정 생성 내역", "관리자 권한 기록", "수익 계좌", "약관"],
    투자: ["차용증", "송금내역", "투자제안서", "카톡"],
    대여금: ["차용증", "송금내역", "상환 약속 메시지"],
    영업비밀: ["퇴사 자료", "접근 기록", "고객명단 관리 기록"],
  };

  const AUTO_DEFAULT_KEYWORDS = [
    "동업 정산",
    "동업자 통장",
    "사업자 명의 동업",
    "공동창업자 갈등",
    "상표권 분쟁 공동 브랜드",
    "공동계정 비밀번호",
    "지인 투자금 반환",
    "가족 간 금전거래",
    "거래처 빼가기",
    "정산금 청구 판례",
  ];

  const els = {};
  let state = loadState();
  let currentIdea = null;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    bindElements();
    initAutoCollectorDefaults();
    bindEvents();
    renderAll();
  }

  function bindElements() {
    [
      "viewEyebrow",
      "viewTitle",
      "targetSources",
      "targetCandidates",
      "targetPriority",
      "metricSources",
      "metricCandidates",
      "metricPriority",
      "metricReview",
      "nextActionTitle",
      "nextActionCopy",
      "pipelineStrip",
      "currentWeekBadge",
      "monthlyTimeline",
      "seriesChart",
      "priorityTable",
      "sourceForm",
      "feedForm",
      "feedNameInput",
      "feedUrlInput",
      "feedList",
      "feedPasteInput",
      "parseFeedBtn",
      "autoCollectBtn",
      "autoSourceNews",
      "autoSourceBlog",
      "autoSourceCommunity",
      "autoSourceLegal",
      "autoLimitInput",
      "autoKeywordInput",
      "autoCollectStatus",
      "sourceSearch",
      "sourceStatusFilter",
      "sourceList",
      "candidateSummary",
      "candidateSearch",
      "candidateStageFilter",
      "candidateList",
      "fillSampleBtn",
      "questionList",
      "lawyerForm",
      "lawyerList",
      "sourceSelect",
      "lawyerSelect",
      "generateIdeaBtn",
      "ideaPreview",
      "copyIdeaBtn",
      "saveIdeaBtn",
      "ideaList",
      "draftCount",
      "reviewCount",
      "approvedCount",
      "blockedPhrases",
      "allowedPhrases",
      "privacyChecklist",
      "keywordCloud",
      "exportCsvBtn",
      "exportJsonBtn",
      "importJsonInput",
      "goCollectBtn",
      "goCandidatesBtn",
      "goOutputBtn",
      "toast",
    ].forEach((id) => {
      els[id] = document.getElementById(id);
    });
  }

  function initAutoCollectorDefaults() {
    if (els.autoKeywordInput && !els.autoKeywordInput.value.trim()) {
      els.autoKeywordInput.value = AUTO_DEFAULT_KEYWORDS.join("\n");
    }
  }

  function bindEvents() {
    document.querySelectorAll(".nav-item").forEach((button) => {
      button.addEventListener("click", () => switchView(button.dataset.view));
    });

    els.sourceForm.addEventListener("submit", onSourceSubmit);
    els.fillSampleBtn.addEventListener("click", fillSourceSample);
    els.feedForm.addEventListener("submit", onFeedSubmit);
    els.parseFeedBtn.addEventListener("click", onParseFeed);
    els.autoCollectBtn.addEventListener("click", onAutoCollect);
    els.sourceSearch.addEventListener("input", renderSources);
    els.sourceStatusFilter.addEventListener("change", renderSources);
    els.sourceList.addEventListener("click", onSourceAction);
    els.candidateSearch.addEventListener("input", renderCandidates);
    els.candidateStageFilter.addEventListener("change", renderCandidates);
    els.candidateList.addEventListener("click", onSourceAction);

    els.lawyerForm.addEventListener("submit", onLawyerSubmit);
    els.lawyerList.addEventListener("click", onLawyerAction);

    els.generateIdeaBtn.addEventListener("click", onGenerateIdea);
    els.copyIdeaBtn.addEventListener("click", onCopyIdea);
    els.saveIdeaBtn.addEventListener("click", onSaveIdea);
    els.ideaList.addEventListener("click", onIdeaAction);

    els.exportCsvBtn.addEventListener("click", exportCandidatesCsv);
    els.exportJsonBtn.addEventListener("click", exportJson);
    els.importJsonInput.addEventListener("change", importJson);
    els.goCollectBtn.addEventListener("click", () => switchView("sources"));
    els.goCandidatesBtn.addEventListener("click", () => switchView("candidates"));
    els.goOutputBtn.addEventListener("click", () => switchView("output"));

    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-jump-view]");
      if (button) switchView(button.dataset.jumpView);
    });
  }

  function loadState() {
    const seed = buildSeedState();
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return seed;
      const parsed = JSON.parse(raw);
      return normalizeState(parsed);
    } catch {
      return seed;
    }
  }

  function buildSeedState() {
    const today = toDateInput(new Date());
    const sources = [
      {
        id: "src_demo_brand",
        source_name: "인수인계서 예시",
        source_type: "lawyer_input",
        url: "",
        title: "상표권 공동 소유 분쟁",
        published_at: today,
        collected_at: nowStamp(),
        raw_summary:
          "같이 만든 브랜드인데 상표등록은 한 명만 하는 경우가 많다. 이름도 같이 지었고 손님도 같이 모았는데 상표권자는 한 명이었다.",
        full_text: "",
        risk_level: "medium",
      },
      {
        id: "src_demo_accounting",
        source_name: "인수인계서 예시",
        source_type: "lawyer_input",
        url: "",
        title: "동업자가 통장을 안 보여줍니다",
        published_at: today,
        collected_at: nowStamp(),
        raw_summary:
          "친구랑 같이 카페를 차렸는데 어느 날부터 친구가 매출과 정산표를 보여주지 않는다. 너 나 못 믿냐는 말이 반복된다.",
        full_text: "",
        risk_level: "low",
      },
      {
        id: "src_demo_money",
        source_name: "인수인계서 예시",
        source_type: "lawyer_input",
        url: "",
        title: "돈 빌려줬더니 투자였다고 합니다",
        published_at: today,
        collected_at: nowStamp(),
        raw_summary:
          "가까운 사이에서 돈을 보냈는데 상대방은 투자금이라고 주장하고, 보낸 사람은 빌려준 돈이라고 기억한다.",
        full_text: "",
        risk_level: "low",
      },
    ].map(enrichSource);

    return {
      feeds: [],
      sources,
      lawyerInputs: [
        {
          input_id: "lawyer_demo_001",
          date: today,
          raw_note:
            "정산 자료를 보여달라고 하면 상대방이 감정 문제로 돌리는 상담이 반복된다. 카톡에서 '너 나 못 믿냐?'라는 문장이 나오면 계좌와 정산표부터 봐야 한다.",
          situation: "동업자가 정산자료를 공개하지 않는 상황",
          dangerous_sentence: "너 나 못 믿냐?",
          client_emotion: "배신감",
          legal_issue: "정산금 청구, 회계자료 열람, 동업관계 입증",
          required_documents: ["동업계약서", "입금내역", "카톡", "매출자료", "정산표"],
          content_angle: "변호사가 보면 위험한 말",
          needs_anonymization: true,
        },
      ],
      ideas: [],
    };
  }

  function normalizeState(input) {
    return {
      feeds: Array.isArray(input.feeds) ? input.feeds : [],
      sources: Array.isArray(input.sources) ? input.sources.map(enrichSource) : [],
      lawyerInputs: Array.isArray(input.lawyerInputs) ? input.lawyerInputs : [],
      ideas: Array.isArray(input.ideas) ? input.ideas : [],
    };
  }

  function saveState() {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  }

  function renderAll() {
    state.sources = state.sources.map(enrichSource);
    saveState();
    renderShell();
    renderDashboard();
    renderSources();
    renderCandidates();
    renderLawyer();
    renderOutput();
    renderGuardrails();
    refreshIcons();
  }

  function renderShell() {
    const candidates = getCandidates();
    const priority = getPriorityCandidates();
    els.targetSources.textContent = String(state.sources.length);
    els.targetCandidates.textContent = String(candidates.length);
    els.targetPriority.textContent = String(priority.length);
  }

  function getNextAction(candidates, priority, pendingReview) {
    if (state.sources.length < 10) {
      return {
        title: "자동 수집부터 시작하세요",
        copy: "뉴스, 블로그·웹, 커뮤니티, 판례 검색 결과를 먼저 모으면 후보 선별과 제작 패키지가 자동으로 이어집니다.",
      };
    }
    if (priority.some((source) => !safeExternalUrl(source.url))) {
      return {
        title: "우선 후보의 원문 링크를 보강하세요",
        copy: "제작 후보는 원문 추적이 가능해야 합니다. 링크 없는 우선 후보를 먼저 보강한 뒤 브리프로 넘기세요.",
      };
    }
    if (candidates.length && priority.length < 3) {
      return {
        title: "후보 선별에서 제작할 소재를 고르세요",
        copy: "점수 9점 이상 후보를 훑고, 12점 이상 또는 검수 필요 소재를 우선 제작 대상으로 올리세요.",
      };
    }
    if (priority.length && !state.ideas.length) {
      return {
        title: "우선 후보를 제작 패키지로 넘기세요",
        copy: "선별된 소재를 제목, 쇼츠 훅, 썸네일 문구, 법률 쟁점이 포함된 제작 패키지로 변환할 차례입니다.",
      };
    }
    if (pendingReview) {
      return {
        title: "검수 대기 항목을 확인하세요",
        copy: "법률 광고 리스크, 단정 표현, 실제 사건 식별 가능성을 확인한 뒤 발행 가능한 후보만 남기세요.",
      };
    }
    return {
      title: "다음 수집 키워드를 갱신하세요",
      copy: "이번 달 후보 풀이 정리되었습니다. 상담에서 반복되는 표현과 최근 이슈를 새 키워드로 추가하세요.",
    };
  }

  function renderDashboard() {
    const candidates = getCandidates();
    const priority = getPriorityCandidates();
    const pendingReview =
      state.sources.filter((item) => item.needs_lawyer_review).length +
      state.ideas.filter((idea) => idea.status === "review").length;
    const linkedSources = state.sources.filter((source) => safeExternalUrl(source.url)).length;

    els.metricSources.textContent = String(state.sources.length);
    els.metricCandidates.textContent = String(candidates.length);
    els.metricPriority.textContent = String(priority.length);
    els.metricReview.textContent = String(pendingReview);

    const nextAction = getNextAction(candidates, priority, pendingReview);
    els.nextActionTitle.textContent = nextAction.title;
    els.nextActionCopy.textContent = nextAction.copy;
    els.pipelineStrip.innerHTML = [
      {
        view: "sources",
        icon: "radar",
        label: "1. 자동 수집",
        value: state.sources.length,
        meta: `${linkedSources}/${state.sources.length || 0} 링크 확인`,
      },
      {
        view: "candidates",
        icon: "list-checks",
        label: "2. 후보 선별",
        value: candidates.length,
        meta: "점수 9점 이상",
      },
      {
        view: "output",
        icon: "sparkles",
        label: "3. 제작 패키지",
        value: state.ideas.length,
        meta: "제목·훅·썸네일",
      },
      {
        view: "guardrails",
        icon: "shield-check",
        label: "4. 리스크 검수",
        value: pendingReview,
        meta: "표현·비식별·법률광고",
      },
    ]
      .map(
        (item) => `
          <article class="pipeline-card">
            <div>
              <i data-lucide="${item.icon}"></i>
              <span>${escapeHtml(item.label)}</span>
            </div>
            <strong>${item.value}</strong>
            <p>${escapeHtml(item.meta)}</p>
            <button class="mini-button" data-jump-view="${item.view}" type="button">열기</button>
          </article>
        `,
      )
      .join("");

    const activeWeek = getActiveWeek();
    els.currentWeekBadge.textContent = activeWeek.week;
    els.monthlyTimeline.innerHTML = MONTHLY_FLOW.map(
      (item) => `
        <div class="timeline-item ${item.week === activeWeek.week ? "active" : ""}">
          <strong>${escapeHtml(item.week)}</strong>
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.items)}</span>
          </div>
        </div>
      `,
    ).join("");

    const counts = {};
    SERIES.forEach((series) => {
      counts[series] = 0;
    });
    state.sources.forEach((source) => {
      counts[pickSeries(source)] += 1;
    });
    const max = Math.max(1, ...Object.values(counts));
    els.seriesChart.innerHTML = SERIES.map((series) => {
      const count = counts[series] || 0;
      const width = Math.max(4, Math.round((count / max) * 100));
      return `
        <div class="series-row">
          <span>${escapeHtml(series)}</span>
          <div class="series-bar"><div class="series-fill" style="width:${width}%"></div></div>
          <strong>${count}</strong>
        </div>
      `;
    }).join("");

    const rows = priority.slice(0, 10).map((source, index) => {
      const pkg = createContentPackage(source, findBestLawyerInput(source), false);
      return `
        <tr>
          <td>${index + 1}</td>
          <td>${escapeHtml(pkg.washed_title)}</td>
          <td>${escapeHtml(pkg.scene_summary)}</td>
          <td>${escapeHtml(pkg.series)}</td>
          <td>${escapeHtml(pkg.legal_issue.join(", "))}</td>
          <td><span class="score-badge priority">${source.score.total}</span></td>
          <td>${source.needs_lawyer_review ? "Y" : "N"}</td>
        </tr>
      `;
    });
    els.priorityTable.innerHTML =
      rows.join("") || `<tr><td colspan="7"><div class="empty">우선 제작 후보가 없습니다.</div></td></tr>`;
  }

  function renderSources() {
    renderFeeds();
    const query = normalizeText(els.sourceSearch.value);
    const filter = els.sourceStatusFilter.value;
    const items = state.sources
      .filter((source) => {
        const text = normalizeText(
          [
            source.title,
            source.raw_summary,
            source.category?.join(" "),
            source.keywords?.join(" "),
            source.legal_issue,
          ].join(" "),
        );
        if (query && !text.includes(query)) return false;
        return sourceMatchesStageFilter(source, filter);
      })
      .sort((a, b) => b.score.total - a.score.total);

    els.sourceList.innerHTML = items.map(sourceCardHtml).join("") || `<div class="empty">수집 원문이 없습니다.</div>`;
    refreshIcons();
  }

  function renderCandidates() {
    const candidates = getCandidates();
    const priority = getPriorityCandidates();
    const pendingReview = state.sources.filter((item) => item.needs_lawyer_review);
    const linkedSources = state.sources.filter((item) => safeExternalUrl(item.url));
    const query = normalizeText(els.candidateSearch.value);
    const filter = els.candidateStageFilter.value;
    const items = state.sources
      .filter((source) => {
        const text = normalizeText(
          [
            source.title,
            source.raw_summary,
            source.category?.join(" "),
            source.keywords?.join(" "),
            source.legal_issue,
          ].join(" "),
        );
        if (query && !text.includes(query)) return false;
        return sourceMatchesStageFilter(source, filter);
      })
      .sort((a, b) => b.score.total - a.score.total);

    els.candidateSummary.innerHTML = [
      { label: "전체 수집", value: state.sources.length, note: "원문 소재" },
      { label: "링크 확인", value: linkedSources.length, note: "출처 추적 가능" },
      { label: "1차 후보", value: candidates.length, note: "9점 이상" },
      { label: "우선 제작", value: priority.length, note: "12점 이상" },
      { label: "검수 필요", value: pendingReview.length, note: "표현 확인" },
    ]
      .map(
        (item) => `
          <div>
            <span>${escapeHtml(item.label)}</span>
            <strong>${item.value}</strong>
            <small>${escapeHtml(item.note)}</small>
          </div>
        `,
      )
      .join("");

    els.candidateList.innerHTML =
      items.map(sourceCardHtml).join("") || `<div class="empty">조건에 맞는 후보가 없습니다.</div>`;
    refreshIcons();
  }

  function sourceMatchesStageFilter(source, filter) {
    if (filter === "linked") return Boolean(safeExternalUrl(source.url));
    if (filter === "missing_link") return !safeExternalUrl(source.url);
    if (filter === "candidate") return source.score.total >= 9;
    if (filter === "priority") return source.score.total >= 12;
    if (filter === "review") return source.needs_lawyer_review;
    return true;
  }

  function sourceCardHtml(source) {
    const scoreClass = source.score.total >= 12 ? "priority" : source.score.total >= 9 ? "candidate" : "low";
    const categories = source.category?.length ? source.category : ["미분류"];
    const recommendation = sourceRecommendation(source);
    return `
      <article class="source-item">
        <div class="source-top">
          <div class="source-title">
            <strong>${escapeHtml(source.title)}</strong>
            <span>${escapeHtml(source.source_name || source.source_type)} · ${escapeHtml(source.published_at || "-")}</span>
          </div>
          <span class="score-badge ${scoreClass}">${source.score.total}점</span>
        </div>
        <div class="pill-row">
          ${categories.map((category) => `<span class="pill teal">${escapeHtml(category)}</span>`).join("")}
          ${(source.keywords || []).slice(0, 6).map((keyword) => `<span class="pill">${escapeHtml(keyword)}</span>`).join("")}
          ${source.needs_lawyer_review ? `<span class="pill red">검수 필요</span>` : ""}
        </div>
        <div class="source-summary">${escapeHtml(source.raw_summary || source.full_text || "")}</div>
        <div class="source-meta-row">
          ${sourceLinkHtml(source)}
          ${source.search_query ? `<span class="source-query">검색어: ${escapeHtml(source.search_query)}</span>` : ""}
        </div>
        <div class="source-score-row">
          <span class="source-recommendation">${escapeHtml(recommendation)}</span>
          ${scoreBreakdownHtml(source)}
        </div>
        <div class="source-actions">
          <button class="mini-button" type="button" data-action="generate" data-id="${escapeHtml(source.id)}">
            <i data-lucide="sparkles"></i><span>콘텐츠화</span>
          </button>
          <button class="mini-button" type="button" data-action="link" data-id="${escapeHtml(source.id)}">
            <i data-lucide="link"></i><span>${safeExternalUrl(source.url) ? "링크 수정" : "링크 추가"}</span>
          </button>
          <button class="mini-button" type="button" data-action="review" data-id="${escapeHtml(source.id)}">
            <i data-lucide="shield-check"></i><span>${source.needs_lawyer_review ? "검수 해제" : "검수 요청"}</span>
          </button>
          <button class="mini-button danger" type="button" data-action="delete" data-id="${escapeHtml(source.id)}">
            <i data-lucide="trash-2"></i><span>삭제</span>
          </button>
        </div>
      </article>
    `;
  }

  function sourceRecommendation(source) {
    if (source.score.total >= 12 && source.needs_lawyer_review) return "우선 제작 · 검수 먼저";
    if (source.score.total >= 12) return "우선 제작";
    if (source.score.total >= 9) return "후보 유지";
    if (!safeExternalUrl(source.url)) return "출처 링크 보강";
    return "관찰";
  }

  function scoreBreakdownHtml(source) {
    const score = source.score || {};
    const parts = [
      ["장면", score.scene],
      ["관계", score.relation],
      ["쟁점", score.issue],
      ["제목성", score.title],
      ["댓글성", score.comments],
      ["변호사성", score.lawyerLink],
    ];
    return `
      <div class="score-breakdown" aria-label="점수 세부 근거">
        ${parts.map(([label, value]) => `<span>${escapeHtml(label)} ${Number(value || 0)}</span>`).join("")}
        ${score.riskPenalty ? `<span class="negative">리스크 ${score.riskPenalty}</span>` : ""}
      </div>
    `;
  }

  function sourceLinkHtml(source) {
    const safeUrl = safeExternalUrl(source.url);
    if (!safeUrl) {
      return `<span class="source-link muted"><i data-lucide="unlink"></i><span>원문 링크 없음</span></span>`;
    }
    return `
      <a class="source-link" href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">
        <i data-lucide="external-link"></i>
        <span>원문 열기</span>
      </a>
    `;
  }

  function renderFeeds() {
    els.feedList.innerHTML =
      state.feeds
        .map(
          (feed) => `
            <div class="feed-item">
              <div>
                <strong>${escapeHtml(feed.name || "RSS")}</strong>
                <span>${escapeHtml(feed.url)}</span>
              </div>
              <button class="icon-only" type="button" title="삭제" aria-label="RSS URL 삭제" data-feed-delete="${escapeHtml(feed.id)}">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          `,
        )
        .join("") || `<div class="empty">등록된 RSS URL이 없습니다.</div>`;

    els.feedList.querySelectorAll("[data-feed-delete]").forEach((button) => {
      button.addEventListener("click", () => {
        state.feeds = state.feeds.filter((feed) => feed.id !== button.dataset.feedDelete);
        renderAll();
        toast("RSS URL을 삭제했습니다.");
      });
    });
  }

  function renderLawyer() {
    els.questionList.innerHTML = QUESTIONS.map((question) => `<li>${escapeHtml(question)}</li>`).join("");

    els.lawyerList.innerHTML =
      state.lawyerInputs
        .slice()
        .sort((a, b) => String(b.date).localeCompare(String(a.date)))
        .map(
          (item) => `
            <article class="lawyer-item">
              <div class="lawyer-top">
                <div class="lawyer-title">
                  <strong>${escapeHtml(item.situation || item.dangerous_sentence || "원석")}</strong>
                  <span>${escapeHtml(item.date)} · ${escapeHtml(item.content_angle || "콘텐츠 각도")}</span>
                </div>
                ${item.needs_anonymization ? `<span class="status-badge review">비식별</span>` : `<span class="status-badge approved">완료</span>`}
              </div>
              <div class="pill-row">
                <span class="pill teal">${escapeHtml(item.client_emotion || "감정")}</span>
                ${splitList(item.legal_issue).map((issue) => `<span class="pill">${escapeHtml(issue)}</span>`).join("")}
              </div>
              <div class="lawyer-summary">${escapeHtml(item.raw_note || "")}</div>
              <div class="lawyer-actions">
                <button class="mini-button" type="button" data-lawyer-generate="${escapeHtml(item.input_id)}">
                  <i data-lucide="sparkles"></i><span>콘텐츠화</span>
                </button>
                <button class="mini-button danger" type="button" data-lawyer-delete="${escapeHtml(item.input_id)}">
                  <i data-lucide="trash-2"></i><span>삭제</span>
                </button>
              </div>
            </article>
          `,
        )
        .join("") || `<div class="empty">저장된 원석이 없습니다.</div>`;
    refreshIcons();
  }

  function renderOutput() {
    const sortedSources = state.sources.slice().sort((a, b) => b.score.total - a.score.total);
    els.sourceSelect.innerHTML =
      sortedSources
        .map((source) => {
          const linkLabel = safeExternalUrl(source.url) ? "링크" : "링크없음";
          return `<option value="${escapeHtml(source.id)}">${escapeHtml(source.title)} · ${source.score.total}점 · ${escapeHtml(source.source_name || source.source_type)} · ${linkLabel}</option>`;
        })
        .join("") || `<option value="">원문 없음</option>`;
    els.lawyerSelect.innerHTML =
      `<option value="">자동 매칭</option>` +
      state.lawyerInputs
        .map((item) => `<option value="${escapeHtml(item.input_id)}">${escapeHtml(item.date)} · ${escapeHtml(item.situation || item.dangerous_sentence || "원석")}</option>`)
        .join("");

    if (!currentIdea && sortedSources.length) {
      const defaultSource = sortedSources.find((source) => safeExternalUrl(source.url)) || sortedSources[0];
      currentIdea = createContentPackage(defaultSource, findBestLawyerInput(defaultSource), false);
    }
    if (currentIdea?.source_id) els.sourceSelect.value = currentIdea.source_id;
    if (currentIdea?.lawyer_input_id) els.lawyerSelect.value = currentIdea.lawyer_input_id;
    const activeSavedIdea = findMatchingSavedIdeaIndex(currentIdea) >= 0;
    const saveLabel = els.saveIdeaBtn.querySelector("span");
    if (saveLabel) saveLabel.textContent = activeSavedIdea ? "갱신" : "저장";
    els.saveIdeaBtn.title = activeSavedIdea ? "열어둔 브리프 갱신" : "새 브리프 저장";
    els.ideaPreview.innerHTML = currentIdea
      ? renderIdeaBrief(currentIdea)
      : `<div class="empty">생성할 소재를 선택하세요.</div>`;

    const counts = {
      draft: state.ideas.filter((idea) => idea.status === "draft").length,
      review: state.ideas.filter((idea) => idea.status === "review").length,
      approved: state.ideas.filter((idea) => idea.status === "approved").length,
    };
    els.draftCount.textContent = String(counts.draft);
    els.reviewCount.textContent = String(counts.review);
    els.approvedCount.textContent = String(counts.approved);

    els.ideaList.innerHTML =
      state.ideas
        .slice()
        .sort((a, b) => a.priority - b.priority || String(b.updated_at || b.saved_at || b.content_id).localeCompare(String(a.updated_at || a.saved_at || a.content_id)))
        .map((idea) => {
          const sourceUrl = safeExternalUrl(idea.source_url);
          const savedMeta = idea.updated_at || idea.saved_at || "";
          return `
            <article class="idea-item">
              <div class="idea-top">
                <div class="idea-title">
                  <strong>${escapeHtml(idea.washed_title)}</strong>
                  <span>${escapeHtml(idea.series)} · 우선순위 ${escapeHtml(String(idea.priority))}${savedMeta ? ` · ${escapeHtml(savedMeta)}` : ""}</span>
                </div>
                <span class="status-badge ${idea.status === "approved" ? "approved" : idea.status === "review" ? "review" : ""}">
                  ${escapeHtml(statusLabel(idea.status))}
                </span>
              </div>
              <div class="pill-row">
                ${(idea.legal_issue || []).map((issue) => `<span class="pill">${escapeHtml(issue)}</span>`).join("")}
              </div>
              <div class="idea-summary">${escapeHtml(idea.opening_hook)}</div>
              <div class="source-meta-row">
                ${
                  sourceUrl
                    ? `<a class="source-link" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link"></i><span>원문</span></a>`
                    : `<span class="source-link muted"><i data-lucide="unlink"></i><span>원문 링크 없음</span></span>`
                }
                <span class="pill teal">${escapeHtml(idea.source_name || idea.source_type || "출처 미상")}</span>
              </div>
              <div class="idea-actions">
                <button class="mini-button" type="button" data-idea-load="${escapeHtml(idea.content_id)}">
                  <i data-lucide="file-search"></i><span>브리프 열기</span>
                </button>
                <button class="mini-button" type="button" data-idea-copy="${escapeHtml(idea.content_id)}">
                  <i data-lucide="copy"></i><span>복사</span>
                </button>
                <button class="mini-button" type="button" data-idea-status="review" data-id="${escapeHtml(idea.content_id)}">
                  <i data-lucide="send"></i><span>검수 요청</span>
                </button>
                <button class="mini-button" type="button" data-idea-status="approved" data-id="${escapeHtml(idea.content_id)}">
                  <i data-lucide="check"></i><span>승인</span>
                </button>
                <button class="mini-button danger" type="button" data-idea-delete="${escapeHtml(idea.content_id)}">
                  <i data-lucide="trash-2"></i><span>삭제</span>
                </button>
              </div>
            </article>
          `;
        })
        .join("") || `<div class="empty">저장된 콘텐츠 후보가 없습니다.</div>`;
    refreshIcons();
  }

  function renderIdeaBrief(idea) {
    const titleCandidates = idea.title_candidates || [idea.washed_title].filter(Boolean);
    const shortsCandidates = idea.shorts_title_candidates || [idea.shorts_title].filter(Boolean);
    const legalCheckpoints = idea.legal_checkpoints || idea.legal_issue || [];
    const visualDirection = idea.visual_direction || [];
    const editNotes = idea.edit_notes || [];
    const coldOpenOptions = idea.cold_open_options || [];
    const storyBeats = idea.story_beats || idea.talk_track || [];
    const proofBoard = idea.proof_board || [];
    const readiness = idea.publish_readiness || [];
    const approvalQuestions = idea.approval_questions || [];
    const sourceUrl = safeExternalUrl(idea.source_url);

    return `
      <article class="brief-card">
        <div class="brief-hero">
          <div>
            <span class="brief-kicker">${escapeHtml(idea.series || "콘텐츠 패키지")}</span>
            <h3>${escapeHtml(idea.washed_title || "제목 후보 없음")}</h3>
            <p>${escapeHtml(idea.one_line_positioning || idea.scene_summary || "")}</p>
          </div>
          <span class="score-badge priority">우선순위 ${escapeHtml(String(idea.priority || 3))}</span>
        </div>

        <div class="brief-source-bar">
          <div>
            <span>원문</span>
            <strong>${escapeHtml(idea.source_name || idea.source_type || "출처 미상")}</strong>
            ${idea.source_published_at ? `<small>${escapeHtml(idea.source_published_at)}</small>` : ""}
          </div>
          ${
            sourceUrl
              ? `<a class="source-link" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link"></i><span>원문 열기</span></a>`
              : `<span class="source-link muted"><i data-lucide="unlink"></i><span>원문 링크 없음</span></span>`
          }
        </div>

        <div class="brief-grid">
          <section class="brief-section accent">
            <span>핵심 논지</span>
            <p>${escapeHtml(idea.creative_thesis || idea.one_line_positioning || "")}</p>
          </section>
          <section class="brief-section">
            <span>시청자 약속</span>
            <p>${escapeHtml(idea.viewer_promise || "")}</p>
          </section>
        </div>

        <div class="brief-section accent">
          <span>오프닝</span>
          <p>${escapeHtml(idea.opening_hook || "")}</p>
        </div>

        <div class="brief-grid">
          <section class="brief-section">
            <span>제목 후보</span>
            <ol>${titleCandidates.map((title) => `<li>${escapeHtml(title)}</li>`).join("")}</ol>
          </section>
          <section class="brief-section">
            <span>쇼츠 후보</span>
            <ol>${shortsCandidates.map((title) => `<li>${escapeHtml(title)}</li>`).join("")}</ol>
          </section>
        </div>

        <div class="brief-section">
          <span>콜드오픈 선택지</span>
          <ol>${coldOpenOptions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
        </div>

        <div class="brief-grid">
          <section class="brief-section">
            <span>6컷 전개</span>
            <ol>${storyBeats.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
          </section>
          <section class="brief-section">
            <span>썸네일</span>
            <div class="brief-chip-row">
              ${(idea.thumbnail_copy || []).map((copy) => `<em>${escapeHtml(copy)}</em>`).join("")}
            </div>
          </section>
        </div>

        <div class="brief-grid">
          <section class="brief-section">
            <span>법률 체크</span>
            <ul>${legalCheckpoints.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
          <section class="brief-section">
            <span>증거 보드</span>
            <ul>${proofBoard.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
        </div>

        <div class="brief-section">
          <span>화면 메모</span>
          <ul>${visualDirection.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>

        <div class="brief-grid">
          <section class="brief-section">
            <span>발행 준비도</span>
            <ul>${readiness.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
          <section class="brief-section">
            <span>변호사 확인 질문</span>
            <ul>${approvalQuestions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
        </div>

        <div class="brief-section">
          <span>편집 주의</span>
          <ul>${editNotes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
      </article>
    `;
  }

  function formatIdeaBrief(idea) {
    return [
      `[${idea.series || "콘텐츠 패키지"}]`,
      `메인 제목: ${idea.washed_title || ""}`,
      `원문 링크: ${idea.source_url || ""}`,
      `한 줄 포지션: ${idea.one_line_positioning || idea.scene_summary || ""}`,
      "",
      `핵심 논지: ${idea.creative_thesis || ""}`,
      `시청자 약속: ${idea.viewer_promise || ""}`,
      "",
      `오프닝: ${idea.opening_hook || ""}`,
      "",
      "콜드오픈 선택지",
      ...((idea.cold_open_options || []).map((item, index) => `${index + 1}. ${item}`)),
      "",
      "제목 후보",
      ...(idea.title_candidates || []).map((item, index) => `${index + 1}. ${item}`),
      "",
      "쇼츠 제목 후보",
      ...(idea.shorts_title_candidates || []).map((item, index) => `${index + 1}. ${item}`),
      "",
      "6컷 전개",
      ...((idea.story_beats || idea.talk_track || idea.key_scenes || []).map((item, index) => `${index + 1}. ${item}`)),
      "",
      "증거 보드",
      ...((idea.proof_board || []).map((item, index) => `${index + 1}. ${item}`)),
      "",
      "발행 준비도",
      ...((idea.publish_readiness || []).map((item, index) => `${index + 1}. ${item}`)),
      "",
      "변호사 확인 질문",
      ...((idea.approval_questions || []).map((item, index) => `${index + 1}. ${item}`)),
      "",
      `위험 문장: ${idea.dangerous_sentence || ""}`,
      `법률 쟁점: ${(idea.legal_issue || []).join(", ")}`,
      `필요 자료: ${(idea.required_documents || []).join(", ")}`,
      `썸네일: ${(idea.thumbnail_copy || []).join(" / ")}`,
      `댓글 질문: ${idea.comment_question || ""}`,
      "",
      `검수 메모: ${idea.risk_note || ""}`,
    ].join("\n");
  }

  function renderGuardrails() {
    els.blockedPhrases.innerHTML = BLOCKED_PHRASES.map((phrase) => `<span>${escapeHtml(phrase)}</span>`).join("");
    els.allowedPhrases.innerHTML = ALLOWED_PHRASES.map((phrase) => `<span>${escapeHtml(phrase)}</span>`).join("");
    els.privacyChecklist.innerHTML = PRIVACY_ITEMS.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
    els.keywordCloud.innerHTML = Object.entries(CATEGORY_KEYWORDS)
      .map(([category, words]) => `<span>${escapeHtml(category)}</span>${words.map((word) => `<span>${escapeHtml(word)}</span>`).join("")}`)
      .join("");
  }

  function switchView(name) {
    document.querySelectorAll(".nav-item").forEach((button) => {
      button.classList.toggle("active", button.dataset.view === name);
    });
    document.querySelectorAll(".view").forEach((view) => {
      const active = view.id === `${name}View`;
      view.classList.toggle("active", active);
      if (active) {
        els.viewTitle.textContent = view.dataset.title || "";
        els.viewEyebrow.textContent = view.dataset.eyebrow || "";
      }
    });
    refreshIcons();
  }

  function onSourceSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const source = enrichSource({
      id: makeId("src"),
      source_name: data.get("source_name") || "직접 입력",
      source_type: data.get("source_type") || "news",
      url: data.get("url") || "",
      title: data.get("title") || "",
      published_at: data.get("published_at") || toDateInput(new Date()),
      collected_at: nowStamp(),
      raw_summary: data.get("raw_summary") || "",
      full_text: data.get("full_text") || "",
      risk_level: data.get("risk_level") || "low",
    });
    const added = addSource(source);
    event.currentTarget.reset();
    renderAll();
    toast(added ? "원문을 저장했습니다." : "중복 원문은 건너뛰었습니다.");
  }

  function fillSourceSample() {
    const form = els.sourceForm;
    form.elements.source_type.value = "news";
    form.elements.source_name.value = "샘플 뉴스";
    form.elements.title.value = "공동창업자 간 정산 갈등 확산";
    form.elements.url.value = "";
    form.elements.published_at.value = toDateInput(new Date());
    form.elements.risk_level.value = "medium";
    form.elements.raw_summary.value =
      "친구 사이로 시작한 공동창업에서 매출이 늘어난 뒤 정산표와 계좌내역을 한쪽만 확인하는 상황이 반복된다.";
    form.elements.full_text.value =
      "공동대표 명의, 매출 계좌, 정산 기준, 카톡 대화가 핵심 쟁점으로 보인다.";
  }

  function onFeedSubmit(event) {
    event.preventDefault();
    const name = els.feedNameInput.value.trim();
    const url = els.feedUrlInput.value.trim();
    if (!url) return;
    state.feeds.push({ id: makeId("feed"), name: name || "RSS", url });
    els.feedNameInput.value = "";
    els.feedUrlInput.value = "";
    renderAll();
    toast("RSS URL을 저장했습니다.");
  }

  function onParseFeed() {
    const raw = els.feedPasteInput.value.trim();
    if (!raw) {
      toast("분석할 RSS XML 또는 JSON이 없습니다.");
      return;
    }
    try {
      const parsed = parseBulkPayload(raw);
      let count = 0;
      parsed.forEach((item) => {
        if (addSource(enrichSource(item))) count += 1;
      });
      els.feedPasteInput.value = "";
      renderAll();
      toast(`${count}개 원문을 저장했습니다.`);
    } catch (error) {
      toast(error.message || "일괄 입력을 분석하지 못했습니다.");
    }
  }

  async function onAutoCollect() {
    const selectedTypes = getSelectedAutoTypes();
    const keywords = getAutoKeywords();
    const maxItems = clamp(Number(els.autoLimitInput.value) || 30, 5, 80);

    if (!selectedTypes.length) {
      updateAutoStatus("수집 대상을 하나 이상 선택하세요.", "error");
      return;
    }
    if (!keywords.length) {
      updateAutoStatus("검색 키워드를 입력하세요.", "error");
      return;
    }

    const jobs = buildAutoSearchJobs(selectedTypes, keywords);
    const typeQuota = Object.fromEntries(
      selectedTypes.map((type) => [type, Math.ceil(maxItems / selectedTypes.length)]),
    );
    const addedByType = {};
    let added = 0;
    let scanned = 0;
    let failed = 0;

    els.autoCollectBtn.disabled = true;
    updateAutoStatus(`자동 수집 시작: 검색 ${jobs.length}개`, "running");

    for (let i = 0; i < jobs.length && added < maxItems; i += 1) {
      const job = jobs[i];
      const typeKey = jobTypeKey(job);
      if ((addedByType[typeKey] || 0) >= typeQuota[typeKey]) continue;
      updateAutoStatus(
        `${i + 1}/${jobs.length} ${job.label} 검색 중 · 저장 ${added}/${maxItems}`,
        "running",
      );
      try {
        const items = await fetchAutoSearchItems(job);
        scanned += items.length;
        for (const item of items) {
          if (added >= maxItems) break;
          if ((addedByType[typeKey] || 0) >= typeQuota[typeKey]) break;
          if (addSource(enrichSource(item))) {
            added += 1;
            addedByType[typeKey] = (addedByType[typeKey] || 0) + 1;
          }
        }
      } catch (error) {
        failed += 1;
      }
    }

    els.autoCollectBtn.disabled = false;
    renderAll();
    updateAutoStatus(
      `완료: ${scanned}개 검색 결과 확인, 새 소재 ${added}개 저장${failed ? `, 실패 ${failed}개` : ""}`,
      failed && !added ? "error" : "",
    );
    toast(`자동 수집 완료: ${added}개 저장`);
  }

  function getSelectedAutoTypes() {
    const types = [];
    if (els.autoSourceNews.checked) types.push("news");
    if (els.autoSourceBlog.checked) types.push("blog");
    if (els.autoSourceCommunity.checked) types.push("community");
    if (els.autoSourceLegal.checked) types.push("legal");
    return types;
  }

  function getAutoKeywords() {
    return unique(
      String(els.autoKeywordInput.value || "")
        .split(/[\n,]/)
        .map((item) => item.trim())
        .filter(Boolean),
    ).slice(0, 12);
  }

  function updateAutoStatus(message, mode = "") {
    els.autoCollectStatus.textContent = message;
    els.autoCollectStatus.classList.toggle("running", mode === "running");
    els.autoCollectStatus.classList.toggle("error", mode === "error");
  }

  function buildAutoSearchJobs(types, keywords) {
    const jobs = [];
    keywords.forEach((keyword) => {
      if (types.includes("news")) {
        jobs.push({
          label: "뉴스",
          collect_type: "news",
          source_type: "news",
          source_name: "Google News",
          query: keyword,
          risk_level: "low",
          url: googleNewsRss(keyword),
        });
        jobs.push({
          label: "뉴스",
          collect_type: "news",
          source_type: "news",
          source_name: "Bing News",
          query: keyword,
          risk_level: "low",
          url: bingNewsRss(keyword),
        });
      }
      if (types.includes("blog")) {
        jobs.push({
          label: "블로그·웹",
          collect_type: "blog",
          source_type: "blog",
          source_name: "Bing Web",
          query: `${keyword} 사례 블로그`,
          risk_level: "medium",
          url: bingWebRss(`${keyword} 사례 블로그`),
        });
      }
      if (types.includes("community")) {
        ["clien.net", "82cook.com", "dcinside.com", "theqoo.net"].forEach((site) => {
          jobs.push({
            label: "커뮤니티",
            collect_type: "community",
            source_type: "community",
            source_name: `Bing Community · ${site}`,
            query: `site:${site} ${keyword}`,
            risk_level: "high",
            url: bingWebRss(`site:${site} ${keyword}`),
          });
        });
      }
      if (types.includes("legal")) {
        [
          { site: "law.go.kr", name: "국가법령정보센터" },
          { site: "scourt.go.kr", name: "대한민국 법원" },
          { site: "casenote.kr", name: "CaseNote" },
        ].forEach((target) => {
          jobs.push({
            label: "판례·법률",
            collect_type: "legal",
            source_type: "court",
            source_name: `Bing Legal · ${target.name}`,
            query: `site:${target.site} ${keyword} 판례`,
            risk_level: "low",
            url: bingWebRss(`site:${target.site} ${keyword} 판례`),
          });
        });
      }
    });
    return jobs;
  }

  function jobTypeKey(job) {
    return job.collect_type || (job.source_type === "court" ? "legal" : job.source_type);
  }

  function googleNewsRss(query) {
    return `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=ko&gl=KR&ceid=KR:ko`;
  }

  function bingNewsRss(query) {
    return `https://www.bing.com/news/search?q=${encodeURIComponent(query)}&format=rss&cc=KR`;
  }

  function bingWebRss(query) {
    return `https://www.bing.com/search?q=${encodeURIComponent(query)}&format=rss`;
  }

  async function fetchAutoSearchItems(job) {
    const attempts = [
      { kind: "rss2json", url: `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(job.url)}` },
      { kind: "feed2json", url: `https://feed2json.org/convert?url=${encodeURIComponent(job.url)}` },
      { kind: "rss", url: job.url },
    ];

    let lastError = null;
    for (const attempt of attempts) {
      try {
        const response = await fetch(attempt.url, { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const text = await response.text();
        const items = parseAutoSearchResponse(text, attempt.kind, job);
        if (items.length) return items;
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError || new Error("검색 결과를 가져오지 못했습니다.");
  }

  function parseAutoSearchResponse(text, kind, job) {
    if (kind === "rss2json") {
      const data = JSON.parse(text);
      if (data.status && data.status !== "ok") return [];
      return (data.items || []).map((item) => mapAutoItem({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        summary: item.description || item.content,
      }, job));
    }
    if (kind === "feed2json") {
      const data = JSON.parse(text);
      return (data.items || []).map((item) => mapAutoItem({
        title: item.title,
        link: item.url || item.external_url,
        pubDate: item.date_published || item.date_modified,
        summary: item.summary || item.content_text || item.content_html,
      }, job));
    }
    return parseAutoRssXml(text, job);
  }

  function parseAutoRssXml(text, job) {
    const xml = new DOMParser().parseFromString(text, "application/xml");
    if (xml.querySelector("parsererror")) return [];
    const nodes = [...xml.querySelectorAll("item")];
    const entries = nodes.length ? nodes : [...xml.querySelectorAll("entry")];
    return entries.map((node) => mapAutoItem({
      title: nodeText(node, ["title"]),
      link: nodeLink(node),
      pubDate: nodeText(node, ["pubDate", "published", "updated"]),
      summary: nodeText(node, ["description", "summary", "content"]),
    }, job));
  }

  function mapAutoItem(item, job) {
    const title = cleanHtml(item.title || "").trim();
    const summary = cleanHtml(item.summary || "").trim();
    const published = item.pubDate ? toDateInput(new Date(item.pubDate)) : toDateInput(new Date());
    return {
      id: makeId("src"),
      source_name: job.source_name,
      source_type: job.source_type,
      url: item.link || job.url,
      title: title || job.query,
      published_at: published,
      collected_at: nowStamp(),
      raw_summary: summary || `자동 웹 검색어: ${job.query}`,
      full_text: "",
      risk_level: job.risk_level,
      collection_method: "auto_web_search",
      search_query: job.query,
    };
  }

  function onSourceAction(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const source = state.sources.find((item) => item.id === button.dataset.id);
    if (!source) return;
    if (button.dataset.action === "generate") {
      currentIdea = createContentPackage(source, findBestLawyerInput(source), false);
      switchView("output");
      renderOutput();
      toast("콘텐츠화 초안을 만들었습니다.");
    }
    if (button.dataset.action === "review") {
      source.needs_lawyer_review = !source.needs_lawyer_review;
      renderAll();
      toast(source.needs_lawyer_review ? "검수 요청으로 표시했습니다." : "검수 표시를 해제했습니다.");
    }
    if (button.dataset.action === "link") {
      const nextUrl = window.prompt("원문 URL을 입력하세요. 비우면 링크를 제거합니다.", source.url || "");
      if (nextUrl === null) return;
      const trimmed = nextUrl.trim();
      if (trimmed && !safeExternalUrl(trimmed)) {
        toast("http 또는 https 원문 URL만 저장할 수 있습니다.");
        return;
      }
      source.url = trimmed;
      if (currentIdea?.source_id === source.id) {
        currentIdea = createContentPackage(source, findBestLawyerInput(source), false);
      }
      renderAll();
      toast(trimmed ? "원문 링크를 저장했습니다." : "원문 링크를 제거했습니다.");
    }
    if (button.dataset.action === "delete") {
      state.sources = state.sources.filter((item) => item.id !== source.id);
      renderAll();
      toast("원문을 삭제했습니다.");
    }
  }

  function onLawyerSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    state.lawyerInputs.push({
      input_id: makeId("lawyer"),
      date: data.get("date") || toDateInput(new Date()),
      raw_note: data.get("raw_note") || "",
      situation: data.get("situation") || "",
      dangerous_sentence: data.get("dangerous_sentence") || "",
      client_emotion: data.get("client_emotion") || "억울함",
      legal_issue: data.get("legal_issue") || "",
      required_documents: splitList(data.get("required_documents")),
      content_angle: data.get("content_angle") || "이거 소송감인가요?",
      needs_anonymization: Boolean(data.get("needs_anonymization")),
    });
    event.currentTarget.reset();
    renderAll();
    toast("원석을 저장했습니다.");
  }

  function onLawyerAction(event) {
    const generate = event.target.closest("[data-lawyer-generate]");
    const remove = event.target.closest("[data-lawyer-delete]");
    if (generate) {
      const lawyer = state.lawyerInputs.find((item) => item.input_id === generate.dataset.lawyerGenerate);
      const source = findBestSourceForLawyer(lawyer) || state.sources[0];
      if (!source) {
        toast("결합할 원문 소재가 없습니다.");
        return;
      }
      currentIdea = createContentPackage(source, lawyer, false);
      switchView("output");
      renderOutput();
      toast("원석과 원문을 결합했습니다.");
    }
    if (remove) {
      state.lawyerInputs = state.lawyerInputs.filter((item) => item.input_id !== remove.dataset.lawyerDelete);
      renderAll();
      toast("원석을 삭제했습니다.");
    }
  }

  function onGenerateIdea() {
    const source = state.sources.find((item) => item.id === els.sourceSelect.value);
    if (!source) {
      toast("선택된 원문 소재가 없습니다.");
      return;
    }
    const lawyer =
      state.lawyerInputs.find((item) => item.input_id === els.lawyerSelect.value) || findBestLawyerInput(source);
    currentIdea = createContentPackage(source, lawyer, false);
    renderOutput();
    toast("생성 결과를 갱신했습니다.");
  }

  async function copyBriefToClipboard(idea) {
    if (!idea) return;
    const text = formatIdeaBrief(idea);
    try {
      await navigator.clipboard.writeText(text);
      toast("제작 브리프를 복사했습니다.");
    } catch {
      if (copyTextFallback(text)) {
        toast("제작 브리프를 복사했습니다.");
      } else {
        toast("브라우저에서 클립보드를 허용하지 않았습니다.");
      }
    }
  }

  async function onCopyIdea() {
    if (!currentIdea) return;
    await copyBriefToClipboard(currentIdea);
  }

  function onSaveIdea() {
    if (!currentIdea) return;
    const targetIndex = findMatchingSavedIdeaIndex(currentIdea);
    if (targetIndex >= 0) {
      const previous = state.ideas[targetIndex];
      const updated = {
        ...currentIdea,
        content_id: previous.content_id,
        status: previous.status || currentIdea.status || "draft",
        saved_at: previous.saved_at || nowStamp(),
        updated_at: nowStamp(),
      };
      state.ideas[targetIndex] = updated;
      currentIdea = updated;
      renderAll();
      toast("저장된 브리프를 갱신했습니다.");
      return;
    }
    const idea = {
      ...currentIdea,
      content_id: makeId("idea"),
      status: "draft",
      saved_at: nowStamp(),
      updated_at: nowStamp(),
    };
    state.ideas.push(idea);
    currentIdea = idea;
    renderAll();
    toast("콘텐츠 후보를 저장했습니다.");
  }

  function onIdeaAction(event) {
    const loadButton = event.target.closest("[data-idea-load]");
    const copyButton = event.target.closest("[data-idea-copy]");
    const statusButton = event.target.closest("[data-idea-status]");
    const deleteButton = event.target.closest("[data-idea-delete]");
    if (loadButton) {
      const idea = state.ideas.find((item) => item.content_id === loadButton.dataset.ideaLoad);
      if (!idea) return;
      currentIdea = idea;
      switchView("output");
      renderOutput();
      toast("저장된 브리프를 열었습니다.");
      return;
    }
    if (copyButton) {
      const idea = state.ideas.find((item) => item.content_id === copyButton.dataset.ideaCopy);
      if (!idea) return;
      void copyBriefToClipboard(idea);
      return;
    }
    if (statusButton) {
      const idea = state.ideas.find((item) => item.content_id === statusButton.dataset.id);
      if (!idea) return;
      idea.status = statusButton.dataset.ideaStatus;
      idea.updated_at = nowStamp();
      renderAll();
      toast("검수 상태를 변경했습니다.");
      return;
    }
    if (deleteButton) {
      state.ideas = state.ideas.filter((item) => item.content_id !== deleteButton.dataset.ideaDelete);
      if (currentIdea?.content_id === deleteButton.dataset.ideaDelete) currentIdea = null;
      renderAll();
      toast("콘텐츠 후보를 삭제했습니다.");
    }
  }

  function findMatchingSavedIdeaIndex(idea) {
    if (!idea) return -1;
    if (idea.content_id && idea.content_id !== "preview") {
      const byId = state.ideas.findIndex((item) => item.content_id === idea.content_id);
      if (byId >= 0) return byId;
    }
    return state.ideas.findIndex(
      (item) =>
        item.source_id === idea.source_id &&
        item.lawyer_input_id === idea.lawyer_input_id &&
        item.washed_title === idea.washed_title,
    );
  }

  function addSource(source) {
    const key = source.url ? normalizeText(source.url) : normalizeText(source.title);
    const exists = state.sources.some((item) => {
      const itemKey = item.url ? normalizeText(item.url) : normalizeText(item.title);
      return itemKey && itemKey === key;
    });
    if (exists) return false;
    state.sources.push(source);
    return true;
  }

  function enrichSource(source) {
    const classified = classifySource(source);
    const score = scoreSource({ ...source, ...classified });
    return {
      ...source,
      ...classified,
      score,
      needs_lawyer_review:
        typeof source.needs_lawyer_review === "boolean"
          ? source.needs_lawyer_review
          : score.total >= 9 || source.risk_level !== "low",
    };
  }

  function classifySource(source) {
    const text = normalizeText([source.title, source.raw_summary, source.full_text].join(" "));
    const category = [];
    const keywords = [];

    Object.entries(CATEGORY_KEYWORDS).forEach(([name, words]) => {
      const matched = words.filter((word) => text.includes(normalizeText(word)));
      if (matched.length) {
        category.push(name);
        keywords.push(...matched);
      }
    });

    const peopleRelation = detectPeopleRelation(text);
    const moneyIssue = detectMoneyIssue(text);
    const legalIssue = detectLegalIssue(text, category);

    return {
      category: unique(category),
      keywords: unique(keywords).slice(0, 12),
      people_relation: peopleRelation,
      money_issue: moneyIssue,
      legal_issue: legalIssue.join(", "),
    };
  }

  function scoreSource(source) {
    const text = normalizeText([source.title, source.raw_summary, source.full_text].join(" "));
    const matchedCategories = source.category?.length || 0;
    const hasDangerSentence = findDangerousSentence(source);
    const hasQuestion = /[?？]|인가요|일까요|누구 것|보시나요/.test(text);
    const hasSceneWords = /어느 날|통장|카톡|비번|정산표|명의|친구|가족|연인|대표|손님|가게|계정|브랜드/.test(text);
    const legalCount = splitList(source.legal_issue).length;

    const scene = clamp((hasSceneWords ? 2 : 0) + (text.length > 40 ? 1 : 0), 0, 3);
    const relation = clamp(source.people_relation !== "기타" ? 3 : /갈등|분쟁|싸움|배신/.test(text) ? 2 : 0, 0, 3);
    const issue = clamp(matchedCategories + (legalCount ? 1 : 0), 0, 3);
    const title = clamp((hasDangerSentence ? 2 : 0) + (/소송감|위험|명의|정산|상표|계정|투자/.test(text) ? 1 : 0), 0, 3);
    const comments = clamp((hasQuestion ? 1 : 0) + (/동업|투자|빌린 돈|누구 것|정산/.test(text) ? 1 : 0), 0, 2);
    const lawyerLink = clamp(legalCount + (source.keywords?.length ? 1 : 0), 0, 3);
    const riskPenalty = getRiskPenalty(source, text);
    const total = scene + relation + issue + title + comments + lawyerLink + riskPenalty;

    return { scene, relation, issue, title, comments, lawyerLink, riskPenalty, total };
  }

  function getRiskPenalty(source, text) {
    let penalty = 0;
    if (source.risk_level === "medium") penalty -= 1;
    if (source.risk_level === "high") penalty -= 2;
    if (BLOCKED_PHRASES.some((phrase) => text.includes(normalizeText(phrase)))) penalty -= 1;
    if (/실명|업체명|사기꾼|범죄|불법/.test(text)) penalty -= 1;
    return clamp(penalty, -3, 0);
  }

  function createContentPackage(source, lawyerInput, persistId = true) {
    const lawyer = lawyerInput || {};
    const context = buildContentContext(source, lawyer);
    const titles = buildTitles(source, lawyer, context);
    const shortsTitles = buildShortsTitles(source, lawyer, context);
    const issueList = unique([...splitList(source.legal_issue), ...splitList(lawyer.legal_issue)]).slice(0, 5);
    const docs = unique([...documentsFor(source), ...splitList(lawyer.required_documents)]).slice(0, 6);
    const series = lawyer.content_angle || pickSeries(source);
    const dangerous = lawyer.dangerous_sentence || findDangerousSentence(source) || buildDangerousFallback(source);
    const scene = buildSceneSummary(source, lawyer);
    const priority = source.score.total >= 12 ? 1 : source.score.total >= 9 ? 2 : 3;

    return {
      content_id: persistId ? makeId("idea") : "preview",
      priority,
      source_id: source.id,
      lawyer_input_id: lawyer.input_id || "",
      source_type: lawyer.input_id ? `${source.source_type} + lawyer_input` : source.source_type,
      source_name: source.source_name || source.source_type || "",
      source_url: safeExternalUrl(source.url) || source.url || "",
      source_published_at: source.published_at || "",
      raw_topic: source.title,
      washed_title: titles[0],
      shorts_title: shortsTitles[0],
      title_candidates: titles,
      shorts_title_candidates: shortsTitles,
      series,
      one_line_positioning: buildOneLinePositioning(source, lawyer, context, scene),
      creative_thesis: buildCreativeThesis(source, lawyer, context, scene),
      viewer_promise: buildViewerPromise(source, lawyer, context),
      tone_guide: buildToneGuide(context),
      opening_hook: buildOpeningHook(source, lawyer, scene, context),
      cold_open_options: buildColdOpenOptions(source, lawyer, context),
      scene_summary: scene,
      dangerous_sentence: dangerous,
      legal_issue: issueList.length ? issueList : ["자료 검토 필요"],
      required_documents: docs.length ? docs : ["계약서", "카톡", "입금내역"],
      thumbnail_copy: buildThumbnailCopy(source, dangerous, context),
      key_scenes: buildKeyScenes(source, lawyer, context),
      talk_track: buildTalkTrack(source, lawyer, context),
      story_beats: buildStoryBeats(source, lawyer, context),
      proof_board: buildProofBoard(source, lawyer, context),
      legal_checkpoints: buildLegalCheckpoints(source, lawyer, context),
      visual_direction: buildVisualDirection(source, context),
      publish_readiness: buildPublishReadiness(source, lawyer, context),
      approval_questions: buildApprovalQuestions(source, lawyer, context),
      edit_notes: buildEditNotes(source, lawyer, context),
      comment_question: buildCommentQuestion(source, series, context),
      risk_note: buildRiskNote(source, lawyer),
      needs_lawyer_review: true,
      status: "draft",
    };
  }

  function buildContentContext(source, lawyer) {
    const text = normalizeText([source.title, source.raw_summary, lawyer.raw_note].join(" "));
    const relation =
      source.people_relation && source.people_relation !== "기타" ? source.people_relation : detectPeopleRelation(text);
    const relationship = relation && relation !== "기타" ? relation : "가까운 사람";
    let caseKind = "general";
    if (/정산|통장|매출|계좌|수익|회계/.test(text)) caseKind = "settlement";
    if (/상표|브랜드|로고|아이디어/.test(text)) caseKind = "brand";
    if (/명의|사업자등록|대표/.test(text)) caseKind = "nominee";
    if (/계정|비밀번호|비번|인스타|유튜브|스마트스토어|쇼핑몰/.test(text)) caseKind = "account";
    if (/투자|빌려|대여금|차용증|원금|송금/.test(text)) caseKind = "money";
    if (/퇴사|거래처|영업비밀|고객명단|경업|빼가기/.test(text)) caseKind = "tradeSecret";

    const stakes = {
      settlement: "돈의 흐름과 정산 기준",
      brand: "브랜드를 누가 만들고 어떻게 써 왔는지",
      nominee: "서류상 명의와 실제 운영 기여",
      account: "계정 접근권과 수익 귀속",
      money: "송금 당시의 약속과 반환 정황",
      tradeSecret: "자료 반출 경위와 경쟁 가능성",
      general: "사실관계와 남아 있는 자료",
    };

    const conflicts = {
      settlement: "신뢰 문제처럼 보이지만 결국 숫자와 자료의 문제",
      brand: "이름을 같이 만들었다는 기억과 권리 명의가 갈라지는 문제",
      nominee: "내 사업이라는 감각과 서류상 명의가 충돌하는 문제",
      account: "같이 키운 자산을 누가 통제하는지의 문제",
      money: "호의로 보낸 돈이 투자였는지 대여였는지 갈리는 문제",
      tradeSecret: "관계가 끝난 뒤 자료와 거래처가 어디까지 허용되는지의 문제",
      general: "억울함을 법적으로 설명 가능한 자료로 바꾸는 문제",
    };

    return {
      text,
      caseKind,
      relationship,
      stake: stakes[caseKind],
      conflict: conflicts[caseKind],
    };
  }

  function buildOneLinePositioning(source, lawyer, context, scene) {
    const issue = splitList(source.legal_issue || lawyer.legal_issue)[0] || "자료 검토";
    return `이 사안은 ${stripEndPunctuation(scene)}에서 출발합니다. ${context.conflict}로 잡고, ${issue} 관점에서 필요한 자료를 정리합니다.`;
  }

  function buildCreativeThesis(source, lawyer, context, scene) {
    const docs = unique([...documentsFor(source), ...splitList(lawyer.required_documents)]).slice(0, 3);
    const docText = docs.length ? docs.join(", ") : "계약서, 카톡, 입금내역";
    const theses = {
      settlement: `이 영상은 “믿느냐 못 믿느냐” 싸움이 아니라, ${docText} 같은 자료로 정산 기준을 복원하는 이야기입니다.`,
      brand: `이 영상은 “내가 만들었다”는 기억을 권리로 바꾸려면 어떤 흔적이 필요한지 보여주는 이야기입니다.`,
      nominee: `이 영상은 “내 사업이었다”는 감각과 서류상 명의 사이의 간극을 자료로 좁히는 이야기입니다.`,
      account: `이 영상은 계정을 감정의 소유물이 아니라 접근권, 운영 기록, 수익 흐름이 남는 자산으로 다룹니다.`,
      money: `이 영상은 가까운 사이의 송금을 투자와 대여 중 어디에 놓을지 자료로 가르는 이야기입니다.`,
      tradeSecret: `이 영상은 퇴사 뒤 거래처와 자료를 어디까지 다룰 수 있는지 선을 긋는 이야기입니다.`,
      general: `이 영상은 ${stripEndPunctuation(scene)}라는 사연을 감정 호소가 아니라 판단 가능한 자료의 문제로 바꾸는 이야기입니다.`,
    };
    return theses[context.caseKind] || theses.general;
  }

  function buildViewerPromise(source, lawyer, context) {
    const promises = {
      settlement: "동업자가 정산을 피할 때 바로 싸우기 전에 어떤 자료부터 요구해야 하는지 알 수 있습니다.",
      brand: "같이 만든 브랜드가 내 권리가 되려면 이름, 사용 흔적, 등록명의를 어떻게 봐야 하는지 알 수 있습니다.",
      nominee: "명의가 내 이름이 아닐 때도 포기하기 전에 확인할 운영 자료가 무엇인지 알 수 있습니다.",
      account: "비밀번호가 바뀐 계정 분쟁에서 캡처해야 할 화면과 말하면 안 되는 문장을 알 수 있습니다.",
      money: "차용증이 없는 돈거래에서 투자금과 빌려준 돈을 가르는 단서를 알 수 있습니다.",
      tradeSecret: "퇴사 뒤 거래처 연락과 자료 반출이 위험해지는 기준을 알 수 있습니다.",
      general: "억울한 사연을 상담 가능한 쟁점과 자료 목록으로 정리하는 방법을 알 수 있습니다.",
    };
    return promises[context.caseKind] || promises.general;
  }

  function buildToneGuide(context) {
    const guides = {
      settlement: "감정은 낮추고 숫자와 자료를 또렷하게 보여주는 차분한 경고형",
      brand: "누구 잘못인지 몰아가기보다 권리 귀속의 기준을 설명하는 해설형",
      nominee: "억울함을 인정하되 명의와 입증의 차이를 분리하는 실무형",
      account: "플랫폼 자산을 재산처럼 다루는 냉정한 체크리스트형",
      money: "가까운 관계의 돈거래를 기록과 약속의 문제로 바꾸는 상담형",
      tradeSecret: "분노보다 금지되는 행동의 선을 보여주는 리스크 안내형",
      general: "사연 팔이보다 증거 정리를 우선하는 담백한 설명형",
    };
    return guides[context.caseKind] || guides.general;
  }

  function buildTitles(source, lawyer, context = buildContentContext(source, lawyer)) {
    const titles = [];
    const sceneTitle = trimTo(lawyer.situation || source.title, 42);
    const templates = {
      settlement: [
        `${context.relationship}와 시작한 사업, 정산표가 사라졌을 때`,
        "통장을 못 보는 동업자에게 먼저 필요한 것",
        "감정 싸움처럼 보이지만 결국 숫자의 문제입니다",
      ],
      brand: [
        "같이 만든 이름인데 권리는 한 사람에게 있을 때",
        "브랜드를 같이 키웠다면 상표 명의부터 봐야 합니다",
        "내가 만든 브랜드라는 말만으로는 부족합니다",
      ],
      nominee: [
        "내 돈이 들어간 가게, 서류상 대표가 따로 있을 때",
        "사업자등록증에 이름이 없으면 무엇부터 봐야 할까",
        "명의와 실제 운영자가 다를 때 생기는 일",
      ],
      account: [
        "같이 키운 계정의 비밀번호가 바뀌었을 때",
        "계정은 로그인하는 사람이 아니라 자료로 판단합니다",
        "수익 계좌가 바뀐 날 먼저 캡처해야 할 것들",
      ],
      money: [
        "빌려준 돈인지 투자금인지 갈리는 지점",
        "가까운 사이의 송금이 분쟁이 되는 순간",
        "차용증이 없을 때 돈거래를 설명하는 방법",
      ],
      tradeSecret: [
        "퇴사 뒤 거래처 연락, 어디서부터 위험할까",
        "자료를 가져간 사람보다 먼저 봐야 할 기록",
        "거래처 빼가기 분쟁에서 놓치기 쉬운 기준",
      ],
      general: [
        `${sceneTitle}에서 먼저 확인할 자료`,
        "억울한 사연을 법적 쟁점으로 바꾸는 순서",
        "감정은 이해되지만, 판단은 자료로 합니다",
      ],
    };

    titles.push(...(templates[context.caseKind] || templates.general), `${sceneTitle}에서 놓치면 안 되는 것`);
    return unique(titles).slice(0, 5);
  }

  function buildShortsTitles(source, lawyer, context = buildContentContext(source, lawyer)) {
    const dangerous = lawyer.dangerous_sentence || findDangerousSentence(source);
    const base = dangerous ? [`“${stripQuotes(dangerous)}” 다음에 확인할 자료`] : [];
    const byKind = {
      settlement: ["통장 얘기 피하면 이 자료부터", "정산은 말보다 표가 먼저입니다"],
      brand: ["상표 명의, 나중에 정말 큽니다", "같이 만든 이름의 권리는 누구에게"],
      nominee: ["대표 이름이 다르면 여기부터 봅니다", "내 가게였다는 말의 증거"],
      account: ["비밀번호 바뀐 날 바로 할 일", "계정 분쟁은 캡처가 먼저입니다"],
      money: ["투자였다는 말이 나온 순간", "송금 내역만으로 부족할 수 있습니다"],
      tradeSecret: ["퇴사 뒤 연락, 선 넘는 기준", "거래처 자료 가져가면 생기는 일"],
      general: ["억울함을 자료로 바꾸는 순서", "감정 말고 먼저 볼 자료"],
    };
    return unique([
      ...base,
      ...(byKind[context.caseKind] || byKind.general),
      `${context.stake}부터 확인하세요`,
    ]).slice(0, 5);
  }

  function buildOpeningHook(source, lawyer, scene, context = buildContentContext(source, lawyer)) {
    if (lawyer.raw_note && lawyer.dangerous_sentence) {
      return `${sentenceText(scene)} 상대방이 “${stripQuotes(lawyer.dangerous_sentence)}”라고 말하는 순간 대화는 감정으로 흐릅니다. 그런데 법적으로는 ${context.stake}부터 봐야 합니다.`;
    }
    const dangerous = findDangerousSentence(source);
    if (dangerous) {
      return `“${stripQuotes(dangerous)}”라는 말이 나온 사건입니다. 이 말 자체보다 중요한 건 그 뒤에 ${context.stake}를 확인할 수 있느냐입니다.`;
    }
    return `${sentenceText(scene)} 겉으로는 ${context.conflict}처럼 보이지만, 콘텐츠의 중심은 ${context.stake}를 어떻게 남겼는지에 둡니다.`;
  }

  function buildColdOpenOptions(source, lawyer, context = buildContentContext(source, lawyer)) {
    const dangerous = lawyer.dangerous_sentence || findDangerousSentence(source) || buildDangerousFallback(source);
    const scene = stripEndPunctuation(buildSceneSummary(source, lawyer));
    const optionsByKind = {
      settlement: [
        `“${stripQuotes(dangerous)}” 이 말이 나오면, 정산 얘기는 감정 싸움처럼 보이기 시작합니다.`,
        `${scene}. 여기서 바로 따질 게 아니라 먼저 봐야 할 건 숫자입니다.`,
        "동업에서 제일 위험한 순간은 돈 얘기를 꺼냈는데 상대가 신뢰 얘기로 돌릴 때입니다.",
      ],
      brand: [
        "브랜드 이름을 같이 만들었다고 해서 권리도 자동으로 같이 생기지는 않습니다.",
        `${scene}. 이때 중요한 건 누가 더 고생했느냐보다 어떤 기록이 남았느냐입니다.`,
        "상표 분쟁은 감정상 억울한 사람과 서류상 권리자가 달라지는 순간 터집니다.",
      ],
      nominee: [
        "내 돈이 들어갔는데 대표 이름이 다르면, 말보다 서류가 먼저 움직입니다.",
        `${scene}. 이 사안은 억울함보다 실제 운영 흔적을 먼저 봐야 합니다.`,
        "명의가 다른 사업은 끝날 때 갑자기 남의 사업처럼 보이기 시작합니다.",
      ],
      account: [
        "비밀번호가 바뀐 순간, 계정 분쟁은 이미 시작된 겁니다.",
        `${scene}. 여기서 화내기 전에 캡처해야 할 화면이 있습니다.`,
        "같이 키운 계정이라고 말하려면 같이 키운 흔적이 남아 있어야 합니다.",
      ],
      money: [
        "돈을 보낼 때는 호의였는데, 돌려받을 때는 법률문제가 됩니다.",
        `${scene}. 이때 핵심은 돈을 보낸 이유가 기록에 남아 있느냐입니다.`,
        "상대가 투자였다고 말하는 순간, 송금 내역만으로는 부족할 수 있습니다.",
      ],
      tradeSecret: [
        "퇴사 뒤 거래처에 연락하는 순간, 단순 영업이 아니라 분쟁이 될 수 있습니다.",
        `${scene}. 이 사안은 누가 먼저 화났는지보다 어떤 자료가 이동했는지가 중요합니다.`,
        "거래처 목록은 그냥 전화번호부가 아니라 회사의 자산으로 평가될 수 있습니다.",
      ],
      general: [
        `${scene}. 이 사안을 감정으로만 보면 놓치는 자료가 생깁니다.`,
        "억울하다는 말이 법적 주장으로 바뀌려면 순서가 필요합니다.",
        `핵심은 ${context.stake}입니다. 이걸 보여줄 자료가 있는지부터 봐야 합니다.`,
      ],
    };
    return optionsByKind[context.caseKind] || optionsByKind.general;
  }

  function buildSceneSummary(source, lawyer) {
    if (lawyer.situation) return lawyer.situation;
    const summary = source.raw_summary || source.full_text || source.title;
    const firstSentence = summary.split(/[.!?。]\s*/)[0];
    return trimTo(firstSentence || source.title, 90);
  }

  function buildDangerousFallback(source) {
    const text = normalizeText([source.title, source.raw_summary].join(" "));
    if (/정산|통장/.test(text)) return "너 나 못 믿냐?";
    if (/투자|빌려/.test(text)) return "투자였잖아";
    if (/명의|상표|브랜드/.test(text)) return "이건 내 명의잖아";
    if (/계정|비번|비밀번호/.test(text)) return "비밀번호는 내가 바꿨어";
    return "우리 사이에 계약서까지 써야 돼?";
  }

  function buildThumbnailCopy(source, dangerous, context = buildContentContext(source, {})) {
    const templates = {
      settlement: ["정산표가 없다", "통장 못 봅니다", "감정 말고 숫자"],
      brand: ["상표는 한 사람", "같이 만든 이름", "권리는 자료로"],
      nominee: ["내 돈, 남의 명의", "대표 이름이 다르다", "서류부터 봅니다"],
      account: ["비번 바뀐 날", "계정은 누구 것", "캡처가 먼저"],
      money: ["투자였다고요?", "송금의 의미", "차용증 없을 때"],
      tradeSecret: ["거래처 연락", "자료 반출", "퇴사 후 선"],
      general: [trimTo(stripQuotes(dangerous), 16), "자료부터 봅니다", "말보다 기록"],
    };
    return templates[context.caseKind] || templates.general;
  }

  function buildKeyScenes(source, lawyer, context = buildContentContext(source, lawyer)) {
    const dangerous = lawyer.dangerous_sentence || findDangerousSentence(source) || buildDangerousFallback(source);
    return [
      buildSceneSummary(source, lawyer),
      `상대방의 말이 “${stripQuotes(dangerous)}”처럼 감정의 프레임으로 바뀐다`,
      `${context.stake}를 확인할 수 있는 자료를 순서대로 꺼낸다`,
    ];
  }

  function buildTalkTrack(source, lawyer, context = buildContentContext(source, lawyer)) {
    const docs = unique([...documentsFor(source), ...splitList(lawyer.required_documents)]).slice(0, 3);
    const dangerous = lawyer.dangerous_sentence || findDangerousSentence(source) || buildDangerousFallback(source);
    return [
      `사연의 출발점은 ${stripEndPunctuation(buildSceneSummary(source, lawyer))}입니다.`,
      `갈등이 “${stripQuotes(dangerous)}” 같은 말로 감정화되는 지점을 보여줍니다.`,
      `핵심은 ${context.stake}입니다. ${docs.length ? docs.join(", ") : "계약서, 카톡, 입금내역"}을 봐야 한다고 전환합니다.`,
      "마지막은 당장 보내면 안 되는 말과 먼저 확보할 자료를 나눠서 정리합니다.",
    ];
  }

  function buildStoryBeats(source, lawyer, context = buildContentContext(source, lawyer)) {
    const scene = stripEndPunctuation(buildSceneSummary(source, lawyer));
    const dangerous = lawyer.dangerous_sentence || findDangerousSentence(source) || buildDangerousFallback(source);
    const docs = unique([...documentsFor(source), ...splitList(lawyer.required_documents)]).slice(0, 4);
    const issue = splitList(source.legal_issue || lawyer.legal_issue)[0] || "자료 검토";
    return [
      `0-5초: ${scene}라는 사연을 한 문장으로 던지고, 시청자가 자기 일처럼 느끼게 합니다.`,
      `5-18초: 상대방의 말 “${stripQuotes(dangerous)}”을 보여주되, 공격보다 프레임 전환에 씁니다.`,
      `18-35초: 이 사안의 핵심이 ${context.conflict}라는 점을 설명합니다.`,
      `35-55초: ${docs.length ? docs.join(", ") : "계약서, 카톡, 입금내역"}을 화면에 띄우며 판단 기준을 잡습니다.`,
      `55-75초: ${issue} 쟁점에서 유리한 말과 위험한 말을 나눠 보여줍니다.`,
      "마무리: 결론을 단정하지 않고, 지금 당장 확보할 자료 3개와 피해야 할 문장 1개로 끝냅니다.",
    ];
  }

  function buildProofBoard(source, lawyer, context = buildContentContext(source, lawyer)) {
    const docs = unique([...documentsFor(source), ...splitList(lawyer.required_documents)]).slice(0, 5);
    const issue = splitList(source.legal_issue || lawyer.legal_issue)[0] || "자료 검토";
    const board = [
      `주장: ${context.stake}가 핵심입니다.`,
      `확인: ${docs.length ? docs.join(", ") : "계약서, 카톡, 입금내역"}으로 말과 돈의 흐름을 맞춰 봅니다.`,
      `쟁점: ${issue} 관점에서 주장 가능한 부분과 아직 부족한 부분을 분리합니다.`,
      `주의: 원문 링크와 실제 사례는 특정인이 드러나지 않게 각색합니다.`,
    ];
    if (safeExternalUrl(source.url)) board.unshift(`원문: ${source.source_name || "수집 원문"} 링크에서 사실관계 출처를 확인합니다.`);
    return board;
  }

  function buildLegalCheckpoints(source, lawyer, context = buildContentContext(source, lawyer)) {
    const issues = unique([...splitList(source.legal_issue), ...splitList(lawyer.legal_issue)]).slice(0, 4);
    const checkpoints = issues.length ? issues : ["자료 검토 필요"];
    checkpoints.push(`${context.stake}를 입증할 객관 자료가 있는지 확인`);
    if (source.risk_level !== "low") checkpoints.push("특정 당사자 식별 가능성 낮추기");
    return unique(checkpoints).slice(0, 5);
  }

  function buildVisualDirection(source, context = buildContentContext(source, {})) {
    const docs = documentsFor(source).slice(0, 3);
    const visualByKind = {
      settlement: ["정산표 일부가 비어 있는 화면", "카톡 말풍선과 계좌내역을 나란히 배치", "숫자와 감정 단어를 대비"],
      brand: ["상표등록 화면과 로고 스케치를 분리", "브랜드 이름 위에 명의 표시를 강조", "같이 만든 흔적과 등록명의를 교차"],
      nominee: ["사업자등록증의 대표명 영역 강조", "입금내역과 매장 사진을 분리", "실제 운영과 서류 명의를 대비"],
      account: ["로그인 실패 화면", "비밀번호 변경 알림", "수익 계좌 변경 화면을 흐리게 처리"],
      money: ["송금 내역과 짧은 카톡 문장", "투자/대여 두 갈래 도식", "차용증 없음 표시"],
      tradeSecret: ["거래처 목록은 흐림 처리", "퇴사일과 연락 시점을 타임라인화", "자료 반출 경로를 단순 도식화"],
      general: ["사연 문장보다 자료 목록을 먼저 보여주기", "당사자 정보는 모두 흐림 처리", "감정 단어와 증거 단어를 대비"],
    };
    return unique([...(visualByKind[context.caseKind] || visualByKind.general), ...docs.map((doc) => `${doc} 클로즈업`)]).slice(0, 4);
  }

  function buildPublishReadiness(source, lawyer, context = buildContentContext(source, lawyer)) {
    const readiness = [];
    readiness.push(safeExternalUrl(source.url) ? "원문 링크 확인 완료" : "원문 링크 보강 필요");
    readiness.push(source.needs_lawyer_review ? "변호사 검수 필요" : "검수 플래그 없음");
    readiness.push(lawyer.input_id ? "변호사 원석 매칭 완료" : "변호사 원석 추가 시 완성도 상승");
    readiness.push(documentsFor(source).length ? "화면 자료 후보 있음" : `${context.stake}를 보여줄 자료 화면 보강 필요`);
    return readiness;
  }

  function buildApprovalQuestions(source, lawyer, context = buildContentContext(source, lawyer)) {
    const issue = splitList(source.legal_issue || lawyer.legal_issue)[0] || "자료 검토";
    return [
      `${issue} 쟁점으로 설명해도 법률적으로 과하지 않은가요?`,
      `${context.stake}를 입증할 자료가 실제로 확보되어 있나요?`,
      "상대방을 특정하거나 불법으로 단정하는 표현이 남아 있나요?",
      "상담 사례라면 이름, 지역, 금액, 날짜 각색이 충분한가요?",
    ];
  }

  function buildEditNotes(source, lawyer, context = buildContentContext(source, lawyer)) {
    const notes = [
      "상대방을 범죄자처럼 단정하지 말고, 판단 기준을 설명하는 톤 유지",
      "실제 상담 사례처럼 보이는 이름, 지역, 금액, 날짜는 각색",
      `${context.stake}를 보여주는 자료가 없으면 결론을 열어 둠`,
    ];
    if (lawyer.needs_anonymization) notes.push("변호사 원석 문장은 그대로 인용하지 말고 구조만 사용");
    return notes;
  }

  function buildCommentQuestion(source, series, context = buildContentContext(source, {})) {
    const questions = {
      settlement: "이 상황에서 먼저 요구해야 할 자료는 정산표일까요, 계좌내역일까요?",
      brand: "같이 만든 브랜드라면 상표 명의는 언제 정리해야 한다고 보시나요?",
      nominee: "서류상 명의와 실제 운영이 다를 때 어떤 자료가 가장 중요할까요?",
      account: "같이 키운 계정이라면 비밀번호와 수익 계좌는 어떻게 관리해야 할까요?",
      money: "이 송금은 투자금과 빌려준 돈 중 어디에 더 가까워 보이나요?",
      tradeSecret: "퇴사 뒤 거래처 연락은 어디까지 허용된다고 보시나요?",
      general: "이 사안에서 감정보다 먼저 확인해야 할 자료는 무엇일까요?",
    };
    return questions[context.caseKind] || questions.general;
  }

  function buildRiskNote(source, lawyer) {
    const notes = ["최종 발행 전 변호사 검수 필요."];
    if (source.risk_level !== "low") notes.push("특정 사건 단정과 과장 표현 확인 필요.");
    if (lawyer.needs_anonymization) notes.push("실제 상담 사례는 이름, 지역, 금액, 날짜 각색 필요.");
    notes.push("승소 가능성, 범죄 단정, 상대방 불법 단정 표현 금지.");
    return notes.join(" ");
  }

  function documentsFor(source) {
    const text = normalizeText([source.title, source.raw_summary, source.full_text, source.legal_issue].join(" "));
    const docs = [];
    Object.entries(DOCUMENT_HINTS).forEach(([keyword, items]) => {
      if (text.includes(normalizeText(keyword))) docs.push(...items);
    });
    return unique(docs);
  }

  function pickSeries(source) {
    const text = normalizeText([source.title, source.raw_summary, source.full_text].join(" "));
    if (/너 나 못 믿냐|나중에 정산|내 명의|투자였잖아|계약서까지|위험한 말/.test(text)) {
      return "변호사가 보면 위험한 말";
    }
    if (/계약서|카톡|약관|제안서|상표등록 내역|정산/.test(text)) {
      return "변호사가 대신 읽어드립니다";
    }
    if (/친구|가족|연인|헤어|대표님이 된/.test(text)) {
      return "사장님들의 이별";
    }
    if (/사연|사람|가게|손님/.test(text)) {
      return "사업판 인간극장";
    }
    return "이거 소송감인가요?";
  }

  function findDangerousSentence(source) {
    const text = [source.title, source.raw_summary, source.full_text].filter(Boolean).join(" ");
    const quoted = text.match(/[“"']([^“”"']{2,30})[”"']/);
    if (quoted) return quoted[1];
    const patterns = [
      "너 나 못 믿냐",
      "나중에 정산하자",
      "이건 내 명의잖아",
      "투자였잖아",
      "빌린 돈 아니야",
      "우리 사이에 계약서까지",
      "네가 한 게 뭐 있는데",
      "비밀번호 바꿨어",
    ];
    return patterns.find((pattern) => normalizeText(text).includes(normalizeText(pattern))) || "";
  }

  function detectPeopleRelation(text) {
    if (/친구|지인|선배|후배/.test(text)) return "친구";
    if (/가족|형제|부모|배우자/.test(text)) return "가족";
    if (/연인|애인|남자친구|여자친구|헤어/.test(text)) return "연인";
    if (/공동대표|동업자|공동창업/.test(text)) return "공동대표";
    if (/직원|퇴사|임직원/.test(text)) return "직원";
    return "기타";
  }

  function detectMoneyIssue(text) {
    if (/정산|매출|수익 배분|계좌|통장/.test(text)) return "정산";
    if (/투자|투자금|원금/.test(text)) return "투자금";
    if (/대여금|빌려|차용증/.test(text)) return "대여금";
    if (/권리금/.test(text)) return "권리금";
    return "기타";
  }

  function detectLegalIssue(text, categories) {
    const issues = [];
    if (/정산|매출|통장|회계/.test(text)) issues.push("정산금 청구", "회계자료 열람");
    if (/동업|공동창업|공동대표|조합/.test(text)) issues.push("동업관계 입증");
    if (/상표|브랜드|로고/.test(text)) issues.push("상표권", "손해배상");
    if (/계정|비밀번호|채널|스마트스토어|인스타/.test(text)) issues.push("계정 소유권", "수익 정산");
    if (/투자|대여금|차용증|빌려/.test(text)) issues.push("투자금·대여금 반환");
    if (/퇴사|거래처|영업비밀|고객명단|경업/.test(text)) issues.push("영업비밀보호", "부정경쟁방지법");
    if (categories.includes("판례·법률 이슈")) issues.push("판례 검토");
    return unique(issues.length ? issues : ["자료 검토 필요"]);
  }

  function findBestLawyerInput(source) {
    if (!state.lawyerInputs.length) return null;
    const sourceText = normalizeText([source.title, source.raw_summary, source.keywords?.join(" "), source.legal_issue].join(" "));
    return state.lawyerInputs
      .slice()
      .sort((a, b) => matchScore(b, sourceText) - matchScore(a, sourceText))[0];
  }

  function findBestSourceForLawyer(lawyer) {
    if (!lawyer) return null;
    const lawyerText = normalizeText([lawyer.raw_note, lawyer.situation, lawyer.legal_issue, lawyer.dangerous_sentence].join(" "));
    return state.sources.slice().sort((a, b) => matchScore(b, lawyerText) - matchScore(a, lawyerText))[0];
  }

  function matchScore(item, text) {
    const itemText = normalizeText(
      [
        item.title,
        item.raw_summary,
        item.full_text,
        item.raw_note,
        item.situation,
        item.legal_issue,
        item.keywords?.join(" "),
      ].join(" "),
    );
    const words = unique(text.split(/\s+/).filter((word) => word.length > 1));
    return words.reduce((score, word) => score + (itemText.includes(word) ? 1 : 0), 0);
  }

  function getCandidates() {
    return state.sources.filter((source) => source.score.total >= 9);
  }

  function getPriorityCandidates() {
    return state.sources.filter((source) => source.score.total >= 12).sort((a, b) => b.score.total - a.score.total);
  }

  function parseBulkPayload(raw) {
    const trimmed = raw.trim();
    if (!trimmed) return [];

    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      const json = JSON.parse(trimmed);
      const list = Array.isArray(json) ? json : json.items || json.entries || json.channel?.item || [];
      if (!Array.isArray(list)) throw new Error("JSON 항목 배열을 찾지 못했습니다.");
      return list.map((item) =>
        enrichSource({
          id: makeId("src"),
          source_name: item.source_name || item.source || item.author || "JSON",
          source_type: item.source_type || "news",
          url: item.url || item.link || "",
          title: item.title || "",
          published_at: item.published_at || item.pubDate || item.date || toDateInput(new Date()),
          collected_at: nowStamp(),
          raw_summary: item.raw_summary || item.summary || item.description || "",
          full_text: item.full_text || item.content || "",
          risk_level: item.risk_level || "low",
        }),
      );
    }

    const parser = new DOMParser();
    const xml = parser.parseFromString(trimmed, "application/xml");
    if (xml.querySelector("parsererror")) throw new Error("RSS XML을 분석하지 못했습니다.");
    const nodes = [...xml.querySelectorAll("item")];
    const entries = nodes.length ? nodes : [...xml.querySelectorAll("entry")];
    return entries.map((node) =>
      enrichSource({
        id: makeId("src"),
        source_name: nodeText(xml, ["title"]) || "RSS",
        source_type: "news",
        url: nodeLink(node),
        title: nodeText(node, ["title"]),
        published_at: toDateInput(new Date(nodeText(node, ["pubDate", "published", "updated"]) || Date.now())),
        collected_at: nowStamp(),
        raw_summary: cleanHtml(nodeText(node, ["description", "summary"])),
        full_text: cleanHtml(nodeText(node, ["encoded", "content"])),
        risk_level: "low",
      }),
    );
  }

  function nodeText(node, names) {
    for (const name of names) {
      const found = [...node.getElementsByTagName("*")].find((child) => child.localName === name);
      if (found?.textContent) return found.textContent.trim();
    }
    return "";
  }

  function nodeLink(node) {
    const link = [...node.getElementsByTagName("*")].find((child) => child.localName === "link");
    if (!link) return "";
    return link.getAttribute("href") || link.textContent.trim();
  }

  function exportCandidatesCsv() {
    const rows = getCandidates()
      .sort((a, b) => b.score.total - a.score.total)
      .map((source, index) => {
        const idea = createContentPackage(source, findBestLawyerInput(source), false);
        return [
          index + 1,
          idea.washed_title,
          source.url,
          idea.scene_summary,
          idea.dangerous_sentence,
          idea.series,
          idea.legal_issue.join(", "),
          source.score.total >= 12 ? "상" : "중",
          source.needs_lawyer_review ? "Y" : "N",
        ];
      });
    const header = ["우선순위", "소재 제목", "원문 링크", "장면 한 줄", "위험 문장", "시리즈", "법률 쟁점", "영상화 난이도", "검수 필요"];
    downloadFile(`hwang-content-candidates-${toDateInput(new Date())}.csv`, "\ufeff" + [header, ...rows].map(toCsvRow).join("\r\n"), "text/csv");
  }

  function exportJson() {
    downloadFile(
      `hwang-content-workbench-${toDateInput(new Date())}.json`,
      JSON.stringify(state, null, 2),
      "application/json",
    );
  }

  function importJson(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        state = normalizeState(parsed);
        currentIdea = null;
        renderAll();
        toast("JSON 데이터를 복원했습니다.");
      } catch {
        toast("JSON 파일을 복원하지 못했습니다.");
      } finally {
        event.target.value = "";
      }
    };
    reader.readAsText(file);
  }

  function downloadFile(filename, content, mime) {
    const blob = new Blob([content], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function toCsvRow(row) {
    return row
      .map((cell) => {
        const value = String(cell ?? "");
        return `"${value.replace(/"/g, '""')}"`;
      })
      .join(",");
  }

  function statusLabel(status) {
    if (status === "review") return "검수 요청";
    if (status === "approved") return "승인";
    return "초안";
  }

  function getActiveWeek() {
    const day = new Date().getDate();
    if (day <= 7) return MONTHLY_FLOW[0];
    if (day <= 14) return MONTHLY_FLOW[1];
    if (day <= 21) return MONTHLY_FLOW[2];
    return MONTHLY_FLOW[3];
  }

  function splitList(value) {
    if (Array.isArray(value)) return value.filter(Boolean);
    return String(value || "")
      .split(/[,،，/|]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function unique(list) {
    return [...new Set(list.filter(Boolean))];
  }

  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function copyTextFallback(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.inset = "0 auto auto 0";
    textarea.style.width = "1px";
    textarea.style.height = "1px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
    textarea.remove();
    return copied;
  }

  function trimTo(text, max) {
    const value = String(text || "").trim();
    return value.length > max ? `${value.slice(0, max - 1)}…` : value;
  }

  function stripQuotes(value) {
    return String(value || "").replace(/[“”"]/g, "").trim();
  }

  function safeExternalUrl(value) {
    const url = String(value || "").trim();
    if (!url) return "";
    try {
      const parsed = new URL(url);
      return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
    } catch {
      return "";
    }
  }

  function stripEndPunctuation(value) {
    return String(value || "").trim().replace(/[.!?。！？]+$/, "");
  }

  function sentenceText(value) {
    const text = stripEndPunctuation(value);
    return text ? `${text}.` : "";
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function makeId(prefix) {
    const stamp = new Date().toISOString().replace(/\D/g, "").slice(0, 14);
    return `${prefix}_${stamp}_${Math.random().toString(36).slice(2, 7)}`;
  }

  function nowStamp() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function toDateInput(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) return toDateInput(new Date());
    const pad = (n) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function cleanHtml(value) {
    const div = document.createElement("div");
    div.innerHTML = String(value || "");
    return div.textContent.trim();
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function refreshIcons() {
    if (window.lucide?.createIcons) window.lucide.createIcons();
  }

  function toast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    window.clearTimeout(toast.timer);
    toast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2200);
  }
})();
