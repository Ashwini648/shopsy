     import React from 'react';
    import { FiPhone, FiSmartphone, FiMapPin, FiHeadphones } from 'react-icons/fi';
    import Navbar from './components/Navbar/Navbar';
    import Footer from './components/Footer/Footer';
    function Contact() {
      return (
        <section className="">
            <Navbar/>
          <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
              width="100%" height="480" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className="container px-6 md:px-12 mb-10">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8">
                      <div className="relative" data-te-input-wrapper-init>
                        <input type="text"
                          className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] pl-[2.5rem] pr-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                          id="exampleInputName" placeholder="Name" />
                      </div>
                      <div className="relative" data-te-input-wrapper-init>
                        <input type="number"
                          className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] pl-[2.5rem] pr-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                          id="exampleInputMobile" placeholder="Mobile" />
                      </div>
                      <div className="relative" data-te-input-wrapper-init>
                        <input type="email"
                          className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] pl-[2.5rem] pr-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                          id="exampleInputEmail" placeholder="Email" />
                      </div>
                      <div className="relative" data-te-input-wrapper-init>
                        <textarea
                          className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] pl-[2.5rem] pr-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                          id="exampleInputMessage" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                      <input
                        className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.5rem] border-2 border-neutral-500 transition-all duration-200 ease-linear focus:outline-none checked:bg-primary checked:border-primary peer-focus:bg-primary peer-focus:border-primary peer-focus:checked:bg-primary peer-focus:checked:border-primary"
                        type="checkbox" />
                      <p className="inline-block text-sm leading-[1.5rem] text-neutral-500">I agree to the <a href="#0"
                        className="text-primary transition-all duration-200 ease-in-out">privacy policy</a></p>
                    </div>
                    <div className=" flex justify-center align-center md:text-left">
                      <button
                        className="flex align-center px-8 py-3 bg-primary text-white rounded hover:bg-primary-dark transition-all duration-200 ease-in-out">Send</button>
                    </div>
                  </form>
                </div>
                <div className="w-full shrink-0 grow-0 md:w-7/12">
                  <div className="flex flex-col justify-start items-start space-y-6">
                    <div className="flex items-center space-x-4">
                      <FiHeadphones className="text-3xl text-primary" />
                      <p className="text-lg font-medium text-neutral-900">Technical Support:</p>
                      <p className="text-lg text-neutral-700">1-800-123-4567</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FiPhone className="text-3xl text-primary" />
                      <p className="text-lg font-medium text-neutral-900">Landline:</p>
                      <p className="text-lg text-neutral-700">+1 123-456-7890</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FiSmartphone className="text-3xl text-primary" />
                      <p className="text-lg font-medium text-neutral-900">Mobile:</p>
                      <p className="text-lg text-neutral-700">+1 987-654-3210</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FiMapPin className="text-3xl text-primary" />
                      <p className="text-lg font-medium text-neutral-900">Address:</p>
                      <p className="text-lg text-neutral-700">123 Main St, City, Country</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </section>
      );
    }
    
    export default Contact;
