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
}