import React from 'react';
import { Wrapper, WrapperCol, WrapperFooter, WrapperRow } from './style';
import certificate from '../../assets/images/certificate.png';
import atm from '../../assets/images/atm.svg';
import circle from '../../assets/images/circle.svg';
import jcb from '../../assets/images/jcb.svg';
import momo from '../../assets/images/momo.svg';
import pay from '../../assets/images/pay.svg';
import rn from '../../assets/images/rn.svg';
import tiki from '../../assets/images/tiki.svg';
import viettel from '../../assets/images/viettel.svg';
import visa from '../../assets/images/visa.svg';
import zalopay from '../../assets/images/zalopay.svg';
import certificate2 from '../../assets/images/certificate2.svg';
import facebook from '../../assets/images/facebook.svg';
import youtube from '../../assets/images/youtube.svg';
import zalo from '../../assets/images/zalo.svg';
import qrcode from '../../assets/images/qrcode.png';
import playstore from '../../assets/images/playstore.png';
import appstore from '../../assets/images/appstore.png';

const FooterComponent = () => {
    return (
        <WrapperFooter>
            <Wrapper>
                <WrapperRow>
                    <WrapperCol>
                        <h3>Hỗ trợ khách hàng</h3>
                        <ul>
                            <li>
                                <span className="hotline">
                                    Hotline:<a href="!#"> 1900-1234</a>
                                </span>
                                <div>(1000 đ/phút, 8-21h kể cả T7, CN)</div>
                            </li>
                            <li>
                                <a href="!#">Các câu hỏi thường gặp</a>
                            </li>
                            <li>
                                <a href="!#">Gửi yêu cầu hỗ trợ</a>
                            </li>
                            <li>
                                <a href="!#">Hướng dẫn đặt hàng</a>
                            </li>
                            <li>
                                <a href="!#">Chính sách đổi trả</a>
                            </li>
                            <li>
                                <a href="!#">Phương thức vận chuyển</a>
                            </li>
                            <li>
                                <a href="!#">Hướng dẫn trả góp</a>
                            </li>
                            <li>
                                <a href="!#">Chính sách hàng nhập khẩu</a>
                            </li>
                            <li>
                                Hỗ trợ khách hàng:
                                <a href="!#"> hotro@tiki.vn</a>
                            </li>
                            <li>
                                Báo lỗi bảo mật:
                                <a href="!#"> security@tiki.vn</a>
                            </li>
                        </ul>
                    </WrapperCol>
                    <WrapperCol>
                        <h3>Về shop</h3>
                        <ul>
                            <li>
                                <a href="!#">Giới thiệu về 21</a>
                            </li>
                            <li>
                                <a href="!#">21 Blog</a>
                            </li>
                            <li>
                                <a href="!#">Tuyển dụng</a>
                            </li>
                            <li>
                                <a href="!#">Chính sách bảo mật thanh toán</a>
                            </li>
                            <li>
                                <a href="!#">
                                    Chính sách bảo mật thông tin cá nhân
                                </a>
                            </li>
                            <li>
                                <a href="!#">Chính sách giải quyết khiếu nại</a>
                            </li>
                            <li>
                                <a href="!#">Điều khoản sử dụng</a>
                            </li>
                            <li>
                                <a href="!#">Giới thiệu 21 Xu</a>
                            </li>
                            <li>
                                <a href="!#">Thưởng thêm Astra</a>
                            </li>
                            <li>
                                <a href="!#">Gói hội viên VIP</a>
                            </li>
                            <li>
                                <a href="!#">Tiếp thị liên kết cùng 21</a>
                            </li>
                            <li>
                                <a href="!#">Bán hàng doanh nghiệp</a>
                            </li>
                            <li>
                                <a href="!#">Điều kiện vận chuyển</a>
                            </li>
                        </ul>
                    </WrapperCol>
                    <WrapperCol>
                        <h3>Hợp tác và liên kết</h3>
                        <ul>
                            <li>
                                <a href="!#">Quy chế hoạt động Sàn GDTMĐT</a>
                            </li>
                            <li>
                                <a href="!#">Bán hàng cùng Tiki</a>
                            </li>
                        </ul>
                        <h3>Chứng nhận bởi</h3>
                        <div className="certificate-group">
                            <img
                                className="certificate"
                                src={certificate}
                                alt=""
                            />
                            <img src={certificate2} alt="" />
                        </div>
                    </WrapperCol>
                    <WrapperCol>
                        <h3>Phương thức thanh toán</h3>
                        <div>
                            <div className="payment-method">
                                <img src={circle} alt="" />
                                <img src={jcb} alt="" />
                                <img src={momo} alt="" />
                                <img src={pay} alt="" />
                                <img src={zalopay} alt="" />
                            </div>
                            <div className="payment-method">
                                <img src={rn} alt="" />
                                <img src={tiki} alt="" />
                                <img src={atm} alt="" />
                                <img src={visa} alt="" />
                                <img src={viettel} alt="" />
                            </div>
                        </div>
                    </WrapperCol>
                    <WrapperCol>
                        <div>
                            <h3>Kết nối với chúng tôi</h3>
                            <div className="social">
                                <img src={facebook} alt="" />
                                <img src={youtube} alt="" />
                                <img src={zalo} alt="" />
                            </div>
                        </div>
                        <div>
                            <h3>Tải ứng dụng trên điện thoại</h3>
                            <div className="download">
                                <img className="qrcode" src={qrcode} alt="" />
                                <div className="download-app">
                                    <a href="!#">
                                        <img src={appstore} alt="" />
                                    </a>
                                    <a href="!#">
                                        <img src={playstore} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </WrapperCol>
                </WrapperRow>
                <div className="copyright">
                    <div>
                        Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng
                        Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh
                    </div>
                    <div>
                        Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa
                        hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc
                        trung tâm xử lý đơn hàng
                    </div>
                    <div>
                        Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở
                        Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu
                        ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022
                    </div>
                    <div>© 2022 - Bản quyền của Công ty TNHH Ti Ki</div>
                </div>
            </Wrapper>
        </WrapperFooter>
    );
};

export default FooterComponent;
