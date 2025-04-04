import { TokenType, tokenTypeFromJSON, tokenTypeToJSON } from "../../pool/token";
import { TokenYield, TokenYieldAmino, TokenYieldSDKType } from "../../pool/token_yield";
import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryTokenYieldsRequest {
  blockHeight: bigint;
  tokenType: TokenType;
}
export interface QueryTokenYieldsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryTokenYieldsRequest";
  value: Uint8Array;
}
export interface QueryTokenYieldsRequestAmino {
  block_height?: string;
  token_type?: TokenType;
}
export interface QueryTokenYieldsRequestAminoMsg {
  type: "/pryzmatics.server.pool.QueryTokenYieldsRequest";
  value: QueryTokenYieldsRequestAmino;
}
export interface QueryTokenYieldsRequestSDKType {
  block_height: bigint;
  token_type: TokenType;
}
export interface QueryTokenYieldsResponse {
  yields: TokenYield[];
}
export interface QueryTokenYieldsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryTokenYieldsResponse";
  value: Uint8Array;
}
export interface QueryTokenYieldsResponseAmino {
  yields?: TokenYieldAmino[];
}
export interface QueryTokenYieldsResponseAminoMsg {
  type: "/pryzmatics.server.pool.QueryTokenYieldsResponse";
  value: QueryTokenYieldsResponseAmino;
}
export interface QueryTokenYieldsResponseSDKType {
  yields: TokenYieldSDKType[];
}
function createBaseQueryTokenYieldsRequest(): QueryTokenYieldsRequest {
  return {
    blockHeight: BigInt(0),
    tokenType: 0
  };
}
export const QueryTokenYieldsRequest = {
  typeUrl: "/pryzmatics.server.pool.QueryTokenYieldsRequest",
  is(o: any): o is QueryTokenYieldsRequest {
    return o && (o.$typeUrl === QueryTokenYieldsRequest.typeUrl || typeof o.blockHeight === "bigint" && isSet(o.tokenType));
  },
  isSDK(o: any): o is QueryTokenYieldsRequestSDKType {
    return o && (o.$typeUrl === QueryTokenYieldsRequest.typeUrl || typeof o.block_height === "bigint" && isSet(o.token_type));
  },
  isAmino(o: any): o is QueryTokenYieldsRequestAmino {
    return o && (o.$typeUrl === QueryTokenYieldsRequest.typeUrl || typeof o.block_height === "bigint" && isSet(o.token_type));
  },
  encode(message: QueryTokenYieldsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.tokenType !== 0) {
      writer.uint32(16).int32(message.tokenType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenYieldsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenYieldsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.tokenType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenYieldsRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      tokenType: isSet(object.tokenType) ? tokenTypeFromJSON(object.tokenType) : -1
    };
  },
  toJSON(message: QueryTokenYieldsRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.tokenType !== undefined && (obj.tokenType = tokenTypeToJSON(message.tokenType));
    return obj;
  },
  fromPartial(object: Partial<QueryTokenYieldsRequest>): QueryTokenYieldsRequest {
    const message = createBaseQueryTokenYieldsRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.tokenType = object.tokenType ?? 0;
    return message;
  },
  fromAmino(object: QueryTokenYieldsRequestAmino): QueryTokenYieldsRequest {
    const message = createBaseQueryTokenYieldsRequest();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.token_type !== undefined && object.token_type !== null) {
      message.tokenType = object.token_type;
    }
    return message;
  },
  toAmino(message: QueryTokenYieldsRequest, useInterfaces: boolean = true): QueryTokenYieldsRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.token_type = message.tokenType === 0 ? undefined : message.tokenType;
    return obj;
  },
  fromAminoMsg(object: QueryTokenYieldsRequestAminoMsg): QueryTokenYieldsRequest {
    return QueryTokenYieldsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenYieldsRequestProtoMsg, useInterfaces: boolean = true): QueryTokenYieldsRequest {
    return QueryTokenYieldsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenYieldsRequest): Uint8Array {
    return QueryTokenYieldsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenYieldsRequest): QueryTokenYieldsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryTokenYieldsRequest",
      value: QueryTokenYieldsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenYieldsRequest.typeUrl, QueryTokenYieldsRequest);
function createBaseQueryTokenYieldsResponse(): QueryTokenYieldsResponse {
  return {
    yields: []
  };
}
export const QueryTokenYieldsResponse = {
  typeUrl: "/pryzmatics.server.pool.QueryTokenYieldsResponse",
  is(o: any): o is QueryTokenYieldsResponse {
    return o && (o.$typeUrl === QueryTokenYieldsResponse.typeUrl || Array.isArray(o.yields) && (!o.yields.length || TokenYield.is(o.yields[0])));
  },
  isSDK(o: any): o is QueryTokenYieldsResponseSDKType {
    return o && (o.$typeUrl === QueryTokenYieldsResponse.typeUrl || Array.isArray(o.yields) && (!o.yields.length || TokenYield.isSDK(o.yields[0])));
  },
  isAmino(o: any): o is QueryTokenYieldsResponseAmino {
    return o && (o.$typeUrl === QueryTokenYieldsResponse.typeUrl || Array.isArray(o.yields) && (!o.yields.length || TokenYield.isAmino(o.yields[0])));
  },
  encode(message: QueryTokenYieldsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.yields) {
      TokenYield.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTokenYieldsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenYieldsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yields.push(TokenYield.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenYieldsResponse {
    return {
      yields: Array.isArray(object?.yields) ? object.yields.map((e: any) => TokenYield.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTokenYieldsResponse): unknown {
    const obj: any = {};
    if (message.yields) {
      obj.yields = message.yields.map(e => e ? TokenYield.toJSON(e) : undefined);
    } else {
      obj.yields = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryTokenYieldsResponse>): QueryTokenYieldsResponse {
    const message = createBaseQueryTokenYieldsResponse();
    message.yields = object.yields?.map(e => TokenYield.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokenYieldsResponseAmino): QueryTokenYieldsResponse {
    const message = createBaseQueryTokenYieldsResponse();
    message.yields = object.yields?.map(e => TokenYield.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTokenYieldsResponse, useInterfaces: boolean = true): QueryTokenYieldsResponseAmino {
    const obj: any = {};
    if (message.yields) {
      obj.yields = message.yields.map(e => e ? TokenYield.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.yields = message.yields;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokenYieldsResponseAminoMsg): QueryTokenYieldsResponse {
    return QueryTokenYieldsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenYieldsResponseProtoMsg, useInterfaces: boolean = true): QueryTokenYieldsResponse {
    return QueryTokenYieldsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTokenYieldsResponse): Uint8Array {
    return QueryTokenYieldsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenYieldsResponse): QueryTokenYieldsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryTokenYieldsResponse",
      value: QueryTokenYieldsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenYieldsResponse.typeUrl, QueryTokenYieldsResponse);