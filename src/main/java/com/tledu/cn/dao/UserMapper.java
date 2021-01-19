package com.tledu.cn.dao;

import com.tledu.cn.pojo.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface UserMapper {

    List<User> queryAll();
    int insertUser(User user);
}
