import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum AddressCategory {
  exclude_from_denom_owners = 0,
  UNRECOGNIZED = -1,
}
export const AddressCategorySDKType = AddressCategory;
export const AddressCategoryAmino = AddressCategory;
export function addressCategoryFromJSON(object: any): AddressCategory {
  switch (object) {
    case 0:
    case "exclude_from_denom_owners":
      return AddressCategory.exclude_from_denom_owners;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AddressCategory.UNRECOGNIZED;
  }
}
export function addressCategoryToJSON(object: AddressCategory): string {
  switch (object) {
    case AddressCategory.exclude_from_denom_owners:
      return "exclude_from_denom_owners";
    case AddressCategory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface QueryAddressesByCategoryRequest {
  category: AddressCategory;
}
export interface QueryAddressesByCategoryRequestProtoMsg {
  typeUrl: "/pryzmatics.server.common.QueryAddressesByCategoryRequest";
  value: Uint8Array;
}
export interface QueryAddressesByCategoryRequestAmino {
  category?: AddressCategory;
}
export interface QueryAddressesByCategoryRequestAminoMsg {
  type: "/pryzmatics.server.common.QueryAddressesByCategoryRequest";
  value: QueryAddressesByCategoryRequestAmino;
}
export interface QueryAddressesByCategoryRequestSDKType {
  category: AddressCategory;
}
export interface QueryAddressesByCategoryResponse {
  addresses: string[];
}
export interface QueryAddressesByCategoryResponseProtoMsg {
  typeUrl: "/pryzmatics.server.common.QueryAddressesByCategoryResponse";
  value: Uint8Array;
}
export interface QueryAddressesByCategoryResponseAmino {
  addresses?: string[];
}
export interface QueryAddressesByCategoryResponseAminoMsg {
  type: "/pryzmatics.server.common.QueryAddressesByCategoryResponse";
  value: QueryAddressesByCategoryResponseAmino;
}
export interface QueryAddressesByCategoryResponseSDKType {
  addresses: string[];
}
function createBaseQueryAddressesByCategoryRequest(): QueryAddressesByCategoryRequest {
  return {
    category: 0
  };
}
export const QueryAddressesByCategoryRequest = {
  typeUrl: "/pryzmatics.server.common.QueryAddressesByCategoryRequest",
  is(o: any): o is QueryAddressesByCategoryRequest {
    return o && (o.$typeUrl === QueryAddressesByCategoryRequest.typeUrl || isSet(o.category));
  },
  isSDK(o: any): o is QueryAddressesByCategoryRequestSDKType {
    return o && (o.$typeUrl === QueryAddressesByCategoryRequest.typeUrl || isSet(o.category));
  },
  isAmino(o: any): o is QueryAddressesByCategoryRequestAmino {
    return o && (o.$typeUrl === QueryAddressesByCategoryRequest.typeUrl || isSet(o.category));
  },
  encode(message: QueryAddressesByCategoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.category !== 0) {
      writer.uint32(8).int32(message.category);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAddressesByCategoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressesByCategoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAddressesByCategoryRequest {
    return {
      category: isSet(object.category) ? addressCategoryFromJSON(object.category) : -1
    };
  },
  toJSON(message: QueryAddressesByCategoryRequest): unknown {
    const obj: any = {};
    message.category !== undefined && (obj.category = addressCategoryToJSON(message.category));
    return obj;
  },
  fromPartial(object: Partial<QueryAddressesByCategoryRequest>): QueryAddressesByCategoryRequest {
    const message = createBaseQueryAddressesByCategoryRequest();
    message.category = object.category ?? 0;
    return message;
  },
  fromAmino(object: QueryAddressesByCategoryRequestAmino): QueryAddressesByCategoryRequest {
    const message = createBaseQueryAddressesByCategoryRequest();
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    }
    return message;
  },
  toAmino(message: QueryAddressesByCategoryRequest, useInterfaces: boolean = true): QueryAddressesByCategoryRequestAmino {
    const obj: any = {};
    obj.category = message.category === 0 ? undefined : message.category;
    return obj;
  },
  fromAminoMsg(object: QueryAddressesByCategoryRequestAminoMsg): QueryAddressesByCategoryRequest {
    return QueryAddressesByCategoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAddressesByCategoryRequestProtoMsg, useInterfaces: boolean = true): QueryAddressesByCategoryRequest {
    return QueryAddressesByCategoryRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAddressesByCategoryRequest): Uint8Array {
    return QueryAddressesByCategoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAddressesByCategoryRequest): QueryAddressesByCategoryRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.QueryAddressesByCategoryRequest",
      value: QueryAddressesByCategoryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAddressesByCategoryRequest.typeUrl, QueryAddressesByCategoryRequest);
function createBaseQueryAddressesByCategoryResponse(): QueryAddressesByCategoryResponse {
  return {
    addresses: []
  };
}
export const QueryAddressesByCategoryResponse = {
  typeUrl: "/pryzmatics.server.common.QueryAddressesByCategoryResponse",
  is(o: any): o is QueryAddressesByCategoryResponse {
    return o && (o.$typeUrl === QueryAddressesByCategoryResponse.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
  },
  isSDK(o: any): o is QueryAddressesByCategoryResponseSDKType {
    return o && (o.$typeUrl === QueryAddressesByCategoryResponse.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
  },
  isAmino(o: any): o is QueryAddressesByCategoryResponseAmino {
    return o && (o.$typeUrl === QueryAddressesByCategoryResponse.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
  },
  encode(message: QueryAddressesByCategoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAddressesByCategoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressesByCategoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAddressesByCategoryResponse {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryAddressesByCategoryResponse): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAddressesByCategoryResponse>): QueryAddressesByCategoryResponse {
    const message = createBaseQueryAddressesByCategoryResponse();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAddressesByCategoryResponseAmino): QueryAddressesByCategoryResponse {
    const message = createBaseQueryAddressesByCategoryResponse();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAddressesByCategoryResponse, useInterfaces: boolean = true): QueryAddressesByCategoryResponseAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAddressesByCategoryResponseAminoMsg): QueryAddressesByCategoryResponse {
    return QueryAddressesByCategoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAddressesByCategoryResponseProtoMsg, useInterfaces: boolean = true): QueryAddressesByCategoryResponse {
    return QueryAddressesByCategoryResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAddressesByCategoryResponse): Uint8Array {
    return QueryAddressesByCategoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAddressesByCategoryResponse): QueryAddressesByCategoryResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.common.QueryAddressesByCategoryResponse",
      value: QueryAddressesByCategoryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAddressesByCategoryResponse.typeUrl, QueryAddressesByCategoryResponse);