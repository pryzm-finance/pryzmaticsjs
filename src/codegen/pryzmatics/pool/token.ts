import { TokenYield, TokenYieldAmino, TokenYieldSDKType } from "./token_yield";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export enum TokenType {
  TOKEN_TYPE_ANY = 0,
  TOKEN_TYPE_P = 1,
  TOKEN_TYPE_Y = 2,
  TOKEN_TYPE_C = 3,
  TOKEN_TYPE_LP = 4,
  TOKEN_TYPE_OTHER = 5,
  UNRECOGNIZED = -1,
}
export const TokenTypeSDKType = TokenType;
export const TokenTypeAmino = TokenType;
export function tokenTypeFromJSON(object: any): TokenType {
  switch (object) {
    case 0:
    case "TOKEN_TYPE_ANY":
      return TokenType.TOKEN_TYPE_ANY;
    case 1:
    case "TOKEN_TYPE_P":
      return TokenType.TOKEN_TYPE_P;
    case 2:
    case "TOKEN_TYPE_Y":
      return TokenType.TOKEN_TYPE_Y;
    case 3:
    case "TOKEN_TYPE_C":
      return TokenType.TOKEN_TYPE_C;
    case 4:
    case "TOKEN_TYPE_LP":
      return TokenType.TOKEN_TYPE_LP;
    case 5:
    case "TOKEN_TYPE_OTHER":
      return TokenType.TOKEN_TYPE_OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenType.UNRECOGNIZED;
  }
}
export function tokenTypeToJSON(object: TokenType): string {
  switch (object) {
    case TokenType.TOKEN_TYPE_ANY:
      return "TOKEN_TYPE_ANY";
    case TokenType.TOKEN_TYPE_P:
      return "TOKEN_TYPE_P";
    case TokenType.TOKEN_TYPE_Y:
      return "TOKEN_TYPE_Y";
    case TokenType.TOKEN_TYPE_C:
      return "TOKEN_TYPE_C";
    case TokenType.TOKEN_TYPE_LP:
      return "TOKEN_TYPE_LP";
    case TokenType.TOKEN_TYPE_OTHER:
      return "TOKEN_TYPE_OTHER";
    case TokenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface TokenMetrics {
  priceChangePercentage1h?: string;
  priceChangePercentage24h?: string;
  priceChangePercentage7d?: string;
  priceChangePercentage30d?: string;
  tradeVolume1h: string;
  tradeVolume24h: string;
  tradeVolume7d: string;
  tradeVolume30d: string;
  price52wLow?: string;
  price52wHigh?: string;
  yieldChangePercentage24h?: string;
  yieldChangePercentage7d?: string;
  yieldChangePercentage30d?: string;
  priceUnderlyingTermsChangePercentage1h?: string;
  priceUnderlyingTermsChangePercentage24h?: string;
  priceUnderlyingTermsChangePercentage7d?: string;
  priceUnderlyingTermsChangePercentage30d?: string;
}
export interface TokenMetricsProtoMsg {
  typeUrl: "/pryzmatics.pool.TokenMetrics";
  value: Uint8Array;
}
export interface TokenMetricsAmino {
  price_change_percentage_1h?: string;
  price_change_percentage_24h?: string;
  price_change_percentage_7d?: string;
  price_change_percentage_30d?: string;
  trade_volume_1h?: string;
  trade_volume_24h?: string;
  trade_volume_7d?: string;
  trade_volume_30d?: string;
  price_52w_low?: string;
  price_52w_high?: string;
  yield_change_percentage_24h?: string;
  yield_change_percentage_7d?: string;
  yield_change_percentage_30d?: string;
  price_underlying_terms_change_percentage_1h?: string;
  price_underlying_terms_change_percentage_24h?: string;
  price_underlying_terms_change_percentage_7d?: string;
  price_underlying_terms_change_percentage_30d?: string;
}
export interface TokenMetricsAminoMsg {
  type: "/pryzmatics.pool.TokenMetrics";
  value: TokenMetricsAmino;
}
export interface TokenMetricsSDKType {
  price_change_percentage_1h?: string;
  price_change_percentage_24h?: string;
  price_change_percentage_7d?: string;
  price_change_percentage_30d?: string;
  trade_volume_1h: string;
  trade_volume_24h: string;
  trade_volume_7d: string;
  trade_volume_30d: string;
  price_52w_low?: string;
  price_52w_high?: string;
  yield_change_percentage_24h?: string;
  yield_change_percentage_7d?: string;
  yield_change_percentage_30d?: string;
  price_underlying_terms_change_percentage_1h?: string;
  price_underlying_terms_change_percentage_24h?: string;
  price_underlying_terms_change_percentage_7d?: string;
  price_underlying_terms_change_percentage_30d?: string;
}
export interface Token {
  denom: string;
  type: TokenType;
  yield?: TokenYield;
  price?: string;
  metrics: TokenMetrics;
  underlyingTokenDenom: string;
  underlyingTokenTermsPrice?: string;
  error: string;
}
export interface TokenProtoMsg {
  typeUrl: "/pryzmatics.pool.Token";
  value: Uint8Array;
}
export interface TokenAmino {
  denom?: string;
  type?: TokenType;
  yield?: TokenYieldAmino;
  price?: string;
  metrics?: TokenMetricsAmino;
  underlying_token_denom?: string;
  underlying_token_terms_price?: string;
  error?: string;
}
export interface TokenAminoMsg {
  type: "/pryzmatics.pool.Token";
  value: TokenAmino;
}
export interface TokenSDKType {
  denom: string;
  type: TokenType;
  yield?: TokenYieldSDKType;
  price?: string;
  metrics: TokenMetricsSDKType;
  underlying_token_denom: string;
  underlying_token_terms_price?: string;
  error: string;
}
function createBaseTokenMetrics(): TokenMetrics {
  return {
    priceChangePercentage1h: undefined,
    priceChangePercentage24h: undefined,
    priceChangePercentage7d: undefined,
    priceChangePercentage30d: undefined,
    tradeVolume1h: "",
    tradeVolume24h: "",
    tradeVolume7d: "",
    tradeVolume30d: "",
    price52wLow: undefined,
    price52wHigh: undefined,
    yieldChangePercentage24h: undefined,
    yieldChangePercentage7d: undefined,
    yieldChangePercentage30d: undefined,
    priceUnderlyingTermsChangePercentage1h: undefined,
    priceUnderlyingTermsChangePercentage24h: undefined,
    priceUnderlyingTermsChangePercentage7d: undefined,
    priceUnderlyingTermsChangePercentage30d: undefined
  };
}
export const TokenMetrics = {
  typeUrl: "/pryzmatics.pool.TokenMetrics",
  is(o: any): o is TokenMetrics {
    return o && (o.$typeUrl === TokenMetrics.typeUrl || typeof o.tradeVolume1h === "string" && typeof o.tradeVolume24h === "string" && typeof o.tradeVolume7d === "string" && typeof o.tradeVolume30d === "string");
  },
  isSDK(o: any): o is TokenMetricsSDKType {
    return o && (o.$typeUrl === TokenMetrics.typeUrl || typeof o.trade_volume_1h === "string" && typeof o.trade_volume_24h === "string" && typeof o.trade_volume_7d === "string" && typeof o.trade_volume_30d === "string");
  },
  isAmino(o: any): o is TokenMetricsAmino {
    return o && (o.$typeUrl === TokenMetrics.typeUrl || typeof o.trade_volume_1h === "string" && typeof o.trade_volume_24h === "string" && typeof o.trade_volume_7d === "string" && typeof o.trade_volume_30d === "string");
  },
  encode(message: TokenMetrics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceChangePercentage1h !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.priceChangePercentage1h, 18).atomics);
    }
    if (message.priceChangePercentage24h !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.priceChangePercentage24h, 18).atomics);
    }
    if (message.priceChangePercentage7d !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.priceChangePercentage7d, 18).atomics);
    }
    if (message.priceChangePercentage30d !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.priceChangePercentage30d, 18).atomics);
    }
    if (message.tradeVolume1h !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.tradeVolume1h, 18).atomics);
    }
    if (message.tradeVolume24h !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.tradeVolume24h, 18).atomics);
    }
    if (message.tradeVolume7d !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.tradeVolume7d, 18).atomics);
    }
    if (message.tradeVolume30d !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.tradeVolume30d, 18).atomics);
    }
    if (message.price52wLow !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.price52wLow, 18).atomics);
    }
    if (message.price52wHigh !== undefined) {
      writer.uint32(82).string(Decimal.fromUserInput(message.price52wHigh, 18).atomics);
    }
    if (message.yieldChangePercentage24h !== undefined) {
      writer.uint32(90).string(Decimal.fromUserInput(message.yieldChangePercentage24h, 18).atomics);
    }
    if (message.yieldChangePercentage7d !== undefined) {
      writer.uint32(98).string(Decimal.fromUserInput(message.yieldChangePercentage7d, 18).atomics);
    }
    if (message.yieldChangePercentage30d !== undefined) {
      writer.uint32(106).string(Decimal.fromUserInput(message.yieldChangePercentage30d, 18).atomics);
    }
    if (message.priceUnderlyingTermsChangePercentage1h !== undefined) {
      writer.uint32(114).string(Decimal.fromUserInput(message.priceUnderlyingTermsChangePercentage1h, 18).atomics);
    }
    if (message.priceUnderlyingTermsChangePercentage24h !== undefined) {
      writer.uint32(122).string(Decimal.fromUserInput(message.priceUnderlyingTermsChangePercentage24h, 18).atomics);
    }
    if (message.priceUnderlyingTermsChangePercentage7d !== undefined) {
      writer.uint32(130).string(Decimal.fromUserInput(message.priceUnderlyingTermsChangePercentage7d, 18).atomics);
    }
    if (message.priceUnderlyingTermsChangePercentage30d !== undefined) {
      writer.uint32(138).string(Decimal.fromUserInput(message.priceUnderlyingTermsChangePercentage30d, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TokenMetrics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceChangePercentage1h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.priceChangePercentage24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.priceChangePercentage7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.priceChangePercentage30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.tradeVolume1h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.tradeVolume24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.tradeVolume7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.tradeVolume30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.price52wLow = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.price52wHigh = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.yieldChangePercentage24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.yieldChangePercentage7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.yieldChangePercentage30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.priceUnderlyingTermsChangePercentage1h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.priceUnderlyingTermsChangePercentage24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.priceUnderlyingTermsChangePercentage7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.priceUnderlyingTermsChangePercentage30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenMetrics {
    return {
      priceChangePercentage1h: isSet(object.priceChangePercentage1h) ? String(object.priceChangePercentage1h) : undefined,
      priceChangePercentage24h: isSet(object.priceChangePercentage24h) ? String(object.priceChangePercentage24h) : undefined,
      priceChangePercentage7d: isSet(object.priceChangePercentage7d) ? String(object.priceChangePercentage7d) : undefined,
      priceChangePercentage30d: isSet(object.priceChangePercentage30d) ? String(object.priceChangePercentage30d) : undefined,
      tradeVolume1h: isSet(object.tradeVolume1h) ? String(object.tradeVolume1h) : "",
      tradeVolume24h: isSet(object.tradeVolume24h) ? String(object.tradeVolume24h) : "",
      tradeVolume7d: isSet(object.tradeVolume7d) ? String(object.tradeVolume7d) : "",
      tradeVolume30d: isSet(object.tradeVolume30d) ? String(object.tradeVolume30d) : "",
      price52wLow: isSet(object.price52wLow) ? String(object.price52wLow) : undefined,
      price52wHigh: isSet(object.price52wHigh) ? String(object.price52wHigh) : undefined,
      yieldChangePercentage24h: isSet(object.yieldChangePercentage24h) ? String(object.yieldChangePercentage24h) : undefined,
      yieldChangePercentage7d: isSet(object.yieldChangePercentage7d) ? String(object.yieldChangePercentage7d) : undefined,
      yieldChangePercentage30d: isSet(object.yieldChangePercentage30d) ? String(object.yieldChangePercentage30d) : undefined,
      priceUnderlyingTermsChangePercentage1h: isSet(object.priceUnderlyingTermsChangePercentage1h) ? String(object.priceUnderlyingTermsChangePercentage1h) : undefined,
      priceUnderlyingTermsChangePercentage24h: isSet(object.priceUnderlyingTermsChangePercentage24h) ? String(object.priceUnderlyingTermsChangePercentage24h) : undefined,
      priceUnderlyingTermsChangePercentage7d: isSet(object.priceUnderlyingTermsChangePercentage7d) ? String(object.priceUnderlyingTermsChangePercentage7d) : undefined,
      priceUnderlyingTermsChangePercentage30d: isSet(object.priceUnderlyingTermsChangePercentage30d) ? String(object.priceUnderlyingTermsChangePercentage30d) : undefined
    };
  },
  toJSON(message: TokenMetrics): unknown {
    const obj: any = {};
    message.priceChangePercentage1h !== undefined && (obj.priceChangePercentage1h = message.priceChangePercentage1h);
    message.priceChangePercentage24h !== undefined && (obj.priceChangePercentage24h = message.priceChangePercentage24h);
    message.priceChangePercentage7d !== undefined && (obj.priceChangePercentage7d = message.priceChangePercentage7d);
    message.priceChangePercentage30d !== undefined && (obj.priceChangePercentage30d = message.priceChangePercentage30d);
    message.tradeVolume1h !== undefined && (obj.tradeVolume1h = message.tradeVolume1h);
    message.tradeVolume24h !== undefined && (obj.tradeVolume24h = message.tradeVolume24h);
    message.tradeVolume7d !== undefined && (obj.tradeVolume7d = message.tradeVolume7d);
    message.tradeVolume30d !== undefined && (obj.tradeVolume30d = message.tradeVolume30d);
    message.price52wLow !== undefined && (obj.price52wLow = message.price52wLow);
    message.price52wHigh !== undefined && (obj.price52wHigh = message.price52wHigh);
    message.yieldChangePercentage24h !== undefined && (obj.yieldChangePercentage24h = message.yieldChangePercentage24h);
    message.yieldChangePercentage7d !== undefined && (obj.yieldChangePercentage7d = message.yieldChangePercentage7d);
    message.yieldChangePercentage30d !== undefined && (obj.yieldChangePercentage30d = message.yieldChangePercentage30d);
    message.priceUnderlyingTermsChangePercentage1h !== undefined && (obj.priceUnderlyingTermsChangePercentage1h = message.priceUnderlyingTermsChangePercentage1h);
    message.priceUnderlyingTermsChangePercentage24h !== undefined && (obj.priceUnderlyingTermsChangePercentage24h = message.priceUnderlyingTermsChangePercentage24h);
    message.priceUnderlyingTermsChangePercentage7d !== undefined && (obj.priceUnderlyingTermsChangePercentage7d = message.priceUnderlyingTermsChangePercentage7d);
    message.priceUnderlyingTermsChangePercentage30d !== undefined && (obj.priceUnderlyingTermsChangePercentage30d = message.priceUnderlyingTermsChangePercentage30d);
    return obj;
  },
  fromPartial(object: Partial<TokenMetrics>): TokenMetrics {
    const message = createBaseTokenMetrics();
    message.priceChangePercentage1h = object.priceChangePercentage1h ?? undefined;
    message.priceChangePercentage24h = object.priceChangePercentage24h ?? undefined;
    message.priceChangePercentage7d = object.priceChangePercentage7d ?? undefined;
    message.priceChangePercentage30d = object.priceChangePercentage30d ?? undefined;
    message.tradeVolume1h = object.tradeVolume1h ?? "";
    message.tradeVolume24h = object.tradeVolume24h ?? "";
    message.tradeVolume7d = object.tradeVolume7d ?? "";
    message.tradeVolume30d = object.tradeVolume30d ?? "";
    message.price52wLow = object.price52wLow ?? undefined;
    message.price52wHigh = object.price52wHigh ?? undefined;
    message.yieldChangePercentage24h = object.yieldChangePercentage24h ?? undefined;
    message.yieldChangePercentage7d = object.yieldChangePercentage7d ?? undefined;
    message.yieldChangePercentage30d = object.yieldChangePercentage30d ?? undefined;
    message.priceUnderlyingTermsChangePercentage1h = object.priceUnderlyingTermsChangePercentage1h ?? undefined;
    message.priceUnderlyingTermsChangePercentage24h = object.priceUnderlyingTermsChangePercentage24h ?? undefined;
    message.priceUnderlyingTermsChangePercentage7d = object.priceUnderlyingTermsChangePercentage7d ?? undefined;
    message.priceUnderlyingTermsChangePercentage30d = object.priceUnderlyingTermsChangePercentage30d ?? undefined;
    return message;
  },
  fromAmino(object: TokenMetricsAmino): TokenMetrics {
    const message = createBaseTokenMetrics();
    if (object.price_change_percentage_1h !== undefined && object.price_change_percentage_1h !== null) {
      message.priceChangePercentage1h = object.price_change_percentage_1h;
    }
    if (object.price_change_percentage_24h !== undefined && object.price_change_percentage_24h !== null) {
      message.priceChangePercentage24h = object.price_change_percentage_24h;
    }
    if (object.price_change_percentage_7d !== undefined && object.price_change_percentage_7d !== null) {
      message.priceChangePercentage7d = object.price_change_percentage_7d;
    }
    if (object.price_change_percentage_30d !== undefined && object.price_change_percentage_30d !== null) {
      message.priceChangePercentage30d = object.price_change_percentage_30d;
    }
    if (object.trade_volume_1h !== undefined && object.trade_volume_1h !== null) {
      message.tradeVolume1h = object.trade_volume_1h;
    }
    if (object.trade_volume_24h !== undefined && object.trade_volume_24h !== null) {
      message.tradeVolume24h = object.trade_volume_24h;
    }
    if (object.trade_volume_7d !== undefined && object.trade_volume_7d !== null) {
      message.tradeVolume7d = object.trade_volume_7d;
    }
    if (object.trade_volume_30d !== undefined && object.trade_volume_30d !== null) {
      message.tradeVolume30d = object.trade_volume_30d;
    }
    if (object.price_52w_low !== undefined && object.price_52w_low !== null) {
      message.price52wLow = object.price_52w_low;
    }
    if (object.price_52w_high !== undefined && object.price_52w_high !== null) {
      message.price52wHigh = object.price_52w_high;
    }
    if (object.yield_change_percentage_24h !== undefined && object.yield_change_percentage_24h !== null) {
      message.yieldChangePercentage24h = object.yield_change_percentage_24h;
    }
    if (object.yield_change_percentage_7d !== undefined && object.yield_change_percentage_7d !== null) {
      message.yieldChangePercentage7d = object.yield_change_percentage_7d;
    }
    if (object.yield_change_percentage_30d !== undefined && object.yield_change_percentage_30d !== null) {
      message.yieldChangePercentage30d = object.yield_change_percentage_30d;
    }
    if (object.price_underlying_terms_change_percentage_1h !== undefined && object.price_underlying_terms_change_percentage_1h !== null) {
      message.priceUnderlyingTermsChangePercentage1h = object.price_underlying_terms_change_percentage_1h;
    }
    if (object.price_underlying_terms_change_percentage_24h !== undefined && object.price_underlying_terms_change_percentage_24h !== null) {
      message.priceUnderlyingTermsChangePercentage24h = object.price_underlying_terms_change_percentage_24h;
    }
    if (object.price_underlying_terms_change_percentage_7d !== undefined && object.price_underlying_terms_change_percentage_7d !== null) {
      message.priceUnderlyingTermsChangePercentage7d = object.price_underlying_terms_change_percentage_7d;
    }
    if (object.price_underlying_terms_change_percentage_30d !== undefined && object.price_underlying_terms_change_percentage_30d !== null) {
      message.priceUnderlyingTermsChangePercentage30d = object.price_underlying_terms_change_percentage_30d;
    }
    return message;
  },
  toAmino(message: TokenMetrics, useInterfaces: boolean = true): TokenMetricsAmino {
    const obj: any = {};
    obj.price_change_percentage_1h = padDecimal(message.priceChangePercentage1h) === null ? undefined : padDecimal(message.priceChangePercentage1h);
    obj.price_change_percentage_24h = padDecimal(message.priceChangePercentage24h) === null ? undefined : padDecimal(message.priceChangePercentage24h);
    obj.price_change_percentage_7d = padDecimal(message.priceChangePercentage7d) === null ? undefined : padDecimal(message.priceChangePercentage7d);
    obj.price_change_percentage_30d = padDecimal(message.priceChangePercentage30d) === null ? undefined : padDecimal(message.priceChangePercentage30d);
    obj.trade_volume_1h = padDecimal(message.tradeVolume1h) === "" ? undefined : padDecimal(message.tradeVolume1h);
    obj.trade_volume_24h = padDecimal(message.tradeVolume24h) === "" ? undefined : padDecimal(message.tradeVolume24h);
    obj.trade_volume_7d = padDecimal(message.tradeVolume7d) === "" ? undefined : padDecimal(message.tradeVolume7d);
    obj.trade_volume_30d = padDecimal(message.tradeVolume30d) === "" ? undefined : padDecimal(message.tradeVolume30d);
    obj.price_52w_low = padDecimal(message.price52wLow) === null ? undefined : padDecimal(message.price52wLow);
    obj.price_52w_high = padDecimal(message.price52wHigh) === null ? undefined : padDecimal(message.price52wHigh);
    obj.yield_change_percentage_24h = padDecimal(message.yieldChangePercentage24h) === null ? undefined : padDecimal(message.yieldChangePercentage24h);
    obj.yield_change_percentage_7d = padDecimal(message.yieldChangePercentage7d) === null ? undefined : padDecimal(message.yieldChangePercentage7d);
    obj.yield_change_percentage_30d = padDecimal(message.yieldChangePercentage30d) === null ? undefined : padDecimal(message.yieldChangePercentage30d);
    obj.price_underlying_terms_change_percentage_1h = padDecimal(message.priceUnderlyingTermsChangePercentage1h) === null ? undefined : padDecimal(message.priceUnderlyingTermsChangePercentage1h);
    obj.price_underlying_terms_change_percentage_24h = padDecimal(message.priceUnderlyingTermsChangePercentage24h) === null ? undefined : padDecimal(message.priceUnderlyingTermsChangePercentage24h);
    obj.price_underlying_terms_change_percentage_7d = padDecimal(message.priceUnderlyingTermsChangePercentage7d) === null ? undefined : padDecimal(message.priceUnderlyingTermsChangePercentage7d);
    obj.price_underlying_terms_change_percentage_30d = padDecimal(message.priceUnderlyingTermsChangePercentage30d) === null ? undefined : padDecimal(message.priceUnderlyingTermsChangePercentage30d);
    return obj;
  },
  fromAminoMsg(object: TokenMetricsAminoMsg): TokenMetrics {
    return TokenMetrics.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenMetricsProtoMsg, useInterfaces: boolean = true): TokenMetrics {
    return TokenMetrics.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TokenMetrics): Uint8Array {
    return TokenMetrics.encode(message).finish();
  },
  toProtoMsg(message: TokenMetrics): TokenMetricsProtoMsg {
    return {
      typeUrl: "/pryzmatics.pool.TokenMetrics",
      value: TokenMetrics.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TokenMetrics.typeUrl, TokenMetrics);
function createBaseToken(): Token {
  return {
    denom: "",
    type: 0,
    yield: undefined,
    price: undefined,
    metrics: TokenMetrics.fromPartial({}),
    underlyingTokenDenom: "",
    underlyingTokenTermsPrice: undefined,
    error: ""
  };
}
export const Token = {
  typeUrl: "/pryzmatics.pool.Token",
  is(o: any): o is Token {
    return o && (o.$typeUrl === Token.typeUrl || typeof o.denom === "string" && isSet(o.type) && TokenMetrics.is(o.metrics) && typeof o.underlyingTokenDenom === "string" && typeof o.error === "string");
  },
  isSDK(o: any): o is TokenSDKType {
    return o && (o.$typeUrl === Token.typeUrl || typeof o.denom === "string" && isSet(o.type) && TokenMetrics.isSDK(o.metrics) && typeof o.underlying_token_denom === "string" && typeof o.error === "string");
  },
  isAmino(o: any): o is TokenAmino {
    return o && (o.$typeUrl === Token.typeUrl || typeof o.denom === "string" && isSet(o.type) && TokenMetrics.isAmino(o.metrics) && typeof o.underlying_token_denom === "string" && typeof o.error === "string");
  },
  encode(message: Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.yield !== undefined) {
      TokenYield.encode(message.yield, writer.uint32(26).fork()).ldelim();
    }
    if (message.price !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.metrics !== undefined) {
      TokenMetrics.encode(message.metrics, writer.uint32(42).fork()).ldelim();
    }
    if (message.underlyingTokenDenom !== "") {
      writer.uint32(50).string(message.underlyingTokenDenom);
    }
    if (message.underlyingTokenTermsPrice !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.underlyingTokenTermsPrice, 18).atomics);
    }
    if (message.error !== "") {
      writer.uint32(66).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Token {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        case 3:
          message.yield = TokenYield.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.metrics = TokenMetrics.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.underlyingTokenDenom = reader.string();
          break;
        case 7:
          message.underlyingTokenTermsPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Token {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      type: isSet(object.type) ? tokenTypeFromJSON(object.type) : -1,
      yield: isSet(object.yield) ? TokenYield.fromJSON(object.yield) : undefined,
      price: isSet(object.price) ? String(object.price) : undefined,
      metrics: isSet(object.metrics) ? TokenMetrics.fromJSON(object.metrics) : undefined,
      underlyingTokenDenom: isSet(object.underlyingTokenDenom) ? String(object.underlyingTokenDenom) : "",
      underlyingTokenTermsPrice: isSet(object.underlyingTokenTermsPrice) ? String(object.underlyingTokenTermsPrice) : undefined,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: Token): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.type !== undefined && (obj.type = tokenTypeToJSON(message.type));
    message.yield !== undefined && (obj.yield = message.yield ? TokenYield.toJSON(message.yield) : undefined);
    message.price !== undefined && (obj.price = message.price);
    message.metrics !== undefined && (obj.metrics = message.metrics ? TokenMetrics.toJSON(message.metrics) : undefined);
    message.underlyingTokenDenom !== undefined && (obj.underlyingTokenDenom = message.underlyingTokenDenom);
    message.underlyingTokenTermsPrice !== undefined && (obj.underlyingTokenTermsPrice = message.underlyingTokenTermsPrice);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<Token>): Token {
    const message = createBaseToken();
    message.denom = object.denom ?? "";
    message.type = object.type ?? 0;
    message.yield = object.yield !== undefined && object.yield !== null ? TokenYield.fromPartial(object.yield) : undefined;
    message.price = object.price ?? undefined;
    message.metrics = object.metrics !== undefined && object.metrics !== null ? TokenMetrics.fromPartial(object.metrics) : undefined;
    message.underlyingTokenDenom = object.underlyingTokenDenom ?? "";
    message.underlyingTokenTermsPrice = object.underlyingTokenTermsPrice ?? undefined;
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: TokenAmino): Token {
    const message = createBaseToken();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.yield !== undefined && object.yield !== null) {
      message.yield = TokenYield.fromAmino(object.yield);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.metrics !== undefined && object.metrics !== null) {
      message.metrics = TokenMetrics.fromAmino(object.metrics);
    }
    if (object.underlying_token_denom !== undefined && object.underlying_token_denom !== null) {
      message.underlyingTokenDenom = object.underlying_token_denom;
    }
    if (object.underlying_token_terms_price !== undefined && object.underlying_token_terms_price !== null) {
      message.underlyingTokenTermsPrice = object.underlying_token_terms_price;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: Token, useInterfaces: boolean = true): TokenAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.yield = message.yield ? TokenYield.toAmino(message.yield, useInterfaces) : undefined;
    obj.price = padDecimal(message.price) === null ? undefined : padDecimal(message.price);
    obj.metrics = message.metrics ? TokenMetrics.toAmino(message.metrics, useInterfaces) : undefined;
    obj.underlying_token_denom = message.underlyingTokenDenom === "" ? undefined : message.underlyingTokenDenom;
    obj.underlying_token_terms_price = padDecimal(message.underlyingTokenTermsPrice) === null ? undefined : padDecimal(message.underlyingTokenTermsPrice);
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: TokenAminoMsg): Token {
    return Token.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenProtoMsg, useInterfaces: boolean = true): Token {
    return Token.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Token): Uint8Array {
    return Token.encode(message).finish();
  },
  toProtoMsg(message: Token): TokenProtoMsg {
    return {
      typeUrl: "/pryzmatics.pool.Token",
      value: Token.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Token.typeUrl, Token);