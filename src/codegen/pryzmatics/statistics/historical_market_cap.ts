import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface HistoricalMarketCapData {
  low?: string;
  high?: string;
  avg?: string;
  open?: string;
  close?: string;
}
export interface HistoricalMarketCapDataProtoMsg {
  typeUrl: "/pryzmatics.statistics.HistoricalMarketCapData";
  value: Uint8Array;
}
export interface HistoricalMarketCapDataAmino {
  low?: string;
  high?: string;
  avg?: string;
  open?: string;
  close?: string;
}
export interface HistoricalMarketCapDataAminoMsg {
  type: "/pryzmatics.statistics.HistoricalMarketCapData";
  value: HistoricalMarketCapDataAmino;
}
export interface HistoricalMarketCapDataSDKType {
  low?: string;
  high?: string;
  avg?: string;
  open?: string;
  close?: string;
}
export interface HistoricalMarketCap {
  time: Timestamp;
  fullyDiluted: HistoricalMarketCapData;
  circulating: HistoricalMarketCapData;
}
export interface HistoricalMarketCapProtoMsg {
  typeUrl: "/pryzmatics.statistics.HistoricalMarketCap";
  value: Uint8Array;
}
export interface HistoricalMarketCapAmino {
  time?: string;
  fully_diluted?: HistoricalMarketCapDataAmino;
  circulating?: HistoricalMarketCapDataAmino;
}
export interface HistoricalMarketCapAminoMsg {
  type: "/pryzmatics.statistics.HistoricalMarketCap";
  value: HistoricalMarketCapAmino;
}
export interface HistoricalMarketCapSDKType {
  time: TimestampSDKType;
  fully_diluted: HistoricalMarketCapDataSDKType;
  circulating: HistoricalMarketCapDataSDKType;
}
function createBaseHistoricalMarketCapData(): HistoricalMarketCapData {
  return {
    low: undefined,
    high: undefined,
    avg: undefined,
    open: undefined,
    close: undefined
  };
}
export const HistoricalMarketCapData = {
  typeUrl: "/pryzmatics.statistics.HistoricalMarketCapData",
  is(o: any): o is HistoricalMarketCapData {
    return o && o.$typeUrl === HistoricalMarketCapData.typeUrl;
  },
  isSDK(o: any): o is HistoricalMarketCapDataSDKType {
    return o && o.$typeUrl === HistoricalMarketCapData.typeUrl;
  },
  isAmino(o: any): o is HistoricalMarketCapDataAmino {
    return o && o.$typeUrl === HistoricalMarketCapData.typeUrl;
  },
  encode(message: HistoricalMarketCapData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.low !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.low, 18).atomics);
    }
    if (message.high !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.high, 18).atomics);
    }
    if (message.avg !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.avg, 18).atomics);
    }
    if (message.open !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.open, 18).atomics);
    }
    if (message.close !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.close, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HistoricalMarketCapData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalMarketCapData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.low = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.high = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.avg = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.open = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.close = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HistoricalMarketCapData {
    return {
      low: isSet(object.low) ? String(object.low) : undefined,
      high: isSet(object.high) ? String(object.high) : undefined,
      avg: isSet(object.avg) ? String(object.avg) : undefined,
      open: isSet(object.open) ? String(object.open) : undefined,
      close: isSet(object.close) ? String(object.close) : undefined
    };
  },
  toJSON(message: HistoricalMarketCapData): unknown {
    const obj: any = {};
    message.low !== undefined && (obj.low = message.low);
    message.high !== undefined && (obj.high = message.high);
    message.avg !== undefined && (obj.avg = message.avg);
    message.open !== undefined && (obj.open = message.open);
    message.close !== undefined && (obj.close = message.close);
    return obj;
  },
  fromPartial(object: Partial<HistoricalMarketCapData>): HistoricalMarketCapData {
    const message = createBaseHistoricalMarketCapData();
    message.low = object.low ?? undefined;
    message.high = object.high ?? undefined;
    message.avg = object.avg ?? undefined;
    message.open = object.open ?? undefined;
    message.close = object.close ?? undefined;
    return message;
  },
  fromAmino(object: HistoricalMarketCapDataAmino): HistoricalMarketCapData {
    const message = createBaseHistoricalMarketCapData();
    if (object.low !== undefined && object.low !== null) {
      message.low = object.low;
    }
    if (object.high !== undefined && object.high !== null) {
      message.high = object.high;
    }
    if (object.avg !== undefined && object.avg !== null) {
      message.avg = object.avg;
    }
    if (object.open !== undefined && object.open !== null) {
      message.open = object.open;
    }
    if (object.close !== undefined && object.close !== null) {
      message.close = object.close;
    }
    return message;
  },
  toAmino(message: HistoricalMarketCapData, useInterfaces: boolean = true): HistoricalMarketCapDataAmino {
    const obj: any = {};
    obj.low = padDecimal(message.low) === null ? undefined : padDecimal(message.low);
    obj.high = padDecimal(message.high) === null ? undefined : padDecimal(message.high);
    obj.avg = padDecimal(message.avg) === null ? undefined : padDecimal(message.avg);
    obj.open = padDecimal(message.open) === null ? undefined : padDecimal(message.open);
    obj.close = padDecimal(message.close) === null ? undefined : padDecimal(message.close);
    return obj;
  },
  fromAminoMsg(object: HistoricalMarketCapDataAminoMsg): HistoricalMarketCapData {
    return HistoricalMarketCapData.fromAmino(object.value);
  },
  fromProtoMsg(message: HistoricalMarketCapDataProtoMsg, useInterfaces: boolean = true): HistoricalMarketCapData {
    return HistoricalMarketCapData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HistoricalMarketCapData): Uint8Array {
    return HistoricalMarketCapData.encode(message).finish();
  },
  toProtoMsg(message: HistoricalMarketCapData): HistoricalMarketCapDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.statistics.HistoricalMarketCapData",
      value: HistoricalMarketCapData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HistoricalMarketCapData.typeUrl, HistoricalMarketCapData);
