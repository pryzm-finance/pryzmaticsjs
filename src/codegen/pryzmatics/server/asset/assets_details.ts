import { Asset, AssetAmino, AssetSDKType } from "../../asset/asset";
import { Token, TokenAmino, TokenSDKType } from "../../pool/token";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface AssetDetails {
  asset: Asset;
  cAssetToken: Token;
  underlyingAssetToken?: Token;
  yammLpToken: Token;
  baseLpToken?: Token;
  usdcLpToken?: Token;
  yTokens: Token[];
  pTokens: Token[];
}
export interface AssetDetailsProtoMsg {
  typeUrl: "/pryzmatics.server.asset.AssetDetails";
  value: Uint8Array;
}
export interface AssetDetailsAmino {
  asset?: AssetAmino;
  c_asset_token?: TokenAmino;
  underlying_asset_token?: TokenAmino;
  yamm_lp_token?: TokenAmino;
  base_lp_token?: TokenAmino;
  usdc_lp_token?: TokenAmino;
  y_tokens?: TokenAmino[];
  p_tokens?: TokenAmino[];
}
export interface AssetDetailsAminoMsg {
  type: "/pryzmatics.server.asset.AssetDetails";
  value: AssetDetailsAmino;
}
export interface AssetDetailsSDKType {
  asset: AssetSDKType;
  c_asset_token: TokenSDKType;
  underlying_asset_token?: TokenSDKType;
  yamm_lp_token: TokenSDKType;
  base_lp_token?: TokenSDKType;
  usdc_lp_token?: TokenSDKType;
  y_tokens: TokenSDKType[];
  p_tokens: TokenSDKType[];
}
export interface QueryAssetsDetailsRequest {
  /** optional */
  assetId: string;
}
export interface QueryAssetsDetailsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.asset.QueryAssetsDetailsRequest";
  value: Uint8Array;
}
export interface QueryAssetsDetailsRequestAmino {
  /** optional */
  asset_id?: string;
}
export interface QueryAssetsDetailsRequestAminoMsg {
  type: "/pryzmatics.server.asset.QueryAssetsDetailsRequest";
  value: QueryAssetsDetailsRequestAmino;
}
export interface QueryAssetsDetailsRequestSDKType {
  asset_id: string;
}
export interface QueryAssetsDetailsResponse {
  assets: AssetDetails[];
}
export interface QueryAssetsDetailsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.asset.QueryAssetsDetailsResponse";
  value: Uint8Array;
}
export interface QueryAssetsDetailsResponseAmino {
  assets?: AssetDetailsAmino[];
}
export interface QueryAssetsDetailsResponseAminoMsg {
  type: "/pryzmatics.server.asset.QueryAssetsDetailsResponse";
  value: QueryAssetsDetailsResponseAmino;
}
export interface QueryAssetsDetailsResponseSDKType {
  assets: AssetDetailsSDKType[];
}
function createBaseAssetDetails(): AssetDetails {
  return {
    asset: Asset.fromPartial({}),
    cAssetToken: Token.fromPartial({}),
    underlyingAssetToken: undefined,
    yammLpToken: Token.fromPartial({}),
    baseLpToken: undefined,
    usdcLpToken: undefined,
    yTokens: [],
    pTokens: []
  };
}
export const AssetDetails = {
  typeUrl: "/pryzmatics.server.asset.AssetDetails",
  is(o: any): o is AssetDetails {
    return o && (o.$typeUrl === AssetDetails.typeUrl || Asset.is(o.asset) && Token.is(o.cAssetToken) && Token.is(o.yammLpToken) && Array.isArray(o.yTokens) && (!o.yTokens.length || Token.is(o.yTokens[0])) && Array.isArray(o.pTokens) && (!o.pTokens.length || Token.is(o.pTokens[0])));
  },
  isSDK(o: any): o is AssetDetailsSDKType {
    return o && (o.$typeUrl === AssetDetails.typeUrl || Asset.isSDK(o.asset) && Token.isSDK(o.c_asset_token) && Token.isSDK(o.yamm_lp_token) && Array.isArray(o.y_tokens) && (!o.y_tokens.length || Token.isSDK(o.y_tokens[0])) && Array.isArray(o.p_tokens) && (!o.p_tokens.length || Token.isSDK(o.p_tokens[0])));
  },
  isAmino(o: any): o is AssetDetailsAmino {
    return o && (o.$typeUrl === AssetDetails.typeUrl || Asset.isAmino(o.asset) && Token.isAmino(o.c_asset_token) && Token.isAmino(o.yamm_lp_token) && Array.isArray(o.y_tokens) && (!o.y_tokens.length || Token.isAmino(o.y_tokens[0])) && Array.isArray(o.p_tokens) && (!o.p_tokens.length || Token.isAmino(o.p_tokens[0])));
  },
  encode(message: AssetDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    if (message.cAssetToken !== undefined) {
      Token.encode(message.cAssetToken, writer.uint32(18).fork()).ldelim();
    }
    if (message.underlyingAssetToken !== undefined) {
      Token.encode(message.underlyingAssetToken, writer.uint32(26).fork()).ldelim();
    }
    if (message.yammLpToken !== undefined) {
      Token.encode(message.yammLpToken, writer.uint32(34).fork()).ldelim();
    }
    if (message.baseLpToken !== undefined) {
      Token.encode(message.baseLpToken, writer.uint32(42).fork()).ldelim();
    }
    if (message.usdcLpToken !== undefined) {
      Token.encode(message.usdcLpToken, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.yTokens) {
      Token.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.pTokens) {
      Token.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AssetDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.cAssetToken = Token.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.underlyingAssetToken = Token.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.yammLpToken = Token.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.baseLpToken = Token.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.usdcLpToken = Token.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.yTokens.push(Token.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.pTokens.push(Token.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetDetails {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      cAssetToken: isSet(object.cAssetToken) ? Token.fromJSON(object.cAssetToken) : undefined,
      underlyingAssetToken: isSet(object.underlyingAssetToken) ? Token.fromJSON(object.underlyingAssetToken) : undefined,
      yammLpToken: isSet(object.yammLpToken) ? Token.fromJSON(object.yammLpToken) : undefined,
      baseLpToken: isSet(object.baseLpToken) ? Token.fromJSON(object.baseLpToken) : undefined,
      usdcLpToken: isSet(object.usdcLpToken) ? Token.fromJSON(object.usdcLpToken) : undefined,
      yTokens: Array.isArray(object?.yTokens) ? object.yTokens.map((e: any) => Token.fromJSON(e)) : [],
      pTokens: Array.isArray(object?.pTokens) ? object.pTokens.map((e: any) => Token.fromJSON(e)) : []
    };
  },
  toJSON(message: AssetDetails): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.cAssetToken !== undefined && (obj.cAssetToken = message.cAssetToken ? Token.toJSON(message.cAssetToken) : undefined);
    message.underlyingAssetToken !== undefined && (obj.underlyingAssetToken = message.underlyingAssetToken ? Token.toJSON(message.underlyingAssetToken) : undefined);
    message.yammLpToken !== undefined && (obj.yammLpToken = message.yammLpToken ? Token.toJSON(message.yammLpToken) : undefined);
    message.baseLpToken !== undefined && (obj.baseLpToken = message.baseLpToken ? Token.toJSON(message.baseLpToken) : undefined);
    message.usdcLpToken !== undefined && (obj.usdcLpToken = message.usdcLpToken ? Token.toJSON(message.usdcLpToken) : undefined);
    if (message.yTokens) {
      obj.yTokens = message.yTokens.map(e => e ? Token.toJSON(e) : undefined);
    } else {
      obj.yTokens = [];
    }
    if (message.pTokens) {
      obj.pTokens = message.pTokens.map(e => e ? Token.toJSON(e) : undefined);
    } else {
      obj.pTokens = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AssetDetails>): AssetDetails {
    const message = createBaseAssetDetails();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.cAssetToken = object.cAssetToken !== undefined && object.cAssetToken !== null ? Token.fromPartial(object.cAssetToken) : undefined;
    message.underlyingAssetToken = object.underlyingAssetToken !== undefined && object.underlyingAssetToken !== null ? Token.fromPartial(object.underlyingAssetToken) : undefined;
    message.yammLpToken = object.yammLpToken !== undefined && object.yammLpToken !== null ? Token.fromPartial(object.yammLpToken) : undefined;
    message.baseLpToken = object.baseLpToken !== undefined && object.baseLpToken !== null ? Token.fromPartial(object.baseLpToken) : undefined;
    message.usdcLpToken = object.usdcLpToken !== undefined && object.usdcLpToken !== null ? Token.fromPartial(object.usdcLpToken) : undefined;
    message.yTokens = object.yTokens?.map(e => Token.fromPartial(e)) || [];
    message.pTokens = object.pTokens?.map(e => Token.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AssetDetailsAmino): AssetDetails {
    const message = createBaseAssetDetails();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    if (object.c_asset_token !== undefined && object.c_asset_token !== null) {
      message.cAssetToken = Token.fromAmino(object.c_asset_token);
    }
    if (object.underlying_asset_token !== undefined && object.underlying_asset_token !== null) {
      message.underlyingAssetToken = Token.fromAmino(object.underlying_asset_token);
    }
    if (object.yamm_lp_token !== undefined && object.yamm_lp_token !== null) {
      message.yammLpToken = Token.fromAmino(object.yamm_lp_token);
    }
    if (object.base_lp_token !== undefined && object.base_lp_token !== null) {
      message.baseLpToken = Token.fromAmino(object.base_lp_token);
    }
    if (object.usdc_lp_token !== undefined && object.usdc_lp_token !== null) {
      message.usdcLpToken = Token.fromAmino(object.usdc_lp_token);
    }
    message.yTokens = object.y_tokens?.map(e => Token.fromAmino(e)) || [];
    message.pTokens = object.p_tokens?.map(e => Token.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AssetDetails, useInterfaces: boolean = true): AssetDetailsAmino {
    const obj: any = {};
    obj.asset = message.asset ? Asset.toAmino(message.asset, useInterfaces) : undefined;
    obj.c_asset_token = message.cAssetToken ? Token.toAmino(message.cAssetToken, useInterfaces) : undefined;
    obj.underlying_asset_token = message.underlyingAssetToken ? Token.toAmino(message.underlyingAssetToken, useInterfaces) : undefined;
    obj.yamm_lp_token = message.yammLpToken ? Token.toAmino(message.yammLpToken, useInterfaces) : undefined;
    obj.base_lp_token = message.baseLpToken ? Token.toAmino(message.baseLpToken, useInterfaces) : undefined;
    obj.usdc_lp_token = message.usdcLpToken ? Token.toAmino(message.usdcLpToken, useInterfaces) : undefined;
    if (message.yTokens) {
      obj.y_tokens = message.yTokens.map(e => e ? Token.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.y_tokens = message.yTokens;
    }
    if (message.pTokens) {
      obj.p_tokens = message.pTokens.map(e => e ? Token.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.p_tokens = message.pTokens;
    }
    return obj;
  },
  fromAminoMsg(object: AssetDetailsAminoMsg): AssetDetails {
    return AssetDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetDetailsProtoMsg, useInterfaces: boolean = true): AssetDetails {
    return AssetDetails.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AssetDetails): Uint8Array {
    return AssetDetails.encode(message).finish();
  },
  toProtoMsg(message: AssetDetails): AssetDetailsProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.asset.AssetDetails",
      value: AssetDetails.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AssetDetails.typeUrl, AssetDetails);
function createBaseQueryAssetsDetailsRequest(): QueryAssetsDetailsRequest {
  return {
    assetId: ""
  };
}
export const QueryAssetsDetailsRequest = {
  typeUrl: "/pryzmatics.server.asset.QueryAssetsDetailsRequest",
  is(o: any): o is QueryAssetsDetailsRequest {
    return o && (o.$typeUrl === QueryAssetsDetailsRequest.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryAssetsDetailsRequestSDKType {
    return o && (o.$typeUrl === QueryAssetsDetailsRequest.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryAssetsDetailsRequestAmino {
    return o && (o.$typeUrl === QueryAssetsDetailsRequest.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: QueryAssetsDetailsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAssetsDetailsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsDetailsRequest();
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
  fromJSON(object: any): QueryAssetsDetailsRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryAssetsDetailsRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryAssetsDetailsRequest>): QueryAssetsDetailsRequest {
    const message = createBaseQueryAssetsDetailsRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryAssetsDetailsRequestAmino): QueryAssetsDetailsRequest {
    const message = createBaseQueryAssetsDetailsRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryAssetsDetailsRequest, useInterfaces: boolean = true): QueryAssetsDetailsRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryAssetsDetailsRequestAminoMsg): QueryAssetsDetailsRequest {
    return QueryAssetsDetailsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetsDetailsRequestProtoMsg, useInterfaces: boolean = true): QueryAssetsDetailsRequest {
    return QueryAssetsDetailsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAssetsDetailsRequest): Uint8Array {
    return QueryAssetsDetailsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetsDetailsRequest): QueryAssetsDetailsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.asset.QueryAssetsDetailsRequest",
      value: QueryAssetsDetailsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAssetsDetailsRequest.typeUrl, QueryAssetsDetailsRequest);
function createBaseQueryAssetsDetailsResponse(): QueryAssetsDetailsResponse {
  return {
    assets: []
  };
}
export const QueryAssetsDetailsResponse = {
  typeUrl: "/pryzmatics.server.asset.QueryAssetsDetailsResponse",
  is(o: any): o is QueryAssetsDetailsResponse {
    return o && (o.$typeUrl === QueryAssetsDetailsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || AssetDetails.is(o.assets[0])));
  },
  isSDK(o: any): o is QueryAssetsDetailsResponseSDKType {
    return o && (o.$typeUrl === QueryAssetsDetailsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || AssetDetails.isSDK(o.assets[0])));
  },
  isAmino(o: any): o is QueryAssetsDetailsResponseAmino {
    return o && (o.$typeUrl === QueryAssetsDetailsResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || AssetDetails.isAmino(o.assets[0])));
  },
  encode(message: QueryAssetsDetailsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      AssetDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAssetsDetailsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(AssetDetails.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAssetsDetailsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => AssetDetails.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAssetsDetailsResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? AssetDetails.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAssetsDetailsResponse>): QueryAssetsDetailsResponse {
    const message = createBaseQueryAssetsDetailsResponse();
    message.assets = object.assets?.map(e => AssetDetails.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAssetsDetailsResponseAmino): QueryAssetsDetailsResponse {
    const message = createBaseQueryAssetsDetailsResponse();
    message.assets = object.assets?.map(e => AssetDetails.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAssetsDetailsResponse, useInterfaces: boolean = true): QueryAssetsDetailsResponseAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? AssetDetails.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.assets = message.assets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAssetsDetailsResponseAminoMsg): QueryAssetsDetailsResponse {
    return QueryAssetsDetailsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetsDetailsResponseProtoMsg, useInterfaces: boolean = true): QueryAssetsDetailsResponse {
    return QueryAssetsDetailsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAssetsDetailsResponse): Uint8Array {
    return QueryAssetsDetailsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetsDetailsResponse): QueryAssetsDetailsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.asset.QueryAssetsDetailsResponse",
      value: QueryAssetsDetailsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAssetsDetailsResponse.typeUrl, QueryAssetsDetailsResponse);