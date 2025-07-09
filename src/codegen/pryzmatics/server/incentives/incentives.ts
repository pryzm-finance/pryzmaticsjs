import { PoolTotalIncentives, PoolTotalIncentivesAmino, PoolTotalIncentivesSDKType } from "../../incentives/incentives";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryPoolTotalIncentivesRequest {
  /** can be empty, in which case it will return all incentives */
  bondDenom: string;
  from?: string;
}
export interface QueryPoolTotalIncentivesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.incentives.QueryPoolTotalIncentivesRequest";
  value: Uint8Array;
}
export interface QueryPoolTotalIncentivesRequestAmino {
  /** can be empty, in which case it will return all incentives */
  bond_denom?: string;
  from?: string;
}
export interface QueryPoolTotalIncentivesRequestAminoMsg {
  type: "/pryzmatics.server.incentives.QueryPoolTotalIncentivesRequest";
  value: QueryPoolTotalIncentivesRequestAmino;
}
export interface QueryPoolTotalIncentivesRequestSDKType {
  bond_denom: string;
  from?: string;
}
export interface QueryPoolTotalIncentivesResponse {
  poolTotalIncentives: PoolTotalIncentives[];
}
export interface QueryPoolTotalIncentivesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.incentives.QueryPoolTotalIncentivesResponse";
  value: Uint8Array;
}
export interface QueryPoolTotalIncentivesResponseAmino {
  pool_total_incentives?: PoolTotalIncentivesAmino[];
}
export interface QueryPoolTotalIncentivesResponseAminoMsg {
  type: "/pryzmatics.server.incentives.QueryPoolTotalIncentivesResponse";
  value: QueryPoolTotalIncentivesResponseAmino;
}
export interface QueryPoolTotalIncentivesResponseSDKType {
  pool_total_incentives: PoolTotalIncentivesSDKType[];
}
function createBaseQueryPoolTotalIncentivesRequest(): QueryPoolTotalIncentivesRequest {
  return {
    bondDenom: "",
    from: undefined
  };
}
export const QueryPoolTotalIncentivesRequest = {
  typeUrl: "/pryzmatics.server.incentives.QueryPoolTotalIncentivesRequest",
  is(o: any): o is QueryPoolTotalIncentivesRequest {
    return o && (o.$typeUrl === QueryPoolTotalIncentivesRequest.typeUrl || typeof o.bondDenom === "string");
  },
  isSDK(o: any): o is QueryPoolTotalIncentivesRequestSDKType {
    return o && (o.$typeUrl === QueryPoolTotalIncentivesRequest.typeUrl || typeof o.bond_denom === "string");
  },
  isAmino(o: any): o is QueryPoolTotalIncentivesRequestAmino {
    return o && (o.$typeUrl === QueryPoolTotalIncentivesRequest.typeUrl || typeof o.bond_denom === "string");
  },
  encode(message: QueryPoolTotalIncentivesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondDenom !== "") {
      writer.uint32(10).string(message.bondDenom);
    }
    if (message.from !== undefined) {
      writer.uint32(18).string(message.from);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolTotalIncentivesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTotalIncentivesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDenom = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTotalIncentivesRequest {
    return {
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      from: isSet(object.from) ? String(object.from) : undefined
    };
  },
  toJSON(message: QueryPoolTotalIncentivesRequest): unknown {
    const obj: any = {};
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolTotalIncentivesRequest>): QueryPoolTotalIncentivesRequest {
    const message = createBaseQueryPoolTotalIncentivesRequest();
    message.bondDenom = object.bondDenom ?? "";
    message.from = object.from ?? undefined;
    return message;
  },
  fromAmino(object: QueryPoolTotalIncentivesRequestAmino): QueryPoolTotalIncentivesRequest {
    const message = createBaseQueryPoolTotalIncentivesRequest();
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    return message;
  },
  toAmino(message: QueryPoolTotalIncentivesRequest, useInterfaces: boolean = true): QueryPoolTotalIncentivesRequestAmino {
    const obj: any = {};
    obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
    obj.from = message.from === null ? undefined : message.from;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTotalIncentivesRequestAminoMsg): QueryPoolTotalIncentivesRequest {
    return QueryPoolTotalIncentivesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTotalIncentivesRequestProtoMsg, useInterfaces: boolean = true): QueryPoolTotalIncentivesRequest {
    return QueryPoolTotalIncentivesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolTotalIncentivesRequest): Uint8Array {
    return QueryPoolTotalIncentivesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTotalIncentivesRequest): QueryPoolTotalIncentivesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.incentives.QueryPoolTotalIncentivesRequest",
      value: QueryPoolTotalIncentivesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolTotalIncentivesRequest.typeUrl, QueryPoolTotalIncentivesRequest);
function createBaseQueryPoolTotalIncentivesResponse(): QueryPoolTotalIncentivesResponse {
  return {
    poolTotalIncentives: []
  };
}
export const QueryPoolTotalIncentivesResponse = {
  typeUrl: "/pryzmatics.server.incentives.QueryPoolTotalIncentivesResponse",
  is(o: any): o is QueryPoolTotalIncentivesResponse {
    return o && (o.$typeUrl === QueryPoolTotalIncentivesResponse.typeUrl || Array.isArray(o.poolTotalIncentives) && (!o.poolTotalIncentives.length || PoolTotalIncentives.is(o.poolTotalIncentives[0])));
  },
  isSDK(o: any): o is QueryPoolTotalIncentivesResponseSDKType {
    return o && (o.$typeUrl === QueryPoolTotalIncentivesResponse.typeUrl || Array.isArray(o.pool_total_incentives) && (!o.pool_total_incentives.length || PoolTotalIncentives.isSDK(o.pool_total_incentives[0])));
  },
  isAmino(o: any): o is QueryPoolTotalIncentivesResponseAmino {
    return o && (o.$typeUrl === QueryPoolTotalIncentivesResponse.typeUrl || Array.isArray(o.pool_total_incentives) && (!o.pool_total_incentives.length || PoolTotalIncentives.isAmino(o.pool_total_incentives[0])));
  },
  encode(message: QueryPoolTotalIncentivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolTotalIncentives) {
      PoolTotalIncentives.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolTotalIncentivesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTotalIncentivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolTotalIncentives.push(PoolTotalIncentives.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTotalIncentivesResponse {
    return {
      poolTotalIncentives: Array.isArray(object?.poolTotalIncentives) ? object.poolTotalIncentives.map((e: any) => PoolTotalIncentives.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPoolTotalIncentivesResponse): unknown {
    const obj: any = {};
    if (message.poolTotalIncentives) {
      obj.poolTotalIncentives = message.poolTotalIncentives.map(e => e ? PoolTotalIncentives.toJSON(e) : undefined);
    } else {
      obj.poolTotalIncentives = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryPoolTotalIncentivesResponse>): QueryPoolTotalIncentivesResponse {
    const message = createBaseQueryPoolTotalIncentivesResponse();
    message.poolTotalIncentives = object.poolTotalIncentives?.map(e => PoolTotalIncentives.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPoolTotalIncentivesResponseAmino): QueryPoolTotalIncentivesResponse {
    const message = createBaseQueryPoolTotalIncentivesResponse();
    message.poolTotalIncentives = object.pool_total_incentives?.map(e => PoolTotalIncentives.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPoolTotalIncentivesResponse, useInterfaces: boolean = true): QueryPoolTotalIncentivesResponseAmino {
    const obj: any = {};
    if (message.poolTotalIncentives) {
      obj.pool_total_incentives = message.poolTotalIncentives.map(e => e ? PoolTotalIncentives.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pool_total_incentives = message.poolTotalIncentives;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPoolTotalIncentivesResponseAminoMsg): QueryPoolTotalIncentivesResponse {
    return QueryPoolTotalIncentivesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTotalIncentivesResponseProtoMsg, useInterfaces: boolean = true): QueryPoolTotalIncentivesResponse {
    return QueryPoolTotalIncentivesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolTotalIncentivesResponse): Uint8Array {
    return QueryPoolTotalIncentivesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTotalIncentivesResponse): QueryPoolTotalIncentivesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.incentives.QueryPoolTotalIncentivesResponse",
      value: QueryPoolTotalIncentivesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolTotalIncentivesResponse.typeUrl, QueryPoolTotalIncentivesResponse);