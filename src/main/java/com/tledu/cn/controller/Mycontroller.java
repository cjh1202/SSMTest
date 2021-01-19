package com.tledu.cn.controller;


import com.tledu.cn.pojo.User;
import com.tledu.cn.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


@Controller
public class Mycontroller {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @RequestMapping("/work")
    public ModelAndView work(User u) throws IOException {
        System.out.println(u);
        ModelAndView mav=new ModelAndView();
        int i = userServiceImpl.insertUser(u);
        mav.addObject("mark","denglu");
        mav.setViewName("denglu");

        System.out.println(u);
        return mav;
    }

    @RequestMapping("/work1")
    @ResponseBody
    public Map<String,Object> work1(User u, HttpServletRequest request, HttpServletResponse response){
        Map<String,Object> result = new HashMap<>();
        System.out.println(u);
        result.put("mark",1);
        return result;
    }


}
