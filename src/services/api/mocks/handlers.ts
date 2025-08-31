import { ApproveOrderMock } from './approve-order.mock';
import { CancelOrderMock } from './cancel-order.mock';
import { DeliverOrderMock } from './deliver-order.mock';
import { DispatchOrderMock } from './dispatch-order.mock';
import { GetDailyRevenueInPeriodMock } from './get-daily-revenue-in-period.mock';
import { GetDayOrdersAmountMock } from './get-day-orders-amount.mock';
import { GetManagedRestaurantMock } from './get-managed-restaurant.mock';
import { GetMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount.mock';
import { GetMonthOrdersAmountMock } from './get-month-orders-amount.mock';
import { GetMonthRevenueMock } from './get-month-revenue.mock';
import { GetOrderDetailsMock } from './get-order-details.mock';
import { GetOrdersMock } from './get-orders.mock';
import { GetPopularProductsMock } from './get-popular-products.mock';
import { GetProfileMock } from './get-profile.mock';
import { RegisterRestaurantMock } from './register-restaurant.mock';
import { SignInMock } from './sign-in.mock';
import { UpdateProfileMock } from './update-profile.mock';

export const handlers = [
  SignInMock,
  RegisterRestaurantMock,
  GetDayOrdersAmountMock,
  GetMonthOrdersAmountMock,
  GetMonthCanceledOrdersAmountMock,
  GetMonthRevenueMock,
  GetDailyRevenueInPeriodMock,
  GetPopularProductsMock,
  GetProfileMock,
  GetManagedRestaurantMock,
  UpdateProfileMock,
  GetOrdersMock,
  GetOrderDetailsMock,
  ApproveOrderMock,
  CancelOrderMock,
  DeliverOrderMock,
  DispatchOrderMock,
];