function createBaseHistoricalMarketCap(): HistoricalMarketCap {
  return {
    time: Timestamp.fromPartial({}),
    fullyDiluted: HistoricalMarketCapData.fromPartial({}),
    circulating: HistoricalMarketCapData.fromPartial({})
  };
}
export const HistoricalMarketCap = {
  typeUrl: "/pryzmatics.statistics.HistoricalMarketCap",
  is(o: any): o is HistoricalMarketCap {
    return o && (o.$typeUrl === HistoricalMarketCap.typeUrl || Timestamp.is(o.time) && HistoricalMarketCapData.is(o.fullyDiluted) && HistoricalMarketCapData.is(o.circulating));
  },
  isSDK(o: any): o is HistoricalMarketCapSDKType {
    return o && (o.$typeUrl === HistoricalMarketCap.typeUrl || Timestamp.isSDK(o.time) && HistoricalMarketCapData.isSDK(o.fully_diluted) && HistoricalMarketCapData.isSDK(o.circulating));
  },
  isAmino(o: any): o is HistoricalMarketCapAmino {
    return o && (o.$typeUrl === HistoricalMarketCap.typeUrl || Timestamp.isAmino(o.time) && HistoricalMarketCapData.isAmino(o.fully_diluted) && HistoricalMarketCapData.isAmino(o.circulating));
  },
  encode(message: HistoricalMarketCap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.fullyDiluted !== undefined) {
      HistoricalMarketCapData.encode(message.fullyDiluted, writer.uint32(18).fork()).ldelim();
    }
    if (message.circulating !== undefined) {
      HistoricalMarketCapData.encode(message.circulating, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HistoricalMarketCap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalMarketCap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.fullyDiluted = HistoricalMarketCapData.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.circulating = HistoricalMarketCapData.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HistoricalMarketCap {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      fullyDiluted: isSet(object.fullyDiluted) ? HistoricalMarketCapData.fromJSON(object.fullyDiluted) : undefined,
      circulating: isSet(object.circulating) ? HistoricalMarketCapData.fromJSON(object.circulating) : undefined
    };
  },
  toJSON(message: HistoricalMarketCap): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.fullyDiluted !== undefined && (obj.fullyDiluted = message.fullyDiluted ? HistoricalMarketCapData.toJSON(message.fullyDiluted) : undefined);
    message.circulating !== undefined && (obj.circulating = message.circulating ? HistoricalMarketCapData.toJSON(message.circulating) : undefined);
    return obj;
  },
  fromPartial(object: Partial<HistoricalMarketCap>): HistoricalMarketCap {
    const message = createBaseHistoricalMarketCap();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.fullyDiluted = object.fullyDiluted !== undefined && object.fullyDiluted !== null ? HistoricalMarketCapData.fromPartial(object.fullyDiluted) : undefined;
    message.circulating = object.circulating !== undefined && object.circulating !== null ? HistoricalMarketCapData.fromPartial(object.circulating) : undefined;
    return message;
  },
  fromAmino(object: HistoricalMarketCapAmino): HistoricalMarketCap {
    const message = createBaseHistoricalMarketCap();
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.fully_diluted !== undefined && object.fully_diluted !== null) {
      message.fullyDiluted = HistoricalMarketCapData.fromAmino(object.fully_diluted);
    }
    if (object.circulating !== undefined && object.circulating !== null) {
      message.circulating = HistoricalMarketCapData.fromAmino(object.circulating);
    }
    return message;
  },
  toAmino(message: HistoricalMarketCap, useInterfaces: boolean = true): HistoricalMarketCapAmino {
    const obj: any = {};
    obj.time = message.time ? Timestamp.toAmino(message.time, useInterfaces) : undefined;
    obj.fully_diluted = message.fullyDiluted ? HistoricalMarketCapData.toAmino(message.fullyDiluted, useInterfaces) : undefined;
    obj.circulating = message.circulating ? HistoricalMarketCapData.toAmino(message.circulating, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: HistoricalMarketCapAminoMsg): HistoricalMarketCap {
    return HistoricalMarketCap.fromAmino(object.value);
  },
  fromProtoMsg(message: HistoricalMarketCapProtoMsg, useInterfaces: boolean = true): HistoricalMarketCap {
    return HistoricalMarketCap.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HistoricalMarketCap): Uint8Array {
    return HistoricalMarketCap.encode(message).finish();
  },
  toProtoMsg(message: HistoricalMarketCap): HistoricalMarketCapProtoMsg {
    return {
      typeUrl: "/pryzmatics.statistics.HistoricalMarketCap",
      value: HistoricalMarketCap.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HistoricalMarketCap.typeUrl, HistoricalMarketCap);