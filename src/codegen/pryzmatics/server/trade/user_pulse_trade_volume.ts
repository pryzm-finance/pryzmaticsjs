import { UserPulseTradeVolumeOrderBy, UserPulseTradeVolumeOrderByAmino, UserPulseTradeVolumeOrderBySDKType } from "../../database/trade/user_pulse_trade_volume";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { UserPulseTradeVolume, UserPulseTradeVolumeAmino, UserPulseTradeVolumeSDKType } from "../../trade/user_pulse_trade_volume";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryUserPulseTradeVolumeRequest {
  orderBy?: UserPulseTradeVolumeOrderBy;
  /** allowed to be partial address */
  address: string;
  pagination?: PageRequest;
}
export interface QueryUserPulseTradeVolumeRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserPulseTradeVolumeRequest";
  value: Uint8Array;
}
export interface QueryUserPulseTradeVolumeRequestAmino {
  order_by?: UserPulseTradeVolumeOrderByAmino;
  /** allowed to be partial address */
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryUserPulseTradeVolumeRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserPulseTradeVolumeRequest";
  value: QueryUserPulseTradeVolumeRequestAmino;
}
export interface QueryUserPulseTradeVolumeRequestSDKType {
  order_by?: UserPulseTradeVolumeOrderBySDKType;
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryUserPulseTradeVolumeResponse {
  volumes: UserPulseTradeVolume[];
  pagination?: PageResponse;
}
export interface QueryUserPulseTradeVolumeResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserPulseTradeVolumeResponse";
  value: Uint8Array;
}
export interface QueryUserPulseTradeVolumeResponseAmino {
  volumes?: UserPulseTradeVolumeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUserPulseTradeVolumeResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserPulseTradeVolumeResponse";
  value: QueryUserPulseTradeVolumeResponseAmino;
}
export interface QueryUserPulseTradeVolumeResponseSDKType {
  volumes: UserPulseTradeVolumeSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryUserPulseTradeVolumeRequest(): QueryUserPulseTradeVolumeRequest {
  return {
    orderBy: undefined,
    address: "",
    pagination: undefined
  };
}
export const QueryUserPulseTradeVolumeRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryUserPulseTradeVolumeRequest",
  is(o: any): o is QueryUserPulseTradeVolumeRequest {
    return o && (o.$typeUrl === QueryUserPulseTradeVolumeRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryUserPulseTradeVolumeRequestSDKType {
    return o && (o.$typeUrl === QueryUserPulseTradeVolumeRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryUserPulseTradeVolumeRequestAmino {
    return o && (o.$typeUrl === QueryUserPulseTradeVolumeRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryUserPulseTradeVolumeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderBy !== undefined) {
      UserPulseTradeVolumeOrderBy.encode(message.orderBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserPulseTradeVolumeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPulseTradeVolumeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderBy = UserPulseTradeVolumeOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserPulseTradeVolumeRequest {
    return {
      orderBy: isSet(object.orderBy) ? UserPulseTradeVolumeOrderBy.fromJSON(object.orderBy) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryUserPulseTradeVolumeRequest): unknown {
    const obj: any = {};
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? UserPulseTradeVolumeOrderBy.toJSON(message.orderBy) : undefined);
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUserPulseTradeVolumeRequest>): QueryUserPulseTradeVolumeRequest {
    const message = createBaseQueryUserPulseTradeVolumeRequest();
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? UserPulseTradeVolumeOrderBy.fromPartial(object.orderBy) : undefined;
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserPulseTradeVolumeRequestAmino): QueryUserPulseTradeVolumeRequest {
    const message = createBaseQueryUserPulseTradeVolumeRequest();
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = UserPulseTradeVolumeOrderBy.fromAmino(object.order_by);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserPulseTradeVolumeRequest, useInterfaces: boolean = true): QueryUserPulseTradeVolumeRequestAmino {
    const obj: any = {};
    obj.order_by = message.orderBy ? UserPulseTradeVolumeOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserPulseTradeVolumeRequestAminoMsg): QueryUserPulseTradeVolumeRequest {
    return QueryUserPulseTradeVolumeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPulseTradeVolumeRequestProtoMsg, useInterfaces: boolean = true): QueryUserPulseTradeVolumeRequest {
    return QueryUserPulseTradeVolumeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserPulseTradeVolumeRequest): Uint8Array {
    return QueryUserPulseTradeVolumeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPulseTradeVolumeRequest): QueryUserPulseTradeVolumeRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserPulseTradeVolumeRequest",
      value: QueryUserPulseTradeVolumeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserPulseTradeVolumeRequest.typeUrl, QueryUserPulseTradeVolumeRequest);
function createBaseQueryUserPulseTradeVolumeResponse(): QueryUserPulseTradeVolumeResponse {
  return {
    volumes: [],
    pagination: undefined
  };
}
export const QueryUserPulseTradeVolumeResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryUserPulseTradeVolumeResponse",
  is(o: any): o is QueryUserPulseTradeVolumeResponse {
    return o && (o.$typeUrl === QueryUserPulseTradeVolumeResponse.typeUrl || Array.isArray(o.volumes) && (!o.volumes.length || UserPulseTradeVolume.is(o.volumes[0])));
  },
  isSDK(o: any): o is QueryUserPulseTradeVolumeResponseSDKType {
    return o && (o.$typeUrl === QueryUserPulseTradeVolumeResponse.typeUrl || Array.isArray(o.volumes) && (!o.volumes.length || UserPulseTradeVolume.isSDK(o.volumes[0])));
  },
  isAmino(o: any): o is QueryUserPulseTradeVolumeResponseAmino {
    return o && (o.$typeUrl === QueryUserPulseTradeVolumeResponse.typeUrl || Array.isArray(o.volumes) && (!o.volumes.length || UserPulseTradeVolume.isAmino(o.volumes[0])));
  },
  encode(message: QueryUserPulseTradeVolumeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.volumes) {
      UserPulseTradeVolume.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserPulseTradeVolumeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPulseTradeVolumeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volumes.push(UserPulseTradeVolume.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserPulseTradeVolumeResponse {
    return {
      volumes: Array.isArray(object?.volumes) ? object.volumes.map((e: any) => UserPulseTradeVolume.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryUserPulseTradeVolumeResponse): unknown {
    const obj: any = {};
    if (message.volumes) {
      obj.volumes = message.volumes.map(e => e ? UserPulseTradeVolume.toJSON(e) : undefined);
    } else {
      obj.volumes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUserPulseTradeVolumeResponse>): QueryUserPulseTradeVolumeResponse {
    const message = createBaseQueryUserPulseTradeVolumeResponse();
    message.volumes = object.volumes?.map(e => UserPulseTradeVolume.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserPulseTradeVolumeResponseAmino): QueryUserPulseTradeVolumeResponse {
    const message = createBaseQueryUserPulseTradeVolumeResponse();
    message.volumes = object.volumes?.map(e => UserPulseTradeVolume.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserPulseTradeVolumeResponse, useInterfaces: boolean = true): QueryUserPulseTradeVolumeResponseAmino {
    const obj: any = {};
    if (message.volumes) {
      obj.volumes = message.volumes.map(e => e ? UserPulseTradeVolume.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.volumes = message.volumes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserPulseTradeVolumeResponseAminoMsg): QueryUserPulseTradeVolumeResponse {
    return QueryUserPulseTradeVolumeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPulseTradeVolumeResponseProtoMsg, useInterfaces: boolean = true): QueryUserPulseTradeVolumeResponse {
    return QueryUserPulseTradeVolumeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserPulseTradeVolumeResponse): Uint8Array {
    return QueryUserPulseTradeVolumeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPulseTradeVolumeResponse): QueryUserPulseTradeVolumeResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserPulseTradeVolumeResponse",
      value: QueryUserPulseTradeVolumeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserPulseTradeVolumeResponse.typeUrl, QueryUserPulseTradeVolumeResponse);