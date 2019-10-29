# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|tweets|string||
|user_id|string|null: false, foreign_key: true|
|picture|string||
|group_id|string|null: false, foreign_key: true|
### Association
- belongs_to :user 
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|group|references|null: false, foreign_key: true|
### Association
- has_many :users, through groups_users
- has_many :groups_users
- has_many :messages

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## users
|Column|Type|Options|
|------|----|-------|
|password|integer|null: false|
|nickname|string|null: false|
### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through users_groups