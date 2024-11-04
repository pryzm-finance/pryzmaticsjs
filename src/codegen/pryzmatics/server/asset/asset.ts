import { Asset, AssetAmino, AssetSDKType } from "../../asset/asset";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryAssetRequest {
  assetId: string;
}
export interface QueryAssetRequestProtoMsg {
  typeUrl: "/pryzmatics.server.asset.QueryAssetRequest";
  value: Uint8Array;
}
export interface QueryAssetRequestAmino {
  asset_id?: string;
}
export interface QueryAssetRequestAminoMsg {
  type: "/pryzmatics.server.asset.QueryAssetRequest";
  value: QueryAssetRequestAmino;
}
export interface QueryAssetRequestSDKType {
  asset_id: string;
}
export interface QueryAssetResponse {
  asset: Asset;
}
export interface QueryAssetResponseProtoMsg {
  typeUrl: "/pryzmatics.server.asset.QueryAssetResponse";
  value: Uint8Array;
}
export interface QueryAssetResponseAmino {
  asset?: AssetAmino;
}
export interface QueryAssetResponseAminoMsg {
  type: "/pryzmatics.server.asset.QueryAssetResponse";
  value: QueryAssetResponseAmino;
}
export interface QueryAssetResponseSDKType {
  asset: AssetSDKType;
}
export interface QueryAssetsRequest {}
export interface QueryAssetsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.asset.QueryAssetsRequest";
  value: Uint8Array;
}
export interface QueryAssetsRequestAmino {}
export interface QueryAssetsRequestAminoMsg {
  type: "/pryzmatics.server.asset.QueryAssetsRequest";
  value: QueryAssetsRequestAmino;
}
export interface QueryAssetsRequestSDKType {}
export interface QueryAssetsResponse {
  assets: Asset[];
}
export interface QueryAssetsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.asset.QueryAssetsResponse";
  value: Uint8Array;
}
export interface QueryAssetsResponseAmino {
  assets?: AssetAmino[];
}
export interface QueryAssetsResponseAminoMsg {
  type: "/pryzmatics.server.asset.QueryAssetsResponse";
  value: QueryAssetsResponseAmino;
}
export interface QueryAssetsResponseSDKType {
  assets: AssetSDKType[];
}
function createBaseQueryAssetRequest(): QueryAssetRequest {
  return {
    assetId: ""
  };
}
export const QueryAssetRequest = {
  typeUrl: "/pryzmatics.server.asset.QueryAssetRequest",
  is(o: any): o is QueryAssetRequest {
    return o && (o.$typeUrl === QueryAssetRequest.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryAssetRequestSDKType {
    return o && (o.$typeUrl === QueryAssetRequest.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryAssetRequestAmino {
    return o && (o.$typeUrl === QueryAssetRequest.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: QueryAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAssetRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryAssetRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryAssetRequest>): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryAssetRequestAmino): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryAssetRequest, useInterfaces: boolean = true): QueryAssetRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryAssetRequestAminoMsg): QueryAssetRequest {
    return QueryAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetRequestProtoMsg, useInterfaces: boolean = true): QueryAssetRequest {
    return QueryAssetRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAssetRequest): Uint8Array {
    return QueryAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetRequest): QueryAssetRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.asset.QueryAssetRequest",
      value: QueryAssetRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAssetRequest.typeUrl, QueryAssetRequest);
function createBaseQueryAssetResponse(): QueryAssetResponse {
  return {
    asset: Asset.fromPartial({})
  };
}
export const QueryAssetResponse = {
  typeUrl: "/pryzmatics.server.asset.QueryAssetResponse",
  is(o: any): o is QueryAssetResponse {
    return o && (o.$typeUrl === QueryAssetResponse.typeUrl || Asset.is(o.asset));
  },
  isSDK(o: any): o is QueryAssetResponseSDKType {
    return o && (o.$typeUrl === QueryAssetResponse.typeUrl || Asset.isSDK(o.asset));
  },
  isAmino(o: any): o is QueryAssetResponseAmino {
    return o && (o.$typeUrl === QueryAssetResponse.typeUrl || Asset.isAmino(o.asset));
  },
  encode(message: QueryAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAssetResponse {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: QueryAssetResponse): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAssetResponse>): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: QueryAssetResponseAmino): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: QueryAssetResponse, useInterfaces: boolean = true): QueryAssetResponseAmino {
    const obj: any = {};
    obj.asset = message.asset ? Asset.toAmino(message.asset, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAssetResponseAminoMsg): QueryAssetResponse {
    return QueryAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetResponseProtoMsg, useInterfaces: boolean = true): QueryAssetResponse {
    return QueryAssetResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAssetResponse): Uint8Array {
    return QueryAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetResponse): QueryAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.asset.QueryAssetResponse",
      value: QueryAssetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAssetResponse.typeUrl, QueryAssetResponse);
function createBaseQueryAssetsRequest(): QueryAssetsRequest {
  return {};
}
export const QueryAssetsRequest = {
  typeUrl: "/pryzmatics.server.asset.QueryAssetsRequest",
  is(o: any): o is QueryAssetsRequest {
    return o && o.$typeUrl === QueryAssetsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAssetsRequestSDKType {
    return o && o.$typeUrl === QueryAssetsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAssetsRequestAmino {
    return o && o.$typeUrl === QueryAssetsRequest.typeUrl;
  },
  encode(_: QueryAssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsRequest();
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
  fromJSON(_: any): QueryAssetsRequest {
    return {};
  },
  toJSON(_: QueryAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryAssetsRequest>): QueryAssetsRequest {
    const message = createBaseQueryAssetsRequest();
    return message;
  },
  fromAmino(_: QueryAssetsRequestAmino): QueryAssetsRequest {
    const message = createBaseQueryAssetsRequest();
    return message;
  },
  toAmino(_: QueryAssetsRequest, useInterfaces: boolean = true): QueryAssetsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAssetsRequestAminoMsg): QueryAssetsRequest {
    return QueryAssetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetsRequestProtoMsg, useInterfaces: boolean = true): QueryAssetsRequest {
    return QueryAssetsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAssetsRequest): Uint8Array {
    return QueryAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetsRequest): QueryAssetsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.asset.QueryAssetsRequest",
      value: QueryAssetsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAssetsRequest.typeUrl, QueryAssetsRequest);
function createBaseQueryAssetsResponse(): QueryAssetsResponse {
  return {
    assets: []
  };
}
export const QueryAssetsResponse = {
  typeUrl: "/pryzmatics.server.asset.QueryAssetsResponse",
  is(o: any): o is QueryAssetsResponse {
    return o && (o.$typeUrl === QueryAssetsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || Asset.is(o.assets[0])));
  },
  isSDK(o: any): o is QueryAssetsResponseSDKType {
    return o && (o.$typeUrl === QueryAssetsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || Asset.isSDK(o.assets[0])));
  },
  isAmino(o: any): o is QueryAssetsResponseAmino {
    return o && (o.$typeUrl === QueryAssetsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || Asset.isAmino(o.assets[0])));
  },
  encode(message: QueryAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAssetsResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAssetsResponse>): QueryAssetsResponse {
    const message = createBaseQueryAssetsResponse();
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAssetsResponseAmino): QueryAssetsResponse {
    const message = createBaseQueryAssetsResponse();
    message.assets = object.assets?.map(e => Asset.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAssetsResponse, useInterfaces: boolean = true): QueryAssetsResponseAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.assets = message.assets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAssetsResponseAminoMsg): QueryAssetsResponse {
    return QueryAssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetsResponseProtoMsg, useInterfaces: boolean = true): QueryAssetsResponse {
    return QueryAssetsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAssetsResponse): Uint8Array {
    return QueryAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetsResponse): QueryAssetsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.asset.QueryAssetsResponse",
      value: QueryAssetsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAssetsResponse.typeUrl, QueryAssetsResponse);