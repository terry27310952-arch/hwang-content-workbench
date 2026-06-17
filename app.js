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

    els.lawyerForm.addEventListener("submit", onLawyerSubmit);
    els.lawyerList.addEventListener("click", onLawyerAction);

    els.generateIdeaBtn.addEventListener("click", onGenerateIdea);
    els.copyIdeaBtn.addEventListener("click", onCopyIdea);
    els.saveIdeaBtn.addEventListener("click", onSaveIdea);
    els.ideaList.addEventListener("click", onIdeaAction);

    els.exportCsvBtn.addEventListener("click", exportCandidatesCsv);
    els.exportJsonBtn.addEventListener("click", exportJson);
    els.importJsonInput.addEventListener("change", importJson);
    els.goOutputBtn.addEventListener("click", () => switchView("output"));
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

  function renderDashboard() {
    const candidates = getCandidates();
    const priority = getPriorityCandidates();
    const pendingReview =
      state.sources.filter((item) => item.needs_lawyer_review).length +
      state.ideas.filter((idea) => idea.status === "review").length;

    els.metricSources.textContent = String(state.sources.length);
    els.metricCandidates.textContent = String(candidates.length);
    els.metricPriority.textContent = String(priority.length);
    els.metricReview.textContent = String(pendingReview);

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
        if (filter === "candidate") return source.score.total >= 9;
        if (filter === "priority") return source.score.total >= 12;
        if (filter === "review") return source.needs_lawyer_review;
        return true;
      })
      .sort((a, b) => b.score.total - a.score.total);

    els.sourceList.innerHTML =
      items
        .map((source) => {
          const scoreClass = source.score.total >= 12 ? "priority" : source.score.total >= 9 ? "candidate" : "low";
          const categories = source.category?.length ? source.category : ["미분류"];
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
              <div class="source-actions">
                <button class="mini-button" type="button" data-action="generate" data-id="${escapeHtml(source.id)}">
                  <i data-lucide="sparkles"></i><span>콘텐츠화</span>
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
        })
        .join("") || `<div class="empty">수집 원문이 없습니다.</div>`;
    refreshIcons();
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
        .map((source) => `<option value="${escapeHtml(source.id)}">${escapeHtml(source.title)} · ${source.score.total}점</option>`)
        .join("") || `<option value="">원문 없음</option>`;
    els.lawyerSelect.innerHTML =
      `<option value="">자동 매칭</option>` +
      state.lawyerInputs
        .map((item) => `<option value="${escapeHtml(item.input_id)}">${escapeHtml(item.date)} · ${escapeHtml(item.situation || item.dangerous_sentence || "원석")}</option>`)
        .join("");

    if (!currentIdea && sortedSources.length) {
      currentIdea = createContentPackage(sortedSources[0], findBestLawyerInput(sortedSources[0]), false);
    }
    els.ideaPreview.textContent = currentIdea ? JSON.stringify(currentIdea, null, 2) : "{}";

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
        .sort((a, b) => b.priority - a.priority || String(b.content_id).localeCompare(String(a.content_id)))
        .map(
          (idea) => `
            <article class="idea-item">
              <div class="idea-top">
                <div class="idea-title">
                  <strong>${escapeHtml(idea.washed_title)}</strong>
                  <span>${escapeHtml(idea.series)} · 우선순위 ${escapeHtml(String(idea.priority))}</span>
                </div>
                <span class="status-badge ${idea.status === "approved" ? "approved" : idea.status === "review" ? "review" : ""}">
                  ${escapeHtml(statusLabel(idea.status))}
                </span>
              </div>
              <div class="pill-row">
                ${(idea.legal_issue || []).map((issue) => `<span class="pill">${escapeHtml(issue)}</span>`).join("")}
              </div>
              <div class="idea-summary">${escapeHtml(idea.opening_hook)}</div>
              <div class="idea-actions">
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
          `,
        )
        .join("") || `<div class="empty">저장된 콘텐츠 후보가 없습니다.</div>`;
    refreshIcons();
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

  async function onCopyIdea() {
    if (!currentIdea) return;
    const text = JSON.stringify(currentIdea, null, 2);
    try {
      await navigator.clipboard.writeText(text);
      toast("생성 결과를 복사했습니다.");
    } catch {
      toast("브라우저에서 클립보드를 허용하지 않았습니다.");
    }
  }

  function onSaveIdea() {
    if (!currentIdea) return;
    const idea = {
      ...currentIdea,
      content_id: makeId("idea"),
      status: "draft",
      saved_at: nowStamp(),
    };
    state.ideas.push(idea);
    renderAll();
    toast("콘텐츠 후보를 저장했습니다.");
  }

  function onIdeaAction(event) {
    const statusButton = event.target.closest("[data-idea-status]");
    const deleteButton = event.target.closest("[data-idea-delete]");
    if (statusButton) {
      const idea = state.ideas.find((item) => item.content_id === statusButton.dataset.id);
      if (!idea) return;
      idea.status = statusButton.dataset.ideaStatus;
      renderAll();
      toast("검수 상태를 변경했습니다.");
    }
    if (deleteButton) {
      state.ideas = state.ideas.filter((item) => item.content_id !== deleteButton.dataset.ideaDelete);
      renderAll();
      toast("콘텐츠 후보를 삭제했습니다.");
    }
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
    const titles = buildTitles(source, lawyer);
    const shortsTitles = buildShortsTitles(source, lawyer);
    const issueList = unique([...splitList(source.legal_issue), ...splitList(lawyer.legal_issue)]).slice(0, 5);
    const docs = unique([...documentsFor(source), ...splitList(lawyer.required_documents)]).slice(0, 6);
    const series = lawyer.content_angle || pickSeries(source);
    const dangerous = lawyer.dangerous_sentence || findDangerousSentence(source) || buildDangerousFallback(source);
    const scene = buildSceneSummary(source, lawyer);
    const priority = source.score.total >= 12 ? 1 : source.score.total >= 9 ? 2 : 3;

    return {
      content_id: persistId ? makeId("idea") : "preview",
      priority,
      source_type: lawyer.input_id ? `${source.source_type} + lawyer_input` : source.source_type,
      raw_topic: source.title,
      washed_title: titles[0],
      shorts_title: shortsTitles[0],
      title_candidates: titles,
      shorts_title_candidates: shortsTitles,
      series,
      opening_hook: buildOpeningHook(source, lawyer, scene),
      scene_summary: scene,
      dangerous_sentence: dangerous,
      legal_issue: issueList.length ? issueList : ["자료 검토 필요"],
      required_documents: docs.length ? docs : ["계약서", "카톡", "입금내역"],
      thumbnail_copy: buildThumbnailCopy(source, dangerous),
      key_scenes: buildKeyScenes(source, lawyer),
      comment_question: buildCommentQuestion(source, series),
      risk_note: buildRiskNote(source, lawyer),
      needs_lawyer_review: true,
      status: "draft",
    };
  }

  function buildTitles(source, lawyer) {
    const text = normalizeText([source.title, source.raw_summary, lawyer.raw_note].join(" "));
    const titles = [];
    const relation = source.people_relation && source.people_relation !== "기타" ? source.people_relation : "친구";

    if (/상표|브랜드|로고|아이디어/.test(text)) {
      titles.push(
        `같이 만든 브랜드인데 상표권자는 ${relation}였습니다`,
        "이름은 같이 지었는데, 권리는 혼자 가져갔습니다",
        "내 브랜드인데 내 이름이 없습니다",
      );
    }
    if (/정산|통장|매출|계좌|수익/.test(text)) {
      titles.push(
        "동업자가 통장을 안 보여줍니다. 이거 소송감인가요?",
        "정산표가 사라진 날, 동업은 끝났습니다",
        "“너 나 못 믿냐?” 이 말 나오면 위험합니다",
      );
    }
    if (/명의|사업자등록|대표/.test(text)) {
      titles.push(
        "돈도 냈고 일도 했는데, 서류상 사장은 친구였습니다",
        "내 가게인 줄 알았는데 내 이름이 없었습니다",
        "사업자등록증에 이름이 없으면 끝일까요?",
      );
    }
    if (/계정|비밀번호|비번|인스타|유튜브|스마트스토어|쇼핑몰/.test(text)) {
      titles.push(
        "같이 키운 계정, 비밀번호가 바뀐 날",
        "이 계정, 누가 가져가야 할까요?",
        "수익 계좌가 바뀌면 먼저 봐야 할 것들",
      );
    }
    if (/투자|빌려|대여금|차용증|원금/.test(text)) {
      titles.push(
        "돈 빌려줬더니 투자였다고 합니다",
        "“투자였잖아”라는 말이 나오는 이유",
        "가까운 사이의 돈거래, 끝나고 나면 증거 싸움입니다",
      );
    }

    titles.push(
      lawyer.situation ? `${lawyer.situation}. 이거 소송감인가요?` : `${source.title}. 이거 소송감인가요?`,
      "변호사가 보면 이건 그냥 싸움이 아닙니다",
    );
    return unique(titles).slice(0, 5);
  }

  function buildShortsTitles(source, lawyer) {
    const dangerous = lawyer.dangerous_sentence || findDangerousSentence(source);
    const base = dangerous ? [`“${stripQuotes(dangerous)}” 이 말 나오면 위험합니다`] : [];
    return unique([
      ...base,
      "잠깐만요. 이거 그냥 싸움 아닙니다",
      "대표님, 감정 말고 자료 봅시다",
      "계약서 없으면 기억력 싸움 됩니다",
      "감정적으로는 억울하지만, 법적으로는 입증해야 합니다",
    ]).slice(0, 5);
  }

  function buildOpeningHook(source, lawyer, scene) {
    if (lawyer.raw_note && lawyer.dangerous_sentence) {
      return `${scene} 그런데 상대방이 “${stripQuotes(lawyer.dangerous_sentence)}”라고 말했습니다.`;
    }
    if (/정산|통장|매출/.test(normalizeText(source.raw_summary))) {
      return "친구랑 같이 사업을 시작했는데요. 어느 날부터 매출과 정산표를 한 사람만 보고 있습니다.";
    }
    if (/상표|브랜드/.test(normalizeText(source.raw_summary))) {
      return "이름도 같이 짓고 손님도 같이 모았는데요. 상표권자는 한 명뿐이었습니다.";
    }
    return scene;
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

  function buildThumbnailCopy(source, dangerous) {
    const text = normalizeText([source.title, source.raw_summary].join(" "));
    if (/정산|통장/.test(text)) return ["통장을 안 보여준다", "친구였는데 피고", "정산표가 사라졌다"];
    if (/상표|브랜드/.test(text)) return ["상표권자는 친구", "내 브랜드가 아니다", "이름만 같이 지었다"];
    if (/계정|비번/.test(text)) return ["비번 바뀐 날", "계정은 누구 것", "수익 계좌가 바뀌었다"];
    return [trimTo(stripQuotes(dangerous), 16), "이거 소송감인가요?", "자료부터 봅시다"];
  }

  function buildKeyScenes(source, lawyer) {
    const dangerous = lawyer.dangerous_sentence || findDangerousSentence(source) || buildDangerousFallback(source);
    return [
      buildSceneSummary(source, lawyer),
      `상대방의 말: “${stripQuotes(dangerous)}”`,
      "변호사가 계약서, 입금내역, 카톡, 권한 자료를 순서대로 확인한다",
    ];
  }

  function buildCommentQuestion(source, series) {
    const text = normalizeText([source.title, source.raw_summary].join(" "));
    if (/투자|빌려/.test(text)) return "여러분이라면 이 돈을 투자로 보시나요, 빌려준 돈으로 보시나요?";
    if (/계정|비번/.test(text)) return "여러분이라면 이 계정을 누가 가져가야 한다고 보시나요?";
    if (/상표|브랜드/.test(text)) return "같이 만든 브랜드라면 상표권도 같이 가져야 한다고 보시나요?";
    if (series === "이거 소송감인가요?") return "여러분이라면 이 상황을 소송감으로 보시겠습니까?";
    return "여러분이라면 이 상황을 단순한 감정싸움으로 보시나요, 법적 분쟁으로 보시나요?";
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

  function trimTo(text, max) {
    const value = String(text || "").trim();
    return value.length > max ? `${value.slice(0, max - 1)}…` : value;
  }

  function stripQuotes(value) {
    return String(value || "").replace(/[“”"]/g, "").trim();
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
