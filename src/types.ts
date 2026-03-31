export interface SiteContent {
  hero: {
    headline: string;
    subHeadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  service: {
    title: string;
    description: string;
    whyReddit: string;
    whyText: string;
    workScope: {
      id: string;
      title: string;
      description: string;
      icon: string;
    }[];
  };
  whyUs: {
    title: string;
    values: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  faq: {
    id: string;
    question: string;
    answer: string;
  }[];
}

export const initialContent: SiteContent = {
  hero: {
    headline: "영어권 시장 정복,\n37명의 원어민 레딧 전문가들과 함께 하세요.",
    subHeadline: "영어권 최대 커뮤니티 레딧으로 커뮤니티 마케팅부터 SEO,\nGEO까지 연결 가능한 브랜드 성장 파트너",
    ctaPrimary: "무료 컨설팅 신청하기",
    ctaSecondary: "사업 소개서 보기"
  },
  service: {
    title: "레딧 바이럴 콘텐츠,\n아무나 만들 수 없습니다",
    description: "",
    whyReddit: "전세계 최대 규모 커뮤니티이자, ROAS 1위 광고 채널입니다. 소비자들이 구매 직전 브랜드를 최종 검토하는 가장 중요한 플랫폼이기도 합니다.",
    whyText: "레딧은 화려한 비주얼보다 글의 맥락이 더 중요합니다. 광고 느낌이 없는 텍스트 콘텐츠는 구글 검색결과 상단과 생성형 AI 검색에 반복 노출되며, 비주얼 중심 광고보다 더 높은 신뢰를 형성합니다.",
    workScope: [
      { id: "kpop", title: "K-Pop", description: "글로벌 팬덤을 움직이는 커뮤니티 바이럴", icon: "Music" },
      { id: "kclinic", title: "K-Clinic", description: "병의원 후기와 경험 공유를 통한 신뢰도 형성", icon: "Stethoscope" },
      { id: "kbeauty", title: "K-Beauty", description: "실사용 후기와 추천 기반의 브랜드 신뢰 구축", icon: "Sparkles" },
      { id: "kfood", title: "K-Food", description: "호기심을 자극하고 트렌드를 주도하는 리뷰", icon: "Utensils" }
    ]
  },
  whyUs: {
    title: "생성형 AI 검색 시대,\n브랜드 경쟁력은 텍스트 콘텐츠에서 갈립니다",
    values: [
      { id: "ai", title: "1. 사람 냄새 나는 콘텐츠", description: "레딧에서는 광고 티가 나는 번역투보다 실제 고객의 경험이 드러나는 글이 중요합니다. 브리닷은 각 산업에 특화된 37명의 원어민 전문가들이 브랜드 맥락&현지 반응까지 담습니다." },
      { id: "search", title: "2. 검색에 강한 콘텐츠", description: "비주얼 중심의 SNS는 빠르게 소비되지만, 레딧 콘텐츠는 검색 결과에 오래 남습니다. 구매의도가 높은 고객이 찾는 플랫폼인 만큼, 콘텐츠가 쌓일수록 브랜드 신뢰도가 높아집니다." },
      { id: "geo", title: "3. AI가 선택하는 콘텐츠", description: "AI는 브랜드가 제공하는 정보와 실제 고객 반응이 담긴 텍스트를 종합적으로 봅니다. 브리닷은 고객의 시선에 브랜드 의도를 녹여, AI시대에 더 유리한 콘텐츠를 만듭니다." }
    ]
  },
  faq: [
    { id: "q1", question: "레딧(Reddit)은 어떤 플랫폼인가요?", answer: "Reddit은 관심사별 커뮤니티가 모여 있는 영어권 대표 플랫폼입니다. 소비자들은 제품을 구매하기 전, 실제 사용자들의 후기와 경험, 반응을 확인하기 위해 Reddit을 참고합니다. 소셜 미디어가 아니라, 브랜드를 검증하고 여론이 형성되는 커뮤니티 기반 플랫폼입니다." },
    { id: "q2", question: "레딧(Reddit) 마케팅이 정말 필수적인가요?", answer: "영어권 시장에서는 광고보다 실제 사용자들의 후기와 토론이 구매 결정에 더 큰 영향을 주는 경우가 많습니다. 특히 Reddit은 구매 직전 소비자들이 제품을 최종 검토하는 채널 중 하나이기 때문에, 이곳에서 어떤 반응과 기록이 쌓이느냐가 브랜드 신뢰에 직접적인 영향을 줍니다." },
    { id: "q3", question: "GEO(생성형 AI 검색 최적화)는 어떻게 준비하나요?", answer: "GEO의 핵심은 AI가 참고할 수 있는 신뢰도 높은 브랜드 정보를 꾸준히 축적하는 것입니다. 브리닷은 Reddit을 중심으로 검색 결과에 남고 커뮤니티 안에서 축적되는 콘텐츠를 만들어, SEO와 GEO에 필요한 브랜드 기반을 함께 구축합니다." },
    { id: "q4", question: "AI를 사용해서 영어 콘텐츠를 만들면 되는 것 아닌가요?", answer: "AI는 초안 작성에는 도움을 줄 수 있지만, 실제 커뮤니티에서 신뢰를 얻는 콘텐츠는 별개의 문제입니다. Reddit은 분위기와 반응이 매우 중요한 플랫폼이라, 현지 감각 없이 작성된 글은 광고처럼 보이거나 어색하게 느껴질 수 있습니다. 브리닷은 원어민 전문가가 직접 개입해 이런 차이를 만듭니다." },
    { id: "q5", question: "Reddit 마케팅은 SEO에도 도움이 되나요?", answer: "레딧 마케팅은 검색광고와는 다르지만, 레딧 콘텐츠 자체가 검색 결과 상단에 노출될 수 있습니다. 특히 브랜드 관련 콘텐츠와 언급이 꾸준히 쌓이면, 장기적으로 SEO와 GEO에도 긍정적인 영향을 줄 수 있습니다." },
    { id: "q6", question: "얼마나 운영해야 효과가 나나요?", answer: "일부 콘텐츠는 빠르게 반응이 나오기도 하지만, 레딧 마케팅은 기본적으로 단발성보다 누적형에 가깝습니다. 콘텐츠가 쌓일수록 브랜드 인지도와 신뢰가 함께 올라가기 때문에, 일정 기간 꾸준히 운영할수록 효과가 안정적입니다." }
  ]
};
