import { TimeResolutionType, timeResolutionTypeFromJSON, timeResolutionTypeToJSON } from "../../common/time_resolution";
import { HistoricalPrice, HistoricalPriceAmino, HistoricalPriceSDKType } from "../../price/historical_price";
import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryHistoricalNavRequest {
  denom: string;
  timeResolutionType: TimeResolutionType;
  timeResolutionValue: number;
  from: string;
  to: string;
}
export interface QueryHistoricalNavRequestProtoMsg {
  typeUrl: "/pryzmatics.server.price.QueryHistoricalNavRequest";
  value: Uint8Array;
}
export interface QueryHistoricalNavRequestAmino {
  denom?: string;
  time_resolution_type?: TimeResolutionType;
  time_resolution_value?: number;
  from?: string;
  to?: string;
}
export interface QueryHistoricalNavRequestAminoMsg {
  type: "/pryzmatics.server.price.QueryHistoricalNavRequest";
  value: QueryHistoricalNavRequestAmino;
}
export interface QueryHistoricalNavRequestSDKType {
  denom: string;
  time_resolution_type: TimeResolutionType;
  time_resolution_value: number;
  from: string;
  to: string;
}
export interface QueryHistoricalNavResponse {
  historicalNav: HistoricalPrice[];
}
export interface QueryHistoricalNavResponseProtoMsg {
  typeUrl: "/pryzmatics.server.price.QueryHistoricalNavResponse";
  value: Uint8Array;
}
export interface QueryHistoricalNavResponseAmino {
  historical_nav?: HistoricalPriceAmino[];
}
export interface QueryHistoricalNavResponseAminoMsg {
  type: "/pryzmatics.server.price.QueryHistoricalNavResponse";
  value: QueryHistoricalNavResponseAmino;
}
export interface QueryHistoricalNavResponseSDKType {
  historical_nav: HistoricalPriceSDKType[];
}
function createBaseQueryHistoricalNavRequest(): QueryHistoricalNavRequest {
  return {
    denom: "",
    timeResolutionType: 0,
    timeResolutionValue: 0,
    from: "",
    to: ""
  };
}
export const QueryHistoricalNavRequest = {
  typeUrl: "/pryzmatics.server.price.QueryHistoricalNavRequest",
  is(o: any): o is QueryHistoricalNavRequest {
    return o && (o.$typeUrl === QueryHistoricalNavRequest.typeUrl || typeof o.denom === "string" && isSet(o.timeResolutionType) && typeof o.timeResolutionValue === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  isSDK(o: any): o is QueryHistoricalNavRequestSDKType {
    return o && (o.$typeUrl === QueryHistoricalNavRequest.typeUrl || typeof o.denom === "string" && isSet(o.time_resolution_type) && typeof o.time_resolution_value === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  isAmino(o: any): o is QueryHistoricalNavRequestAmino {
    return o && (o.$typeUrl === QueryHistoricalNavRequest.typeUrl || typeof o.denom === "string" && isSet(o.time_resolution_type) && typeof o.time_resolution_value === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  encode(message: QueryHistoricalNavRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.timeResolutionType !== 0) {
      writer.uint32(16).int32(message.timeResolutionType);
    }
    if (message.timeResolutionValue !== 0) {
      writer.uint32(24).uint32(message.timeResolutionValue);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHistoricalNavRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalNavRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.timeResolutionType = (reader.int32() as any);
          break;
        case 3:
          message.timeResolutionValue = reader.uint32();
          break;
        case 4:
          message.from = reader.string();
          break;
        case 5:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalNavRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      timeResolutionType: isSet(object.timeResolutionType) ? timeResolutionTypeFromJSON(object.timeResolutionType) : -1,
      timeResolutionValue: isSet(object.timeResolutionValue) ? Number(object.timeResolutionValue) : 0,
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryHistoricalNavRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.timeResolutionType !== undefined && (obj.timeResolutionType = timeResolutionTypeToJSON(message.timeResolutionType));
    message.timeResolutionValue !== undefined && (obj.timeResolutionValue = Math.round(message.timeResolutionValue));
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalNavRequest>): QueryHistoricalNavRequest {
    const message = createBaseQueryHistoricalNavRequest();
    message.denom = object.denom ?? "";
    message.timeResolutionType = object.timeResolutionType ?? 0;
    message.timeResolutionValue = object.timeResolutionValue ?? 0;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: QueryHistoricalNavRequestAmino): QueryHistoricalNavRequest {
    const message = createBaseQueryHistoricalNavRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
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
  toAmino(message: QueryHistoricalNavRequest, useInterfaces: boolean = true): QueryHistoricalNavRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.time_resolution_type = message.timeResolutionType === 0 ? undefined : message.timeResolutionType;
    obj.time_resolution_value = message.timeResolutionValue === 0 ? undefined : message.timeResolutionValue;
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalNavRequestAminoMsg): QueryHistoricalNavRequest {
    return QueryHistoricalNavRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalNavRequestProtoMsg, useInterfaces: boolean = true): QueryHistoricalNavRequest {
    return QueryHistoricalNavRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHistoricalNavRequest): Uint8Array {
    return QueryHistoricalNavRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalNavRequest): QueryHistoricalNavRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QueryHistoricalNavRequest",
      value: QueryHistoricalNavRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHistoricalNavRequest.typeUrl, QueryHistoricalNavRequest);
function createBaseQueryHistoricalNavResponse(): QueryHistoricalNavResponse {
  return {
    historicalNav: []
  };
}
export const QueryHistoricalNavResponse = {
  typeUrl: "/pryzmatics.server.price.QueryHistoricalNavResponse",
  is(o: any): o is QueryHistoricalNavResponse {
    return o && (o.$typeUrl === QueryHistoricalNavResponse.typeUrl || Array.isArray(o.historicalNav) && (!o.historicalNav.length || HistoricalPrice.is(o.historicalNav[0])));
  },
  isSDK(o: any): o is QueryHistoricalNavResponseSDKType {
    return o && (o.$typeUrl === QueryHistoricalNavResponse.typeUrl || Array.isArray(o.historical_nav) && (!o.historical_nav.length || HistoricalPrice.isSDK(o.historical_nav[0])));
  },
  isAmino(o: any): o is QueryHistoricalNavResponseAmino {
    return o && (o.$typeUrl === QueryHistoricalNavResponse.typeUrl || Array.isArray(o.historical_nav) && (!o.historical_nav.length || HistoricalPrice.isAmino(o.historical_nav[0])));
  },
  encode(message: QueryHistoricalNavResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.historicalNav) {
      HistoricalPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHistoricalNavResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalNavResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.historicalNav.push(HistoricalPrice.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalNavResponse {
    return {
      historicalNav: Array.isArray(object?.historicalNav) ? object.historicalNav.map((e: any) => HistoricalPrice.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryHistoricalNavResponse): unknown {
    const obj: any = {};
    if (message.historicalNav) {
      obj.historicalNav = message.historicalNav.map(e => e ? HistoricalPrice.toJSON(e) : undefined);
    } else {
      obj.historicalNav = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalNavResponse>): QueryHistoricalNavResponse {
    const message = createBaseQueryHistoricalNavResponse();
    message.historicalNav = object.historicalNav?.map(e => HistoricalPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryHistoricalNavResponseAmino): QueryHistoricalNavResponse {
    const message = createBaseQueryHistoricalNavResponse();
    message.historicalNav = object.historical_nav?.map(e => HistoricalPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryHistoricalNavResponse, useInterfaces: boolean = true): QueryHistoricalNavResponseAmino {
    const obj: any = {};
    if (message.historicalNav) {
      obj.historical_nav = message.historicalNav.map(e => e ? HistoricalPrice.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.historical_nav = message.historicalNav;
    }
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalNavResponseAminoMsg): QueryHistoricalNavResponse {
    return QueryHistoricalNavResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalNavResponseProtoMsg, useInterfaces: boolean = true): QueryHistoricalNavResponse {
    return QueryHistoricalNavResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHistoricalNavResponse): Uint8Array {
    return QueryHistoricalNavResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalNavResponse): QueryHistoricalNavResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.price.QueryHistoricalNavResponse",
      value: QueryHistoricalNavResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHistoricalNavResponse.typeUrl, QueryHistoricalNavResponse);