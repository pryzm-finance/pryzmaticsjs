import { TimeResolutionType, timeResolutionTypeFromJSON, timeResolutionTypeToJSON } from "../../common/time_resolution";
import { HistoricalMarketCap, HistoricalMarketCapAmino, HistoricalMarketCapSDKType } from "../../statistics/historical_market_cap";
import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryHistoricalMarketCapRequest {
  timeResolutionType: TimeResolutionType;
  timeResolutionValue: number;
  from: string;
  to: string;
}
export interface QueryHistoricalMarketCapRequestProtoMsg {
  typeUrl: "/pryzmatics.server.statistics.QueryHistoricalMarketCapRequest";
  value: Uint8Array;
}
export interface QueryHistoricalMarketCapRequestAmino {
  time_resolution_type?: TimeResolutionType;
  time_resolution_value?: number;
  from?: string;
  to?: string;
}
export interface QueryHistoricalMarketCapRequestAminoMsg {
  type: "/pryzmatics.server.statistics.QueryHistoricalMarketCapRequest";
  value: QueryHistoricalMarketCapRequestAmino;
}
export interface QueryHistoricalMarketCapRequestSDKType {
  time_resolution_type: TimeResolutionType;
  time_resolution_value: number;
  from: string;
  to: string;
}
export interface QueryHistoricalMarketCapResponse {
  historicalMarketCaps: HistoricalMarketCap[];
}
export interface QueryHistoricalMarketCapResponseProtoMsg {
  typeUrl: "/pryzmatics.server.statistics.QueryHistoricalMarketCapResponse";
  value: Uint8Array;
}
export interface QueryHistoricalMarketCapResponseAmino {
  historical_market_caps?: HistoricalMarketCapAmino[];
}
export interface QueryHistoricalMarketCapResponseAminoMsg {
  type: "/pryzmatics.server.statistics.QueryHistoricalMarketCapResponse";
  value: QueryHistoricalMarketCapResponseAmino;
}
export interface QueryHistoricalMarketCapResponseSDKType {
  historical_market_caps: HistoricalMarketCapSDKType[];
}
function createBaseQueryHistoricalMarketCapRequest(): QueryHistoricalMarketCapRequest {
  return {
    timeResolutionType: 0,
    timeResolutionValue: 0,
    from: "",
    to: ""
  };
}
export const QueryHistoricalMarketCapRequest = {
  typeUrl: "/pryzmatics.server.statistics.QueryHistoricalMarketCapRequest",
  is(o: any): o is QueryHistoricalMarketCapRequest {
    return o && (o.$typeUrl === QueryHistoricalMarketCapRequest.typeUrl || isSet(o.timeResolutionType) && typeof o.timeResolutionValue === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  isSDK(o: any): o is QueryHistoricalMarketCapRequestSDKType {
    return o && (o.$typeUrl === QueryHistoricalMarketCapRequest.typeUrl || isSet(o.time_resolution_type) && typeof o.time_resolution_value === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  isAmino(o: any): o is QueryHistoricalMarketCapRequestAmino {
    return o && (o.$typeUrl === QueryHistoricalMarketCapRequest.typeUrl || isSet(o.time_resolution_type) && typeof o.time_resolution_value === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  encode(message: QueryHistoricalMarketCapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timeResolutionType !== 0) {
      writer.uint32(8).int32(message.timeResolutionType);
    }
    if (message.timeResolutionValue !== 0) {
      writer.uint32(16).uint32(message.timeResolutionValue);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHistoricalMarketCapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalMarketCapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeResolutionType = (reader.int32() as any);
          break;
        case 2:
          message.timeResolutionValue = reader.uint32();
          break;
        case 3:
          message.from = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalMarketCapRequest {
    return {
      timeResolutionType: isSet(object.timeResolutionType) ? timeResolutionTypeFromJSON(object.timeResolutionType) : -1,
      timeResolutionValue: isSet(object.timeResolutionValue) ? Number(object.timeResolutionValue) : 0,
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryHistoricalMarketCapRequest): unknown {
    const obj: any = {};
    message.timeResolutionType !== undefined && (obj.timeResolutionType = timeResolutionTypeToJSON(message.timeResolutionType));
    message.timeResolutionValue !== undefined && (obj.timeResolutionValue = Math.round(message.timeResolutionValue));
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalMarketCapRequest>): QueryHistoricalMarketCapRequest {
    const message = createBaseQueryHistoricalMarketCapRequest();
    message.timeResolutionType = object.timeResolutionType ?? 0;
    message.timeResolutionValue = object.timeResolutionValue ?? 0;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: QueryHistoricalMarketCapRequestAmino): QueryHistoricalMarketCapRequest {
    const message = createBaseQueryHistoricalMarketCapRequest();
    if (object.time_resolution_type !== undefined && object.time_resolution_type !== null) {
      message.timeResolutionType = object.time_resolution_type;
    }
    if (object.time_resolution_value !== undefined && object.time_resolution_value !== null) {
      message.timeResolutionValue = object.time_resolution_value;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    return message;
  },
  toAmino(message: QueryHistoricalMarketCapRequest, useInterfaces: boolean = true): QueryHistoricalMarketCapRequestAmino {
    const obj: any = {};
    obj.time_resolution_type = message.timeResolutionType === 0 ? undefined : message.timeResolutionType;
    obj.time_resolution_value = message.timeResolutionValue === 0 ? undefined : message.timeResolutionValue;
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalMarketCapRequestAminoMsg): QueryHistoricalMarketCapRequest {
    return QueryHistoricalMarketCapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalMarketCapRequestProtoMsg, useInterfaces: boolean = true): QueryHistoricalMarketCapRequest {
    return QueryHistoricalMarketCapRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHistoricalMarketCapRequest): Uint8Array {
    return QueryHistoricalMarketCapRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalMarketCapRequest): QueryHistoricalMarketCapRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.statistics.QueryHistoricalMarketCapRequest",
      value: QueryHistoricalMarketCapRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHistoricalMarketCapRequest.typeUrl, QueryHistoricalMarketCapRequest);
function createBaseQueryHistoricalMarketCapResponse(): QueryHistoricalMarketCapResponse {
  return {
    historicalMarketCaps: []
  };
}
export const QueryHistoricalMarketCapResponse = {
  typeUrl: "/pryzmatics.server.statistics.QueryHistoricalMarketCapResponse",
  is(o: any): o is QueryHistoricalMarketCapResponse {
    return o && (o.$typeUrl === QueryHistoricalMarketCapResponse.typeUrl || Array.isArray(o.historicalMarketCaps) && (!o.historicalMarketCaps.length || HistoricalMarketCap.is(o.historicalMarketCaps[0])));
  },
  isSDK(o: any): o is QueryHistoricalMarketCapResponseSDKType {
    return o && (o.$typeUrl === QueryHistoricalMarketCapResponse.typeUrl || Array.isArray(o.historical_market_caps) && (!o.historical_market_caps.length || HistoricalMarketCap.isSDK(o.historical_market_caps[0])));
  },
  isAmino(o: any): o is QueryHistoricalMarketCapResponseAmino {
    return o && (o.$typeUrl === QueryHistoricalMarketCapResponse.typeUrl || Array.isArray(o.historical_market_caps) && (!o.historical_market_caps.length || HistoricalMarketCap.isAmino(o.historical_market_caps[0])));
  },
  encode(message: QueryHistoricalMarketCapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.historicalMarketCaps) {
      HistoricalMarketCap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHistoricalMarketCapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalMarketCapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.historicalMarketCaps.push(HistoricalMarketCap.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalMarketCapResponse {
    return {
      historicalMarketCaps: Array.isArray(object?.historicalMarketCaps) ? object.historicalMarketCaps.map((e: any) => HistoricalMarketCap.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryHistoricalMarketCapResponse): unknown {
    const obj: any = {};
    if (message.historicalMarketCaps) {
      obj.historicalMarketCaps = message.historicalMarketCaps.map(e => e ? HistoricalMarketCap.toJSON(e) : undefined);
    } else {
      obj.historicalMarketCaps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalMarketCapResponse>): QueryHistoricalMarketCapResponse {
    const message = createBaseQueryHistoricalMarketCapResponse();
    message.historicalMarketCaps = object.historicalMarketCaps?.map(e => HistoricalMarketCap.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryHistoricalMarketCapResponseAmino): QueryHistoricalMarketCapResponse {
    const message = createBaseQueryHistoricalMarketCapResponse();
    message.historicalMarketCaps = object.historical_market_caps?.map(e => HistoricalMarketCap.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryHistoricalMarketCapResponse, useInterfaces: boolean = true): QueryHistoricalMarketCapResponseAmino {
    const obj: any = {};
    if (message.historicalMarketCaps) {
      obj.historical_market_caps = message.historicalMarketCaps.map(e => e ? HistoricalMarketCap.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.historical_market_caps = message.historicalMarketCaps;
    }
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalMarketCapResponseAminoMsg): QueryHistoricalMarketCapResponse {
    return QueryHistoricalMarketCapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalMarketCapResponseProtoMsg, useInterfaces: boolean = true): QueryHistoricalMarketCapResponse {
    return QueryHistoricalMarketCapResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHistoricalMarketCapResponse): Uint8Array {
    return QueryHistoricalMarketCapResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalMarketCapResponse): QueryHistoricalMarketCapResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.statistics.QueryHistoricalMarketCapResponse",
      value: QueryHistoricalMarketCapResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHistoricalMarketCapResponse.typeUrl, QueryHistoricalMarketCapResponse);