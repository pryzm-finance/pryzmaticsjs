import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../registry";
export enum ExternalPriceSource {
  COIN_GECKO = 0,
  UNRECOGNIZED = -1,
}
export const ExternalPriceSourceSDKType = ExternalPriceSource;
export const ExternalPriceSourceAmino = ExternalPriceSource;
export function externalPriceSourceFromJSON(object: any): ExternalPriceSource {
  switch (object) {
    case 0:
    case "COIN_GECKO":
      return ExternalPriceSource.COIN_GECKO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExternalPriceSource.UNRECOGNIZED;
  }
}
export function externalPriceSourceToJSON(object: ExternalPriceSource): string {
  switch (object) {
    case ExternalPriceSource.COIN_GECKO:
      return "COIN_GECKO";
    case ExternalPriceSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ExternalTokenPrice {
  denom: string;
  time: Timestamp;
  price: string;
  source: ExternalPriceSource;
}
export interface ExternalTokenPriceProtoMsg {
  typeUrl: "/pryzmatics.price.ExternalTokenPrice";
  value: Uint8Array;
}
export interface ExternalTokenPriceAmino {
  denom?: string;
  time?: string;
  price?: string;
  source?: ExternalPriceSource;
}
export interface ExternalTokenPriceAminoMsg {
  type: "/pryzmatics.price.ExternalTokenPrice";
  value: ExternalTokenPriceAmino;
}
export interface ExternalTokenPriceSDKType {
  denom: string;
  time: TimestampSDKType;
  price: string;
  source: ExternalPriceSource;
}
export interface TokenPrice {
  denom: string;
  blockTime: Timestamp;
  price: string;
}
export interface TokenPriceProtoMsg {
  typeUrl: "/pryzmatics.price.TokenPrice";
  value: Uint8Array;
}
export interface TokenPriceAmino {
  denom?: string;
  block_time?: string;
  price?: string;
}
export interface TokenPriceAminoMsg {
  type: "/pryzmatics.price.TokenPrice";
  value: TokenPriceAmino;
}
export interface TokenPriceSDKType {
  denom: string;
  block_time: TimestampSDKType;
  price: string;
}
function createBaseExternalTokenPrice(): ExternalTokenPrice {
  return {
    denom: "",
    time: Timestamp.fromPartial({}),
    price: "",
    source: 0
  };
}
export const ExternalTokenPrice = {
  typeUrl: "/pryzmatics.price.ExternalTokenPrice",
  is(o: any): o is ExternalTokenPrice {
    return o && (o.$typeUrl === ExternalTokenPrice.typeUrl || typeof o.denom === "string" && Timestamp.is(o.time) && typeof o.price === "string" && isSet(o.source));
  },
  isSDK(o: any): o is ExternalTokenPriceSDKType {
    return o && (o.$typeUrl === ExternalTokenPrice.typeUrl || typeof o.denom === "string" && Timestamp.isSDK(o.time) && typeof o.price === "string" && isSet(o.source));
  },
  isAmino(o: any): o is ExternalTokenPriceAmino {
    return o && (o.$typeUrl === ExternalTokenPrice.typeUrl || typeof o.denom === "string" && Timestamp.isAmino(o.time) && typeof o.price === "string" && isSet(o.source));
  },
  encode(message: ExternalTokenPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.source !== 0) {
      writer.uint32(32).int32(message.source);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExternalTokenPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalTokenPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.source = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExternalTokenPrice {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      price: isSet(object.price) ? String(object.price) : "",
      source: isSet(object.source) ? externalPriceSourceFromJSON(object.source) : -1
    };
  },
  toJSON(message: ExternalTokenPrice): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.price !== undefined && (obj.price = message.price);
    message.source !== undefined && (obj.source = externalPriceSourceToJSON(message.source));
    return obj;
  },
  fromPartial(object: Partial<ExternalTokenPrice>): ExternalTokenPrice {
    const message = createBaseExternalTokenPrice();
    message.denom = object.denom ?? "";
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.price = object.price ?? "";
    message.source = object.source ?? 0;
    return message;
  },
  fromAmino(object: ExternalTokenPriceAmino): ExternalTokenPrice {
    const message = createBaseExternalTokenPrice();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    return message;
  },
  toAmino(message: ExternalTokenPrice, useInterfaces: boolean = true): ExternalTokenPriceAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.time = message.time ? Timestamp.toAmino(message.time, useInterfaces) : undefined;
    obj.price = padDecimal(message.price) === "" ? undefined : padDecimal(message.price);
    obj.source = message.source === 0 ? undefined : message.source;
    return obj;
  },
  fromAminoMsg(object: ExternalTokenPriceAminoMsg): ExternalTokenPrice {
    return ExternalTokenPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: ExternalTokenPriceProtoMsg, useInterfaces: boolean = true): ExternalTokenPrice {
    return ExternalTokenPrice.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExternalTokenPrice): Uint8Array {
    return ExternalTokenPrice.encode(message).finish();
  },
  toProtoMsg(message: ExternalTokenPrice): ExternalTokenPriceProtoMsg {
    return {
      typeUrl: "/pryzmatics.price.ExternalTokenPrice",
      value: ExternalTokenPrice.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExternalTokenPrice.typeUrl, ExternalTokenPrice);
function createBaseTokenPrice(): TokenPrice {
  return {
    denom: "",
    blockTime: Timestamp.fromPartial({}),
    price: ""
  };
}
export const TokenPrice = {
  typeUrl: "/pryzmatics.price.TokenPrice",
  is(o: any): o is TokenPrice {
    return o && (o.$typeUrl === TokenPrice.typeUrl || typeof o.denom === "string" && Timestamp.is(o.blockTime) && typeof o.price === "string");
  },
  isSDK(o: any): o is TokenPriceSDKType {
    return o && (o.$typeUrl === TokenPrice.typeUrl || typeof o.denom === "string" && Timestamp.isSDK(o.block_time) && typeof o.price === "string");
  },
  isAmino(o: any): o is TokenPriceAmino {
    return o && (o.$typeUrl === TokenPrice.typeUrl || typeof o.denom === "string" && Timestamp.isAmino(o.block_time) && typeof o.price === "string");
  },
  encode(message: TokenPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TokenPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenPrice {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  toJSON(message: TokenPrice): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },
  fromPartial(object: Partial<TokenPrice>): TokenPrice {
    const message = createBaseTokenPrice();
    message.denom = object.denom ?? "";
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: TokenPriceAmino): TokenPrice {
    const message = createBaseTokenPrice();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: TokenPrice, useInterfaces: boolean = true): TokenPriceAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    obj.price = padDecimal(message.price) === "" ? undefined : padDecimal(message.price);
    return obj;
  },
  fromAminoMsg(object: TokenPriceAminoMsg): TokenPrice {
    return TokenPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenPriceProtoMsg, useInterfaces: boolean = true): TokenPrice {
    return TokenPrice.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TokenPrice): Uint8Array {
    return TokenPrice.encode(message).finish();
  },
  toProtoMsg(message: TokenPrice): TokenPriceProtoMsg {
    return {
      typeUrl: "/pryzmatics.price.TokenPrice",
      value: TokenPrice.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TokenPrice.typeUrl, TokenPrice);