import React, { useState } from 'react'
import Sidebar from '../../components/Dashboard/sidebar';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../components/ImageWithBasePath';

const Specialities = (props) => {

    const [speciality, setSpeciality] = useState([]);
    const addSpeciality = () => {
        const newSpeciality = {
            id: speciality.length + 1,
            isExpanded: true, // Set to true when adding
        };
        setSpeciality([...speciality, newSpeciality]);
    };
    const deleteSpeciality = (id) => {
        // Check if the education being deleted is expanded (added) or not
        const isExpanded = speciality.find(speciality => speciality.id === id)?.isExpanded;

        if (isExpanded) {
            // If the education is expanded, only delete it
            setSpeciality(speciality.filter((speciality) => speciality.id !== id));
        } else {
            // If the education is not expanded, toggle its expanded state to false
            setSpeciality(speciality.map((speciality) => {
                if (speciality.id === id) {
                    return { ...speciality, isExpanded: false };
                }
                return speciality;
            }));
        }
    };

    const specialities = [
        { option: 'Aile ', label: 'Aile ' },
        { option: 'İcra ', label: 'İcra ' },
        { option: 'Tüketici', label: 'Tüketici' },
    ]
    const service = [
        { option: 'Servis Seç', label: 'Servis Seç' },
        { option: 'Genel', label: 'Genel' },
        { option: 'Danışmanlık', label: 'Danışmanlık' },
    ]

    const [services, setServices] = useState([{}]);
    const addService = () => {
        setServices([...services, {
            id: services.length + 1,
            service: '',
            price: '',
            about: ''
        }]);
    };
    const deleteService = (id) => {
        setServices(services.filter(service => service.id !== id));
    };
    //
    const [services1, setServices1] = useState([{}]);
    const addService1 = () => {
        setServices1([...services, {
            id: services1.length + 1,
            service: '',
            price: '',
            about: ''
        }]);
    };
    const deleteService1 = (id) => {
        setServices1(services1.filter(service1 => service1.id !== id));
    };
    //
    const [services2, setServices2] = useState([{}]);
    const addService2 = () => {
        setServices2([...services2, {
            id: services2.length + 1,
            service: '',
            price: '',
            about: ''
        }]);
    };
    const deleteService2 = (id) => {
        setServices2(services2.filter(service2 => service2.id !== id));
    };
    //
    const [services3, setServices3] = useState([{}]);
    const addService3 = () => {
        setServices3([...services3, {
            id: services3.length + 1,
            service: '',
            price: '',
            about: ''
        }]);
    };
    const deleteService3 = (id) => {
        setServices3(services3.filter(service3 => service3.id !== id));
    };


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
                                        <li className="breadcrumb-item active">
                                            Uzmanlıklar &amp; Servisler
                                        </li>
                                    </ol>
                                    <h2 className="breadcrumb-title">Uzmanlıklar &amp; Servisler</h2>
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
            <div className="content doctor-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xl-3 theiaStickySidebar">
                            {/* Profile Sidebar */}
                            <Sidebar />
                            {/* /Profile Sidebar */}
                        </div>
                        <div className="col-lg-8 col-xl-9">
                            <div className="dashboard-header">
                                <h3>Uzmanlıklar &amp; Servisler</h3>
                                <ul>
                                    <li>
                                        <Link
                                            to="#"
                                            className="btn btn-primary prime-btn add-speciality"
                                            onClick={addSpeciality}
                                        >
                                           Yeni Uzmanlık Ekle
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="accordions" id="list-accord">
                                {/* Spaciality Item */}
                                <div className="user-accordion-item">
                                    <Link
                                        to="#"
                                        className="accordion-wrap"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#uzmanlık"
                                    >
                                        Uzmanlık<span>Delete</span>
                                    </Link>
                                    <div
                                        className="accordion-collapse collapse show"
                                        id="uzmanlık"
                                        data-bs-parent="#list-accord"
                                    >
                                        <div className="content-collapse">
                                            <div className="add-service-info">
                                                <div className="add-info">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-wrap">
                                                                <label className="col-form-label">
                                                                    Uzmanlık <span className="text-danger">*</span>
                                                                </label>
                                                                <Select
                                                                    options={specialities}
                                                                    className='select'
                                                                    placeholder='uzmanlık'

                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {services.map(service => (
                                                        <div className="row service-cont" key={service.id}>
                                                            <div className="col-md-3">
                                                                <div className="form-wrap">
                                                                    <label className="col-form-label">
                                                                        Servis <span className="text-danger">*</span>
                                                                    </label>
                                                                    <Select
                                                                        options={service}
                                                                        className='select'
                                                                        placeholder='servis seç'
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <div className="form-wrap">
                                                                    <label className="col-form-label">
                                                                        Ücretlendirme <span className="text-danger">*</span>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder={454}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="form-wrap w-100">
                                                                        <label className="col-form-label">Servis Hakkında</label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                    <div className="form-wrap ms-2">
                                                                        <label className="col-form-label d-block">&nbsp;</label>
                                                                        <Link to="#" className="trash-icon trash" onClick={() => deleteService(service.id)}>
                                                                            Sil
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="text-end">
                                                    <Link to="#" className="add-serv more-item mb-0" onClick={addService}>
                                                        Yeni Servis Ekle
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Spaciality Item */}
                                {/* Spaciality Item */}
                                <div className="user-accordion-item">
                                    <Link
                                        to="#"
                                        className="accordion-wrap collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#neurology"
                                    >
                                        Uzmanlık<span>Sil</span>
                                    </Link>
                                    <div
                                        className="accordion-collapse"
                                        id="neurology"
                                        data-bs-parent="#list-accord"
                                    >
                                        <div className="content-collapse">
                                            <div className="add-service-info">
                                                <div className="add-info">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-wrap">
                                                                <label className="col-form-label">
                                                                    Uzmanlık <span className="text-danger">*</span>
                                                                </label>
                                                                <Select
                                                                    options={specialities}
                                                                    className='select'
                                                                    placeholder='uzmanlık'

                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {services1.map(service1 => (
                                                        <div className="row service-cont" key={service1.id}>
                                                            <div className="col-md-3">
                                                                <div className="form-wrap">
                                                                    <label className="col-form-label">
                                                                        Servis <span className="text-danger">*</span>
                                                                    </label>
                                                                    <Select
                                                                        options={service}
                                                                        className='select'
                                                                        placeholder='servis seç'
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <div className="form-wrap">
                                                                    <label className="col-form-label">
                                                                        Ücretlendirme <span className="text-danger">*</span>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder={454}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="form-wrap w-100">
                                                                        <label className="col-form-label">Servis Hakkında</label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                    <div className="form-wrap ms-2">
                                                                        <label className="col-form-label d-block">&nbsp;</label>
                                                                        <Link to="#" className="trash-icon trash" onClick={() => deleteService1(service1.id)}>
                                                                            Sil
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="text-end">
                                                    <Link to="#" className="add-serv more-item mb-0" onClick={addService1}>
                                                        Yeni Servis Ekle
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Spaciality Item */}
    
                                {speciality.map((speciality) => (
                                    <div className="user-accordion-item" key={speciality.id}>
                                        <Link
                                            to="#"
                                            className="accordion-wrap"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#uzmanlık${speciality.id}`}
                                            onClick={() => deleteSpeciality(speciality.id)}
                                        >
                                            Uzmanlık<span>Delete</span>
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse show"
                                            id={`uzmanlık${speciality.id}`}
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse">
                                                <div className="add-service-info">
                                                    <div className="add-info">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="form-wrap">
                                                                    <label className="col-form-label">
                                                                        Uzmanlık <span className="text-danger">*</span>
                                                                    </label>

                                                                    <Select
                                                                        options={specialities}
                                                                        className='select'
                                                                        placeholder='uzmanlık'

                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {services3.map(service3 => (
                                                            <div className="row service-cont" key={service3.id}>
                                                                <div className="col-md-3">
                                                                    <div className="form-wrap">
                                                                        <label className="col-form-label">
                                                                            Servis <span className="text-danger">*</span>
                                                                        </label>
                                                                        <Select
                                                                            options={service}
                                                                            className='select'
                                                                            placeholder='servis seç'
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <div className="form-wrap">
                                                                        <label className="col-form-label">
                                                                            Ücretlendirme <span className="text-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder={454}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-7">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-wrap w-100">
                                                                            <label className="col-form-label">Servis Hakkında</label>
                                                                            <input type="text" className="form-control" />
                                                                        </div>
                                                                        <div className="form-wrap ms-2">
                                                                            <label className="col-form-label d-block">&nbsp;</label>
                                                                            <Link to="#" className="trash-icon trash" onClick={() => deleteService3(service3.id)}>
                                                                                Sil
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="text-end">
                                                        <Link to="#" className="add-serv more-item mb-0" onClick={addService3}>
                                                            Yeni Servis Ekle
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="modal-btn text-end">
                                <Link to="#" className="btn btn-gray">
                                    İptal Et
                                </Link>
                                <Link to='#' className="btn btn-primary prime-btn">Kaydet</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialities
