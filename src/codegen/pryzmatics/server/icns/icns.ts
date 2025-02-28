import { IcnsRecord, IcnsRecordAmino, IcnsRecordSDKType } from "../../icns/icns";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryIcnsByAddressRequest {
  address: string;
}
export interface QueryIcnsByAddressRequestProtoMsg {
  typeUrl: "/pryzmatics.server.icns.QueryIcnsByAddressRequest";
  value: Uint8Array;
}
export interface QueryIcnsByAddressRequestAmino {
  address?: string;
}
export interface QueryIcnsByAddressRequestAminoMsg {
  type: "/pryzmatics.server.icns.QueryIcnsByAddressRequest";
  value: QueryIcnsByAddressRequestAmino;
}
export interface QueryIcnsByAddressRequestSDKType {
  address: string;
}
export interface QueryIcnsByAddressResponse {
  icns: IcnsRecord;
}
export interface QueryIcnsByAddressResponseProtoMsg {
  typeUrl: "/pryzmatics.server.icns.QueryIcnsByAddressResponse";
  value: Uint8Array;
}
export interface QueryIcnsByAddressResponseAmino {
  icns?: IcnsRecordAmino;
}
export interface QueryIcnsByAddressResponseAminoMsg {
  type: "/pryzmatics.server.icns.QueryIcnsByAddressResponse";
  value: QueryIcnsByAddressResponseAmino;
}
export interface QueryIcnsByAddressResponseSDKType {
  icns: IcnsRecordSDKType;
}
export interface QueryIcnsByNameRequest {
  icns: string;
}
export interface QueryIcnsByNameRequestProtoMsg {
  typeUrl: "/pryzmatics.server.icns.QueryIcnsByNameRequest";
  value: Uint8Array;
}
export interface QueryIcnsByNameRequestAmino {
  icns?: string;
}
export interface QueryIcnsByNameRequestAminoMsg {
  type: "/pryzmatics.server.icns.QueryIcnsByNameRequest";
  value: QueryIcnsByNameRequestAmino;
}
export interface QueryIcnsByNameRequestSDKType {
  icns: string;
}
export interface QueryIcnsByNameResponse {
  icns: IcnsRecord;
}
export interface QueryIcnsByNameResponseProtoMsg {
  typeUrl: "/pryzmatics.server.icns.QueryIcnsByNameResponse";
  value: Uint8Array;
}
export interface QueryIcnsByNameResponseAmino {
  icns?: IcnsRecordAmino;
}
export interface QueryIcnsByNameResponseAminoMsg {
  type: "/pryzmatics.server.icns.QueryIcnsByNameResponse";
  value: QueryIcnsByNameResponseAmino;
}
export interface QueryIcnsByNameResponseSDKType {
  icns: IcnsRecordSDKType;
}
function createBaseQueryIcnsByAddressRequest(): QueryIcnsByAddressRequest {
  return {
    address: ""
  };
}
export const QueryIcnsByAddressRequest = {
  typeUrl: "/pryzmatics.server.icns.QueryIcnsByAddressRequest",
  is(o: any): o is QueryIcnsByAddressRequest {
    return o && (o.$typeUrl === QueryIcnsByAddressRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryIcnsByAddressRequestSDKType {
    return o && (o.$typeUrl === QueryIcnsByAddressRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryIcnsByAddressRequestAmino {
    return o && (o.$typeUrl === QueryIcnsByAddressRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryIcnsByAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIcnsByAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIcnsByAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIcnsByAddressRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryIcnsByAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryIcnsByAddressRequest>): QueryIcnsByAddressRequest {
    const message = createBaseQueryIcnsByAddressRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryIcnsByAddressRequestAmino): QueryIcnsByAddressRequest {
    const message = createBaseQueryIcnsByAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryIcnsByAddressRequest, useInterfaces: boolean = true): QueryIcnsByAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryIcnsByAddressRequestAminoMsg): QueryIcnsByAddressRequest {
    return QueryIcnsByAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIcnsByAddressRequestProtoMsg, useInterfaces: boolean = true): QueryIcnsByAddressRequest {
    return QueryIcnsByAddressRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIcnsByAddressRequest): Uint8Array {
    return QueryIcnsByAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIcnsByAddressRequest): QueryIcnsByAddressRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.icns.QueryIcnsByAddressRequest",
      value: QueryIcnsByAddressRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIcnsByAddressRequest.typeUrl, QueryIcnsByAddressRequest);
function createBaseQueryIcnsByAddressResponse(): QueryIcnsByAddressResponse {
  return {
    icns: IcnsRecord.fromPartial({})
  };
}
export const QueryIcnsByAddressResponse = {
  typeUrl: "/pryzmatics.server.icns.QueryIcnsByAddressResponse",
  is(o: any): o is QueryIcnsByAddressResponse {
    return o && (o.$typeUrl === QueryIcnsByAddressResponse.typeUrl || IcnsRecord.is(o.icns));
  },
  isSDK(o: any): o is QueryIcnsByAddressResponseSDKType {
    return o && (o.$typeUrl === QueryIcnsByAddressResponse.typeUrl || IcnsRecord.isSDK(o.icns));
  },
  isAmino(o: any): o is QueryIcnsByAddressResponseAmino {
    return o && (o.$typeUrl === QueryIcnsByAddressResponse.typeUrl || IcnsRecord.isAmino(o.icns));
  },
  encode(message: QueryIcnsByAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.icns !== undefined) {
      IcnsRecord.encode(message.icns, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIcnsByAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIcnsByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.icns = IcnsRecord.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIcnsByAddressResponse {
    return {
      icns: isSet(object.icns) ? IcnsRecord.fromJSON(object.icns) : undefined
    };
  },
  toJSON(message: QueryIcnsByAddressResponse): unknown {
    const obj: any = {};
    message.icns !== undefined && (obj.icns = message.icns ? IcnsRecord.toJSON(message.icns) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIcnsByAddressResponse>): QueryIcnsByAddressResponse {
    const message = createBaseQueryIcnsByAddressResponse();
    message.icns = object.icns !== undefined && object.icns !== null ? IcnsRecord.fromPartial(object.icns) : undefined;
    return message;
  },
  fromAmino(object: QueryIcnsByAddressResponseAmino): QueryIcnsByAddressResponse {
    const message = createBaseQueryIcnsByAddressResponse();
    if (object.icns !== undefined && object.icns !== null) {
      message.icns = IcnsRecord.fromAmino(object.icns);
    }
    return message;
  },
  toAmino(message: QueryIcnsByAddressResponse, useInterfaces: boolean = true): QueryIcnsByAddressResponseAmino {
    const obj: any = {};
    obj.icns = message.icns ? IcnsRecord.toAmino(message.icns, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIcnsByAddressResponseAminoMsg): QueryIcnsByAddressResponse {
    return QueryIcnsByAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIcnsByAddressResponseProtoMsg, useInterfaces: boolean = true): QueryIcnsByAddressResponse {
    return QueryIcnsByAddressResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIcnsByAddressResponse): Uint8Array {
    return QueryIcnsByAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIcnsByAddressResponse): QueryIcnsByAddressResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.icns.QueryIcnsByAddressResponse",
      value: QueryIcnsByAddressResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIcnsByAddressResponse.typeUrl, QueryIcnsByAddressResponse);
function createBaseQueryIcnsByNameRequest(): QueryIcnsByNameRequest {
  return {
    icns: ""
  };
}
export const QueryIcnsByNameRequest = {
  typeUrl: "/pryzmatics.server.icns.QueryIcnsByNameRequest",
  is(o: any): o is QueryIcnsByNameRequest {
    return o && (o.$typeUrl === QueryIcnsByNameRequest.typeUrl || typeof o.icns === "string");
  },
  isSDK(o: any): o is QueryIcnsByNameRequestSDKType {
    return o && (o.$typeUrl === QueryIcnsByNameRequest.typeUrl || typeof o.icns === "string");
  },
  isAmino(o: any): o is QueryIcnsByNameRequestAmino {
    return o && (o.$typeUrl === QueryIcnsByNameRequest.typeUrl || typeof o.icns === "string");
  },
  encode(message: QueryIcnsByNameRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.icns !== "") {
      writer.uint32(10).string(message.icns);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIcnsByNameRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIcnsByNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.icns = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIcnsByNameRequest {
    return {
      icns: isSet(object.icns) ? String(object.icns) : ""
    };
  },
  toJSON(message: QueryIcnsByNameRequest): unknown {
    const obj: any = {};
    message.icns !== undefined && (obj.icns = message.icns);
    return obj;
  },
  fromPartial(object: Partial<QueryIcnsByNameRequest>): QueryIcnsByNameRequest {
    const message = createBaseQueryIcnsByNameRequest();
    message.icns = object.icns ?? "";
    return message;
  },
  fromAmino(object: QueryIcnsByNameRequestAmino): QueryIcnsByNameRequest {
    const message = createBaseQueryIcnsByNameRequest();
    if (object.icns !== undefined && object.icns !== null) {
      message.icns = object.icns;
    }
    return message;
  },
  toAmino(message: QueryIcnsByNameRequest, useInterfaces: boolean = true): QueryIcnsByNameRequestAmino {
    const obj: any = {};
    obj.icns = message.icns === "" ? undefined : message.icns;
    return obj;
  },
  fromAminoMsg(object: QueryIcnsByNameRequestAminoMsg): QueryIcnsByNameRequest {
    return QueryIcnsByNameRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIcnsByNameRequestProtoMsg, useInterfaces: boolean = true): QueryIcnsByNameRequest {
    return QueryIcnsByNameRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIcnsByNameRequest): Uint8Array {
    return QueryIcnsByNameRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIcnsByNameRequest): QueryIcnsByNameRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.icns.QueryIcnsByNameRequest",
      value: QueryIcnsByNameRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIcnsByNameRequest.typeUrl, QueryIcnsByNameRequest);
function createBaseQueryIcnsByNameResponse(): QueryIcnsByNameResponse {
  return {
    icns: IcnsRecord.fromPartial({})
  };
}
export const QueryIcnsByNameResponse = {
  typeUrl: "/pryzmatics.server.icns.QueryIcnsByNameResponse",
  is(o: any): o is QueryIcnsByNameResponse {
    return o && (o.$typeUrl === QueryIcnsByNameResponse.typeUrl || IcnsRecord.is(o.icns));
  },
  isSDK(o: any): o is QueryIcnsByNameResponseSDKType {
    return o && (o.$typeUrl === QueryIcnsByNameResponse.typeUrl || IcnsRecord.isSDK(o.icns));
  },
  isAmino(o: any): o is QueryIcnsByNameResponseAmino {
    return o && (o.$typeUrl === QueryIcnsByNameResponse.typeUrl || IcnsRecord.isAmino(o.icns));
  },
  encode(message: QueryIcnsByNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.icns !== undefined) {
      IcnsRecord.encode(message.icns, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIcnsByNameResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIcnsByNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.icns = IcnsRecord.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIcnsByNameResponse {
    return {
      icns: isSet(object.icns) ? IcnsRecord.fromJSON(object.icns) : undefined
    };
  },
  toJSON(message: QueryIcnsByNameResponse): unknown {
    const obj: any = {};
    message.icns !== undefined && (obj.icns = message.icns ? IcnsRecord.toJSON(message.icns) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIcnsByNameResponse>): QueryIcnsByNameResponse {
    const message = createBaseQueryIcnsByNameResponse();
    message.icns = object.icns !== undefined && object.icns !== null ? IcnsRecord.fromPartial(object.icns) : undefined;
    return message;
  },
  fromAmino(object: QueryIcnsByNameResponseAmino): QueryIcnsByNameResponse {
    const message = createBaseQueryIcnsByNameResponse();
    if (object.icns !== undefined && object.icns !== null) {
      message.icns = IcnsRecord.fromAmino(object.icns);
    }
    return message;
  },
  toAmino(message: QueryIcnsByNameResponse, useInterfaces: boolean = true): QueryIcnsByNameResponseAmino {
    const obj: any = {};
    obj.icns = message.icns ? IcnsRecord.toAmino(message.icns, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIcnsByNameResponseAminoMsg): QueryIcnsByNameResponse {
    return QueryIcnsByNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIcnsByNameResponseProtoMsg, useInterfaces: boolean = true): QueryIcnsByNameResponse {
    return QueryIcnsByNameResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIcnsByNameResponse): Uint8Array {
    return QueryIcnsByNameResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIcnsByNameResponse): QueryIcnsByNameResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.icns.QueryIcnsByNameResponse",
      value: QueryIcnsByNameResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryIcnsByNameResponse.typeUrl, QueryIcnsByNameResponse);