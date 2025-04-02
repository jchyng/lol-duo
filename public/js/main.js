import { positions, ranks, rankTypes } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  // 포지션 아이콘 생성
  const positionIconsContainer = document.querySelector(".position-icons");
  positionIconsContainer.innerHTML = positions
    .map(
      (position) => `
        <li class="position-icon" role="listitem" data-position="${position.value}">
            <img src="${position.icon}" alt="${position.label}" width="16" height="16">
        </li>
    `
    )
    .join("");

  // 랭크 타입 옵션 생성
  const rankTypeSelect = document.querySelector(
    'select[aria-label="랭크 타입 선택"]'
  );
  rankTypeSelect.innerHTML = rankTypes
    .map(
      (type) => `
        <option value="${type.value}">${type.label}</option>
    `
    )
    .join("");

  // 티어 옵션 생성
  const tierSelect = document.querySelector('select[aria-label="티어 선택"]');
  tierSelect.innerHTML = ranks
    .map(
      (rank) => `
        <option value="${rank.value}">${rank.label}</option>
    `
    )
    .join("");

  // 포지션 아이콘 선택 기능
  const positionIcons = document.querySelectorAll(".position-icon");
  const anyPositionIcon = document.querySelector(
    '.position-icon[data-position="any"]'
  );

  // 초기 상태: '전체' 아이콘이 선택됨
  anyPositionIcon.classList.add("selected");

  // 각 포지션 아이콘에 클릭 이벤트 추가
  positionIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const position = this.getAttribute("data-position");

      // '전체' 아이콘 클릭 시
      if (position === "any") {
        // 모든 아이콘에서 selected 클래스 제거
        positionIcons.forEach((icon) => {
          icon.classList.remove("selected");
        });
        // '전체' 아이콘에만 selected 클래스 추가
        this.classList.add("selected");
      } else {
        // '전체' 아이콘에서 selected 클래스 제거
        anyPositionIcon.classList.remove("selected");
        // 클릭한 아이콘의 selected 클래스 토글
        this.classList.toggle("selected");

        // 선택된 포지션이 있는지 확인
        const hasSelectedPosition = Array.from(positionIcons).some(
          (icon) =>
            icon.getAttribute("data-position") !== "any" &&
            icon.classList.contains("selected")
        );

        // 선택된 포지션이 없으면 '전체' 아이콘 선택
        if (!hasSelectedPosition) {
          anyPositionIcon.classList.add("selected");
        }
      }
    });
  });
});
