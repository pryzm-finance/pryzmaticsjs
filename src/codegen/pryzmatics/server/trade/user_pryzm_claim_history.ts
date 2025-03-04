import { PryzmClaimHistoryRecord, PryzmClaimHistoryRecordAmino, PryzmClaimHistoryRecordSDKType } from "../../trade/pryzm_claim_history_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryUserPryzmClaimHistoryRequest {
  address: string;
  /** optional */
  denom: string;
}
export interface QueryUserPryzmClaimHistoryRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserPryzmClaimHistoryRequest";
  value: Uint8Array;
}
export interface QueryUserPryzmClaimHistoryRequestAmino {
  address?: string;
  /** optional */
  denom?: string;
}
export interface QueryUserPryzmClaimHistoryRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserPryzmClaimHistoryRequest";
  value: QueryUserPryzmClaimHistoryRequestAmino;
}
export interface QueryUserPryzmClaimHistoryRequestSDKType {
  address: string;
  denom: string;
}
export interface QueryUserPryzmClaimHistoryResponse {
  records: PryzmClaimHistoryRecord[];
  totalUpryzms: string;
}
export interface QueryUserPryzmClaimHistoryResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserPryzmClaimHistoryResponse";
  value: Uint8Array;
}
export interface QueryUserPryzmClaimHistoryResponseAmino {
  records?: PryzmClaimHistoryRecordAmino[];
  total_upryzms?: string;
}
export interface QueryUserPryzmClaimHistoryResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserPryzmClaimHistoryResponse";
  value: QueryUserPryzmClaimHistoryResponseAmino;
}
export interface QueryUserPryzmClaimHistoryResponseSDKType {
  records: PryzmClaimHistoryRecordSDKType[];
  total_upryzms: string;
}
function createBaseQueryUserPryzmClaimHistoryRequest(): QueryUserPryzmClaimHistoryRequest {
  return {
    address: "",
    denom: ""
  };
}
export const QueryUserPryzmClaimHistoryRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryUserPryzmClaimHistoryRequest",
  is(o: any): o is QueryUserPryzmClaimHistoryRequest {
    return o && (o.$typeUrl === QueryUserPryzmClaimHistoryRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryUserPryzmClaimHistoryRequestSDKType {
    return o && (o.$typeUrl === QueryUserPryzmClaimHistoryRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryUserPryzmClaimHistoryRequestAmino {
    return o && (o.$typeUrl === QueryUserPryzmClaimHistoryRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  encode(message: QueryUserPryzmClaimHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserPryzmClaimHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPryzmClaimHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserPryzmClaimHistoryRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryUserPryzmClaimHistoryRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryUserPryzmClaimHistoryRequest>): QueryUserPryzmClaimHistoryRequest {
    const message = createBaseQueryUserPryzmClaimHistoryRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryUserPryzmClaimHistoryRequestAmino): QueryUserPryzmClaimHistoryRequest {
    const message = createBaseQueryUserPryzmClaimHistoryRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryUserPryzmClaimHistoryRequest, useInterfaces: boolean = true): QueryUserPryzmClaimHistoryRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryUserPryzmClaimHistoryRequestAminoMsg): QueryUserPryzmClaimHistoryRequest {
    return QueryUserPryzmClaimHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPryzmClaimHistoryRequestProtoMsg, useInterfaces: boolean = true): QueryUserPryzmClaimHistoryRequest {
    return QueryUserPryzmClaimHistoryRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserPryzmClaimHistoryRequest): Uint8Array {
    return QueryUserPryzmClaimHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPryzmClaimHistoryRequest): QueryUserPryzmClaimHistoryRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserPryzmClaimHistoryRequest",
      value: QueryUserPryzmClaimHistoryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserPryzmClaimHistoryRequest.typeUrl, QueryUserPryzmClaimHistoryRequest);
function createBaseQueryUserPryzmClaimHistoryResponse(): QueryUserPryzmClaimHistoryResponse {
  return {
    records: [],
    totalUpryzms: ""
  };
}
export const QueryUserPryzmClaimHistoryResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryUserPryzmClaimHistoryResponse",
  is(o: any): o is QueryUserPryzmClaimHistoryResponse {
    return o && (o.$typeUrl === QueryUserPryzmClaimHistoryResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || PryzmClaimHistoryRecord.is(o.records[0])) && typeof o.totalUpryzms === "string");
  },
  isSDK(o: any): o is QueryUserPryzmClaimHistoryResponseSDKType {
    return o && (o.$typeUrl === QueryUserPryzmClaimHistoryResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || PryzmClaimHistoryRecord.isSDK(o.records[0])) && typeof o.total_upryzms === "string");
  },
  isAmino(o: any): o is QueryUserPryzmClaimHistoryResponseAmino {
    return o && (o.$typeUrl === QueryUserPryzmClaimHistoryResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || PryzmClaimHistoryRecord.isAmino(o.records[0])) && typeof o.total_upryzms === "string");
  },
  encode(message: QueryUserPryzmClaimHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      PryzmClaimHistoryRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalUpryzms !== "") {
      writer.uint32(18).string(message.totalUpryzms);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserPryzmClaimHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPryzmClaimHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(PryzmClaimHistoryRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.totalUpryzms = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserPryzmClaimHistoryResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => PryzmClaimHistoryRecord.fromJSON(e)) : [],
      totalUpryzms: isSet(object.totalUpryzms) ? String(object.totalUpryzms) : ""
    };
  },
  toJSON(message: QueryUserPryzmClaimHistoryResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? PryzmClaimHistoryRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.totalUpryzms !== undefined && (obj.totalUpryzms = message.totalUpryzms);
    return obj;
  },
  fromPartial(object: Partial<QueryUserPryzmClaimHistoryResponse>): QueryUserPryzmClaimHistoryResponse {
    const message = createBaseQueryUserPryzmClaimHistoryResponse();
    message.records = object.records?.map(e => PryzmClaimHistoryRecord.fromPartial(e)) || [];
    message.totalUpryzms = object.totalUpryzms ?? "";
    return message;
  },
  fromAmino(object: QueryUserPryzmClaimHistoryResponseAmino): QueryUserPryzmClaimHistoryResponse {
    const message = createBaseQueryUserPryzmClaimHistoryResponse();
    message.records = object.records?.map(e => PryzmClaimHistoryRecord.fromAmino(e)) || [];
    if (object.total_upryzms !== undefined && object.total_upryzms !== null) {
      message.totalUpryzms = object.total_upryzms;
    }
    return message;
  },
  toAmino(message: QueryUserPryzmClaimHistoryResponse, useInterfaces: boolean = true): QueryUserPryzmClaimHistoryResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? PryzmClaimHistoryRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.records = message.records;
    }
    obj.total_upryzms = message.totalUpryzms === "" ? undefined : message.totalUpryzms;
    return obj;
  },
  fromAminoMsg(object: QueryUserPryzmClaimHistoryResponseAminoMsg): QueryUserPryzmClaimHistoryResponse {
    return QueryUserPryzmClaimHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPryzmClaimHistoryResponseProtoMsg, useInterfaces: boolean = true): QueryUserPryzmClaimHistoryResponse {
    return QueryUserPryzmClaimHistoryResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserPryzmClaimHistoryResponse): Uint8Array {
    return QueryUserPryzmClaimHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPryzmClaimHistoryResponse): QueryUserPryzmClaimHistoryResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserPryzmClaimHistoryResponse",
      value: QueryUserPryzmClaimHistoryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserPryzmClaimHistoryResponse.typeUrl, QueryUserPryzmClaimHistoryResponse);