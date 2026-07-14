export const userEndPoints = {
    // collected requests
    get_home_data :"user/collection_requests/select_home_data.php",
    get_about_data:"user/collection_requests/select_about_data.php",
    get_horse_data:"user/collection_requests/select_horse_data.php",
    get_coaching_data:"user/collection_requests/select_coaching_data.php",
    get_academy_data:"user/collection_requests/select_academy_data.php",
    get_book_data:"user/collection_requests/select_book_data.php",
    get_shop_data:"user/collection_requests/select_shop_data.php",
    get_weight_management_data:"user/collection_requests/select_weight_management_data.php",
    get_hair_therapy_data:"user/collection_requests/select_hair_therapy_data.php",
    get_pricing:"user/home/pricing/get_pricing.php",
    subscribe_plan:"user/home/pricing/subscribe.php",
    get_my_subscriptions:"user/home/pricing/get_my_subscriptions.php",
    get_aesthetic_gynecology_data:"user/collection_requests/select_aesthetic_gynecology_data.php",
    get_services_data:"user/collection_requests/select_services_data.php",

    get_blogs:"user/home/blogs/get_blog_details.php",
    get_blogs_list:"user/home/blogs/get_blogs.php",
    get_before_after_banner:"user/home/before_after/get_banner.php",
    get_before_after:"user/home/before_after/get_before_after.php",
    get_before_after_result:"user/home/before_after/get_results.php",

    get_home_services:"admin/services/get_home_services.php",
    
    get_product_details : "user/home/shop/get_products_byId.php",
    get_service_details: "user/collection_requests/select_service_byId.php",
    get_blog_details : "user/home/blogs/get_blog_details.php",

    login:"user/auth/login.php",
    check_email :"user/auth/check_email.php",
    reset_pass_request:"user/auth/reset_password_request.php",
    reset_pass_update:"user/auth/reset_password_update.php",
    register :"user/auth/signup.php",
    sms_sender:"user/auth/sms_sender.php",
    verified_code:"user/auth/verified_code.php",
    verified_code_forget:"user/auth/verified_code_forget.php",

    // routine details 
    routine_details:"user/home/shop/select_routine_details.php",
    get_products : "user/home/shop/select_products.php",
    get_products_filteration : "user/home/shop/select_filters.php",
    get_horse_product_details:"user/home/horse_products/get_product_details.php",

    // booking
    get_booking_banner:"user/home/booking/get_banner.php",
    get_booking_services:"user/home/booking/get_services.php",
    get_booking_slots:"user/home/booking/get_available_slots.php",
    get_booking_dates:"user/home/booking/get_available_dates.php",
    get_booking_banner:"user/home/booking/get_banner.php",
    create_booking :"user/home/booking/create_booking.php",


   //cart
   get_user_cart:"user/home/booking/cart/get_user_cart.php",
   add_cart:"user/home/booking/cart/add_to_cart.php",
   update_cart:"user/home/booking/cart/update_cart.php", 
   delete_cart :"user/home/booking/cart/delete_from_cart.php",
   

    // wishlist 
    toggle_wishlist : "user/home/wishlist/toggle_wishlist.php",
    get_wishlist : "user/home/wishlist/get_wishlist.php",
    //checkout
    checkout:"user/home/booking/orders/checkout.php",

    ////////////////////// profile /////////////////
    get_user_orders:"user/home/booking/orders/get_order.php",
    get_profile_data :"user/home/profile/get_profile_data.php",
    edit_profile_data : "user/home/profile/edit_profile.php",
    get_user_profile_overview:"user/home/profile/user_overview.php",
    get_user_bookings:"user/home/profile/get_user_bookings.php",
}