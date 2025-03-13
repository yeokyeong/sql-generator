import { ApiBusinessOpenCloseStats, ClientBusinessStats } from "../@types"

// 매핑 함수 (backend -> frontend)
export function mapBusinessStats(data: ApiBusinessOpenCloseStats): ClientBusinessStats {
    return {
      id: data.id,
      areaCode: data.trdar_cd, //상권 코드
      areaName: data.trdar_cd_nm, //상권 코드 명
      areaTypeCode: data.trdar_se_cd, //상권 구분 코드
      areaTypeName: data.trdar_se_cd_nm, //상권 구분 코드 명
      industryCode: data.svc_induty_cd, //서비스 업종 코드
      industryName: data.svc_induty_cd_nm, //서비스 업종 코드 명
      totalStores: data.stor_co, //점포 수
      openStores: data.opbiz_stor_co, //개업 점포 수
      closedStores: data.clsbiz_stor_co,// 폐업 점포 수
      franchiseStores: data.frc_stor_co, //프랜차이즈 점포 수
      similarIndustryStores: data.similr_induty_stor_co,// 유사 업종 점포 수
      openRate: data.opbiz_rt, //개업 율
      closeRate: data.clsbiz_rt, //폐업 율
      quarterCode: data.stdr_yyqu_cd, //기준 년분기 코드
    };
  }