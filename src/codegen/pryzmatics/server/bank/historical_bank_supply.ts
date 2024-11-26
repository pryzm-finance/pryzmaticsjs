import { TimeResolutionType, timeResolutionTypeFromJSON, timeResolutionTypeToJSON } from "../../common/time_resolution";
import { HistoricalBankSupply, HistoricalBankSupplyAmino, HistoricalBankSupplySDKType } from "../../bank/historical_bank_supply";
import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryHistoricalBankSupplyRequest {
  denom: string;
  timeResolutionType: TimeResolutionType;
  timeResolutionValue: number;
  from: string;
  to: string;
}
export interface QueryHistoricalBankSupplyRequestProtoMsg {
  typeUrl: "/pryzmatics.server.bank.QueryHistoricalBankSupplyRequest";
  value: Uint8Array;
}
export interface QueryHistoricalBankSupplyRequestAmino {
  denom?: string;
  time_resolution_type?: TimeResolutionType;
  time_resolution_value?: number;
  from?: string;
  to?: string;
}
export interface QueryHistoricalBankSupplyRequestAminoMsg {
  type: "/pryzmatics.server.bank.QueryHistoricalBankSupplyRequest";
  value: QueryHistoricalBankSupplyRequestAmino;
}
export interface QueryHistoricalBankSupplyRequestSDKType {
  denom: string;
  time_resolution_type: TimeResolutionType;
  time_resolution_value: number;
  from: string;
  to: string;
}
export interface QueryHistoricalBankSupplyResponse {
  historicalSupplies: HistoricalBankSupply[];
}
export interface QueryHistoricalBankSupplyResponseProtoMsg {
  typeUrl: "/pryzmatics.server.bank.QueryHistoricalBankSupplyResponse";
  value: Uint8Array;
}
export interface QueryHistoricalBankSupplyResponseAmino {
  historical_supplies?: HistoricalBankSupplyAmino[];
}
export interface QueryHistoricalBankSupplyResponseAminoMsg {
  type: "/pryzmatics.server.bank.QueryHistoricalBankSupplyResponse";
  value: QueryHistoricalBankSupplyResponseAmino;
}
export interface QueryHistoricalBankSupplyResponseSDKType {
  historical_supplies: HistoricalBankSupplySDKType[];
}
function createBaseQueryHistoricalBankSupplyRequest(): QueryHistoricalBankSupplyRequest {
  return {
    denom: "",
    timeResolutionType: 0,
    timeResolutionValue: 0,
    from: "",
    to: ""
  };
}
export const QueryHistoricalBankSupplyRequest = {
  typeUrl: "/pryzmatics.server.bank.QueryHistoricalBankSupplyRequest",
  is(o: any): o is QueryHistoricalBankSupplyRequest {
    return o && (o.$typeUrl === QueryHistoricalBankSupplyRequest.typeUrl || typeof o.denom === "string" && isSet(o.timeResolutionType) && typeof o.timeResolutionValue === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  isSDK(o: any): o is QueryHistoricalBankSupplyRequestSDKType {
    return o && (o.$typeUrl === QueryHistoricalBankSupplyRequest.typeUrl || typeof o.denom === "string" && isSet(o.time_resolution_type) && typeof o.time_resolution_value === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  isAmino(o: any): o is QueryHistoricalBankSupplyRequestAmino {
    return o && (o.$typeUrl === QueryHistoricalBankSupplyRequest.typeUrl || typeof o.denom === "string" && isSet(o.time_resolution_type) && typeof o.time_resolution_value === "number" && typeof o.from === "string" && typeof o.to === "string");
  },
  encode(message: QueryHistoricalBankSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHistoricalBankSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalBankSupplyRequest();
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
  fromJSON(object: any): QueryHistoricalBankSupplyRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      timeResolutionType: isSet(object.timeResolutionType) ? timeResolutionTypeFromJSON(object.timeResolutionType) : -1,
      timeResolutionValue: isSet(object.timeResolutionValue) ? Number(object.timeResolutionValue) : 0,
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  toJSON(message: QueryHistoricalBankSupplyRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.timeResolutionType !== undefined && (obj.timeResolutionType = timeResolutionTypeToJSON(message.timeResolutionType));
    message.timeResolutionValue !== undefined && (obj.timeResolutionValue = Math.round(message.timeResolutionValue));
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalBankSupplyRequest>): QueryHistoricalBankSupplyRequest {
    const message = createBaseQueryHistoricalBankSupplyRequest();
    message.denom = object.denom ?? "";
    message.timeResolutionType = object.timeResolutionType ?? 0;
    message.timeResolutionValue = object.timeResolutionValue ?? 0;
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: QueryHistoricalBankSupplyRequestAmino): QueryHistoricalBankSupplyRequest {
    const message = createBaseQueryHistoricalBankSupplyRequest();
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
  toAmino(message: QueryHistoricalBankSupplyRequest, useInterfaces: boolean = true): QueryHistoricalBankSupplyRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.time_resolution_type = message.timeResolutionType === 0 ? undefined : message.timeResolutionType;
    obj.time_resolution_value = message.timeResolutionValue === 0 ? undefined : message.timeResolutionValue;
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalBankSupplyRequestAminoMsg): QueryHistoricalBankSupplyRequest {
    return QueryHistoricalBankSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalBankSupplyRequestProtoMsg, useInterfaces: boolean = true): QueryHistoricalBankSupplyRequest {
    return QueryHistoricalBankSupplyRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHistoricalBankSupplyRequest): Uint8Array {
    return QueryHistoricalBankSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalBankSupplyRequest): QueryHistoricalBankSupplyRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.bank.QueryHistoricalBankSupplyRequest",
      value: QueryHistoricalBankSupplyRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHistoricalBankSupplyRequest.typeUrl, QueryHistoricalBankSupplyRequest);
function createBaseQueryHistoricalBankSupplyResponse(): QueryHistoricalBankSupplyResponse {
  return {
    historicalSupplies: []
  };
}
export const QueryHistoricalBankSupplyResponse = {
  typeUrl: "/pryzmatics.server.bank.QueryHistoricalBankSupplyResponse",
  is(o: any): o is QueryHistoricalBankSupplyResponse {
    return o && (o.$typeUrl === QueryHistoricalBankSupplyResponse.typeUrl || Array.isArray(o.historicalSupplies) && (!o.historicalSupplies.length || HistoricalBankSupply.is(o.historicalSupplies[0])));
  },
  isSDK(o: any): o is QueryHistoricalBankSupplyResponseSDKType {
    return o && (o.$typeUrl === QueryHistoricalBankSupplyResponse.typeUrl || Array.isArray(o.historical_supplies) && (!o.historical_supplies.length || HistoricalBankSupply.isSDK(o.historical_supplies[0])));
  },
  isAmino(o: any): o is QueryHistoricalBankSupplyResponseAmino {
    return o && (o.$typeUrl === QueryHistoricalBankSupplyResponse.typeUrl || Array.isArray(o.historical_supplies) && (!o.historical_supplies.length || HistoricalBankSupply.isAmino(o.historical_supplies[0])));
  },
  encode(message: QueryHistoricalBankSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.historicalSupplies) {
      HistoricalBankSupply.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryHistoricalBankSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalBankSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.historicalSupplies.push(HistoricalBankSupply.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalBankSupplyResponse {
    return {
      historicalSupplies: Array.isArray(object?.historicalSupplies) ? object.historicalSupplies.map((e: any) => HistoricalBankSupply.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryHistoricalBankSupplyResponse): unknown {
    const obj: any = {};
    if (message.historicalSupplies) {
      obj.historicalSupplies = message.historicalSupplies.map(e => e ? HistoricalBankSupply.toJSON(e) : undefined);
    } else {
      obj.historicalSupplies = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalBankSupplyResponse>): QueryHistoricalBankSupplyResponse {
    const message = createBaseQueryHistoricalBankSupplyResponse();
    message.historicalSupplies = object.historicalSupplies?.map(e => HistoricalBankSupply.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryHistoricalBankSupplyResponseAmino): QueryHistoricalBankSupplyResponse {
    const message = createBaseQueryHistoricalBankSupplyResponse();
    message.historicalSupplies = object.historical_supplies?.map(e => HistoricalBankSupply.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryHistoricalBankSupplyResponse, useInterfaces: boolean = true): QueryHistoricalBankSupplyResponseAmino {
    const obj: any = {};
    if (message.historicalSupplies) {
      obj.historical_supplies = message.historicalSupplies.map(e => e ? HistoricalBankSupply.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.historical_supplies = message.historicalSupplies;
    }
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalBankSupplyResponseAminoMsg): QueryHistoricalBankSupplyResponse {
    return QueryHistoricalBankSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalBankSupplyResponseProtoMsg, useInterfaces: boolean = true): QueryHistoricalBankSupplyResponse {
    return QueryHistoricalBankSupplyResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHistoricalBankSupplyResponse): Uint8Array {
    return QueryHistoricalBankSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalBankSupplyResponse): QueryHistoricalBankSupplyResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.bank.QueryHistoricalBankSupplyResponse",
      value: QueryHistoricalBankSupplyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHistoricalBankSupplyResponse.typeUrl, QueryHistoricalBankSupplyResponse);