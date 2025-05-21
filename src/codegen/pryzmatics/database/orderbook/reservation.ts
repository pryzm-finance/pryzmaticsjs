import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum OrderBookReservationOrderByProperty {
  ORDER_BY_PROPERTY_RESERVATION_ID = 0,
  UNRECOGNIZED = -1,
}
export const OrderBookReservationOrderByPropertySDKType = OrderBookReservationOrderByProperty;
export const OrderBookReservationOrderByPropertyAmino = OrderBookReservationOrderByProperty;
export function orderBookReservationOrderByPropertyFromJSON(object: any): OrderBookReservationOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_RESERVATION_ID":
      return OrderBookReservationOrderByProperty.ORDER_BY_PROPERTY_RESERVATION_ID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBookReservationOrderByProperty.UNRECOGNIZED;
  }
}
export function orderBookReservationOrderByPropertyToJSON(object: OrderBookReservationOrderByProperty): string {
  switch (object) {
    case OrderBookReservationOrderByProperty.ORDER_BY_PROPERTY_RESERVATION_ID:
      return "ORDER_BY_PROPERTY_RESERVATION_ID";
    case OrderBookReservationOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface OrderBookReservationOrderBy {
  property: OrderBookReservationOrderByProperty;
  descending: boolean;
}
export interface OrderBookReservationOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.orderbook.OrderBookReservationOrderBy";
  value: Uint8Array;
}
export interface OrderBookReservationOrderByAmino {
  property?: OrderBookReservationOrderByProperty;
  descending?: boolean;
}
export interface OrderBookReservationOrderByAminoMsg {
  type: "/pryzmatics.database.orderbook.OrderBookReservationOrderBy";
  value: OrderBookReservationOrderByAmino;
}
export interface OrderBookReservationOrderBySDKType {
  property: OrderBookReservationOrderByProperty;
  descending: boolean;
}
function createBaseOrderBookReservationOrderBy(): OrderBookReservationOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const OrderBookReservationOrderBy = {
  typeUrl: "/pryzmatics.database.orderbook.OrderBookReservationOrderBy",
  is(o: any): o is OrderBookReservationOrderBy {
    return o && (o.$typeUrl === OrderBookReservationOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is OrderBookReservationOrderBySDKType {
    return o && (o.$typeUrl === OrderBookReservationOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is OrderBookReservationOrderByAmino {
    return o && (o.$typeUrl === OrderBookReservationOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: OrderBookReservationOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderBookReservationOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookReservationOrderBy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property = (reader.int32() as any);
          break;
        case 2:
          message.descending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderBookReservationOrderBy {
    return {
      property: isSet(object.property) ? orderBookReservationOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: OrderBookReservationOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = orderBookReservationOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<OrderBookReservationOrderBy>): OrderBookReservationOrderBy {
    const message = createBaseOrderBookReservationOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: OrderBookReservationOrderByAmino): OrderBookReservationOrderBy {
    const message = createBaseOrderBookReservationOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: OrderBookReservationOrderBy, useInterfaces: boolean = true): OrderBookReservationOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: OrderBookReservationOrderByAminoMsg): OrderBookReservationOrderBy {
    return OrderBookReservationOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderBookReservationOrderByProtoMsg, useInterfaces: boolean = true): OrderBookReservationOrderBy {
    return OrderBookReservationOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderBookReservationOrderBy): Uint8Array {
    return OrderBookReservationOrderBy.encode(message).finish();
  },
  toProtoMsg(message: OrderBookReservationOrderBy): OrderBookReservationOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.orderbook.OrderBookReservationOrderBy",
      value: OrderBookReservationOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderBookReservationOrderBy.typeUrl, OrderBookReservationOrderBy);