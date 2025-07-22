import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { isSet } from "../../../../helpers";
export interface QueryCirculatingSupplyRequest {}
export interface QueryCirculatingSupplyRequestProtoMsg {
  typeUrl: "/pryzmatics.server.thirdparty.coingecko.QueryCirculatingSupplyRequest";
  value: Uint8Array;
}
export interface QueryCirculatingSupplyRequestAmino {}
export interface QueryCirculatingSupplyRequestAminoMsg {
  type: "/pryzmatics.server.thirdparty.coingecko.QueryCirculatingSupplyRequest";
  value: QueryCirculatingSupplyRequestAmino;
}
export interface QueryCirculatingSupplyRequestSDKType {}
export interface QueryCirculatingSupplyResponse {
  result: string;
}
export interface QueryCirculatingSupplyResponseProtoMsg {
  typeUrl: "/pryzmatics.server.thirdparty.coingecko.QueryCirculatingSupplyResponse";
  value: Uint8Array;
}
export interface QueryCirculatingSupplyResponseAmino {
  result?: string;
}
export interface QueryCirculatingSupplyResponseAminoMsg {
  type: "/pryzmatics.server.thirdparty.coingecko.QueryCirculatingSupplyResponse";
  value: QueryCirculatingSupplyResponseAmino;
}
export interface QueryCirculatingSupplyResponseSDKType {
  result: string;
}
function createBaseQueryCirculatingSupplyRequest(): QueryCirculatingSupplyRequest {
  return {};
}
export const QueryCirculatingSupplyRequest = {
  typeUrl: "/pryzmatics.server.thirdparty.coingecko.QueryCirculatingSupplyRequest",
  is(o: any): o is QueryCirculatingSupplyRequest {
    return o && o.$typeUrl === QueryCirculatingSupplyRequest.typeUrl;
  },
  isSDK(o: any): o is QueryCirculatingSupplyRequestSDKType {
    return o && o.$typeUrl === QueryCirculatingSupplyRequest.typeUrl;
  },
  isAmino(o: any): o is QueryCirculatingSupplyRequestAmino {
    return o && o.$typeUrl === QueryCirculatingSupplyRequest.typeUrl;
  },
  encode(_: QueryCirculatingSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCirculatingSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCirculatingSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryCirculatingSupplyRequest {
    return {};
  },
  toJSON(_: QueryCirculatingSupplyRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryCirculatingSupplyRequest>): QueryCirculatingSupplyRequest {
    const message = createBaseQueryCirculatingSupplyRequest();
    return message;
  },
  fromAmino(_: QueryCirculatingSupplyRequestAmino): QueryCirculatingSupplyRequest {
    const message = createBaseQueryCirculatingSupplyRequest();
    return message;
  },
  toAmino(_: QueryCirculatingSupplyRequest, useInterfaces: boolean = true): QueryCirculatingSupplyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCirculatingSupplyRequestAminoMsg): QueryCirculatingSupplyRequest {
    return QueryCirculatingSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCirculatingSupplyRequestProtoMsg, useInterfaces: boolean = true): QueryCirculatingSupplyRequest {
    return QueryCirculatingSupplyRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCirculatingSupplyRequest): Uint8Array {
    return QueryCirculatingSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCirculatingSupplyRequest): QueryCirculatingSupplyRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.thirdparty.coingecko.QueryCirculatingSupplyRequest",
      value: QueryCirculatingSupplyRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCirculatingSupplyRequest.typeUrl, QueryCirculatingSupplyRequest);
function createBaseQueryCirculatingSupplyResponse(): QueryCirculatingSupplyResponse {
  return {
    result: ""
  };
}
export const QueryCirculatingSupplyResponse = {
  typeUrl: "/pryzmatics.server.thirdparty.coingecko.QueryCirculatingSupplyResponse",
  is(o: any): o is QueryCirculatingSupplyResponse {
    return o && (o.$typeUrl === QueryCirculatingSupplyResponse.typeUrl || typeof o.result === "string");
  },
  isSDK(o: any): o is QueryCirculatingSupplyResponseSDKType {
    return o && (o.$typeUrl === QueryCirculatingSupplyResponse.typeUrl || typeof o.result === "string");
  },
  isAmino(o: any): o is QueryCirculatingSupplyResponseAmino {
    return o && (o.$typeUrl === QueryCirculatingSupplyResponse.typeUrl || typeof o.result === "string");
  },
  encode(message: QueryCirculatingSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== "") {
      writer.uint32(50).string(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCirculatingSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCirculatingSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCirculatingSupplyResponse {
    return {
      result: isSet(object.result) ? String(object.result) : ""
    };
  },
  toJSON(message: QueryCirculatingSupplyResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },
  fromPartial(object: Partial<QueryCirculatingSupplyResponse>): QueryCirculatingSupplyResponse {
    const message = createBaseQueryCirculatingSupplyResponse();
    message.result = object.result ?? "";
    return message;
  },
  fromAmino(object: QueryCirculatingSupplyResponseAmino): QueryCirculatingSupplyResponse {
    const message = createBaseQueryCirculatingSupplyResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: QueryCirculatingSupplyResponse, useInterfaces: boolean = true): QueryCirculatingSupplyResponseAmino {
    const obj: any = {};
    obj.result = message.result === "" ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: QueryCirculatingSupplyResponseAminoMsg): QueryCirculatingSupplyResponse {
    return QueryCirculatingSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCirculatingSupplyResponseProtoMsg, useInterfaces: boolean = true): QueryCirculatingSupplyResponse {
    return QueryCirculatingSupplyResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCirculatingSupplyResponse): Uint8Array {
    return QueryCirculatingSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCirculatingSupplyResponse): QueryCirculatingSupplyResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.thirdparty.coingecko.QueryCirculatingSupplyResponse",
      value: QueryCirculatingSupplyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCirculatingSupplyResponse.typeUrl, QueryCirculatingSupplyResponse);