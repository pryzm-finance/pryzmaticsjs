import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface HistoricalBankSupply {
  time: Timestamp;
  supplyLow?: string;
  supplyHigh?: string;
  supplyAvg?: string;
  supplyOpen?: string;
  supplyClose?: string;
  supplyUusdcLow?: string;
  supplyUusdcHigh?: string;
  supplyUusdcAvg?: string;
  supplyUusdcOpen?: string;
  supplyUusdcClose?: string;
}
export interface HistoricalBankSupplyProtoMsg {
  typeUrl: "/pryzmatics.bank.HistoricalBankSupply";
  value: Uint8Array;
}
export interface HistoricalBankSupplyAmino {
  time?: string;
  supply_low?: string;
  supply_high?: string;
  supply_avg?: string;
  supply_open?: string;
  supply_close?: string;
  supply_uusdc_low?: string;
  supply_uusdc_high?: string;
  supply_uusdc_avg?: string;
  supply_uusdc_open?: string;
  supply_uusdc_close?: string;
}
export interface HistoricalBankSupplyAminoMsg {
  type: "/pryzmatics.bank.HistoricalBankSupply";
  value: HistoricalBankSupplyAmino;
}
export interface HistoricalBankSupplySDKType {
  time: TimestampSDKType;
  supply_low?: string;
  supply_high?: string;
  supply_avg?: string;
  supply_open?: string;
  supply_close?: string;
  supply_uusdc_low?: string;
  supply_uusdc_high?: string;
  supply_uusdc_avg?: string;
  supply_uusdc_open?: string;
  supply_uusdc_close?: string;
}
function createBaseHistoricalBankSupply(): HistoricalBankSupply {
  return {
    time: Timestamp.fromPartial({}),
    supplyLow: undefined,
    supplyHigh: undefined,
    supplyAvg: undefined,
    supplyOpen: undefined,
    supplyClose: undefined,
    supplyUusdcLow: undefined,
    supplyUusdcHigh: undefined,
    supplyUusdcAvg: undefined,
    supplyUusdcOpen: undefined,
    supplyUusdcClose: undefined
  };
}
export const HistoricalBankSupply = {
  typeUrl: "/pryzmatics.bank.HistoricalBankSupply",
  is(o: any): o is HistoricalBankSupply {
    return o && (o.$typeUrl === HistoricalBankSupply.typeUrl || Timestamp.is(o.time));
  },
  isSDK(o: any): o is HistoricalBankSupplySDKType {
    return o && (o.$typeUrl === HistoricalBankSupply.typeUrl || Timestamp.isSDK(o.time));
  },
  isAmino(o: any): o is HistoricalBankSupplyAmino {
    return o && (o.$typeUrl === HistoricalBankSupply.typeUrl || Timestamp.isAmino(o.time));
  },
  encode(message: HistoricalBankSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.supplyLow !== undefined) {
      writer.uint32(18).string(message.supplyLow);
    }
    if (message.supplyHigh !== undefined) {
      writer.uint32(26).string(message.supplyHigh);
    }
    if (message.supplyAvg !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.supplyAvg, 18).atomics);
    }
    if (message.supplyOpen !== undefined) {
      writer.uint32(42).string(message.supplyOpen);
    }
    if (message.supplyClose !== undefined) {
      writer.uint32(50).string(message.supplyClose);
    }
    if (message.supplyUusdcLow !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.supplyUusdcLow, 18).atomics);
    }
    if (message.supplyUusdcHigh !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.supplyUusdcHigh, 18).atomics);
    }
    if (message.supplyUusdcAvg !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.supplyUusdcAvg, 18).atomics);
    }
    if (message.supplyUusdcOpen !== undefined) {
      writer.uint32(82).string(Decimal.fromUserInput(message.supplyUusdcOpen, 18).atomics);
    }
    if (message.supplyUusdcClose !== undefined) {
      writer.uint32(90).string(Decimal.fromUserInput(message.supplyUusdcClose, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HistoricalBankSupply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalBankSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.supplyLow = reader.string();
          break;
        case 3:
          message.supplyHigh = reader.string();
          break;
        case 4:
          message.supplyAvg = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.supplyOpen = reader.string();
          break;
        case 6:
          message.supplyClose = reader.string();
          break;
        case 7:
          message.supplyUusdcLow = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.supplyUusdcHigh = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.supplyUusdcAvg = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.supplyUusdcOpen = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.supplyUusdcClose = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HistoricalBankSupply {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      supplyLow: isSet(object.supplyLow) ? String(object.supplyLow) : undefined,
      supplyHigh: isSet(object.supplyHigh) ? String(object.supplyHigh) : undefined,
      supplyAvg: isSet(object.supplyAvg) ? String(object.supplyAvg) : undefined,
      supplyOpen: isSet(object.supplyOpen) ? String(object.supplyOpen) : undefined,
      supplyClose: isSet(object.supplyClose) ? String(object.supplyClose) : undefined,
      supplyUusdcLow: isSet(object.supplyUusdcLow) ? String(object.supplyUusdcLow) : undefined,
      supplyUusdcHigh: isSet(object.supplyUusdcHigh) ? String(object.supplyUusdcHigh) : undefined,
      supplyUusdcAvg: isSet(object.supplyUusdcAvg) ? String(object.supplyUusdcAvg) : undefined,
      supplyUusdcOpen: isSet(object.supplyUusdcOpen) ? String(object.supplyUusdcOpen) : undefined,
      supplyUusdcClose: isSet(object.supplyUusdcClose) ? String(object.supplyUusdcClose) : undefined
    };
  },
  toJSON(message: HistoricalBankSupply): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.supplyLow !== undefined && (obj.supplyLow = message.supplyLow);
    message.supplyHigh !== undefined && (obj.supplyHigh = message.supplyHigh);
    message.supplyAvg !== undefined && (obj.supplyAvg = message.supplyAvg);
    message.supplyOpen !== undefined && (obj.supplyOpen = message.supplyOpen);
    message.supplyClose !== undefined && (obj.supplyClose = message.supplyClose);
    message.supplyUusdcLow !== undefined && (obj.supplyUusdcLow = message.supplyUusdcLow);
    message.supplyUusdcHigh !== undefined && (obj.supplyUusdcHigh = message.supplyUusdcHigh);
    message.supplyUusdcAvg !== undefined && (obj.supplyUusdcAvg = message.supplyUusdcAvg);
    message.supplyUusdcOpen !== undefined && (obj.supplyUusdcOpen = message.supplyUusdcOpen);
    message.supplyUusdcClose !== undefined && (obj.supplyUusdcClose = message.supplyUusdcClose);
    return obj;
  },
  fromPartial(object: Partial<HistoricalBankSupply>): HistoricalBankSupply {
    const message = createBaseHistoricalBankSupply();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.supplyLow = object.supplyLow ?? undefined;
    message.supplyHigh = object.supplyHigh ?? undefined;
    message.supplyAvg = object.supplyAvg ?? undefined;
    message.supplyOpen = object.supplyOpen ?? undefined;
    message.supplyClose = object.supplyClose ?? undefined;
    message.supplyUusdcLow = object.supplyUusdcLow ?? undefined;
    message.supplyUusdcHigh = object.supplyUusdcHigh ?? undefined;
    message.supplyUusdcAvg = object.supplyUusdcAvg ?? undefined;
    message.supplyUusdcOpen = object.supplyUusdcOpen ?? undefined;
    message.supplyUusdcClose = object.supplyUusdcClose ?? undefined;
    return message;
  },
  fromAmino(object: HistoricalBankSupplyAmino): HistoricalBankSupply {
    const message = createBaseHistoricalBankSupply();
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.supply_low !== undefined && object.supply_low !== null) {
      message.supplyLow = object.supply_low;
    }
    if (object.supply_high !== undefined && object.supply_high !== null) {
      message.supplyHigh = object.supply_high;
    }
    if (object.supply_avg !== undefined && object.supply_avg !== null) {
      message.supplyAvg = object.supply_avg;
    }
    if (object.supply_open !== undefined && object.supply_open !== null) {
      message.supplyOpen = object.supply_open;
    }
    if (object.supply_close !== undefined && object.supply_close !== null) {
      message.supplyClose = object.supply_close;
    }
    if (object.supply_uusdc_low !== undefined && object.supply_uusdc_low !== null) {
      message.supplyUusdcLow = object.supply_uusdc_low;
    }
    if (object.supply_uusdc_high !== undefined && object.supply_uusdc_high !== null) {
      message.supplyUusdcHigh = object.supply_uusdc_high;
    }
    if (object.supply_uusdc_avg !== undefined && object.supply_uusdc_avg !== null) {
      message.supplyUusdcAvg = object.supply_uusdc_avg;
    }
    if (object.supply_uusdc_open !== undefined && object.supply_uusdc_open !== null) {
      message.supplyUusdcOpen = object.supply_uusdc_open;
    }
    if (object.supply_uusdc_close !== undefined && object.supply_uusdc_close !== null) {
      message.supplyUusdcClose = object.supply_uusdc_close;
    }
    return message;
  },
  toAmino(message: HistoricalBankSupply, useInterfaces: boolean = true): HistoricalBankSupplyAmino {
    const obj: any = {};
    obj.time = message.time ? Timestamp.toAmino(message.time, useInterfaces) : undefined;
    obj.supply_low = message.supplyLow === null ? undefined : message.supplyLow;
    obj.supply_high = message.supplyHigh === null ? undefined : message.supplyHigh;
    obj.supply_avg = padDecimal(message.supplyAvg) === null ? undefined : padDecimal(message.supplyAvg);
    obj.supply_open = message.supplyOpen === null ? undefined : message.supplyOpen;
    obj.supply_close = message.supplyClose === null ? undefined : message.supplyClose;
    obj.supply_uusdc_low = padDecimal(message.supplyUusdcLow) === null ? undefined : padDecimal(message.supplyUusdcLow);
    obj.supply_uusdc_high = padDecimal(message.supplyUusdcHigh) === null ? undefined : padDecimal(message.supplyUusdcHigh);
    obj.supply_uusdc_avg = padDecimal(message.supplyUusdcAvg) === null ? undefined : padDecimal(message.supplyUusdcAvg);
    obj.supply_uusdc_open = padDecimal(message.supplyUusdcOpen) === null ? undefined : padDecimal(message.supplyUusdcOpen);
    obj.supply_uusdc_close = padDecimal(message.supplyUusdcClose) === null ? undefined : padDecimal(message.supplyUusdcClose);
    return obj;
  },
  fromAminoMsg(object: HistoricalBankSupplyAminoMsg): HistoricalBankSupply {
    return HistoricalBankSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: HistoricalBankSupplyProtoMsg, useInterfaces: boolean = true): HistoricalBankSupply {
    return HistoricalBankSupply.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HistoricalBankSupply): Uint8Array {
    return HistoricalBankSupply.encode(message).finish();
  },
  toProtoMsg(message: HistoricalBankSupply): HistoricalBankSupplyProtoMsg {
    return {
      typeUrl: "/pryzmatics.bank.HistoricalBankSupply",
      value: HistoricalBankSupply.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HistoricalBankSupply.typeUrl, HistoricalBankSupply);