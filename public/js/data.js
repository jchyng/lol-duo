// 경로 상수
export const PATHS = {
  POSITION_ICONS: "/images/icons/position",
  RANK_ICONS: "/images/icons/rank",
};

// 포지션 데이터
export const positions = [
  { value: "any", label: "전체", icon: `${PATHS.POSITION_ICONS}/any.svg` },
  { value: "top", label: "탑", icon: `${PATHS.POSITION_ICONS}/top.svg` },
  {
    value: "jungle",
    label: "정글",
    icon: `${PATHS.POSITION_ICONS}/jungle.svg`,
  },
  { value: "mid", label: "미드", icon: `${PATHS.POSITION_ICONS}/mid.svg` },
  {
    value: "bottom",
    label: "바텀",
    icon: `${PATHS.POSITION_ICONS}/bottom.svg`,
  },
  {
    value: "support",
    label: "서포터",
    icon: `${PATHS.POSITION_ICONS}/support.svg`,
  },
];

// 랭크 데이터
export const ranks = [
  { value: "all", label: "티어 전체" },
  {
    value: "unranked",
    label: "언랭크",
    icon: `${PATHS.RANK_ICONS}/unranked.png`,
  },
  { value: "iron", label: "아이언", icon: `${PATHS.RANK_ICONS}/iron.png` },
  { value: "bronze", label: "브론즈", icon: `${PATHS.RANK_ICONS}/bronze.png` },
  { value: "silver", label: "실버", icon: `${PATHS.RANK_ICONS}/silver.png` },
  { value: "gold", label: "골드", icon: `${PATHS.RANK_ICONS}/gold.png` },
  {
    value: "platinum",
    label: "플래티넘",
    icon: `${PATHS.RANK_ICONS}/platinum.png`,
  },
  {
    value: "emerald",
    label: "에메랄드",
    icon: `${PATHS.RANK_ICONS}/emerald.png`,
  },
  {
    value: "diamond",
    label: "다이아몬드",
    icon: `${PATHS.RANK_ICONS}/diamond.png`,
  },
  { value: "master", label: "마스터", icon: `${PATHS.RANK_ICONS}/master.png` },
  {
    value: "grandmaster",
    label: "그랜드마스터",
    icon: `${PATHS.RANK_ICONS}/grandmaster.png`,
  },
  {
    value: "challenger",
    label: "챌린저",
    icon: `${PATHS.RANK_ICONS}/challenger.png`,
  },
];

// 랭크 타입 데이터
export const rankTypes = [
  { value: "solo", label: "솔로랭크" },
  { value: "flex", label: "자유랭크" },
  { value: "normal", label: "일반" },
];
