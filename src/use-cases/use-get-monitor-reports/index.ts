// src/lib/fetchData.ts
import { useApi } from "@/hooks/use-api";

export type ReportData = {
    Date: string;
    Time: string;
    Duration: number;
    Title: string;
    StationName: string;
    StationType: number;
    AdBrandName: string;
    AdAdvertiserName: string;
    CityName: string;
    ProvinceCode: string;
    EPG: string;
    EPGCategory: string;
    EPGSubCategory: string;
    Tags: string;
    PriceValue: string;
    SpotType: number;
    StationNetworkName: string;
    AdCategoryName: string;
    AdSubCategoryName: string;
    BreakEPG: number;
    BreakIndex: number;
    SubSpotType: number;
    Public_Oid: string;
};

export type ApiResponse = {
    Data: ReportData[];
    Total: number;
    channelType: number;
    stationAvailability: number;
    ExportMode: number;
    type: number;
    BeginDate: string;
    EndDate: string;
    FilteredBy: any[];
    status: number;
};

export async function fetchReportData(params?: Record<string, any>): Promise<ReportData[]> {
    const api = useApi();
  
    try {
      const response = await api.post<ApiResponse>('/monitor', { params });
      return response.data.Data;
    } catch (error) {
      console.error('Error fetching report data:', error);
      throw new Error('Falha ao buscar os dados do relatório');
    }
  }
