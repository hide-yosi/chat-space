# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|tweets|string||
|picture|string||
### Association
- belongs to :user
- has_many :groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|menber|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- has many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## users
|Column|Type|Options|
|------|----|-------|
|password|integer|null: false|
|nickname|string|null: false|
### Association
- be longs to :groups
- be longs :groups_users