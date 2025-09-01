import React, { useEffect, useRef } from "react";
import Sidebar from "../../components/Dashboard/sidebar";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../components/ImageWithBasePath";
import {  doctordashboardprofile02 } from "../../components/imagepath";

const LawyerDashboard = (props) => {

    const chartRef1 = useRef(null);
    useEffect(() => {
        if (chartRef1.current) {
            const sCol = {
                chart: {
                    height: 220,
                    type: 'bar',
                    stacked: true,
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '50%',
                        endingShape: 'rounded',
                        borderRadius: '5',
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 1
                },
                series: [{
                    name: 'High',
                    color: '#0E82FD',
                    data: [50, 40, 15, 45, 35, 48, 65]
                }],
                xaxis: {
                    categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + "k"
                        }
                    }
                }
            };

            const chart = new ApexCharts(chartRef1.current, sCol);
            chart.render();
        }
    }, []);

    //appoinment chart
    const chartRef = useRef(null);
    useEffect(() => {
        const sCol = {
            chart: {
                height: 220,
                type: 'bar',
                stacked: true,
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                    endingShape: 'rounded',
                    borderRadius: '5',
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 1,
            },
            series: [{
                name: 'High',
                color: '#0E82FD',
                data: [40, 20, 30, 60, 90, 40, 110]
            }],
            xaxis: {
                categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + "k"
                    }
                }
            }
        };

        if (chartRef.current) {
            const chart = new ApexCharts(chartRef.current, sCol);
            chart.render();
        }
    }, []);

    return (
        <div>
            <>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container">
                        <div className="row align-items-center inner-banner">
                            <div className="col-md-12 col-12 text-center">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/home">
                                                <i className="isax isax-home-15" />
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item" aria-current="page">
                                            Avukat
                                        </li>
                                        <li className="breadcrumb-item active">Avukat Paneli</li>
                                    </ol>
                                    <h2 className="breadcrumb-title">Avukat Paneli</h2>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb-bg">
                        <ImageWithBasePath
                            src="assets/img/bg/breadcrumb-bg-01.png"
                            alt="img"
                            className="breadcrumb-bg-01"
                        />
                        <ImageWithBasePath
                            src="assets/img/bg/breadcrumb-bg-02.png"
                            alt="img"
                            className="breadcrumb-bg-02"
                        />
                        <ImageWithBasePath
                            src="assets/img/bg/breadcrumb-icon.png"
                            alt="img"
                            className="breadcrumb-bg-03"
                        />
                        <ImageWithBasePath
                            src="assets/img/bg/breadcrumb-icon.png"
                            alt="img"
                            className="breadcrumb-bg-04"
                        />
                    </div>
                </div>
                {/* /Breadcrumb */}
            </>

            {/* Page Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xl-3 theiaStickySidebar">
                            <div className="stickybar">
                                {/* Profile Sidebar */}
                                <Sidebar />
                                {/* /Profile Sidebar */}
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-9">
                            <div className="row">
                                <div className="col-xl-4 d-flex">
                                    <div className="dashboard-box-col w-100">
                                        <div className="dashboard-widget-box">
                                            <div className="dashboard-content-info">
                                                <h6>Profil Görüntüleme</h6>
                                                <h4>500</h4>
                                                <span className="text-success">
                                                    <i className="fa-solid fa-arrow-up" />
                                                    6% Artış
                                                </span>
                                            </div>
                                            <div className="dashboard-widget-icon">
                                                <span className="dash-icon-box">
                                                    <i className="fa-solid fa-user-clock" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="dashboard-widget-box">
                                            <div className="dashboard-content-info">
                                                <h6>Toplam Kullanıcı</h6>
                                                <h4>78</h4>
                                                <span className="text-success">
                                                    <i className="fa-solid fa-arrow-up" />
                                                    15% Artış
                                                </span>
                                            </div>
                                            <div className="dashboard-widget-icon">
                                                <span className="dash-icon-box">
                                                    <i className="fa-solid fa-user" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="dashboard-widget-box">
                                            <div className="dashboard-content-info">
                                                <h6>Toplam Kullanıcı Bugun</h6>
                                                <h4>80</h4>
                                                <span className="text-danger">
                                                    <i className="fa-solid fa-arrow-up" />
                                                    Düne Göre 5% Artış
                                                </span>
                                            </div>
                                            <div className="dashboard-widget-icon">
                                                <span className="dash-icon-box">
                                                    <i className="fa-solid fa-user" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="dashboard-widget-box">
                                            <div className="dashboard-content-info">
                                                <h6>Bugün Planlanan Görüşmeler</h6>
                                                <h4>5</h4>
                                                <span className="text-success">
                                                    <i className="fa-solid fa-calendar-days" />
                                                    Düne Göre 20% Artış
                                                </span>
                                            </div>
                                            <div className="dashboard-widget-icon">
                                                <span className="dash-icon-box">
                                                    <i className="fa-solid fa-calendar-days" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 d-flex">
                                    <div className="dashboard-card w-100">
                                        <div className="dashboard-card-head">
                                            <div className="header-title">
                                                <h5>Görüşme</h5>
                                            </div>
                                            <div className="dropdown header-dropdown">
                                                <Link
                                                    className="dropdown-toggle nav-tog"
                                                    data-bs-toggle="dropdown"
                                                    to="#"
                                                >
                                                    Son 7 Gün
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <Link to="#" className="dropdown-item">
                                                        Bugün
                                                    </Link>
                                                    <Link to="#" className="dropdown-item">
                                                        Bu Ay
                                                    </Link>
                                                    <Link to="#" className="dropdown-item">
                                                        Son 7 Gün
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dashboard-card-body">
                                            <div className="table-responsive">
                                                <table className="table dashboard-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="patient-info-profile">
                                                                    <Link
                                                                        to="/avukat/panel/randevular"
                                                                        className="table-avatar"
                                                                    >
                                                                        <img
                                                                            src={doctordashboardprofile02}
                                                                            alt="Img"
                                                                        />
                                                                    </Link>
                                                                    <div className="patient-name-info">
                                                                        <span>#Apt0001</span>
                                                                        <h5>
                                                                            <Link to="/avukat/panel/randevular">
                                                                                Kerim Aslan
                                                                            </Link>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="appointment-date-created">
                                                                    <h6>11 Kas 2025 10.45 AM</h6>
                                                                    <span className="badge table-badge">Genel</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="apponiment-actions d-flex align-items-center">
                                                                    <Link to="#" className="text-success me-2">
                                                                        <i className="fa-solid fa-check" />
                                                                    </Link>
                                                                    <Link to="#" className="text-danger">
                                                                        <i className="fa-solid fa-xmark" />
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="patient-info-profile">
                                                                    <Link
                                                                        to="/avukat/panel/randevular"
                                                                        className="table-avatar"
                                                                    >
                                                                        <img
                                                                            src={doctordashboardprofile02}
                                                                            alt="Img"
                                                                        />
                                                                    </Link>
                                                                    <div className="patient-name-info">
                                                                        <span>#Apt0002</span>
                                                                        <h5>
                                                                            <Link to="/avukat/panel/randevular">Kerem Uzun</Link>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="appointment-date-created">
                                                                    <h6>10 Kas 2025 11.00 AM</h6>
                                                                    <span className="badge table-badge">
                                                                        Ön Görüşme
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="apponiment-actions d-flex align-items-center">
                                                                    <Link to="#" className="text-success me-2">
                                                                        <i className="fa-solid fa-check" />
                                                                    </Link>
                                                                    <Link to="#" className="text-danger">
                                                                        <i className="fa-solid fa-xmark" />
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="patient-info-profile">
                                                                    <Link
                                                                        to="/avukat/panel/randevular"
                                                                        className="table-avatar"
                                                                    >
                                                                        <img
                                                                            src={doctordashboardprofile02}
                                                                            alt="Img"
                                                                        />
                                                                    </Link>
                                                                    <div className="patient-name-info">
                                                                        <span>#Apt0003</span>
                                                                        <h5>
                                                                            <Link to="/avukat/panel/randevular">
                                                                                Seher Bahar
                                                                            </Link>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="appointment-date-created">
                                                                    <h6>03 Kas 2025 02.00 PM</h6>
                                                                    <span className="badge table-badge">General</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="apponiment-actions d-flex align-items-center">
                                                                    <Link to="#" className="text-success me-2">
                                                                        <i className="fa-solid fa-check" />
                                                                    </Link>
                                                                    <Link to="#" className="text-danger">
                                                                        <i className="fa-solid fa-xmark" />
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="patient-info-profile">
                                                                    <Link
                                                                        to="/avukat/panel/randevular"
                                                                        className="table-avatar"
                                                                    >
                                                                        <img
                                                                            src={doctordashboardprofile02}
                                                                            alt="Img"
                                                                        />
                                                                    </Link>
                                                                    <div className="patient-name-info">
                                                                        <span>#Apt0004</span>
                                                                        <h5>
                                                                            <Link to="/avukat/panel/randevular">
                                                                                Zeynep Başar
                                                                            </Link>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="appointment-date-created">
                                                                    <h6>01 Nov 2025 04.00 PM</h6>
                                                                    <span className="badge table-badge">
                                                                        Ön Görüşme
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="apponiment-actions d-flex align-items-center">
                                                                    <Link to="#" className="text-success me-2">
                                                                        <i className="fa-solid fa-check" />
                                                                    </Link>
                                                                    <Link to="#" className="text-danger">
                                                                        <i className="fa-solid fa-xmark" />
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="patient-info-profile">
                                                                    <Link
                                                                        to="/avukat/panel/randevular"
                                                                        className="table-avatar"
                                                                    >
                                                                        <img
                                                                            src={doctordashboardprofile02}
                                                                            alt="Img"
                                                                        />
                                                                    </Link>
                                                                    <div className="patient-name-info">
                                                                        <span>#Apt0005</span>
                                                                        <h5>
                                                                            <Link to="/avukat/panel/randevular">
                                                                                Ecem Hakan
                                                                            </Link>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="appointment-date-created">
                                                                    <h6>28 Eki 2025 05.30 PM</h6>
                                                                    <span className="badge table-badge">Genel</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="apponiment-actions d-flex align-items-center">
                                                                    <Link to="#" className="text-success me-2">
                                                                        <i className="fa-solid fa-check" />
                                                                    </Link>
                                                                    <Link to="#" className="text-danger">
                                                                        <i className="fa-solid fa-xmark" />
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 d-flex">
                                    <div className="dashboard-chart-col w-100">

                                        <div className="dashboard-card w-100">
                                            <div className="dashboard-card-head">
                                                <div className="header-title">
                                                    <h5>En Son Müvekkiller</h5>
                                                </div>
                                                <div className="card-view-link">
                                                    <Link to="/avukat/panel/muvekkil">Hepsini Gör</Link>
                                                </div>
                                            </div>
                                            <div className="dashboard-card-body">
                                                <div className="d-flex recent-patient-grid-boxes">
                                                    <div className="recent-patient-grid">
                                                        <Link to="pages/patient-details" className="patient-img">
                                                            <ImageWithBasePath
                                                                src="assets/img/bg/breadcrumb-bg-01.png"
                                                                alt="img"
                                                            />
                                                        </Link>
                                                        <h5>
                                                            <Link to="pages/patient-details">Zeynep Aslan</Link>
                                                        </h5>
                                                        <span>Müvekkil ID :&nbsp;P0001</span>
                                                        <div className="date-info">
                                                            <p>Son Görüşme 15 Mar 2025</p>
                                                        </div>
                                                    </div>
                                                    <div className="recent-patient-grid">
                                                        <Link to="pages/patient-details" className="patient-img">
                                                            <ImageWithBasePath
                                                                src="assets/img/bg/breadcrumb-bg-01.png"
                                                                alt="img"
                                                            />
                                                        </Link>
                                                        <h5>
                                                            <Link to="pages/patient-details">Savaş Hakan</Link>
                                                        </h5>
                                                        <span>Müvekkil ID :&nbsp;P0002</span>
                                                        <div className="date-info">
                                                            <p>Son Görüşme 13 Mar 2025</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 d-flex">
                                    <div className="dashboard-main-col w-100">
                                        <div className="upcoming-appointment-card">
                                            <div className="title-card">
                                                <h5>Yaklaşan Görüşmeler</h5>
                                            </div>
                                            <div className="upcoming-patient-info">
                                                <div className="info-details">
                                                    <span className="img-avatar">
                                                        <ImageWithBasePath
                                                            src="assets/img/bg/breadcrumb-bg-01.png"
                                                            alt="img"
                                                        />
                                                    </span>
                                                    <div className="name-info">
                                                        <span>#Apt0001</span>
                                                        <h6>Zeynep Aslan</h6>
                                                    </div>
                                                </div>
                                                <div className="date-details">
                                                    <span>Genel Görüşme</span>
                                                    <h6>Bugün, 10:45 AM</h6>
                                                </div>
                                            </div>
                                            <div className="appointment-card-footer">
                                                <h5>
                                                    <i className="fa-solid fa-video" />
                                                    Video Görüşme
                                                </h5>
                                                <div className="btn-appointments">
                                                    <Link to="/avukat/panel/chat" className="btn">
                                                        Chat
                                                    </Link>
                                                    <Link to="/doctor/doctor-appointment-start" className="btn">
                                                        Görüşme
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 d-flex">
                                    <div className="dashboard-card w-100">
                                        <div className="dashboard-card-head">
                                            <div className="header-title">
                                                <h5>Bildirimler</h5>
                                            </div>
                                            <div className="card-view-link">
                                                <Link to="#">Hepsini Gör</Link>
                                            </div>
                                        </div>
                                        <div className="dashboard-card-body">
                                            <div className="table-responsive">
                                                <table className="table dashboard-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="table-noti-info">
                                                                    <div className="table-noti-icon color-violet">
                                                                        <i className="fa-solid fa-bell" />
                                                                    </div>
                                                                    <div className="table-noti-message">
                                                                        <h6>
                                                                            <Link to="#">
                                                                                Toplantı Talebi Onaylandı
                                                                                <span> 21 Mar 2025 </span> 10:30 AM
                                                                            </Link>
                                                                        </h6>
                                                                        <span className="message-time">Şimdi</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="table-noti-info">
                                                                    <div className="table-noti-icon color-blue">
                                                                        <i className="fa-solid fa-star" />
                                                                    </div>
                                                                    <div className="table-noti-message">
                                                                        <h6>
                                                                            <Link to="#">
                                                                                Yeni <span> Müvekkil </span>
                                                                                Görüşmesi
                                                                            </Link>
                                                                        </h6>
                                                                        <span className="message-time">5 Gün Önce</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="table-noti-info">
                                                                    <div className="table-noti-icon color-red">
                                                                        <i className="fa-solid fa-calendar-check" />
                                                                    </div>
                                                                    <div className="table-noti-message">
                                                                        <h6>
                                                                            <Link to="#">
                                                                                Yaklaşan Görüşmeler
                                                                                <span> Ahmet </span> 01:20 PM{" "}
                                                                            </Link>
                                                                        </h6>
                                                                        <span className="message-time">12:55 PM</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
        </div>
    );
};

export default LawyerDashboard;
