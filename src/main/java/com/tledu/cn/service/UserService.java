package com.tledu.cn.service;

import com.tledu.cn.pojo.User;

import java.util.List;

public interface UserService {
    List<User> queryAll();
    int insertUser(User user);
}
