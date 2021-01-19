package com.tledu.cn.service.impl;

import com.tledu.cn.dao.UserMapper;
import com.tledu.cn.pojo.User;
import com.tledu.cn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> queryAll() {
        return userMapper.queryAll();
    }

    @Override
    public int insertUser(User user) {
        System.out.println(user);
        return userMapper.insertUser(user);
    }
}
