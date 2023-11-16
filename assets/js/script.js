document.addEventListener("DOMContentLoaded", function () {

    const words = ['вашего бизнеса ', 'онлайн-образования ', 'финансов ', 'e-commerce '];
    let index = 0;
    const paragraph = document.getElementById('typing');
    const staticText = "для ";

    function typeWord() {
        const word = words[index];
        let i = 0;

        function type() {
            if (i < word.length) {
                paragraph.innerHTML = staticText + `${word.substring(0, i)}|`;
                i++;
                setTimeout(type, 100);
            } else {
                setTimeout(eraseWord, 2000);
            }
        }

        type();
    }

    function eraseWord() {
        let i = words[index].length;

        function erase() {
            if (i >= 0) {
                paragraph.innerHTML = staticText + `${words[index].substring(0, i)}|`;
                i--;
                setTimeout(erase, 100);
            } else {
                index = (index + 1) % words.length;
                setTimeout(typeWord, 1000);
            }
        }

        erase();
    }

    typeWord();

    /* Переключение табов */
    var nestedTabSelect = (tabsElement, currentElement) => {
        const tabs = tabsElement ?? 'ul.cases_tabs-btns';

        const currentClass = currentElement ?? 'active';

        document.querySelectorAll(tabs).forEach(function (tabContainer) {
            let activeLink,
                activeContent;
            const links = Array.from(tabContainer.querySelectorAll("a"));

            activeLink =
                links.find(function (link) {
                    return link.querySelector("href") === location.hash;
                }) || links[0];
            activeLink.classList.add(currentClass);
            activeLink.parentNode.classList.add('active');

            activeContent = document.querySelector(activeLink.getAttribute("href"));
            activeContent.classList.add(currentClass);

            links.forEach(function (link) {
                if (link !== activeLink) {
                    const content = document.querySelector(link.getAttribute("href"));
                    content.classList.remove(currentClass);
                }
            });

            tabContainer.addEventListener("click", function (e) {
                if (e.target.tagName === "A") {

                    activeLink.classList.remove(currentClass);
                    activeLink.parentNode.classList.remove('active');
                    activeContent.classList.remove(currentClass);

                    activeLink = e.target;
                    activeContent = document.querySelector(activeLink.getAttribute("href"));

                    activeLink.classList.add(currentClass);
                    activeLink.parentNode.classList.add('active');
                    activeContent.classList.add(currentClass);

                    e.preventDefault();
                }
            });
        });


    };
    nestedTabSelect('ul.cases_tabs-btns', 'active');


    let burgerBtn = document.querySelector('header .burger-btn'),
        headerMenu = document.querySelector('header .menu'),
        body = document.querySelector('body');

    burgerBtn.addEventListener('click', function () {
        body.classList.toggle('no-overflow');
        burgerBtn.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });

    $('.menu li a').click(function () {
        $('header .menu').removeClass('active');
        $('header .burger-btn').removeClass('active');
    });



    $('.clients-items.mobile').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $('.clients_dots'),
        dotsClass: 'slide-dots',
    });


    var nestedTabSelect = (tabsElement, currentElement) => {
        const tabs = tabsElement ?? 'ul.stages-tabs';

        const currentClass = currentElement ?? 'active';

        document.querySelectorAll(tabs).forEach(function (tabContainer) {
            let activeLink,
                activeContent;
            const links = Array.from(tabContainer.querySelectorAll("a"));

            activeLink =
                links.find(function (link) {
                    return link.querySelector("href") === location.hash;
                }) || links[0];
            activeLink.classList.add(currentClass);
            activeLink.parentNode.classList.add('active');

            activeContent = document.querySelector(activeLink.getAttribute("href"));
            activeContent.classList.add(currentClass);

            links.forEach(function (link) {
                if (link !== activeLink) {
                    const content = document.querySelector(link.getAttribute("href"));
                    content.classList.remove(currentClass);
                }
            });

            tabContainer.addEventListener("click", function (e) {
                if (e.target.tagName === "A") {

                    activeLink.classList.remove(currentClass);
                    activeLink.parentNode.classList.remove('active');
                    activeContent.classList.remove(currentClass);

                    activeLink = e.target;
                    activeContent = document.querySelector(activeLink.getAttribute("href"));

                    activeLink.classList.add(currentClass);
                    activeLink.parentNode.classList.add('active');
                    activeContent.classList.add(currentClass);

                    e.preventDefault();
                }
            });
        });


    };
    nestedTabSelect('ul.stages-tabs', 'active');



    const selectedAll = document.querySelectorAll(".wrapper-dropdown");

    selectedAll.forEach((selected) => {
        const optionsContainer = selected.children[2];
        const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");

        selected.addEventListener("click", () => {
            let arrow = selected.children[1];

            if (selected.classList.contains("active")) {
                handleDropdown(selected, arrow, false);
            } else {
                let currentActive = document.querySelector(".wrapper-dropdown.active");

                if (currentActive) {
                    let anotherArrow = currentActive.children[1];
                    handleDropdown(currentActive, anotherArrow, false);
                }

                handleDropdown(selected, arrow, true);
            }
        });

        // update the display of the dropdown
        for (let o of optionsList) {
            o.addEventListener("click", () => {
                selected.querySelector(".selected-display").innerHTML = o.innerHTML;
            });
        }
    });

    // check if anything else ofther than the dropdown is clicked
    window.addEventListener("click", function (e) {
        if (e.target.closest(".wrapper-dropdown") === null) {
            closeAllDropdowns();
        }
    });

    // close all the dropdowns
    function closeAllDropdowns() {
        const selectedAll = document.querySelectorAll(".wrapper-dropdown");
        selectedAll.forEach((selected) => {
            const optionsContainer = selected.children[2];
            let arrow = selected.children[1];

            handleDropdown(selected, arrow, false);
        });
    }

    // open all the dropdowns
    function handleDropdown(dropdown, arrow, open) {
        if (open) {
            arrow.classList.add("rotated");
            dropdown.classList.add("active");
        } else {
            arrow.classList.remove("rotated");
            dropdown.classList.remove("active");
        }
    }

    var nestedTabSelect = (tabsElement, currentElement) => {
        const tabs = tabsElement ?? 'ul.dropdown';

        const currentClass = currentElement ?? 'active';

        document.querySelectorAll(tabs).forEach(function (tabContainer) {
            let activeLink,
                activeContent;
            const links = Array.from(tabContainer.querySelectorAll("a"));

            activeLink =
                links.find(function (link) {
                    return link.querySelector("href") === location.hash;
                }) || links[0];
            activeLink.classList.add(currentClass);
            activeLink.parentNode.classList.add('active');

            activeContent = document.querySelector(activeLink.getAttribute("href"));
            activeContent.classList.add(currentClass);

            links.forEach(function (link) {
                if (link !== activeLink) {
                    const content = document.querySelector(link.getAttribute("href"));
                    content.classList.remove(currentClass);
                }
            });

            tabContainer.addEventListener("click", function (e) {
                if (e.target.tagName === "A") {

                    activeLink.classList.remove(currentClass);
                    activeLink.parentNode.classList.remove('active');
                    activeContent.classList.remove(currentClass);

                    activeLink = e.target;
                    activeContent = document.querySelector(activeLink.getAttribute("href"));

                    activeLink.classList.add(currentClass);
                    activeLink.parentNode.classList.add('active');
                    activeContent.classList.add(currentClass);

                    e.preventDefault();
                }
            });
        });


    };
    nestedTabSelect('ul.dropdown', 'active');


    let modalOpen = document.querySelectorAll('.modal-open'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal-close');

    modalOpen.forEach(element => {
        element.addEventListener('click', () => modal.classList.toggle("active"));
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove("active");
    })


    $('.modal-form').submit(function () {
        var form = $(this);
        var error = false;
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/send.php',
                dataType: 'html',
                data: data,
                beforeSend: function (data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function (data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $(".modal-flip").addClass('active');
                        setTimeout(function () {
                            $(".modal-flip").removeClass('active');
                        }, 3100);
                        form.find('input, textarea').not(':input[type=button], :input[type=submit], :input[type=reset], :input[type=hidden], :input[name=header]').val('');
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function (data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }
            });
        }
        return false;
    });

    $("input[name=tel]").mask("+7 (999) 999-99-99");

    AOS.init();

    /* переключение кнопок в кейсах SMM */
    let smmBtnOneMounth = document.getElementById('smm-btn-one-mounth'),
        smmBtnTwoMounth = document.getElementById('smm-btn-two-mounth'),
        smmTxtOneMounth = document.getElementById('smm-txt-one-mounth'),
        smmTxtTwoMounth = document.getElementById('smm-txt-two-mounth');

    smmBtnOneMounth.addEventListener('click', function () {
        smmBtnTwoMounth.classList.remove('active');
        smmTxtTwoMounth.classList.remove('active');
        smmBtnOneMounth.classList.add('active');
        smmTxtOneMounth.classList.add('active');
    });
    smmBtnTwoMounth.addEventListener('click', function () {
        smmBtnOneMounth.classList.remove('active');
        smmTxtOneMounth.classList.remove('active');
        smmBtnTwoMounth.classList.add('active');
        smmTxtTwoMounth.classList.add('active');
    });

    /* переключение кнопок в кейсах Обучение фото */
    let photoTrainigBtnOneMounth = document.getElementById('photo-training-btn-one-mounth'),
        photoTrainigBtnTwoMounth = document.getElementById('photo-training-btn-two-mounth'),
        photoTrainigBtnThreeMounth = document.getElementById('photo-training-btn-three-mounth'),
        photoTrainigTxtOneMounth = document.getElementById('photo-training-txt-one-mounth'),
        photoTrainigTxtTwoMounth = document.getElementById('photo-training-txt-two-mounth'),
        photoTrainigTxtThreeMounth = document.getElementById('photo-training-txt-three-mounth');

    photoTrainigBtnOneMounth.addEventListener('click', function () {
        photoTrainigBtnTwoMounth.classList.remove('active');
        photoTrainigTxtTwoMounth.classList.remove('active');
        photoTrainigBtnThreeMounth.classList.remove('active');
        photoTrainigTxtThreeMounth.classList.remove('active');
        photoTrainigBtnOneMounth.classList.add('active');
        photoTrainigTxtOneMounth.classList.add('active');
    });
    photoTrainigBtnTwoMounth.addEventListener('click', function () {
        photoTrainigBtnOneMounth.classList.remove('active');
        photoTrainigTxtOneMounth.classList.remove('active');
        photoTrainigBtnThreeMounth.classList.remove('active');
        photoTrainigTxtThreeMounth.classList.remove('active');
        photoTrainigBtnTwoMounth.classList.add('active');
        photoTrainigTxtTwoMounth.classList.add('active');
    });
    photoTrainigBtnThreeMounth.addEventListener('click', function () {
        photoTrainigBtnOneMounth.classList.remove('active');
        photoTrainigTxtOneMounth.classList.remove('active');
        photoTrainigBtnTwoMounth.classList.remove('active');
        photoTrainigTxtTwoMounth.classList.remove('active');
        photoTrainigBtnThreeMounth.classList.add('active');
        photoTrainigTxtThreeMounth.classList.add('active');

    });

    /* переключение кнопок в кейсах Обучение Бизнес на маркетплейсах */
    let businessBtnOneMounth = document.getElementById('business-btn-one-mounth'),
        businessBtnTwoMounth = document.getElementById('business-btn-two-mounth'),
        businessBtnThreeMounth = document.getElementById('business-btn-three-mounth'),
        businessTxtOneMounth = document.getElementById('business-txt-one-mounth'),
        businessTxtTwoMounth = document.getElementById('business-txt-two-mounth'),
        businessTxtThreeMounth = document.getElementById('business-txt-three-mounth');

    businessBtnOneMounth.addEventListener('click', function () {
        businessBtnTwoMounth.classList.remove('active');
        businessTxtTwoMounth.classList.remove('active');
        businessBtnThreeMounth.classList.remove('active');
        businessTxtThreeMounth.classList.remove('active');
        businessBtnOneMounth.classList.add('active');
        businessTxtOneMounth.classList.add('active');
    });
    businessBtnTwoMounth.addEventListener('click', function () {
        businessBtnOneMounth.classList.remove('active');
        businessTxtOneMounth.classList.remove('active');
        businessBtnThreeMounth.classList.remove('active');
        businessTxtThreeMounth.classList.remove('active');
        businessBtnTwoMounth.classList.add('active');
        businessTxtTwoMounth.classList.add('active');
    });
    businessBtnThreeMounth.addEventListener('click', function () {
        businessBtnOneMounth.classList.remove('active');
        businessTxtOneMounth.classList.remove('active');
        businessBtnTwoMounth.classList.remove('active');
        businessTxtTwoMounth.classList.remove('active');
        businessBtnThreeMounth.classList.add('active');
        businessTxtThreeMounth.classList.add('active');
    });

    /* переключение кнопок в кейсах Маркетплейсы */
    let marketplacesBtnOneMounth = document.getElementById('marketplaces-btn-one-mounth'),
        marketplacesBtnTwoMounth = document.getElementById('marketplaces-btn-two-mounth'),
        marketplacesTxtOneMounth = document.getElementById('marketplaces-txt-one-mounth'),
        marketplacesTxtTwoMounth = document.getElementById('marketplaces-txt-two-mounth');

    marketplacesBtnOneMounth.addEventListener('click', function () {
        marketplacesBtnTwoMounth.classList.remove('active');
        marketplacesTxtTwoMounth.classList.remove('active');
        marketplacesBtnOneMounth.classList.add('active');
        marketplacesTxtOneMounth.classList.add('active');
    });
    marketplacesBtnTwoMounth.addEventListener('click', function () {
        marketplacesBtnOneMounth.classList.remove('active');
        marketplacesTxtOneMounth.classList.remove('active');
        marketplacesBtnTwoMounth.classList.add('active');
        marketplacesTxtTwoMounth.classList.add('active');
    });

    /* переключение кнопок в кейсах Крипта */
    let cryptoBtnOneMounth = document.getElementById('crypto-btn-one-mounth'),
        cryptoBtnTwoMounth = document.getElementById('crypto-btn-two-mounth'),
        cryptoTxtOneMounth = document.getElementById('crypto-txt-one-mounth'),
        cryptoTxtTwoMounth = document.getElementById('crypto-txt-two-mounth');

    cryptoBtnOneMounth.addEventListener('click', function () {
        cryptoBtnTwoMounth.classList.remove('active');
        cryptoTxtTwoMounth.classList.remove('active');
        cryptoBtnOneMounth.classList.add('active');
        cryptoTxtOneMounth.classList.add('active');
    });
    cryptoBtnTwoMounth.addEventListener('click', function () {
        cryptoBtnOneMounth.classList.remove('active');
        cryptoTxtOneMounth.classList.remove('active');
        cryptoBtnTwoMounth.classList.add('active');
        cryptoTxtTwoMounth.classList.add('active');
    });
});