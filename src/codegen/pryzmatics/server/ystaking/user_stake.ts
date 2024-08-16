import { UserStakeOrderBy, UserStakeOrderByAmino, UserStakeOrderBySDKType } from "../../database/ystaking/user_stake";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { UserStake, UserStakeAmino, UserStakeSDKType } from "../../ystaking/user_stake";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryUserStakesRequest {
  address: string;
  denom: string;
  orderBy?: UserStakeOrderBy;
  pagination?: PageRequest;
}
export interface QueryUserStakesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesRequest";
  value: Uint8Array;
}
export interface QueryUserStakesRequestAmino {
  address?: string;
  denom?: string;
  order_by?: UserStakeOrderByAmino;
  pagination?: PageRequestAmino;
}
export interface QueryUserStakesRequestAminoMsg {
  type: "/pryzmatics.server.ystaking.QueryUserStakesRequest";
  value: QueryUserStakesRequestAmino;
}
export interface QueryUserStakesRequestSDKType {
  address: string;
  denom: string;
  order_by?: UserStakeOrderBySDKType;
  pagination?: PageRequestSDKType;
}
export interface QueryUserStakesResponse {
  userStakes: UserStake[];
  pagination?: PageResponse;
}
export interface QueryUserStakesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesResponse";
  value: Uint8Array;
}
export interface QueryUserStakesResponseAmino {
  user_stakes?: UserStakeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUserStakesResponseAminoMsg {
  type: "/pryzmatics.server.ystaking.QueryUserStakesResponse";
  value: QueryUserStakesResponseAmino;
}
export interface QueryUserStakesResponseSDKType {
  user_stakes: UserStakeSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryUserStakesRequest(): QueryUserStakesRequest {
  return {
    address: "",
    denom: "",
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryUserStakesRequest = {
  typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesRequest",
  is(o: any): o is QueryUserStakesRequest {
    return o && (o.$typeUrl === QueryUserStakesRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryUserStakesRequestSDKType {
    return o && (o.$typeUrl === QueryUserStakesRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryUserStakesRequestAmino {
    return o && (o.$typeUrl === QueryUserStakesRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  encode(message: QueryUserStakesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.orderBy !== undefined) {
      UserStakeOrderBy.encode(message.orderBy, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserStakesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserStakesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.orderBy = UserStakeOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserStakesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      orderBy: isSet(object.orderBy) ? UserStakeOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryUserStakesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? UserStakeOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUserStakesRequest>): QueryUserStakesRequest {
    const message = createBaseQueryUserStakesRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? UserStakeOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserStakesRequestAmino): QueryUserStakesRequest {
    const message = createBaseQueryUserStakesRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = UserStakeOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserStakesRequest, useInterfaces: boolean = true): QueryUserStakesRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.order_by = message.orderBy ? UserStakeOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserStakesRequestAminoMsg): QueryUserStakesRequest {
    return QueryUserStakesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserStakesRequestProtoMsg, useInterfaces: boolean = true): QueryUserStakesRequest {
    return QueryUserStakesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserStakesRequest): Uint8Array {
    return QueryUserStakesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserStakesRequest): QueryUserStakesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesRequest",
      value: QueryUserStakesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserStakesRequest.typeUrl, QueryUserStakesRequest);
function createBaseQueryUserStakesResponse(): QueryUserStakesResponse {
  return {
    userStakes: [],
    pagination: undefined
  };
}
export const QueryUserStakesResponse = {
  typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesResponse",
  is(o: any): o is QueryUserStakesResponse {
    return o && (o.$typeUrl === QueryUserStakesResponse.typeUrl || Array.isArray(o.userStakes) && (!o.userStakes.length || UserStake.is(o.userStakes[0])));
  },
  isSDK(o: any): o is QueryUserStakesResponseSDKType {
    return o && (o.$typeUrl === QueryUserStakesResponse.typeUrl || Array.isArray(o.user_stakes) && (!o.user_stakes.length || UserStake.isSDK(o.user_stakes[0])));
  },
  isAmino(o: any): o is QueryUserStakesResponseAmino {
    return o && (o.$typeUrl === QueryUserStakesResponse.typeUrl || Array.isArray(o.user_stakes) && (!o.user_stakes.length || UserStake.isAmino(o.user_stakes[0])));
  },
  encode(message: QueryUserStakesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userStakes) {
      UserStake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserStakesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserStakesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userStakes.push(UserStake.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryUserStakesResponse {
    return {
      userStakes: Array.isArray(object?.userStakes) ? object.userStakes.map((e: any) => UserStake.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryUserStakesResponse): unknown {
    const obj: any = {};
    if (message.userStakes) {
      obj.userStakes = message.userStakes.map(e => e ? UserStake.toJSON(e) : undefined);
    } else {
      obj.userStakes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUserStakesResponse>): QueryUserStakesResponse {
    const message = createBaseQueryUserStakesResponse();
    message.userStakes = object.userStakes?.map(e => UserStake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserStakesResponseAmino): QueryUserStakesResponse {
    const message = createBaseQueryUserStakesResponse();
    message.userStakes = object.user_stakes?.map(e => UserStake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserStakesResponse, useInterfaces: boolean = true): QueryUserStakesResponseAmino {
    const obj: any = {};
    if (message.userStakes) {
      obj.user_stakes = message.userStakes.map(e => e ? UserStake.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.user_stakes = message.userStakes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserStakesResponseAminoMsg): QueryUserStakesResponse {
    return QueryUserStakesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserStakesResponseProtoMsg, useInterfaces: boolean = true): QueryUserStakesResponse {
    return QueryUserStakesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserStakesResponse): Uint8Array {
    return QueryUserStakesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserStakesResponse): QueryUserStakesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.ystaking.QueryUserStakesResponse",
      value: QueryUserStakesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserStakesResponse.typeUrl, QueryUserStakesResponse);